# 14 Model-View-Controller (MVC): Tech Blog
[![Generic badge](https://img.shields.io/badge/license-MIT-<COLOR>.svg)](#license)
![GitHub language count](https://img.shields.io/github/languages/count/javiistacks/tech-Blog)
![GitHub top language](https://img.shields.io/github/languages/top/javiistacks/tech-Blog)

# tech-Blog

## Table of Contents
* [Introduction](#introduction)
* [Demo](#demo)
* [Sample](#samples)
* [Installations](#installations)
* [Usage](#usage)
* [Deployment](#deployment)
* [Created by](#created-by)
* [Special Thanks](#special-thanks)
* [Repository](#repository)
* [License](#license)


## Introduction
A full stack web application blog where people can connect and talk about all things technical. You will be able to create user, delete post,  and comment on post. 


## Demo
Watch a demo of the application on [Youtube. Model-View-Controller (MVC): Tech Blog](https://youtu.be/RQDhyoZjASY)


## Samples

| ***Screenshot***                   | ***Screenshot***                      |
| :--------------------------------: | :-----------------------------------: |
| <img src="./assets/blog.png">      | <img src="./assets/login.png">        |

| ***Screenshot***                   | ***Screenshot***                      |
| :--------------------------------: | :-----------------------------------: |
| <img src="./assets/signup.png">    | <img src="./assets/createpost.png">   |



## Installations
Type the following npm install commands: 
```
1. npm i dotenv express express-handlebars express-session mysql2 sequelize bcrypt connect-session-sequelize bulma nodemon jest
2. npm i -D @creativebulma/bulma-divider
3. npm init -y

 On the command line while in the tech-Blog folder.
```
<details><summary> CLICK HERE TO SEE ALL NPM PACKAGES</summary>

<blockquote>

* [npm](https://docs.npmjs.com/cli/v7/commands/npm-install)
  * npm is the package manager for the Node JavaScript platform. 

* [dotenv](https://www.npmjs.com/package/dotenv)
  * Enables the application to access environment variables.

* [express](https://www.npmjs.com/package/express)
  * Allows to dynamically render HTML Pages based on passing arguments to templates.

* [express-handlebars](https://www.npmjs.com/package/express-handlebars)
  * A Handlebars view engine for Express.

* [express-session](https://www.npmjs.com/package/express-session)
  * This is a Node.js module available through the npm registry.
  
* [mysql2](https://www.npmjs.com/package/mysql2)
  * Enables the application to create a connection to the mysql database.
  
* [sequelize](https://www.npmjs.com/package/sequelize)
  * Sequelize is a promise-based Node.js ORM tool for MySQL.

* [bcrypt](https://www.npmjs.com/package/bcrypt)
  * A library to help you hash passwords.

* [connect-session-sequelize](https://www.npmjs.com/package/sequelize)
  * Is a SQL session store using Sequelize.js.

* [bulma](https://www.npmjs.com/package/bulma)
  * Bulma is a modern CSS framework based on Flexbox.

* [@creativebulma/bulma-divider](https://www.npmjs.com/package/@creativebulma/bulma-divider)
  * A Bulma extension and brings the ability to easily display an horizontal or vertical divider with optional text.

* [jest](https://www.npmjs.com/package/jest)
  * Allows to run tests for application. 

* [nodemon](https://www.npmjs.com/package/nodemon)
  * Is a tool that helps develop node.js based applications by automatically restarting the node application when file changes in the directory are detected.
 
</blockquote>
</details>



## Usage

`???????????????Open in Integrated Terminal`

To Run application while in the tech-Blog folder type 
```
npm start 
```


## Deployment
Deployment was made possible with Heroku. 
Check out my tech blog at the link below.
* [Let's Get Technical! - Tech Blog](https://young-taiga-22105.herokuapp.com/)


## Created by
* [Javiann Marrero](https://github.com/javiistacks)

## Special Thanks
* [Charles Fisher](https://github.com/cdfishe1) was able to help me with an error I kept getting in my models folder in my index.js file i had Uppercase letter for my values in my keys for User, Post, and Comment. I made the values lower case and the error was gone which was a huge success to getting my project to deploy on heroku.

## Repository
### Github Repository
Repository at [tech-Blog](https://github.com/javiistacks/tech-Blog)


## License

Copyright (c) Javiann Marrero. All rights reserved.<br>
Please be kind and change content if you wish to use this code.

<details><summary>Licensed under the MIT License</summary>

Copyright (c) 2021 - present | Javiann Marrero

<blockquote>
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
</blockquote>
</details>
