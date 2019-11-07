const devKeys = require('./keys-dev')

if (process.env.NODE_ENV !== 'production') {
  module.exports = devKeys
} else {
  module.exports = devKeys
}
