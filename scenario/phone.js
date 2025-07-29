import Controller from '@shfaddy/oscilla/controller';

export default class Phone extends Controller {

constructor ( details ) {

super ( details );

this .details = Object .assign ( Object .create ( details ), { phone: this, parameters: {} } );
this .$sound = details .$sound;
this .number = [ details .number, ++details .phones % 10 === 0 ? ++details .phones : details .phones ] .join ( '.' );

for ( const parameter of Object .keys ( details .parameters ) )
this .details .parameters [ parameter ] = Object .assign ( { combinator: '+' }, details .parameters [ parameter ] );

};

get $number () { return this .number };

$phone = this .constructor;

async $yallah ( { play: $ }, ... argv ) {

const { score } = this .details;
const number = await $ ( 'number' );
const instance = number .split ( '.' ) .pop ();
const chord = await this .$sound ( 'chord' );

score .push ( [

`; ${ ( await $ ( '--location' ) ) .join ( '/' ) }`,

[

`i [ ${ number } + ( $chord / ( 10 ^ ( 1 + ${ instance .length } + ${ chord .length } ) ) ) ]`,
... await $ ( 'parameters' )

] .join ( ' ' ),

] .join ( '\n' ) );

for ( const [ scenario, subphone ] of await $ ( '--directory', 'Phone' ) )
await $ ( subphone, 'yallah' );

return true;

};

};
