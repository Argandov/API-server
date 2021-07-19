## Initial setup

For this setup:
- [Mariadb](https://mariadb.com/kb/en/mariadb-package-repository-setup-and-usage/) (locally, so we can communicate through it, with the mariadb server on docker)
- [Docker / mariadb server](https://hub.docker.com/_/mariadb)
	docker run -p 3306:3306 --name mariadb_server -e MARIADB_ROOT_PASSWORD=(A password) -d mariadb:latest
- NodeJS 
- Express + mariadb -> `npm install express mariadb`

## Communication with mariadb server

`mysql --host 127.0.0.1 -P 3306 -u root -p`
(Will prompt for the master password)
\*Note: change the initial user for mysql. Do not use root

## Opening the http server

- 
- Client: Postman or cURL
