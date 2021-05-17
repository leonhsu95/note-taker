# Note Taker Application

Link to the deployed test website can be viewed here on Heroku: [Note Taker Application](https://github.com/leonhsu95/note-taker)

## Description

This is a Note Taker application that allows user to save and delete user input.

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)


## Installation

To install the files into your local repo, using Git Bash Terminal:

1) Create a folder locally to nominate for cloning from online repo
2) Clone with SSH by

```GitBash Commands
git clone git@github.com:leonhsu95/note-taker.git"
 ```

Additionally, please install node.js and install the inquirer package in your terminal with

```Terminal Commands
npm i init -y
npm i
npm i express
npm i nodemon
npm i uuid
 ```

## Usage

The project should look like this:
![Application Screenshot](public/assets/screenshots/screenshot1.png)
![Saving user notes](public/assets/screenshots/sceenshot2.png)
![Deleting user notes](public/assets/screenshots/screenshot3.png)

Usage of this project is subject to the below license.

## License

Copyright 2021 © Leon Hsu [leonhsu95](https://github.com/leonhsu95). All rights reserved.
Licensed under the [MIT](https://opensource.org/licenses/MIT).

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

## Features

- The software takes user note title, content and note ID and saves into a json array.
- Deleting saved note corresponds with targeted element and note id simulatenously and will update the array via array filter.

## Tests

This project can be tested with [JS Validation Service](https://jshint.com/).
The Inquirer Package can tested further, please refer to documentation at [npm Inquirer](https://www.npmjs.com/package/inquirer) and [npm nodemon](https://www.npmjs.com/package/nodemon).




