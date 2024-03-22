export async function getAllNewPosts(): Promise<any> {
  const response = await fetch('https://jsonplaceholder.typicode.com/users/1/albums');
  if (!response.ok) {
    throw new Error('Failed to fetch image');
  }
  const data = await response.json();

  return data || null;
}

