import Parameter from '@shfaddy/oscilla/parameter';
import Sound from '@shfaddy/oscilla/sound';
import Engine from '@shfaddy/oscilla/engine';

export default class Oscilla {

static details = {

modules: [],
code: [],
score: []

};

constructor ( details = this .constructor .details ) {

this .details = Object .assign ( details, { oscilla: this } );

this .$yallah = new Engine ( details );

};

$_producer ( _ ) {

this .details .$oscilla = _ .play;

};

$sound = Sound;

$tempo = new Parameter ( { value: 120 } );
$measure = new Parameter ( { value: 4 } );

$step = new Parameter ( { value: '0' } );
$length = new Parameter ( { value: '(1/$measure)' } );
$pitch = new Parameter ( { value: '40', system: 16 } );
$distance = new Parameter ( { value: '0' } );

$_director ( { play: $ } ) {

return $ ( '--directory' );

};

};
