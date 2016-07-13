# Introduction

Para inicializar el servidor, simplemente llamar la regla server( 8002 ).

Si desea modificar el puerto a otro diferente al 8082, debe de modificarlo en el js/general.js en las 3 llamadas al servidor.

Luego de inicializado el servidor, la url es [**http://localhost:8002/**](http://localhost:8002/).

Por restricciones de cors ( Cross-Origin Resource Sharing ), el index.html se debe de ejecutar desde una direccion distinta al *file system*, los dominios se especifican desde el set_setting( http:cors ), por defecto se permite la llamada desde cualquier origen, pero si se desea un dominio en especifico, simplemente remplazar el [*], por una lista de dominios en específico.

# Rutas de llamadas

##/lunas_planeta
Parámetros:
-> planeta [ Nombre del planeta a consultar ]

##/diametro_planetas
Parámetros:
-> planetas [ lista planetas separados por coma ]

##/orbita_planeta
Parámetros:
-> planeta [ Nombre del planeta a consultar ]


## Librerías utilizadas

[**MonkBerry**](http://monkberry.js.org/), con esta se manipula la interfaz web.
[**BootBox**](http://bootboxjs.com/), con esta se manipula facilmente los dialogs.
[**BootsTrap**](http://getbootstrap.com/), con esta.