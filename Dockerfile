# Usa una imagen oficial de PHP
FROM php:8.3-fpm

# Instala las dependencias necesarias para Laravel y Vite
RUN apt-get update && apt-get install -y \
    libpng-dev \
    libjpeg-dev \
    libfreetype6-dev \
    zip \
    git \
    curl \
    libssl-dev \
    && docker-php-ext-configure gd --with-freetype --with-jpeg \
    && docker-php-ext-install gd \
    && docker-php-ext-install pdo pdo_mysql

# Instala Composer (gestor de dependencias de PHP)
RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer

COPY . /app_project

# Establece el directorio de trabajo
WORKDIR /app_project


RUN chown -R www-data:www-data /app_project

# Instala las dependencias de Laravel
COPY composer.json composer.lock ./
RUN composer install --no-autoloader --no-scripts

RUN chmod -R 755 vendor



# Instala Node.js, Yarn y otras herramientas necesarias para Vite
RUN curl -sL https://deb.nodesource.com/setup_18.x | bash - \
    && apt-get install -y nodejs \
    && npm install -g yarn

# Instala las dependencias de Node.js (Vite)
RUN npm install --force

# Prepara los assets de Vite
# RUN npm run build


# Inicia el servidor de Laravel y el servidor de Vite
CMD composer install --no-dev --optimize-autoloader && php artisan optimize:clear && npm run build && php artisan config:clear && php artisan cache:clear && php artisan view:clear && php artisan serve --host=0.0.0.0 --port=8000 



# Expone el puerto que usa Laravel
EXPOSE 8000