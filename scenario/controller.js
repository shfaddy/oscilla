import Parameter from './parameter.js';

export default class Controller extends Set {

constructor ( setting ) {

super ( typeof setting ?.parameters === 'object' ? Object .keys ( setting .parameters ) : undefined );

this .setting = setting;

for ( const parameter of [ ... this ] )
this [ '$' + parameter ] = new Parameter ( setting .parameters [ parameter ] );

};

async $_director ( _, ... argv ) {

const { play: $ } = _;

if ( ! argv .length )
return Promise .all ( [ ... this ] .map (

async parameter => [ parameter, await $ ( parameter ) ] .join ( ' = ' )

) );

};

$parameters ( { play: $ } ) {

return Promise .all ( [ ... this ] .map (

parameter => $ ( parameter, Symbol .for ( 'wrapped' ) )

) );

};

};
