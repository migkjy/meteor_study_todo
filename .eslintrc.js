module.exports = {
    "extends": [
        "airbnb-base",
        "plugin:meteor/recommended"
    ],
    "plugins": [
        "react",
        "jsx-a11y",
        "import",
        'meteor'
    ],
    rules:{
        "linebreak-style": ["error", "windows"],
        "no-console": 0,
    },
    env: {
        "browser": true,
        "commonjs": true,
        "es6": true,
        "jquery": true,
        'meteor': true,        
      },
};