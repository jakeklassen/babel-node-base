module.exports = {
  "parser": "babel-eslint",
  "parserOptions": {
    "sourceType": "module"
  },
  "rules": {
    "no-console": "off",
    "indent": [2, "tab", { "SwitchCase": 1 }],
    "quotes": ["error", "single" ],
    "semi": ["error", "always"]
  },
  "env": {
    "es6": true,
    "node": true
  },
  "extends": ["eslint:recommended"],
  "ecmaFeatures": {
    "modules": true,
    "experimentalObjectRestSpread": true
  }
};
