const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  const result = {}
  domains.forEach(domain => {
    let temp = ''
    domain.split('.').reverse().forEach(item => {
      temp = temp + '.' + item
      if (result.hasOwnProperty(temp)) {
        result[temp] = result[temp] + 1
      } else {
        result[temp] = 1
      }
    });
  })
  return result
}

module.exports = {
  getDNSStats
};
