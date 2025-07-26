import { readFile, writeFile } from 'node:fs/promises';
import { spawn } from 'node:child_process';

export default class Engine {

constructor ( details ) {

this .details = details;

};

async $_director ( _, ... argv ) {

if ( typeof argv [ 0 ] === 'symbol' )
return;

const { play: $ } = _;
const { oscilla, $oscilla, code, score } = this .details;
const path = 'oscilla.csd';

await writeFile ( path, `

<CsoundSynthesizer>

<CsOptions>

-o dac

</CsOptions>

<CsInstruments>

sr = 48000
ksmps = 32
nchnls = 1
0dbfs = 1

gaNote init 0

${ code .join ( '\n\n' ) }

instr mixer

aNote clip gaNote, 1, 0dbfs

out aNote

gaNote = 0

endin

</CsInstruments>

<CsScore>

i "mixer" 0 -1

s

t 0 ${ await $oscilla ( 'tempo' ) }

#define measure #${ await $oscilla ( 'measure' ) }#

v [$measure]

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
