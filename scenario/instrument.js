import Controller from '@shfaddy/oscilla/controller';
import Code from '@shfaddy/oscilla/code';

export default class Instrument extends Controller {

constructor ( setting = {} ) {

super ( setting );

Object .assign ( this .setting, {

instrument: this,
parameters: {

note: { value: ++setting .instruments },
step: { value: '0' },
length: { value: '0' }

}

} );

};

[ '$--header' ] = new Code;

[ '$--body' ] = new Code;

async [ '$*' ] ( { play: $ }, ... argv ) {

if ( argv .length )
await $ ( 'step', '=', argv .shift () );

if ( argv .length )
await $ ( 'tone', '=', argv .shift () );

if ( argv .length )
await $ ( 'length', '=', argv .shift () );

return $ ( '+', ( [ 'i', ... await $ ( '--fields' ) ] .join ( ' ' ) ) );

};

get [ '$+' ] () { return this .setting .score };

get [ '$--score' ] () { return this .setting .score };

async [ '$--parameters' ] ( { play: $ } ) {

const parameters = await $ ( '--directory', 'Parameter' ) .then ( directory => directory .map (

( [ type, parameter ], index ) => parameter

) );

return [

`#define parameters #${ parameters .slice ( 3 ) .map (

( parameter, index ) => `p${ index + 4 }`

) .join ( ', ' ) }#`,

... await Promise .all ( parameters .map ( async ( parameter, index ) => {

const field = 'p' + ++index
const code = [ `#define p_${ parameter } #${ field }#` ];
const capitalized = parameter [ 0 ] .toUpperCase () + parameter .slice ( 1 );

if ( await $ ( parameter, '--type' ) === 'number' ) 
code .push ( `iP${ capitalized } init ${ field }` );

else
code .push ( `SP${ capitalized } strget ${ field }` );

return code .join ('\n' );

} ) )

];

};

async [ '$--code' ] ( { play: $ } ) {

const code = [];

const header = await $ ( '--header' );

if ( header .length )
code .push ( header );

code .push ( `#define ${ await $ ( '--direction' ) } #${ await $ ( 'note', '--value' ) }#` );

code .push ( `instr $${ await $ ( '--direction' ) }` );

const parameters = await $ ( '--parameters' );

if ( parameters .length )
code .push ( parameters .join ( '\n' ) );

const body = await $ ( '--body' );

if ( body .length )
code .push ( body );

code .push ( 'endin' );

return code .join ( '\n\n' );

};

};
