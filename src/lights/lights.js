'use strict';
import {currentTime} from '.././clock/clock.js'

const Gpio = require('onoff').Gpio;

let lightRelay = new Gpio(22, 'out');
let lightTestRelay = new Gpio(16, 'out');

lightRelay.writeSync(0);
lightTestRelay.writeSync(0);

function lights(){

function lightsOn(){
  lightRelay.writeSync(1);
  lightTestRelay.writeSync(1);
  console.log('lights are on');
};

function lightsOff(){
  lightRelay.writeSync(0);
  lightTestRelay.writeSync(0);
  console.log('lights are off');
};

function checkLights(){
  let time = currentTime();
  let startTime = 7;
  let stopTime = 23;

  if(time.hours >= startTime && time.seconds === 0 && time.hours < stopTime){
    console.clear();
    console.log('good morning');
    console.log('the current time is: ', time.hours, ':', time.minutes, ':', time.seconds);
    lightsOn();
  };
  if(time.hours >= stopTime && time.seconds === 0){
    console.clear();
    console.log('good night');
    console.log('the current time is: ', time.hours, ':', time.minutes, ':', time.seconds);
    lightsOff();
  };
  if(time.hours < startTime){
    console.clear();
    console.log('good morning');
    console.log('the current time is: ', time.hours, ':', time.minutes, ':', time.seconds);
    console.log('lights are still off');
  }
};

function closeLights(){
  console.log('shutting down');
  lightRelay.writeSync(0);
  lightTestRelay.writeSync(0);
  lightRelay.unexport();
  lightTestRelay.unexport();
  clearInterval(lightTimer)
};

let lightTimer = setInterval(checkLights, 1000);

process.on('SIGINT', closeLights);

};

export {lights};