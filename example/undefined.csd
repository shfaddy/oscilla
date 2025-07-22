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

instr 1

iPPitch init p ( 4 )
iPSweep init p ( 5 )
iPShift init p ( 6 )
iPDistance init p ( 7 )
iPLength init p ( 8 )
iPAttack init p ( 9 )
iPDecay init p ( 10 )
iPSustain init p ( 11 )
iPRelease init p ( 12 )

iLength init 1 / 2 ^ iPLength

iAttack init iLength / 2 ^ iPAttack
iDecay init iLength / 2 ^ iPDecay
iSustain init 1 / 2 ^ iPSustain
iRelease init p3 / 2 ^ iPRelease

p3 init p3 - iRelease

aAmplitude linsegr 0, iAttack, 1, iDecay, iSustain, iRelease, 0

iFrequency init 2 ^ ( ( 16 + iPPitch ) / 16 )
iSweep init 2 ^ ( iPSweep / 16 )
iShift init 1 / 2 ^ iPShift

aFrequency linseg iFrequency * iSweep, iShift, iFrequency

aNote poscil aAmplitude, aFrequency

aNote clip aNote, 1, 0dbfs

gaNote = gaNote + aNote / 2 ^ iPDistance

endin

instr mixer

aNote clip gaNote, 1, 0dbfs

out aNote

gaNote = 0

endin

</CsInstruments>

<CsScore>

i "mixer" 0 -1

s

t 0 120

#define measure #4#

v [$measure]

i 1.2 [0] [1/$measure] [80+0] [0+0] [0+0] [0+0] [0+0] [0+5] [0+3] [0+3] [0+2]

</CsScore>

</CsoundSynthesizer>