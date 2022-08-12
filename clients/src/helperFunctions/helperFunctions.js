function getGameById(arr, id) {
  for (let g of arr) {
    if (g.id === id) {
      return g
    }
  };
  return null;
};

function formatDate(datestring) {
  const month = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec']
  let date = datestring.split('T')[0];
  let days = date.split('-');
  days[1] = month[days[1] -1]
  let formatDate = `${days[1]} ${days[2]} ${days[0]}`
  return formatDate
};
function formatTime(datestring) {
  let date = datestring.split('T')[1];
  let ampm = 'AM'
  let min = '0'
  let hr = ''
  let time = date.split(':').slice(0,-1);
  min = time[1]
  if (time[0] >= 12) ampm = 'PM'
  if (time[0] > 12) hr = time[0] - 12
  if (time[0] <10) hr = time[0][1]
    return `${hr}:${min} ${ampm}`
};

module.exports = {
  getGameById,
  formatDate,
  formatTime
}