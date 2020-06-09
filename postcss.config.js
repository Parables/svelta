const tailwindcss = require('tailwindcss');

const IS_DEVELOPMENT = process.env.NODE_ENV === 'development';

const plugins = [];
plugins.push(tailwindcss)
// plugins.push(tailwindcss('tailwind.config.js'))
// This is if you want to include your custom config

if (!IS_DEVELOPMENT) {
  const purgecss = require('@fullhuman/postcss-purgecss');

  class TailwindExtractor {
    static extract(content) {
      return content.match(/[A-z0-9-:\/]+/g) || [];
    }
  }

  plugins.push(
    purgecss({
      content: ['src/*.svelte', 'src/*.html'],
      whitelistPatterns: [/svelte-/],
      extractors: [
        {
          extractor: TailwindExtractor,
          extensions: ['svelte', 'html']
        }
      ],
    })
  );
}

module.exports = { plugins }