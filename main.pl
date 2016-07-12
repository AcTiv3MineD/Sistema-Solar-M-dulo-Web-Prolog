%%Elementos

planeta(mercurio).
planeta(venus).
planeta(tierra).
planeta(marte).
planeta(jupiter).
planeta(saturno).
planeta(urano).
planeta(neptuno).
planeta(pluton).

estrella(sun).

luna(luna).
luna(io).
luna(europa).
luna(ganimedes).
luna(calisto).
luna(titan).
luna(tetis).
luna(dione).
luna(rea).
luna(japeto).
luna(mimas).
luna(encelado).
luna(miranda).
luna(ariel).
luna(umbriel).
luna(titania).
luna(oberon).
luna(triton).
luna(caronte).

%%Propiedades
diametro( mercurio, 4878 ).
diametro( venus, 12100 ).
diametro( tierra, 12756 ).
diametro( marte, 6787 ).
diametro( jupiter, 142984 ).
diametro( saturno, 120536 ).
diametro( urano, 51108 ).
diametro( neptuno, 49538 ).
diametro( luna, 3476 ).
diametro( io, 3643 ).
diametro( europa, 3122 ).
diametro( ganimedes, 5262 ).
diametro( calisto, 4821 ).
diametro( titan, 5162 ).
diametro( tetis, 1062 ).
diametro( dione, 1118 ).
diametro( rea, 1529 ).
diametro( japeto, 1436 ).
diametro( mimas, 416 ).
diametro( encelado, 499 ).
diametro( miranda, 472 ).
diametro( ariel, 1162 ).
diametro( umbriel, 1172 ).
diametro( titania, 1577 ).
diametro( oberon, 1523 ).
diametro( triton, 2707 ).
diametro( caronte, 1207 ).


tiempo_rotacion( mercurio, 1408 ). 
tiempo_rotacion( venus, 5832 ).  
tiempo_rotacion( tierra, 24 ).
tiempo_rotacion( marte, 24 ).
tiempo_rotacion( jupiter, 9 ).
tiempo_rotacion( saturno, 10 ).
tiempo_rotacion( urano, 17 ).
tiempo_rotacion( neptuno, 16 ).
tiempo_rotacion( luna, 672).
tiempo_rotacion( io, 48 ).
tiempo_rotacion( europa, 85 ).
tiempo_rotacion( ganimedes,171).
tiempo_rotacion( calisto,400).
tiempo_rotacion( titan,382).
tiempo_rotacion( tetis, 453).
tiempo_rotacion( dione,72).
tiempo_rotacion( rea, 120).
tiempo_rotacion( japeto, 1915 ).
tiempo_rotacion( mimas,2041  ).
tiempo_rotacion( encelado,201).
tiempo_rotacion( miranda,339 ).
tiempo_rotacion( ariel, 72).
tiempo_rotacion( umbriel,96).
tiempo_rotacion( titania,192 ).
tiempo_rotacion( oberon, 312 ).
tiempo_rotacion( triton,203).
tiempo_rotacion( caronte,144).

tiempo_traslacion( mercurio, 2112 ).
tiempo_traslacion( venus, 5800 ).
tiempo_traslacion( tierra, 365 ).
tiempo_traslacion( marte, 686 ).
tiempo_traslacion( jupiter, 4328 ).
tiempo_traslacion( saturno, 10752 ).
tiempo_traslacion( urano, 30663 ).
tiempo_traslacion( neptuno, 60148 ).
tiempo_traslacion( luna, 3476 ).
tiempo_traslacion( io, 3643 ).
tiempo_traslacion( europa, 3122 ).
tiempo_traslacion( ganimedes, 5262 ).
tiempo_traslacion( calisto, 4821 ).
tiempo_traslacion( titan, 5162 ).
tiempo_traslacion( tetis, 1062 ).
tiempo_traslacion( dione, 1118 ).
tiempo_traslacion( rea, 1529 ).
tiempo_traslacion( japeto, 1436 ).
tiempo_traslacion( mimas, 416 ).
tiempo_traslacion( encelado, 499 ).
tiempo_traslacion( miranda, 472 ).
tiempo_traslacion( ariel, 1162 ).
tiempo_traslacion( umbriel, 1172 ).
tiempo_traslacion( titania, 1577 ).
tiempo_traslacion( oberon, 1523 ).
tiempo_traslacion( triton, 2707 ).
tiempo_traslacion( caronte, 1207 ).

%RELACIONES%
orbita( luna, tierra ).
orbita( io, jupiter ).
orbita( europa, jupiter ).
orbita( ganimedes, jupiter ).
orbita( calisto, jupiter ).
orbita( titan, saturno ).
orbita( tetis, saturno ).
orbita( dione, saturno ).
orbita( rea, saturno ).
orbita( japeto, saturno ).
orbita( mimas, saturno ).
orbita( encelado, saturno ).
orbita( miranda, urano ).
orbita( ariel, urano ).
orbita( umbriel, urano ).
orbita( titania, urano ).
orbita( oberon, urano ).
orbita( triton, neptuno ).
orbita( caronte, pluton ).

%%REGLAS%%
%%A
lunas_de_planeta( X, Y ) :- planeta( X ), orbita( Y, X ), luna( Y ).

%%B
diametro_planetas( [ ], [ ] ).
diametro_planetas( [ Planeta | Faltantes ], R ) :- diametro( Planeta, Diametro ), diametro_planetas( Faltantes, Temp ), append( Temp, [ Diametro ], Z ), reverse( Z, R ).

%%CC

%%SERVIDOR WEB:
%%LIBRERIAS
:- use_module(library(http/thread_httpd)).
:- use_module(library(http/http_dispatch)).

%%CONFIGURACION INICIAL
server(Port) :-
        http_server(http_dispatch, [port(Port)]).

server(Port) :-
        http_server(http_dispatch, [port(Port)]).

:- http_handler( /, say_hi, []).

say_hi(_Request) :-
        format('Content-type: text/plain~n~n'),
        format('Hello World!~n').