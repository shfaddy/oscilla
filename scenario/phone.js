import Controller from '@shfaddy/oscilla/controller';

export default class Phone extends Controller {

constructor ( setting ) {

super ( setting );

this .setting = Object .assign ( Object .create ( setting ), { phone: this, parameters: {} } );
this .$sound = setting .$sound;
this .number = [ setting .number, ++setting .phones % 10 === 0 ? ++setting .phones : setting .phones ] .join ( '.' );

for ( const parameter of Object .keys ( setting .parameters ) )
this .setting .parameters [ parameter ] = Object .assign ( { combinator: '+' }, setting .parameters [ parameter ] );

};

get $number () { return this .number };

$phone = this .constructor;

async $yallah ( { play: $ }, ... argv ) {

const { score } = this .setting;
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
