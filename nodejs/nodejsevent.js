const EventEmitter = require('node:events');

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();
myEmitter.on('waterfull', () => {
  console.log('please turn off the motor');
  setTimeout(() => {
    console.log('please turn off the motor! Its a gentle remainder');
  }, 3000);
});
console.log("The scipt is running ")
console.log("The script is still running ");
myEmitter.emit('waterfull');