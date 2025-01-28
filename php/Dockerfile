# Use an official PHP + Apache image
FROM php:8.2-apache
RUN docker-php-ext-install mysqli
# Install necessary PHP extensions and phpMyAdmin
RUN apt-get update && apt-get install -y \
    default-mysql-client \
    wget \
    unzip \
    && docker-php-ext-install pdo_mysql

# Download and install phpMyAdmin
RUN wget https://www.phpmyadmin.net/downloads/phpMyAdmin-latest-all-languages.zip -O /tmp/phpmyadmin.zip \
    && unzip /tmp/phpmyadmin.zip -d /var/www/html/ \
    && mv /var/www/html/phpMyAdmin-* /var/www/html/phpmyadmin \
    && rm /tmp/phpmyadmin.zip

# Set permissions for phpMyAdmin
RUN chown -R www-data:www-data /var/www/html/phpmyadmin

# Expose port 80
EXPOSE 80

# Start Apache
CMD ["apache2-foreground"]
