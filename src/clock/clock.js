'use strict';

function currentTime(){
  let date = new Date();
  let time = {};
  time.hours = date.getHours();
  time.minutes = date.getMinutes();
  time.seconds = date.getSeconds();
  return time;
};

export {currentTime}