import Instrument from '@shfaddy/oscilla/instrument';
import Engine from '@shfaddy/oscilla/engine';
import Player from '@shfaddy/oscilla/player';
import Phone from '@shfaddy/oscilla/phone';
import Parameter from '@shfaddy/oscilla/parameter';
import Envelope from '@shfaddy/oscilla/envelope';

export default class Oscilla extends Instrument {

body = 'aNote poscil aAmplitude, aFrequency';

constructor ( details = {

instruments: [],
phones: [],
tones: 0,
score: []

} ) {

super ( details );

this .details = Object .assign ( details, { oscilla: this } );

this .$envelope = new Envelope ( details );
this .$record = new Engine ( details );

};

$phone = Phone;

$pitch = new Parameter ( { value: 64 } );
$distance = new Parameter ( { value: '0' } );

async $_producer ( _ ) {

await _ .play ( '--direction', 'oscilla' );

return super .$_producer ( _ );

};

};
