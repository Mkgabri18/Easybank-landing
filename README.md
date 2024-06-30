# Inicio proyecto

## Para iniciar un project preparo git y npm solo la primera vez

`git init` en el bash de git para inicializar git

Para inicializar el package.json
```bash
npm init -y
```

Crear el **\.gitignore ** y especificar los file que no van en el commit


# Configuro webpack y package

```bash
npm i -D webpack webpack-cli webpack-dev-server
```
instalo en desarrollo(-D) **webpack** y su servidor.

Crear el ** webpack.config.js ** para configurar webpack
Agregar los siguentes script en el package.json :
```json
"script": {
		"prebuild": "rimraf dist",
    "build": "npm run prebuild && webpack --mode=production",
    "build:dev": "npm run prebuild && webpack --mode=development",
    "dev": "webpack-dev-server --mode=development"
},
```

Ahora se puede arrancar el proyecto con
```bash
npm run build => compilacion
npm run build:dev => compilacion en desarrollo
npm run dev => desarrollo y watch
```

## Dependencias de desarrollo

- Los siguientes modulos son necesarios a gestionar pug, scss, archivos.

```bash
npm i -D pug pug-loader html-webpack-plugin
```

```bash
npm i -D css-loader style-loader sass sass-loader
```

# Arrancar Projecto

Clone de la repository


```
npm install
```

Simplemente para descargar todas la dependencias del projecto.

## Estructura 

Projecto restructurado para aplicar principalmente la metodolgia CUBE CSS, se trata de una metodolgia css
que se puede aplicar con scss o css y donde se hace incapiè al reutilizo de las clases mediante sus
tipologias de:

- Composition
- utility
- Block
- Exception

Ispirado en el omonimo articulo [CUBE CSS](https://cube.fyi/)

Con esta metodolgia se hace uso de los **Design Tokens** como estructura, con ayuda de un file JSON para 
contruir el sistema de variables, en este particular ejercicio utilizando **SASS** con sus objectos nos 
ayudarà a recostruir un design system.
El file donde se almacenan los tokens esta en './src/styles/global/_tokens.scss'.
