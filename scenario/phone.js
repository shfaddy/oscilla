import Controller from '@shfaddy/oscilla/controller';
import Tone from '@shfaddy/oscilla/tone';

export default class Phone extends Controller {

constructor ( details ) {

super ( details );

this .details = Object .assign ( Object .create ( details ), { phone: this } );

};

$tone = Tone;

async $_director ( _, ... argv ) {

if ( ! argv .length )
return super .$_director ( _ );

if ( typeof argv [ 0 ] === 'symbol' )
return;

const { play: $ } = _;
const score = [];
const note = _ .note = {

phone: this .number

};

for ( const [ scenario, tone ] of await $ ( '--directory', 'Tone' ) )
score .push ( await $ ( _, tone, Symbol .for ( 'note' ) ) );

return score;

};

};
