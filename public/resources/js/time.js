// da clock
const setTime = () => {

    let date = new Date();
    let hour = date.getHours();
    let minute = date.getMinutes();
  
    let period = "";
    if (hour >= 12) {
      period = "PM";
    } else {
      period = "AM";
    }
  
    if (hour == 0) {
      hour = 12;
    } else {
      if (hour > 12) {
        hour = hour - 12;
      }
    }
  
    hour = update(hour);
    minute = update(minute);
  
    document.getElementById("time-text").innerText = hour + ":" + minute + " " + period;
    setTimeout(setTime, 1000);
  }
  
  const update = (t) => {
    if (t < 10) {
      return "0" + t;
    } else {
      return t;
    }
  }
  
  setTime();