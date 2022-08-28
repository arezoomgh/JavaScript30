const timers = {};

window.addEventListener( 'keydown', ( e ) => {
    const key = e.keyCode;
    const audio = document.querySelector( `audio[data-key="${key}"]` );

    if ( audio ) {
        const timerId = `timer-${key}`;

        if ( timers[ timerId ] && timers[ timerId ].clearTimeout ) {
            timers[ timerId ].clearTimeout();
        }

        audio.play();

        const div = document.querySelector( `div.key[data-key="${key}"]` );
        div.classList.add( 'playing' );

        timers[ timerId ] = setTimeout( () => div.classList.remove( 'playing' ), 200 );
    }
} );