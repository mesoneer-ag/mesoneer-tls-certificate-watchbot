// See: https://stackoverflow.com/a/15289883/495558
const dayDiff = (a, b) => {
  const _MS_PER_DAY = 1000 * 60 * 60 * 24;
  const utc1 = Date.UTC(a.getFullYear(), a.getMonth(), a.getDate());
  const utc2 = Date.UTC(b.getFullYear(), b.getMonth(), b.getDate());
  return Math.floor((utc2 - utc1) / _MS_PER_DAY);
}


const daysFromNow = (day) => dayDiff(new Date(), day);

const range = (lower, upper) => ({ contains: (value) => lower <= value && value <= upper });

module.exports = {
  daysFromNow,
  dayDiff,
  range
} 
