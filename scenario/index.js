import Instrument from '@shfaddy/oscilla/instrument';
import Clock from '@shfaddy/oscilla/clock';
import Engine from '@shfaddy/oscilla/engine';
import Phone from '@shfaddy/oscilla/phone';
import Player from '@shfaddy/oscilla/player';

export default class Oscilla extends Instrument {

body = 'aNote poscil aAmplitude, aFrequency';

constructor ( details = {

instruments: [],
phones: 0,
score: []

} ) {

super ( details );

this .details = Object .assign ( details, { oscilla: this } );

this .$kit = new Phone ( this .details, {

pitch: { value: '0' },
sweep: { value: '0' },
shift: { value: '0' },

distance: { value: '0' },
length: { value: '0' },
attack: { value: '0' },
decay: { value: '0' },
sustain: { value: '0' },
release: { value: '0' }

} );
this .$clock = new Clock ( details );
this .$yallah = new Engine ( details );

};

$_producer ( _ ) {

this .details .$oscilla = _ .play;
this .$nota = new Player ( this .details, {

step: { value: '0' },
length: { value: '1/$measure' }

} );

return super .$_producer ( _ );

};

};
