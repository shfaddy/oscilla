import Parameter from '@shfaddy/oscilla/parameter';
import Engine from '@shfaddy/oscilla/engine';
import Instrument from '@shfaddy/oscilla/instrument';
import Phone from '@shfaddy/oscilla/phone';

export default class Oscilla {

static details = {

instruments: [],
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

$tempo = new Parameter ( { value: 120 } );
$measure = new Parameter ( { value: 4 } );

$step = new Parameter ( { value: '0' } );
$length = new Parameter ( { value: '(1/$measure)' } );
$pitch = new Parameter ( { value: '40', system: 16 } );
$distance = new Parameter ( { value: '0' } );

$_instrument = Instrument;

$_phone = Phone;

async $_director ( _, instrument, ... argv ) {

if ( instrument === undefined )
return _ .play ( '--directory' );

const { parameters, header, body } = await import ( '@shfaddy/oscilla/kit/' + instrument )
.catch ( error => { throw `Could not find ${ instrument } in Shaikh Faddy's Kit` } );

return await _ .play ( Object .assign ( _, {

details: Object .assign ( Object .create ( this .details ), { parameters, header, body } )

} ), Symbol .for ( 'instrument' ), instrument, ... argv );

};

};
