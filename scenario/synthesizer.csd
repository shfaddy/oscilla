<CsoundSynthesizer>

<CsOptions>

-o dac

</CsOptions>

<CsInstruments>

sr = 48000
ksmps = 32
nchnls = 1
0dbfs = 1

giKey init 0

instr key

giKey init p4

endin

giAttack [] init 16
giDecay [] init 16
giSustain [] init 16
giRelease [] init 16

giSweep [] init 16
giShift [] init 16

gaNote [] init 16

instr 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16

iChannel init int ( p1 ) - 1
iPitch init p4
iDistance init p5

iAmplitude init 1 / 2 ^ iDistance

iAttack init 1 / 2 ^ giAttack [ iChannel ]
iDecay init 1/ 2 ^ giDecay [ iChannel ]
iSustain init iAmplitude / 2 ^ giSustain [ iChannel ]
iRelease init 1 / 2 ^ giRelease [ iChannel ]

aAmplitude linsegr 0, iAttack, iAmplitude, iDecay, iSustain, iRelease, 0

iFrequency init 2 ^ ( 4 + ( giKey + iPitch ) / 16 )

iSweep init 2 ^ ( giSweep [ iChannel ] / 16 )

iShift init 1 / 2 ^ giShift [ iChannel ]

aFrequency linseg iFrequency * iSweep, iShift, iFrequency

aNote poscil aAmplitude, aFrequency

gaNote [ iChannel ] = gaNote [ iChannel ] + aNote

endin

gaMusic init 0

instr 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116

iChannel init int ( p1 % 100 ) - 1

aNote clip gaNote [ iChannel ], 1, 0dbfs

aNote /= 2 ^ p4

gaMusic = gaMusic + aNote

gaNote [ iChannel ] = 0

endin

instr 201, 202, 203, 204, 205, 206, 207, 208, 209, 210, 211, 212, 213, 214, 215, 216

iChannel init int ( p1 % 200 ) - 1

giAttack [ iChannel ] init p4
giDecay [ iChannel ] init p5
giSustain [ iChannel ] init p6
giRelease [ iChannel ] init p7

giSweep [ iChannel ] init p8
giShift [ iChannel ] init p9

endin

instr music

aNote clip gaMusic, 1, 0dbfs

out aNote

gaMusic = 0

endin

</CsInstruments>

<CsScore>

i "music" 0 -1

i 101 0 -1 0

i 201 0 0 5 3 2 1 8 6

s

{ 3 octave

i 1.$octave 0 1 [ 64 + 16 * $octave ] 4

}

</CsScore>

</CsoundSynthesizer>
