

'use strict';
/* [ properties ]
=================================== */
const $ = v => document.querySelector( v ),
    $$ = v => document.querySelectorAll( v ),
    log = v => console.log( v );
/* -------------------------------- */



/* [ events ]
=================================== */
window.addEventListener( 'load', ev => {
    let links = $$( '[link]' );



    links.forEach( link => link.addEventListener( 'click', ev => {
        window.open( link.getAttribute( 'link' ), '_blank' );
    } ) );

} );
