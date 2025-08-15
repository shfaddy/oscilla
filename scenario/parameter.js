export default class Parameter extends Map {

attachment = [];

constructor ( setting ) {

super ();

this .setting = setting;
this .value = setting .value;

if ( setting .combinator !== undefined )
this .combinator = [ ' ', setting .combinator .trim (), ' ' ] .join ( '' );

if ( typeof setting .system === 'number' )
this .system = setting .system;

if ( setting .attachment instanceof Array )
this .attachment = [ ... this .attachment, ... setting .attachment ];

};

async $_director ( _, value, ... argv ) {

if ( typeof value === 'symbol' )
return;

if ( value !== undefined )
this .value = this .has ( value ) ? this .get ( value ) : value;

const { play: $ } = _;

if ( argv .length )
return $ ( Object .assign ( _, { parameter: true } ), Symbol .for ( 'senior' ), ... argv );

( { value } = this );

let attachment = [ ... this .attachment ];

if ( _ .system === true && typeof this .system === 'number' ) {

value = parseInt ( value, this .system );

if ( attachment .length )
attachment = attachment .map ( value => isNaN ( value ) ? value : parseInt ( value, this .system ) );

}

if ( attachment .length )
value = [ '(', value, ')', ... attachment ] .join ( ' ' );

if ( this .combinator !== undefined )
value = [ await $ ( _, '..', '..', await $ ( '--direction' ) ), '( ' + value + ' )' ] .join ( this .combinator );

return _ .unwrapped === true ? value : `( ${ value } )`;

};

async $_wrapped ( _ ) {

return `[ ${ ( await _ .play ( Object .assign ( _, { system: true } ) ) ) .toString () } ]`;

};

$define ( _, key, value ) {

if ( key === undefined )
throw "Provide a key for this parameter to define";

if ( value !== undefined )
this .set ( key, value );

return this .get ( key );

};

$attach ( _, ... argv ) {

if ( ! argv .length )
throw "Nothing to attach";

this .attachment = [ ... this .attachment, ... argv ];

return _ .play ();

};

};
