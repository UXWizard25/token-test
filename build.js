const StyleDictionary = require('style-dictionary');
const { register } = require('@tokens-studio/sd-transforms');

// Registriere Token Studio Transforms
register(StyleDictionary);

const sd = StyleDictionary.extend({
  source: ['tokens/tokens.json'],
  
  // Token Studio Preprocessor - verarbeitet Token Studio Format
  preprocessors: ['tokens-studio'],
  
  platforms: {
    css: {
      // Verwende Token Studio Transform Group
      transformGroup: 'tokens-studio',
      buildPath: 'build/css/',
      files: [{
        destination: 'variables.css',
        format: 'css/variables'
      }]
    },
    scss: {
      transformGroup: 'tokens-studio',
      buildPath: 'build/scss/',
      files: [{
        destination: '_variables.scss',
        format: 'scss/variables'
      }]
    },
    js: {
      transformGroup: 'tokens-studio',
      buildPath: 'build/js/',
      files: [{
        destination: 'tokens.js',
        format: 'javascript/es6'
      }]
    }
  }
});

sd.buildAllPlatforms();
