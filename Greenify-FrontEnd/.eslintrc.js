module.exports = {
    "env": {
        "browser": true,
        "node": true,
        "es6": true
    },
    "extends": "eslint:recommended",
      "rules": {
        "semi": ["error", "always"],
        "quotes": ["error", "double"]
    },
   "parserOptions": {

   	"ecmaVersion": 6,
    
  
    "ecmaFeatures": {
        "jsx": true,
        "modules": true,
        "experimentalObjectRestSpread": true
    },
    "sourceType": "module"
}
};