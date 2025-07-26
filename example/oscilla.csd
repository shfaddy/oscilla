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

iPStep init p ( 2 )
iPLength init p ( 3 )
iPPitch init p ( 4 )
iPDistance init p ( 5 )
iPSweep init p ( 6 )
iPShift init p ( 7 )
iPAttack init p ( 8 )
iPDecay init p ( 9 )
iPSustain init p ( 10 )
iPRelease init p ( 11 )

iLength init 1 / 2 ^ iPLength

if p3 < iLength then

iLength init p3

endif

iAttack init iLength / 2 ^ iPAttack
iDecay init iLength / 2 ^ iPDecay
iSustain init 1 / 2 ^ iPSustain
iRelease init p3 / 2 ^ iPRelease

p3 init p3 - iRelease

aAmplitude linsegr 0, iAttack, 1, iDecay, iSustain, iRelease, 0

iFrequency init 2 ^ ( 4 + ( iPPitch / 16 ) )
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

i 1.1 [0+0] [(1/$measure)*1] [64+0] [0+0] [0] [0] [3] [6] [3] [3]
i 1.1 [0+0 +(1/$measure)] [(1/$measure)*1] [64+1] [0+0] [0] [0] [3] [6] [3] [3]
i 1.1 [0+0 +(1/$measure) +(1/$measure)] [(1/$measure)*1] [64+5] [0+0] [0] [0] [3] [6] [3] [3]
i 1.1 [0+0 +(1/$measure) +(1/$measure) +(1/$measure)] [(1/$measure)*1] [64+6] [0+0] [0] [0] [3] [6] [3] [3]
i 1.1 [0+0 +(1/$measure) +(1/$measure) +(1/$measure) +(1/$measure)] [(1/$measure)*1] [64+10] [0+0] [0] [0] [3] [6] [3] [3]
i 1.1 [0+0 +(1/$measure) +(1/$measure) +(1/$measure) +(1/$measure) +(1/$measure)] [(1/$measure)*1] [64+11] [0+0] [0] [0] [3] [6] [3] [3]
i 1.1 [0+0 +(1/$measure) +(1/$measure) +(1/$measure) +(1/$measure) +(1/$measure) +(1/$measure)] [(1/$measure)*1] [64+15] [0+0] [0] [0] [3] [6] [3] [3]
i 1.1 [0+0 +(1/$measure) +(1/$measure) +(1/$measure) +(1/$measure) +(1/$measure) +(1/$measure) +(1/$measure)] [(1/$measure)*1] [64+16] [0+0] [0] [0] [3] [6] [3] [3]

</CsScore>

</CsoundSynthesizer>