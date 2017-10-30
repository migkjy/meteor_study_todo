module.exports = {
    "extends": "airbnb-base",
    "plugins": [
        "react",
        "jsx-a11y",
        "import",
        'meteor',
    ],
    rules:{
        "linebreak-style": [2, "windows"],
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