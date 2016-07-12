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
	var lunas = null;

	$( "#setelites_dialog" ).click( function( ) {
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
							if( lunas == null ) lunas = Monkberry.render( vista_lunas_planeta, document.getElementById( 'contenido_sistema' ) );
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
} );

