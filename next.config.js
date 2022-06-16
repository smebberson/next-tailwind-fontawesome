const withBundleAnalyzer = require('@next/bundle-analyzer')({
    enabled: process.env.ANALYZE === 'true',
});

module.exports = withBundleAnalyzer({
    experimental: {
        runtime: 'nodejs',
        serverComponents: true,
    },
});
