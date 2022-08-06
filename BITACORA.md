bitacora de desarrollo de la aplicación

### Instalación

npm init
npm i express //instala express
npm i dotenv //dotenv para leer variables de entorno
npm i -D nodemon //nodemon para reiniciar el servidor automaticamente

<!-- * typescript -->
npm i-D typescript @types/express @types/node -tsn-ode //typescript y actualizacion de dependencias
npx tsc --init //inicializa el archivo tsconfig.json

npm i -D concurrently //para ejecutar varios procesos a la vez
npm i -D webpack webpack-cli webpack-node-externals webpack-shell-plugin//webpack y webpack-cli para automatizar tareas

<!-- * tests -->
npm i -D eslint jest ts-jest @types/jest supertest //eslint y jest para testear
npx eslint --init //inicializa el archivo .eslintrc
npx jest --init //inicializa el archivo jest.config.js
npm i -D serve //


### Pasos para crear el servidor

1. crear el index.js y configurar express y el primer get de la ruta principal

2. crear el archivo de configuración de dotenv

3. instalar y configurar nodemon= "start": "npx nodemon index.js"

4. instalar y configurar typescript con las siguientes config:

~~~
"experimentalDecorators": true,
"emitDecoratorMetadata": true,
"baseUrl": "./",
"paths": {
      "@/*": ["src/*"], //crear carpeta src y un index.ts
    }
"sourceMap": true,
"outDir": "./dist",
~~~

    - aqui ya se puede utilizar los imports de typescript en lugar de los require

5. crear el gitignore
6. actualizar los scripts en package.json con las siguientes config:

~~~
"build":"npx tsc",
"start": "node dist/index.js",
"dev":"concurrently \"npx tsc --watch\" \"nodemon -q dist/index.js \"",
~~~
    - npm run build para compilar el archivo ts a js
    - npm run start para ejecutar el servidor
    - npm run dev para ejecutar el servidor y compilar automaticamente los archivos ts

7. actualizar los archivos js a ts.
8. configurar los test con las siguientes config:
    - el mas estricto
    -javascript modules
    -None of these
    -typescript
    -node
    - usar guias populares estandar
    -json
9. configurar jest.
10. crear la carpeta __tests__ y el archivo index.test.ts
11. instalar y configurar el serve.
    "serve:coverage": "npm run test && cd coverage/lcov-report && npx serve"

12.configurar gitignore en gitignore.io


notas:

* cuando se corre un programa con npx si le faltan librerias lo corre instalando las librerias.