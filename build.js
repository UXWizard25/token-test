const StyleDictionary = require('style-dictionary');

// Filter-Funktion: Nur Tokens ohne Referenz-Probleme
function hasValidValue(token) {
  if (!token.value) return false;
  
  // Prüfe ob der Wert eine Referenz ist (beginnt mit {)
  if (typeof token.value === 'string' && token.value.startsWith('{')) {
    return false; // Ignoriere alle Referenzen
  }
  
  // Prüfe komplexe Objekte (z.B. Typography)
  if (typeof token.value === 'object') {
    const values = Object.values(token.value);
    for (let val of values) {
      if (typeof val === 'string' && val.startsWith('{')) {
        return false; // Hat eine Referenz
      }
    }
  }
  
  return true;
}

const sd = StyleDictionary.extend({
  source: ['tokens/tokens.json'],
  platforms: {
    css: {
      transformGroup: 'css',
      buildPath: 'build/css/',
      files: [{
        destination: 'variables.css',
        format: 'css/variables',
        filter: hasValidValue
      }]
    },
    scss: {
      transformGroup: 'scss',
      buildPath: 'build/scss/',
      files: [{
        destination: '_variables.scss',
        format: 'scss/variables',
        filter: hasValidValue
      }]
    },
    js: {
      transformGroup: 'js',
      buildPath: 'build/js/',
      files: [{
        destination: 'tokens.js',
        format: 'javascript/es6',
        filter: hasValidValue
      }]
    }
  }
});

sd.buildAllPlatforms();
