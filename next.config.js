const hostnames = [
  'cdn.pixabay.com',
  'via.placeholder.com']


module.exports = {
  images: {
    remotePatterns: hostnames.map(hostname => ({
      protocol: 'https',
      hostname
  }))

  },
};

//  The "images.domains" configuration is deprecated.
//  Please use "images.remotePatterns" configuration instead.

// remotePatterns: [
//   {
//     protocol: 'https',
//     hostname: 'cdn.pixabay.com',
//     port: '', // Optional, leave empty if using default port (443 for HTTPS)
//     pathname: '/**', // Allow all paths under cdn.pixabay.com
//   },
//   {
//     protocol: 'https',
//     hostname: 'pixabay.com',
//     port: '', // Optional, leave empty if using default port (443 for HTTPS)
//     pathname: '/**', // Allow all paths under pixabay.com
//   },
//   {
//     protocol: 'https', // Placeholder.com uses HTTPS
//     hostname: 'via.placeholder.com',
//     port: '', // Optional, leave empty if using default port (443 for HTTPS)
//     pathname: '/[**]', // Allow all paths under via.placeholder.com
//   },
  
// ],