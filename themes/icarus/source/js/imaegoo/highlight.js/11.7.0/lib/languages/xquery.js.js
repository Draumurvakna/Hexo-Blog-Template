function emitWarning() {
    if (!emitWarning.warned) {
      emitWarning.warned = true;
      console.log(
        'Deprecation (warning): Using file extension in specifier is deprecated, use "highlight.js/lib/languages/xquery" instead of "highlight.js/lib/languages/xquery.js"'
      );
    }
  }
  emitWarning();
    module.exports = require('./xquery.js');