## Initial setup

For this setup:
- [Mariadb](https://mariadb.com/kb/en/mariadb-package-repository-setup-and-usage/) (locally, so we can communicate through it, with the mariadb server on docker)
- [Docker / mariadb server](https://hub.docker.com/_/mariadb)
	docker run -p 3306:3306 --name mariadb_server -e MARIADB_ROOT_PASSWORD=(A password) -d mariadb:latest
- NodeJS 
- Express + mariadb -> `npm install express mariadb`

## Communication with mariadb server for local testing

`mysql --host 127.0.0.1 -P 3306 -u root -p`
(Will prompt for the master password)

- \*Note: change the initial user for mysql. Do not use root

- \* For this repo I added a database 'learning' with 'technologies' as a single column

## Opening the http server

- Setup the database with ./database.js
- Client: Postman, insomnia or cURL (Script added to this repo)
- Run with `node index.js`

NOTE: Add nodemon with npm

\* 190621: This only supports GET/POST requests by now.
\* 190621: We can also use Docker-compose instead of having to install the software sepparatedly
