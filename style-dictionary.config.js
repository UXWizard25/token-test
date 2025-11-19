// ESM config for Style Dictionary v4
import StyleDictionary from 'style-dictionary';
import { registerTransforms } from '@tokens-studio/sd-transforms';

export default async () => {
  await registerTransforms(StyleDictionary);

  return {
    // single-file source; adjust if your file is at tokens/tokens.json
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
      json: {
        transformGroup: 'tokens-studio',
        buildPath: 'tokens/dist/json/',
        files: [{ destination: 'tokens.json', format: 'json' }]
      }
    }
  };
};
