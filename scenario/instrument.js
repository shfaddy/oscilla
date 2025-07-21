import Controller from '@shfaddy/oscilla/controller';
import Parameter from '@shfaddy/oscilla/parameter';

export default class Instrument {

constructor ( details ) {

this .details = Object .assign ( details, { instrument: this, instance: 0 } );

this .code = details .code = [];
this .number = details .number = details .instruments .push ( this );

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
.map ( ( [ parameter, { value } ], index ) => `iP${ parameter [ 0 ] .toUpperCase () + parameter .slice ( 1 ) } init p ( ${ index + 4 } )` )
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

};

$code () { return this .code .join ( '\n\n' ) };

$number () { return this .number };

static parameters ( parameters = {} ) {

return Object .assign ( {

pitch: { value: '0', combinator: '+' },
sweep: { value: '0', combinator: '+' },
shift: { value: '0', combinator: '+' },

distance: { value: '0', combinator: '+' },
length: { value: '0', combinator: '+' },
attack: { value: '0', combinator: '+' },
decay: { value: '0', combinator: '+' },
sustain: { value: '0', combinator: '+' },
release: { value: '0', combinator: '+' }

}, parameters );

};

static amplitude = `

iLength init 1 / 2 ^ iPLength

iAttack init iLength / 2 ^ iPAttack
iDecay init iLength / 2 ^ iPDecay
iSustain init 1 / 2 ^ iPSustain
iRelease init p3 / 2 ^ iPRelease

p3 init p3 - iRelease

aAmplitude linsegr 0, iAttack, 1, iDecay, iSustain, iRelease, 0

` .trim ();

static frequency = `

iFrequency init 2 ^ ( ( 16 + iPPitch ) / 16 )
iSweep init 2 ^ ( iPSweep / 16 )
iShift init 1 / 2 ^ iPShift

aFrequency linseg iFrequency * iSweep, iShift, iFrequency

` .trim ();

static mixer = `

aNote clip aNote, 1, 0dbfs

gaNote = gaNote + aNote / 2 ^ iPDistance

` .trim ();

};
