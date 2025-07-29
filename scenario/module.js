export default class Module {

constructor ( details ) {

this .details = Object .assign ( details, { module: this, phones: 0 } );

this .number = details .number = details .modules .push ( this );
this .parameters = details .parameters;
this .header = details .header;
this .body = details .body;

};

code = [];

$code () { return this .code .join ( '\n\n' ) };

$number () { return this .number };

$_director ( _, ... argv ) {

if ( ! argv .length )
return _ .play ( '--directory' );

return _ .play ( Object .assign ( _, { details: this .details } ), '..', Symbol .for ( 'phone' ), ... argv );

};

$_producer () {

if ( this .code .length )
return;

let { parameters, header, body } = this;
const { code, number } = this;

if ( typeof header === 'string' && ( header = header .trim () ) .length )
code .push ( header );

code .push ( `instr ${ number }` );

this .details .parameters = parameters = this .constructor .parameters ( parameters );

code .push (

Object .entries ( parameters )
.map ( ( [ parameter, { value } ], index ) => `iP${ parameter [ 0 ] .toUpperCase () + parameter .slice ( 1 ) } init p ( ${ index + 2 } )` )
.join ( '\n' )

);

if ( typeof body === 'string' && ( body = body .trim () ) .length )
code .push (

this .constructor .amplitude,
this .constructor .frequency,
body,
this .constructor .mixer

);

code .push ( 'endin' );

this .details .code .push ( code .join ( '\n\n' ) );

};

static parameters ( parameters = {} ) {

return Object .assign ( {

step: { value: '0', combinator: '+' },
length: { value: '1', combinator: '*' },

pitch: { value: '0', system: 16, combinator: '+' },
distance: { value: '0', combinator: '+' },

sweep: { value: '0', system: 16 },
shift: { value: '0' },

attack: { value: '0' },
decay: { value: '0' },
sustain: { value: '0' },
release: { value: '0' }

}, parameters );

};

static amplitude = `

iAttack init 1 / 2 ^ iPAttack
iDecay init 1 / 2 ^ iPDecay
iSustain init 1 / 2 ^ iPSustain
iRelease init 1 / 2 ^ iPRelease

if p3 < iAttack + iDecay + iRelease then

p3 init iAttack + iDecay + iRelease

endif

aAmplitude linseg 0, iAttack, 1, iDecay, iSustain, p3 - iAttack - iDecay - iRelease, iSustain, iRelease, 0

` .trim ();

static frequency = `

iFrequency init 2 ^ ( 4 + ( iPPitch / 16 ) )
iSweep init 2 ^ ( iPSweep / 16 )
iShift init 1 / 2 ^ iPShift

aFrequency linseg iFrequency * iSweep, iShift, iFrequency

` .trim ();

static mixer = `

aNote clip aNote, 1, 0dbfs

gaNote = gaNote + aNote / 2 ^ iPDistance

` .trim ();

};
