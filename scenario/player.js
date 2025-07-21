import Controller from '@shfaddy/oscilla/controller';

export default class Player extends Controller {

$player = this .constructor;

constructor ( details, parameters = {

step: { value: '0', combinator: '+' },
length: { value: '1/$measure' }

} ) {

super ( { parameters } );

this .details = Object .assign ( details, { player: this } );
this .$_oscilla = details .oscilla;

};

async $_director ( _, ... argv ) {

if ( ! argv .length )
return super .$_director ( _ );

if ( typeof argv [ 0 ] === 'symbol' )
return;

const parameters = await _ .play ( 'parameters' );

for ( const instrument of argv )
await _ .play ( Symbol .for ( 'oscilla' ), 'kit', instrument, ... parameters );

};

};
