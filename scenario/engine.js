import { readFile, writeFile } from 'node:fs/promises';
import { spawn } from 'node:child_process';

export default class Engine {

constructor ( details ) {

this .details = Object .assign ( details, { engine: this } );

};

async $_director ( _, ... argv ) {

if ( typeof argv [ 0 ] === 'symbol' )
return;

if ( argv .length )
throw `I don't know what you mean by: "${ argv .join ( ' ' ) }"?`;

const { oscilla, clock, score } = this .details;
const path = oscilla .title + '.csd';

await writeFile ( path, `

<CsoundSynthesizer>

<CsOptions>

-o dac

</CsOptions>

<CsInstruments>

sr = 48000
ksmps = 32
nchnls = 2
0dbfs = 1

</CsInstruments>

<CsScore>

${ score .join ( '\n' ) }

</CsScore>

</CsoundSynthesizer>

` .trim (), 'utf8' );

this .process = spawn ( 'csound', [ path ], { stdio: 'ignore' } );

_ .interrupt .then (

() => this .process ? this .process .kill () : undefined

);

return await new Promise ( ( resolve, reject ) => {

this .process .on ( 'exit', ( ... status ) => {

status = status .filter ( status => status !== null ) .pop ();

delete this .process;

if ( status === 0 )
resolve ( true );

else
reject ( "Playing synthesizer is interrupted" );

} );

} );

};

};
