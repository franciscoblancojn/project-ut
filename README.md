# Project UT

Este es el Proyecto Users / Transacctions.

Espero les guste la integracion que hice con Laravel como Backend y vite, react y fenextjs como fronted

Es mi primera ves trabajando con Laravel espero les guste mi codigo.

Pueden usar useAdmin el cual tiene acceso a todos los usuarios y transacciones:

Usuario : userAdmin@gmail.com -- Contraseña : user1234

O usar useClient el cual solo puede acceder a su informacion y sus transacciones

Usuario : userClient@gmail.com -- Contraseña : user1234

# Dependencias

- Node 18.20.2
- PHP 8.3.6

# Ejecutar proyecto

- Clonar repositorio
- Instalar dependencias con npm, yarn, pnpm o bun
```bash
npm i
yarm install
pnpm install
bun i
```
- Instalar dependecias de composer
```bash
composer install
```
- Crear archivo .env y configurarlo 
- Configura permisos de vendor
```bash
chmod -R 755 vendor
```
- Correr Proyecto
```bash
npm run start
```
- Abrir pagina en:
http://localhost:8000/


# Postman

Dentro del proyecto hay un archivo llamado Project UT.postman_collection.json, puedes usarlo para ejecutar peticiones al back despues de correr npm run start