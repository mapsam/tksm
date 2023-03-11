module.exports = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/accomodations',
        destination: '/accommodations',
        permanent: true
      }
    ]
  }
};