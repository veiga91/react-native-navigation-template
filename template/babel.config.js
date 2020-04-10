const resolver = [
    'module-resolver',
    {
      root: ['.'],
      alias: {
        appRedux: "./src/appRedux",
        ui: "./src/ui",
        api: "./src/api",
        navigation: "./src/navigation",
        screens: "./src/ui/screens",
        "layout-components": "./src/ui/common/layout-components",
        theme: "./src/ui/theme"
      },
    },
  ];
  
  module.exports = {
    presets: ["module:metro-react-native-babel-preset"],
    plugins: [
      resolver,
      [
        "babel-plugin-styled-components",
        {
          "pure": true
        }
      ]
    ],
  };
  