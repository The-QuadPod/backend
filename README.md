## Installation

Use [npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm) to install the required packages.

```bash
npm i
```
MySQL is needed locally. For installation details view the [MySQL page](https://www.mysql.com/downloads/). After installation you may face [this issue](https://stackoverflow.com/questions/50093144/mysql-8-0-client-does-not-support-authentication-protocol-requested-by-server) 

## Usage
Create a .env file in the root of the project it should contain the following
```
MYSQL_USERNAME=username
MYSQL_PASSWORD=password
MYSQL_PORT=port
MYSQL_HOST=host
```
Run server using
```bash
node app.js
```