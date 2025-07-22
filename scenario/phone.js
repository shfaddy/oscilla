import Controller from '@shfaddy/oscilla/controller';

export default class Phone extends Controller {

constructor ( details, parameters ) {

super ( parameters ? { parameters } : details );

this .details = Object .assign ( Object .create ( details ), { phone: this } );

this .number = ++details .phones % 10 === 0 ? ++details .phones : details .phones;

};

get $number () { return this .number };

$phone = this .constructor;

async $_director ( _, step, length ) {

if ( step === undefined )
return super .$_director ( _ );

const { play: $ } = _;
const { score } = this .details;

score .push ( [

`i 1.${ await $ ( 'number' ) }`,
step,
length,
... await $ ( 'parameters' )

] .join ( ' ' ) );

for ( const [ scenario, subphone ] of await $ ( '--directory', 'Phone' ) )
await $ ( subphone, '.', '.' );

return true;

};

};
