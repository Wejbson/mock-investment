/** @type {import('next').NextConfig} */

const withPWA = require('next-pwa');

module.exports = withPWA({
    reactStrictMode: true,
    pwa: {
        dest: 'public',
    },

    async rewrites() {
        return [
            {
                source: '/api/:path*',
                destination: 'http://localhost:8080/:path*',
            },
        ];
    },
});
