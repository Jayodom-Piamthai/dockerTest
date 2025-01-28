FROM mysql:latest
ENV MYSQL_ROOT_PASSWORD=ace
COPY ./dbINIT.sql /docker-entrypoint-initdb.d/
