# Template Login, Register and Dashboard

## Descripción del Proyecto

Es una aplicación web desarrollada utilizando las tecnologías ReactJS y NextJS. Su objetivo principal es proporcionar un sistema de gestión de animales que interactúa con un backend implementado con JSON Server. La aplicación consta de tres endpoints y tres vistas principales.

A continuación, se presenta un paso a paso detallado para inicializar y ejecutar el proyecto **Sophos-Solutions-Test**, incluyendo la configuración y ejecución del servidor JSON:

### Paso 1: Clonar el Repositorio

Clona el repositorio del proyecto desde el repositorio remoto utilizando Git:

```
git clone <url_del_repositorio>
```

### Paso 2: Instalar Dependencias

Accede al directorio del proyecto e instala las dependencias necesarias utilizando npm:

```
cd Sophos-Solutions-Test
npm install
```

### Paso 3: Configurar Variables de Entorno

Crea un archivo llamado `.env` en el directorio raíz del proyecto y configura las variables de entorno necesarias. Asegúrate de definir la URL del servidor JSON en `NEXT_PUBLIC_API_URL`:

```
NEXT_PUBLIC_API_URL=http://localhost:3001
SECRET_KEY_TO_GENERATE_TOKEN=tu_clave_secreta
```

### Paso 4: Iniciar el Servidor JSON

Abre una nueva terminal, navega hasta el directorio del proyecto y ejecuta el servidor JSON utilizando el siguiente comando:

```
npx json-server --watch db.json --port 3001
```

Esto iniciará el servidor JSON en el puerto 3001, utilizando el archivo `db.json` como base de datos.

### Paso 5: Ejecutar la Aplicación

Abre otra terminal, navega hasta el directorio del proyecto y ejecuta el servidor de desarrollo de Next.js con el siguiente comando:

```
npm run dev
```

Esto iniciará el servidor de desarrollo de Next.js y tu aplicación estará disponible en la dirección `http://localhost:3000`.

### Paso 6: Acceder a la Aplicación

Abre tu navegador web y accede a la dirección `http://localhost:3000` para ver la aplicación en funcionamiento.

### Paso 7 (Opcional): Ejecutar Pruebas

Si deseas ejecutar las pruebas unitarias y de integración, puedes utilizar el siguiente comando:

```
npm test
```

Esto iniciará Jest en el modo de observación, lo que te permitirá ejecutar y observar tus pruebas mientras desarrollas.

Siguiendo estos pasos, podrás inicializar y ejecutar correctamente el proyecto **Sophos-Solutions-Test** en tu entorno local, junto con el servidor JSON para simular la interacción con la base de datos.

## Estructura del Proyecto

El proyecto está organizado de la siguiente manera:

- **__test__**: Directorio para pruebas.
- **.next**: Directorio generado por NextJS para la construcción del proyecto.
- **node_modules**: Directorio que contiene las dependencias del proyecto.
- **public**: Directorio público que contiene recursos estáticos.
- **src**: Directorio principal del código fuente.
  - **src/app**: Directorio que contiene la lógica de la aplicación.
    - **src/app/api**: Directorio que contiene los servicios API.
      - **src/app/api/auth**: Directorio que contiene los servicios de autenticación.
        - **src/app/api/auth/register**: Endpoint para el registro de usuarios.
        - **src/app/api/auth/login**: Endpoint para el inicio de sesión de usuarios.
        - **src/app/api/auth/logout**: Endpoint para cerrar sesión de usuarios.
    - **src/app/auth**: Directorio que contiene las vistas de autenticación.
      - **src/app/auth/login**: Vista de inicio de sesión.
      - **src/app/auth/register**: Vista de registro de usuarios.
    - **src/app/dashboard**: Vista del panel de control.
  - **src/components**: Directorio que contiene componentes reutilizables.
  - **src/redux**: Directorio que contiene la configuración de Redux y custom hooks.
  - **src/sections**: Directorio que contiene la lógica y diseño de las vistas.
  - **src/utils**: Directorio que contiene utilidades y funciones de ayuda.
- **middleware.ts**: Archivo de configuración de JWT.
- **.env**: Archivo de configuración de variables de entorno.
- **.eslintrc.json**: Archivo de configuración de ESLint.
- **.gitignore**: Archivo que especifica los archivos y directorios que Git debe ignorar.
- **db.json**: Base de datos JSON utilizada por JSON Server.
- **next.config.js**: Archivo de configuración de NextJS.
- **package.json**: Archivo de configuración de npm que especifica las dependencias del proyecto.
- **package-lock.json**: Archivo generado por npm para bloquear las versiones exactas de las dependencias instaladas.
- **readme.md**: Documentación del proyecto.
- **setupTests**: Configuración de Enzyme para pruebas.
- **tsconfig.json**: Archivo de configuración de TypeScript.

## Configuración del Entorno

El archivo **.env** contiene la configuración del entorno con las siguientes variables:

- **SECRET_KEY_TO_GENERATE_TOKEN**: Clave secreta utilizada para generar tokens JWT.
- **NEXT_PUBLIC_API_URL**: URL de la API del servidor JSON, que por defecto es "http://localhost:3001".

## Dependencias del Proyecto

El archivo **package.json** especifica las dependencias del proyecto, que incluyen:

- **React**: Biblioteca principal para la construcción de interfaces de usuario.
- **NextJS**: Framework de React para la creación de aplicaciones web.
- **@reduxjs/toolkit**: Biblioteca para la gestión del estado de la aplicación con Redux.
- **axios**: Cliente HTTP para realizar peticiones al servidor.
- **formik**: Librería para la gestión de formularios en React.
- **next-auth**: Librería para la autenticación en NextJS.
- **sweetalert2**: Biblioteca para mostrar alertas y modales personalizados.
- Entre otras dependencias para pruebas, estilos y tipos de datos.

## Scripts npm

Los scripts npm definidos en el archivo **package.json** son:

- **dev**: Inicia el servidor de desarrollo de NextJS.
- **build**: Compila la aplicación para producción.
- **start**: Inicia el servidor de producción de NextJS.
- **lint**: Ejecuta ESLint para verificar el código.
- **test**: Ejecuta las pruebas unitarias utilizando Jest.

## Endpoints y Vistas Principales

El proyecto cuenta con los siguientes endpoints y vistas principales:

### Endpoints:

1. **Registro de Usuario**:
   - Ruta: `/api/auth/register`
   - Descripción: Endpoint para registrar nuevos usuarios.

2. **Inicio de Sesión**:
   - Ruta: `/api/auth/login`
   - Descripción: Endpoint para iniciar sesión de usuarios existentes.

3. **Cerrar Sesión**:
   - Ruta: `/api/auth/logout`
   - Descripción: Endpoint para cerrar sesión de usuarios autenticados.

### Vistas:

1. **Inicio de Sesión**:
   - Ruta: `/auth/login`
   - Descripción: Vista para que los usuarios inicien sesión en la aplicación.

2. **Registro de Usuario**:
   - Ruta: `/auth/register`
   - Descripción: Vista para que los usuarios creen nuevas cuentas en la aplicación.

3. **Panel de Control**:
   - Ruta: `/dashboard`
   - Descripción: Vista principal que muestra el panel de control de la aplicación.

Las funcionalidades CRUD de animales se realizan mediante peticiones al backend de JSON Server directamente desde el frontend.

## Configuración de Endpoints en utils/http.ts

En el archivo **utils/http.ts** se encuentra la configuración de los endpoints de la aplicación. Esta configuración permite organizar y mantener un orden claro de las rutas y métodos para las distintas funcionalidades. A continuación se presenta la estructura de la configuración:

```typescript
export const endpoints: Endpoints = {
  auth: {
    logout: {
      method: 'POST',
      url: '/api/auth/logout'
    },
    login: {
      method: 'POST',
      url: '/api/auth/login'
    },
    register: {
      method: 'POST',
      url: '/api/auth/register'
    },
  },
  animals: {
    list: {
      method: 'GET',
      url: '/animals'
    },
    create: {
      method: 'POST',
      url: '/animals'
    },
    update: {
      method: 'PUT',
      url: '/animals/'
    },
    delete: {
      method: 'DELETE',
      url: '/animals/'
    },
  },
};
```

Esta configuración facilita la gestión y el mantenimiento de las rutas de la aplicación, permitiendo un acceso sencillo y organizado a los diferentes endpoints desde cualquier parte del código.

## Prerrequisitos y Ejecución

Para ejecutar el proyecto, se deben seguir los siguientes pasos:

1. Instalar las dependencias del proyecto ejecutando `npm install`.
2. Iniciar el servidor JSON Server con el comando `npx json-server --watch db.json`.
3. Iniciar el servidor de desarrollo de NextJS con el comando `npm run dev`.
4. Acceder

 a la aplicación desde el navegador utilizando la URL proporcionada por NextJS.

## Contribución y Contacto

El proyecto **Sophos-Solutions-Test** está abierto a contribuciones y sugerencias. Si tiene alguna pregunta o desea colaborar, no dude en contactar al equipo de desarrollo.

¡Gracias por contribuir al proyecto! 🚀
