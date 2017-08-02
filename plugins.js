const musta = require('mustache-simple')

class MustacheSimple {
  constructor (words) {
    this.words = words 
  }

  async register ({h, options = {}}) {
    const opts = options.MustacheSimple || {}
    this.words = opts.words || this.words
    this.config = opts.config || h.config.config
    if (this.words && this.config) this.musta = musta.compileMatch(this.config, this.words)
  }

  async processItem ({h, item, options = {}}) {
    const opts = options.MustacheSimple || {}
    this.words = opts.words || this.words
    this.config = opts.config || h.config.config
    if (opts.words || opts.config) this.musta = musta.compileMatch(this.config, this.words)

    if (item.data && item.data.constructor === String) item.data = this.musta(item.data)
  }
}

module.exports = MustacheSimple
MustacheSimple.install = function (words) {
  return new MustacheSimple(words)
}
