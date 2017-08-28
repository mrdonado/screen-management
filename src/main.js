const {
  exec
} = require('child_process'),
  os = require('os');


//---------------------WIN32-------------------------------//
const win32 = {};

win32.turnOff = () => {
  exec(__dirname + '/../bin/sleep-screen.exe');
};

win32.turnOn = () => {
  exec(__dirname + '/../bin/wake-up-screen.exe');
};

//---------------------/WIN32-------------------------------//


// Functions of all the platforms put together
const platforms = {
  win32
};


//---------------------UTILITIES----------------------------//
/**
 * Function to check if the current operating system is supported by
 * this library or not.
 * @returns {boolean}
 */
const supported = () => {
  return Object.keys(platforms).indexOf(os.platform()) > -1;
};

/**
 * This function throws an error when the current operating system is not
 * supported.
 */
const platformCheck = () => {
  if (!supported()) {
    throw Error('Error (screen-management): Your platform is not supported yet.');
  }
};
//---------------------/UTILITIES---------------------------//


module.exports = {
  turnOff: () => {
    platformCheck();
    platforms[os.platform()].turnOff();
  },
  turnOn: () => {
    platformCheck();
    platforms[os.platform()].turnOn();
  }
};