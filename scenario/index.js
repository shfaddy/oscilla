import Device from '@shfaddy/oscilla/device';
import Clock from '@shfaddy/oscilla/clock';
import Engine from '@shfaddy/oscilla/engine';
import Player from '@shfaddy/oscilla/player';

export default class Oscilla extends Device {

constructor ( details = {} ) {

super ();

this .details = Object .assign ( details, {

oscilla: this,
score: []

} );

this .$clock = new Clock ( details );
this .$beep = new Player ( Object .assign ( Object .create ( details ), { instrument: 'beep' } ) );
this .$record = new Engine ( details );

};

title = 'recording';

$title ( _, ... argv ) {

return ! argv .length ? this .title : this .title = argv .join ( '-' );

};

key = 64;

$key ( _, ... argv ) { return _ .play ( _, Symbol .for ( 'parameter' ), 'key', ... argv ) };

};
