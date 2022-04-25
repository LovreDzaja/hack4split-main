let hours = new Date().getHours();

if ( hours > 18 && hours < 24 || hours > 0 && hours < 5 ) {
	darktheme();
}

function darktheme() {
	$( '.dark-theme-trigger' ).toggleClass( 'dark-theme-trigger--active' );

	$( 'body' ).toggleClass( 'dark-theme-change' );

	if ( $( '.dark-theme-trigger' ).hasClass( 'dark-theme-trigger--active' ) ) {
		$( '.dark-theme-wrapper' ).find( '.text' ).text( 'Svijetla tema' );
	} else {
		$( '.dark-theme-wrapper' ).find( '.text' ).text( 'Tamna tema' );
	}
}

$( '.dark-theme-wrapper' ).click( darktheme );