const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
  const seasonOfMonth = ['winter', 'winter',
  'spring', 'spring', 'spring',
  'summer', 'summer', 'summer',
  'autumn (fall)', 'autumn (fall)', 'autumn (fall)',
  'winter']

  if (!date) return 'Unable to determine the time of year!';

  try {
    date.getUTCDay();
  } catch (error) {
    throw Error('Invalid date!');
  }

  return seasonOfMonth[date.getMonth()];
}

module.exports = {
  getSeason
};
