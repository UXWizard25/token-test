// style-dictionary.config.js
const { registerTransforms } = require('@tokens-studio/sd-transforms');

module.exports = async () => {
  const StyleDictionary = require('style-dictionary');

  // Registriert alle Tokens Studio Transforms (Referenzen, Farben, px→rem etc.)
  await registerTransforms(StyleDictionary);

  return {
    // Single-file Source – passe diesen Pfad an, falls deine Datei woanders liegt
    source: ['tokens.json'],

    platforms: {
      css: {
        transformGroup: 'tokens-studio',
        buildPath: 'tokens/dist/web/',
        files: [
          {
            destination: 'variables.css',
            format: 'css/variables',
            options: { selector: ':root' }
          }
        ]
      },
      // Rohes JSON-Bundle, das häufig für Tools/Server genutzt wird
      json: {
        transformGroup: 'tokens-studio',
        buildPath: 'tokens/dist/json/',
        files: [{ destination: 'tokens.json', format: 'json' }]
      }
    }
  };
};
