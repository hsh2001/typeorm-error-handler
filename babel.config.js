module.exports = {
  presets: [
    ['@babel/preset-env', { targets: { node: 'current' } }],
    '@babel/preset-typescript',
  ],
  plugins: [
    // decorator
    ['@babel/plugin-proposal-decorators', { legacy: true }],
  ],
};
