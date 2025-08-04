import { readFile, writeFile } from 'node:fs/promises';
import { spawn } from 'node:child_process';

export default class Engine {

constructor ( setting ) {

this .setting = setting;

};

async $_director ( _, ... argv ) {

if ( typeof argv [ 0 ] === 'symbol' )
return;

const { play: $ } = _;
const { oscilla, $oscilla, code, score } = this .setting;
const path = 'oscilla.csd';

await writeFile ( path, `

<CsoundSynthesizer>

<CsOptions>

-o dac

-L stdin

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

instr loopback

rewindscore

endin

instr exit

exitnow

endin

</CsInstruments>

<CsScore>

i "mixer" 0 -1

t 0 [ ${ await $oscilla ( 'tempo' ) } ]

#define measure #${ await $oscilla ( 'measure' ) }#

v [ $measure ]

${ score .join ( '\n\n' ) }

${

this .loopback ? '' : '; '

}i "loopback" [ 1 + ${ await $oscilla ( 'step' ) } ] 1

</CsScore>

</CsoundSynthesizer>

` .trim (), 'utf8' );

this .process = spawn ( 'csound', [ path ], { stdio: [ 'pipe', 'ignore', 'ignore' ] } );

_ .interrupt .then (

() => this .process ? this .process .stdin .write ( 'i "exit" 0 0\n' ) : undefined

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

$once ( _ ) { return this .loopback = false, _ .play ( _ ) };

$loopback ( _ ) { return this .loopback = true, _ .play ( _ ) };

};
