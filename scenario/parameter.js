export default class Parameter extends Map {

attachment = [];

constructor ( details ) {

super ();

this .details = details;
this .value = details .value;

if ( details .combinator !== undefined )
this .combinator = details .combinator;

if ( typeof details .system === 'number' )
this .system = details .system;

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

if ( _ .system === true && typeof this .system === 'number' )
value = parseInt ( value, this .system );

if ( this .attachment !== undefined )
value = [ value, ... this .attachment ] .join ( ' ' );

if ( this .combinator !== undefined )
value = [ await $ ( _, '..', '..', await $ ( '--direction' ) ), value ] .join ( this .combinator );

return value;

};

async $_wrapped ( _ ) {

return `[${ ( await _ .play ( Object .assign ( _, { system: true } ) ) ) .toString () }]`;

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
