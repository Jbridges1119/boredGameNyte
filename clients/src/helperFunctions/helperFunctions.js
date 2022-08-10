function getGameById(arr, id)  {
  console.log('arr:', arr)
  console.log('id:', id)
  for (let g of arr) {
    if (g.id === id) {
      return g
    }
  };
  return {name: '?', thumb_url: '?'}
};

function formatDate(datestring) {
  let split = datestring.split(' ');
  let date = split.slice(0,-5)
  return date.join(' ');
};

function formatTime(datestring) {
  let ampm = 'AM'
  let min = '0'
  let hr = ''
  let split = datestring.split(' ')[4].split(':');
  min = split[1]
  if (split[0] >= 12) ampm = 'PM'
  if (split[0] > 12) hr = split[0] - 12
  if (split[0] <10) hr = split[0][1]
    return `${hr}:${min} ${ampm}`
};

module.exports = {
  getGameById,
  formatDate,
  formatTime
}