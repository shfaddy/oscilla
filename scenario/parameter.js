export default class Parameter extends Map {

constructor ( details ) {

super ();

this .value = details .value;

if ( details .combinator !== undefined )
this .combinator = details .combinator;

};

async $_director ( { play: $ }, value, ... argv ) {

if ( typeof value === 'symbol' )
return;

if ( value !== undefined )
this .value = this .has ( value ) ? this .get ( value ) : value;

if ( argv .length )
return $ ( Symbol .for ( 'senior' ), ... argv );

( { value } = this );

if ( this .attachment !== undefined )
value = [ value, ... this .attachment ] .join ( ' ' );

if ( this .combinator !== undefined ) {

const parameter = await $ ( Symbol .for ( 'direction' ) );
const location = ( await $ ( Symbol .for ( 'location' ) ) ) .slice ( 1 );

if ( location .length )
value = [ await $ ( '~', ... location .slice ( 0, -2 ), parameter ), value ] .join ( this .combinator );

}

return value;

};

async $_wrapped ( _ ) {

return `[${ ( await _ .play () ) .toString () }]`;

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

this .attachment = argv;

return _ .play ();

};

};
