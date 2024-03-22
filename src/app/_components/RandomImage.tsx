"use client"

import React, { useState, useEffect, useMemo } from 'react';

import Image from 'next/image';

interface RandomImageProps { }

const RandomImage: React.FC<RandomImageProps> = () => {

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const [imageData, setImageData] = useState<string | any>(null);

  const [activeImage, setActiveImage] = useState<string | any>(null);

  useEffect(() => {
    const fetchDataFun = async () => {
      setIsLoading(true);
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/albums/1/photos');
        if (!response.ok) {
          throw new Error('Failed to fetch image');
        }
        const data = await response.json();
        setImageData(data);
        setActiveImage(!!data ? data[0] : null)
      } catch (error: any | string) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchDataFun();
  }, []);

  const handleRandomImageClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    // setCurrentImageIndex(Math.floor(Math.random() * imageData.length));
    setActiveImage(!!imageData ? imageData[Math.floor(Math.random() * imageData?.length)] : null)
  };

  return (
    <div className="flex flex-col justify-center w-screen relative">
      {isLoading && <p>Loading image...</p>}
      {error && <p>Error fetching image: {error}</p>}

      {useMemo(() => (
        activeImage?.url ? (
          <div style={{ position: 'relative', width: '100%', maxWidth: '600px', aspectRatio: 1, margin: '2rem auto' }}>
            <Image
              src={activeImage.url}
              alt={activeImage.title}
              placeholder="blur"
              blurDataURL={activeImage.thumbnailUrl}
              width={600}
              height={600}
              priority
            />
          </div>
        ) : null
      ), [activeImage])}

      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <button style={{
          position: 'relative',
          backgroundColor: 'white',
          border: '2px solid blue',
          color: 'blue',
          padding: '.5rem',
          margin: '.5rem',
          fontSize: '1rem',
          cursor: 'pointer'
        }} onClick={(e) => handleRandomImageClick(e)}>
          Show Random Image
        </button>
      </div>
    </div>
  )
}

export default RandomImage;