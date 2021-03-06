module.exports = {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });

    config.module.rules.push({
      test: /\.(jpe?g|png|gif)(\?[a-z0-9=.]+)?$/,
      loader: 'url-loader?limit=100000',
    });

    return config;
  },
};
