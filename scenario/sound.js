import Parameter from '@shfaddy/oscilla/parameter';
import Module from '@shfaddy/oscilla/module';
import Phone from '@shfaddy/oscilla/phone';

export default class Sound {

constructor ( setting ) {

this .setting = Object .assign ( Object .create ( setting ), { sound: this } );

};

$_producer ( { play: $ } ) {

this .setting .$sound = $;

};

$_module = Module;
$_phone = Phone;

$chord = new Parameter ( { value: '1' } );
$ornaments = new Parameter ( { value: '1' } );

$step = new Parameter ( { value: '0', combinator: '+' } );
$length = new Parameter ( { value: '1', combinator: '*', attachment: [ '/', '$ornaments' ] } );

$pitch = new Parameter ( { value: '0', system: 16, combinator: '+' } );
$distance = new Parameter ( { value: '0', combinator: '+' } );

async $_director ( _, ... argv ) {

const { play: $ } = _;

if ( ! argv .length )
return $ ( '--directory' );

};

async $import ( _, module, ... argv ) {

const { play: $ } = _;
const { parameters, header, body } = await import ( '@shfaddy/oscilla/kit/' + module )
.catch ( error => { throw `Could not find ${ module } in Shaikh Faddy's Kit` } );

return await $ ( Object .assign ( _, {

setting: Object .assign ( Object .create ( this .setting ), { parameters, header, body } )

} ), Symbol .for ( 'module' ), module, ... argv );

};

async $yallah ( _, ... argv ) {

const { play: $ } = _;

if ( argv .length )
await $ ( 'step', argv .shift () );

if ( argv .length )
await $ ( 'length', argv .shift () );

const { score } = this .setting;

score .push ( [

';', 
( await $ ( '--location' ) ) .join ( '/' ),
`at step ${ await $ ( 'step' ) }`,
`for length ${ await $ ( 'length' ) }`,
`with pitch ${ await $ ( 'pitch' ) }`,
`and distance ${ await $ ( 'distance' ) }`

] .join ( ' ' ) );

score .push (

`{ ${ await $ ( Object .assign ( _, { unwrapped: true } ), 'chord' ) } chord`,
`#define ornaments #${ await $ ( _, 'ornaments' ) }#`,
'{ $ornaments ornament'

);

for ( const [ _, phone ] of await $ ( '--directory', 'Phone' ) )
await $ ( phone, 'yallah' );

score .push ( '}', '}' );

return true;

};

};
