const presets = [
  [
    "@babel/env",
    {
      targets: {
        node: "10.16.0",
      },
      corejs: "2",
      useBuiltIns: "usage",
    },
  ],
];

const env = {
  debug: {
    sourceMaps: "inline",
    retainLines: true,
  },
};

module.exports = { presets, env };
