var planetas = {
	'mercurio' : 'Mercurio',
	'venus' : 'Venus',
	'tierra' : 'La Tierra',
	'marte' : 'Marte',
	'jupiter' : 'Jupiter',
	'saturno' : 'Saturno',
	'urano' : 'Urano',
	'neptuno' : 'Neptuno',
	'pluton' : 'Plutón'
};

$( document ).ready( function( ) {

	$( "#setelites_dialog" ).click( function( ) {
		$( "#contenido_sistema" ).html( '' );

		bootbox.dialog( {
			message: '<div class="row" id="planet_form_container"></div>',
			title: 'Formulario planeta',
			buttons: {
				success: {
					label: "procesar",
					className: "btn-success",
					contentType: 'application/json',
					withCredentials: false,
					callback: function() {
						$.ajax( {
							type: "post",
							url: 'http://localhost:8002/lunas_planeta',
							data: {
								'planeta' : $( "#nombre_planeta" ).val( )
							}
						} ).done( function( data, textStatus, jqXHR ) {
							var lunas = Monkberry.render( vista_lunas_planeta, document.getElementById( 'contenido_sistema' ) );
							lunas.update( {
								'lunas': data
							} );
						} );
					}
				}
			}
		} );

		var formulario = Monkberry.render( vista_formulario_planeta, document.getElementById( 'planet_form_container' ) );
		formulario.update( {
			'planetas' : planetas
		} );

	} );

	$( "#grupos_planetas_dialog" ).click( function( ) {
		$( "#contenido_sistema" ).html( '' );

		bootbox.dialog( {
			message: '<div class="row" id="planet_form_container"></div>',
			title: 'Formulario planeta',
			buttons: {
				success: {
					label: "procesar",
					className: "btn-success",
					contentType: 'application/json',
					withCredentials: false,
					callback: function() {
						var planeta_seleccionado = $( "#nombre_planeta" ).val( );
						var planetas_select = $.map( $( "#nombre_planeta option:selected" ), function ( el, i ) {
							return $( el ).val( );
						} );

						$.ajax( {
							type: "post",
							url: 'http://localhost:8002/diametro_planetas',
							data: {
								'planetas' : planetas_select.join(',')
							}
						} ).done( function( data, textStatus, jqXHR ) {
							var listado_planetas = { };
							var diametro_mayor = 1;
							
							for ( var i = data.length - 1; i >= 0; i-- ) {
								if( data[ i ] > diametro_mayor ) diametro_mayor = data[ i ];
							}

							for ( var i = data.length - 1; i >= 0; i-- ) {
								listado_planetas[ i + '' ] = {
									'nombre'  : planeta_seleccionado[ i ],
									'diametro' : data[ i ],
									'width' : ( data[ i ] / diametro_mayor )*300
								};
							}

							var grupo_planetas = Monkberry.render( vista_grupo_planetas, document.getElementById( 'contenido_sistema' ) );
							grupo_planetas.update( {
								'listado_planetas': listado_planetas,
								'width'      : 100/data.length
							} );
						} );
					}
				}
			}
		} );

		var formulario = Monkberry.render( vista_formulario_planeta, document.getElementById( 'planet_form_container' ) );
		formulario.update( {
			'planetas' : planetas
		} );

		$( "#nombre_planeta" ).attr( 'multiple', '' );
	} );

	$( "#periodo_planeta_dialog" ).click( function( ) {
		$( "#contenido_sistema" ).html( '' );
		var tiempo_traslacion = 15;
		bootbox.dialog( {
			message: '<div class="row" id="planet_form_container"></div>',
			title: 'Formulario planeta',
			buttons: {
				success: {
					label: "procesar",
					className: "btn-success",
					contentType: 'application/json',
					withCredentials: false,
					callback: function( ) {
						var nombre_planeta = $( "#nombre_planeta" ).val( );

						$.ajax( {
							type: "post",
							url: 'http://localhost:8002/orbita_planeta',
							data: {
								'planeta' : nombre_planeta
							}
						} ).done( function( data, textStatus, jqXHR ) {
							var tiempo_movimiento = Monkberry.render( vista_movimiento_planeta, document.getElementById( 'contenido_sistema' ) );
							tiempo_movimiento.update( {
								'planeta': nombre_planeta,
								'tiempo_traslacion' : data[ 1 ]*tiempo_traslacion/360
							} );
						} );
					}
				}
			}
		} );

		var formulario = Monkberry.render( vista_formulario_planeta, document.getElementById( 'planet_form_container' ) );
		formulario.update( {
			'planetas' : planetas
		} );
	} );
} );