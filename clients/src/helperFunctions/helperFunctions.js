function getGameById(arr, id) {
  for (let g of arr) {
    if (g.id === id) {
      return g;
    }
  }
  return null;
}

function formatDate(datestring) {
  const month = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "June",
    "July",
    "Aug",
    "Sept",
    "Oct",
    "Nov",
    "Dec",
  ];
  let date = datestring.split("T")[0];
  let days = date.split("-");
  days[1] = month[days[1] - 1];
  let day = days[2];
  if (days[2] < 10) day = days[2][1];
  return `${days[1]} ${day} ${days[0]}`;
}

function formatTime(datestring) {
  let date = datestring.split("T")[1];
  let ampm = "AM";
  let min = "00";
  let time = date.split(":").slice(0, -1);
  min = time[1];
  let hr = time[0];
  if (time[0] >= 12) ampm = "PM";
  if (time[0] > 12) hr = time[0] - 12;
  if (time[0] < 10) {
    if (time[0][0] === "0" && time[0][1] === "0") {
      hr = 12;
    } else {
      hr = time[0][1];
    }
  }
  return `${hr}:${min} ${ampm}`;
}

const fixDate = function (datestring) {
  let date = datestring.split("T")[0];
  let time = datestring.split("T")[1];
  let datesplit = date.split("-");
  let timesplit = time.split(":");
  if (timesplit[0] < 6) {
    timesplit[0] = Number(timesplit[0]) + 24;
    timesplit[0] = timesplit[0] - 6;
    datesplit[2] = Number(datesplit[2] - 1);
    datesplit = datesplit.join("-");
    timesplit = timesplit.join(":");
    return `${datesplit}T${timesplit}`;
  } else {
    if (timesplit[0] < 16) {
      timesplit[0] = timesplit[0] - 6;
      datesplit = datesplit.join("-");
      timesplit = timesplit.join(":");
      return `${datesplit}T0${timesplit}`;
    } else {
      timesplit[0] = timesplit[0] - 6;
      datesplit = datesplit.join("-");
      timesplit = timesplit.join(":");
      return `${datesplit}T${timesplit}`;
    }
  }
};

module.exports = {
  getGameById,
  formatDate,
  formatTime,
  fixDate,
};
