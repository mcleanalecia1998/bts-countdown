timeElement = document.querySelector("timer");

// calculate difference between time
eventTime = moment.tz("2024-6-12", "Asia/Seoul");
currentTime = moment.tz();
duration = moment.duration(eventTime.diff(currentTime));
