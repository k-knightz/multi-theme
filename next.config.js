const theme = process.env.NEXT_PUBLIC_THEME || 'main';

let themeColors = {};

if (theme === 'main') {
  themeColors = require('./src/styles/theme/main/theme.js');
} else if (theme === 'secondary') {
  themeColors = require('./src/styles/theme/secondary/theme.js');
}

module.exports = {
  webpack: (config) => {
    config.module.rules.push({
      test: /\.less$/,
      use: [
        'style-loader',
        'css-loader',
        {
          loader: 'less-loader',
          options: {
            javascriptEnabled: true,
            modifyVars: themeColors,
          },
        },
      ],
    });

    return config;
  },
};
