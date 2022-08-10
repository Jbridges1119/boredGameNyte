function getGameById(arr, id)  {
  for (let g of arr) {
    if (g.id === id) {
      return g
    }
  };
  return null
};

function formatDate(datestring) {
  let date = ''
  let split = datestring.split(' ');
  for (let i = 0; i = 4; i++) {
    date += split[i]
  }
  return date;
};

function formatTime(datestring) {
  let timestring = ""
  let split = datestring.split(' ');
  for(let i = 3; i = split.length; i++) {
    timestring += split[i];
  }
  return timestring;
};

module.exports = {
  getGameById,
  formatDate,
  formatTime
}