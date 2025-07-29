import Parameter from '@shfaddy/oscilla/parameter';
import Module from '@shfaddy/oscilla/module';
import Phone from '@shfaddy/oscilla/phone';

export default class Sound {

constructor ( details ) {

this .details = Object .assign ( Object .create ( details ), { sound: this } );

};

$_module = Module;
$_phone = Phone;

$step = new Parameter ( { value: '0', combinator: '+' } );
$length = new Parameter ( { value: '1', combinator: '*' } );
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

details: Object .assign ( Object .create ( this .details ), { parameters, header, body } )

} ), Symbol .for ( 'module' ), module, ... argv );

};

async $yallah ( { play: $ }, ... argv ) {

if ( argv .length )
await $ ( 'step', argv .shift () );

if ( argv .length )
await $ ( 'length', argv .shift () );

for ( const [ _, phone ] of await $ ( '--directory', 'Phone' ) )
await $ ( phone, 'yallah' );

return;

};

};
