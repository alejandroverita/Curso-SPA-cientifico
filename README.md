# CURSO DE SINGLE PAGE APPLICATION
## DEVELOPMENT
### Configuracion del entorno de trabajo
Debemos comenzar creando una carpeta

	mkdir cientifico

Luego nos movemos al directorio

	cd cientifico

Iniciamos iniciando el repositorio

	git init

Luego se conectara al repositorio remoto que puede ser Github,Gitlab u otro de preferencia.

Iniciando el proyecto con npm(node)

`npm init`

Luego debemos completar los valores que node nos indica:

	package name → indicamos el nombre que puede el mismo que nos da de referencia

	version → indicamos que es la version 1.0.0

	description → single page application

	entry point → dejamos por defecto (se puede cambiar por otro)

	test comando → no se va a usar por el momento

	git repository → todavia no lo tenemos

	keywords → javascript

	licence→ MIT

**Arquitectura del proyecto**

Creamos carpeta src donde va a estar todo el codigo de la app.

	  /src →archivos	
		- /routes  →  las rutas de la aplicacion	
		- /utils → utilerias
		- /styles → estilos
		- /pages → paginas que va a tener nuestro proyecto
		- index.js → archivo principal

	/public → lo que mandamos a produccion
		- index.html → template