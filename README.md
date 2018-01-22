# nodejs mysql docker


## docker mysql instance 

```
docker run -p 3306:3306 --name mysql -e MYSQL_ROOT_PASSWORD=b3RmELKOvCUrAdxIg0GEmugc3SY -e MYSQL_ROOT_HOST=% -d mysql/mysql-server:latest

```