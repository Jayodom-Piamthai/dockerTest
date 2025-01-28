# Use the official MongoDB image as the base image
FROM mongo:latest

# (Optional) Copy custom configuration files
# COPY mongod.conf /etc/mongod.conf

# (Optional) Copy initialization scripts
# COPY init.js /docker-entrypoint-initdb.d/init.js

# Expose the default MongoDB port
EXPOSE 3022

# Start MongoDB
CMD ["mongod"]