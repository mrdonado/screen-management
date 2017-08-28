# screen-management

[An npm module](https://www.npmjs.com/package/screen-management) to turn the computer screen off and on again.

It only works on windows systems for now, but a Linux version is coming soon.

## Install the module

Import it into your project with the following command:

`npm install screen-management`

Or if you prefer yarn to npm install:

`yarn add screen-management` 

## How to use it

You can use this module within your code like this.

```js
const screen = require('screen-management');

// Call this function to turn the computer screen to sleep
screen.turnOff(); 

// Call this function to turn on the screen (in case it was in sleep mode)
screen.turnOn(); 
```

## Dependencies

No dependencies are required. The module runs native windows executables compiled using the following C# projects:

- https://github.com/fjrd84/windows-sleep-screen
- https://github.com/fjrd84/windows-wake-up-screen

## Credits

Developed by [F. Javier R. Donado](https://www.jdonado.com) for [netvico GmbH](http://www.netvico.com)