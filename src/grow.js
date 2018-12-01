import {person} from './lights/lights.js';
import {water} from './water/water.js';


let time = currentTime();
function displayTime(){
  console.log('The current time is:  ', time.hours, ':', time.minutes, ':', time.seconds);
};

setInterval(displayTime, 1000);