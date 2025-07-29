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

iAttack init 1 / 2 ^ iPAttack
iDecay init 1 / 2 ^ iPDecay
iSustain init 1 / 2 ^ iPSustain
iRelease init 1 / 2 ^ iPRelease

if p3 < iAttack + iDecay + iRelease then

p3 init iAttack + iDecay + iRelease

endif

aAmplitude linseg 0, iAttack, 1, iDecay, iSustain, p3 - iAttack - iDecay - iRelease, iSustain, iRelease, 0

iFrequency init 2 ^ ( 4 + ( iPPitch / 16 ) )
iSweep init 2 ^ ( iPSweep / 16 )
iShift init 1 / 2 ^ iPShift

aFrequency linseg iFrequency * iSweep, iShift, iFrequency

aNote poscil aAmplitude, aFrequency

aNote clip aNote, 1, 0dbfs

gaNote = gaNote + aNote / 2 ^ iPDistance

endin

instr 2

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

iAttack init 1 / 2 ^ iPAttack
iDecay init 1 / 2 ^ iPDecay
iSustain init 1 / 2 ^ iPSustain
iRelease init 1 / 2 ^ iPRelease

if p3 < iAttack + iDecay + iRelease then

p3 init iAttack + iDecay + iRelease

endif

aAmplitude linseg 0, iAttack, 1, iDecay, iSustain, p3 - iAttack - iDecay - iRelease, iSustain, iRelease, 0

iFrequency init 2 ^ ( 4 + ( iPPitch / 16 ) )
iSweep init 2 ^ ( iPSweep / 16 )
iShift init 1 / 2 ^ iPShift

aFrequency linseg iFrequency * iSweep, iShift, iFrequency

aNote noise aAmplitude, 0

aNote butterlp aNote, aFrequency

aNote clip aNote, 1, 0dbfs

gaNote = gaNote + aNote / 2 ^ iPDistance

endin

instr 3

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
iPFM init p ( 12 )

iAttack init 1 / 2 ^ iPAttack
iDecay init 1 / 2 ^ iPDecay
iSustain init 1 / 2 ^ iPSustain
iRelease init 1 / 2 ^ iPRelease

if p3 < iAttack + iDecay + iRelease then

p3 init iAttack + iDecay + iRelease

endif

aAmplitude linseg 0, iAttack, 1, iDecay, iSustain, p3 - iAttack - iDecay - iRelease, iSustain, iRelease, 0

iFrequency init 2 ^ ( 4 + ( iPPitch / 16 ) )
iSweep init 2 ^ ( iPSweep / 16 )
iShift init 1 / 2 ^ iPShift

aFrequency linseg iFrequency * iSweep, iShift, iFrequency

iFrequencyModulation init 1 / 2 ^ iPFM

aFrequencyModulated poscil aFrequency, aFrequency * iFrequencyModulation

aNote poscil aAmplitude, aFrequencyModulated

aNote clip aNote, 1, 0dbfs

gaNote = gaNote + aNote / 2 ^ iPDistance

endin

instr 4

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

iAttack init 1 / 2 ^ iPAttack
iDecay init 1 / 2 ^ iPDecay
iSustain init 1 / 2 ^ iPSustain
iRelease init 1 / 2 ^ iPRelease

if p3 < iAttack + iDecay + iRelease then

p3 init iAttack + iDecay + iRelease

endif

aAmplitude linseg 0, iAttack, 1, iDecay, iSustain, p3 - iAttack - iDecay - iRelease, iSustain, iRelease, 0

iFrequency init 2 ^ ( 4 + ( iPPitch / 16 ) )
iSweep init 2 ^ ( iPSweep / 16 )
iShift init 1 / 2 ^ iPShift

aFrequency linseg iFrequency * iSweep, iShift, iFrequency

aNote poscil aAmplitude, aFrequency

aNote clip aNote, 1, 0dbfs

gaNote = gaNote + aNote / 2 ^ iPDistance

endin

instr 5

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
iPFM init p ( 12 )

iAttack init 1 / 2 ^ iPAttack
iDecay init 1 / 2 ^ iPDecay
iSustain init 1 / 2 ^ iPSustain
iRelease init 1 / 2 ^ iPRelease

if p3 < iAttack + iDecay + iRelease then

p3 init iAttack + iDecay + iRelease

endif

aAmplitude linseg 0, iAttack, 1, iDecay, iSustain, p3 - iAttack - iDecay - iRelease, iSustain, iRelease, 0

iFrequency init 2 ^ ( 4 + ( iPPitch / 16 ) )
iSweep init 2 ^ ( iPSweep / 16 )
iShift init 1 / 2 ^ iPShift

aFrequency linseg iFrequency * iSweep, iShift, iFrequency

iFrequencyModulation init 1 / 2 ^ iPFM

aFrequencyModulated poscil aFrequency, aFrequency * iFrequencyModulation

aNote poscil aAmplitude, aFrequencyModulated

aNote clip aNote, 1, 0dbfs

gaNote = gaNote + aNote / 2 ^ iPDistance

endin

instr 6

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

iAttack init 1 / 2 ^ iPAttack
iDecay init 1 / 2 ^ iPDecay
iSustain init 1 / 2 ^ iPSustain
iRelease init 1 / 2 ^ iPRelease

if p3 < iAttack + iDecay + iRelease then

p3 init iAttack + iDecay + iRelease

endif

aAmplitude linseg 0, iAttack, 1, iDecay, iSustain, p3 - iAttack - iDecay - iRelease, iSustain, iRelease, 0

iFrequency init 2 ^ ( 4 + ( iPPitch / 16 ) )
iSweep init 2 ^ ( iPSweep / 16 )
iShift init 1 / 2 ^ iPShift

aFrequency linseg iFrequency * iSweep, iShift, iFrequency

aNote noise aAmplitude, 0

aNote butterlp aNote, aFrequency

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

i 1.1 [0+0+0] [(1/$measure)*1*1] [64+0+-32] [0+0+0] [64] [6] [5] [4] [4] [1]
i 1.2 [0+0+0+0] [(1/$measure)*1*1*(1/2^2)] [64+0+-32+32] [0+0+0+1] [64+0] [6+3] [5+1] [4+1] [4+0] [1+1]
i 2.1 [0+0+0] [(1/$measure)*1*1] [64+0+-16] [0+0+0] [96] [7] [5] [5] [10] [10]
i 2.2 [0+0+0+0] [(1/$measure)*1*1*1] [64+0+-16+16] [0+0+0+1] [96+0] [7+0] [5+0] [5+0] [10+0] [10+0]
i 2.3 [0+0+0+0+0] [(1/$measure)*1*1*1*1] [64+0+-16+16+16] [0+0+0+1+2] [96+0+0] [7+0+0] [5+0+0] [5+0+0] [10+0+0] [10+0+0]
i 3.1 [0+0+0] [(1/$measure)*1*1] [64+0+-32] [0+0+1] [64] [6] [5] [4] [8] [3] [+-1]
i 1.1 [0+(4/8)+0] [(1/$measure)*1*1] [64+0+-32] [0+0+0] [64] [6] [5] [4] [4] [1]
i 1.2 [0+(4/8)+0+0] [(1/$measure)*1*1*(1/2^2)] [64+0+-32+32] [0+0+0+1] [64+0] [6+3] [5+1] [4+1] [4+0] [1+1]
i 2.1 [0+(4/8)+0] [(1/$measure)*1*1] [64+0+-16] [0+0+0] [96] [7] [5] [5] [10] [10]
i 2.2 [0+(4/8)+0+0] [(1/$measure)*1*1*1] [64+0+-16+16] [0+0+0+1] [96+0] [7+0] [5+0] [5+0] [10+0] [10+0]
i 2.3 [0+(4/8)+0+0+0] [(1/$measure)*1*1*1*1] [64+0+-16+16+16] [0+0+0+1+2] [96+0+0] [7+0+0] [5+0+0] [5+0+0] [10+0+0] [10+0+0]
i 3.1 [0+(4/8)+0] [(1/$measure)*1*1] [64+0+-32] [0+0+1] [64] [6] [5] [4] [8] [3] [+-1]
i 4.1 [0+(1/8)+0] [(1/$measure)*(1/4)*1] [64+0+0] [0+0+0] [96] [23] [8] [8] [13] [8]
i 4.2 [0+(1/8)+0+(1/2^8)] [(1/$measure)*(1/4)*1*1] [64+0+0+1] [0+0+0+0] [96+0] [23+0] [8+0] [8+0] [13+0] [8+0]
i 4.3 [0+(1/8)+0+(1/2^8)+(1/2^8)] [(1/$measure)*(1/4)*1*1*1] [64+0+0+1+4] [0+0+0+0+0] [96+0+0] [23+0+0] [8+0+0] [8+0+0] [13+0+0] [8+0+0]
i 4.3 [0+(1/8)+0+0] [(1/$measure)*(1/4)*1*(1/2^3)] [64+0+0+16] [0+0+0+2] [96+0] [23+0] [8+0] [8+0] [13+0] [8+0]
i 4.4 [0+(1/8)+0+0+(1/2^8)] [(1/$measure)*(1/4)*1*(1/2^3)*1] [64+0+0+16+2] [0+0+0+2+0] [96+0+0] [23+0+0] [8+0+0] [8+0+0] [13+0+0] [8+0+0]
i 4.5 [0+(1/8)+0+0+(1/2^8)+(1/2^8)] [(1/$measure)*(1/4)*1*(1/2^3)*1*1] [64+0+0+16+2+5] [0+0+0+2+0+0] [96+0+0+0] [23+0+0+0] [8+0+0+0] [8+0+0+0] [13+0+0+0] [8+0+0+0]
i 5.1 [0+(1/8)+0] [(1/$measure)*(1/4)*1] [64+0+16] [0+0+0] [96] [10] [8] [8] [13] [8] [+0]
i 5.2 [0+(1/8)+0+(1/2^8)] [(1/$measure)*(1/4)*1*1] [64+0+16+3] [0+0+0+0] [96+0] [10+0] [8+0] [8+0] [13+0] [8+0] [+0+0]
i 5.3 [0+(1/8)+0+(1/2^8)+(1/2^8)] [(1/$measure)*(1/4)*1*1*1] [64+0+16+3+6] [0+0+0+0+0] [96+0+0] [10+0+0] [8+0+0] [8+0+0] [13+0+0] [8+0+0] [+0+0+0]
i 6.1 [0+(1/8)+0] [(1/$measure)*(1/4)*1] [64+0+0] [0+0+0] [256] [12] [9] [5] [8] [8]
i 6.2 [0+(1/8)+0+(1/2^8)] [(1/$measure)*(1/4)*1*1] [64+0+0+4] [0+0+0+0] [256+0] [12+0] [9+0] [5+0] [8+0] [8+0]
i 6.3 [0+(1/8)+0+(1/2^8)+0] [(1/$measure)*(1/4)*1*1*1] [64+0+0+4+9] [0+0+0+0+0] [256+0+0] [12+0+0] [9+0+0] [5+0+0] [8+0+0] [8+0+0]
i 4.1 [0+(3/8)+0] [(1/$measure)*(1/4)*1] [64+0+0] [0+0+0] [96] [23] [8] [8] [13] [8]
i 4.2 [0+(3/8)+0+(1/2^8)] [(1/$measure)*(1/4)*1*1] [64+0+0+1] [0+0+0+0] [96+0] [23+0] [8+0] [8+0] [13+0] [8+0]
i 4.3 [0+(3/8)+0+(1/2^8)+(1/2^8)] [(1/$measure)*(1/4)*1*1*1] [64+0+0+1+4] [0+0+0+0+0] [96+0+0] [23+0+0] [8+0+0] [8+0+0] [13+0+0] [8+0+0]
i 4.3 [0+(3/8)+0+0] [(1/$measure)*(1/4)*1*(1/2^3)] [64+0+0+16] [0+0+0+2] [96+0] [23+0] [8+0] [8+0] [13+0] [8+0]
i 4.4 [0+(3/8)+0+0+(1/2^8)] [(1/$measure)*(1/4)*1*(1/2^3)*1] [64+0+0+16+2] [0+0+0+2+0] [96+0+0] [23+0+0] [8+0+0] [8+0+0] [13+0+0] [8+0+0]
i 4.5 [0+(3/8)+0+0+(1/2^8)+(1/2^8)] [(1/$measure)*(1/4)*1*(1/2^3)*1*1] [64+0+0+16+2+5] [0+0+0+2+0+0] [96+0+0+0] [23+0+0+0] [8+0+0+0] [8+0+0+0] [13+0+0+0] [8+0+0+0]
i 5.1 [0+(3/8)+0] [(1/$measure)*(1/4)*1] [64+0+16] [0+0+0] [96] [10] [8] [8] [13] [8] [+0]
i 5.2 [0+(3/8)+0+(1/2^8)] [(1/$measure)*(1/4)*1*1] [64+0+16+3] [0+0+0+0] [96+0] [10+0] [8+0] [8+0] [13+0] [8+0] [+0+0]
i 5.3 [0+(3/8)+0+(1/2^8)+(1/2^8)] [(1/$measure)*(1/4)*1*1*1] [64+0+16+3+6] [0+0+0+0+0] [96+0+0] [10+0+0] [8+0+0] [8+0+0] [13+0+0] [8+0+0] [+0+0+0]
i 6.1 [0+(3/8)+0] [(1/$measure)*(1/4)*1] [64+0+0] [0+0+0] [256] [12] [9] [5] [8] [8]
i 6.2 [0+(3/8)+0+(1/2^8)] [(1/$measure)*(1/4)*1*1] [64+0+0+4] [0+0+0+0] [256+0] [12+0] [9+0] [5+0] [8+0] [8+0]
i 6.3 [0+(3/8)+0+(1/2^8)+0] [(1/$measure)*(1/4)*1*1*1] [64+0+0+4+9] [0+0+0+0+0] [256+0+0] [12+0+0] [9+0+0] [5+0+0] [8+0+0] [8+0+0]
i 4.1 [0+(6/8)+0] [(1/$measure)*(1/4)*1] [64+0+0] [0+0+0] [96] [23] [8] [8] [13] [8]
i 4.2 [0+(6/8)+0+(1/2^8)] [(1/$measure)*(1/4)*1*1] [64+0+0+1] [0+0+0+0] [96+0] [23+0] [8+0] [8+0] [13+0] [8+0]
i 4.3 [0+(6/8)+0+(1/2^8)+(1/2^8)] [(1/$measure)*(1/4)*1*1*1] [64+0+0+1+4] [0+0+0+0+0] [96+0+0] [23+0+0] [8+0+0] [8+0+0] [13+0+0] [8+0+0]
i 4.3 [0+(6/8)+0+0] [(1/$measure)*(1/4)*1*(1/2^3)] [64+0+0+16] [0+0+0+2] [96+0] [23+0] [8+0] [8+0] [13+0] [8+0]
i 4.4 [0+(6/8)+0+0+(1/2^8)] [(1/$measure)*(1/4)*1*(1/2^3)*1] [64+0+0+16+2] [0+0+0+2+0] [96+0+0] [23+0+0] [8+0+0] [8+0+0] [13+0+0] [8+0+0]
i 4.5 [0+(6/8)+0+0+(1/2^8)+(1/2^8)] [(1/$measure)*(1/4)*1*(1/2^3)*1*1] [64+0+0+16+2+5] [0+0+0+2+0+0] [96+0+0+0] [23+0+0+0] [8+0+0+0] [8+0+0+0] [13+0+0+0] [8+0+0+0]
i 5.1 [0+(6/8)+0] [(1/$measure)*(1/4)*1] [64+0+16] [0+0+0] [96] [10] [8] [8] [13] [8] [+0]
i 5.2 [0+(6/8)+0+(1/2^8)] [(1/$measure)*(1/4)*1*1] [64+0+16+3] [0+0+0+0] [96+0] [10+0] [8+0] [8+0] [13+0] [8+0] [+0+0]
i 5.3 [0+(6/8)+0+(1/2^8)+(1/2^8)] [(1/$measure)*(1/4)*1*1*1] [64+0+16+3+6] [0+0+0+0+0] [96+0+0] [10+0+0] [8+0+0] [8+0+0] [13+0+0] [8+0+0] [+0+0+0]
i 6.1 [0+(6/8)+0] [(1/$measure)*(1/4)*1] [64+0+0] [0+0+0] [256] [12] [9] [5] [8] [8]
i 6.2 [0+(6/8)+0+(1/2^8)] [(1/$measure)*(1/4)*1*1] [64+0+0+4] [0+0+0+0] [256+0] [12+0] [9+0] [5+0] [8+0] [8+0]
i 6.3 [0+(6/8)+0+(1/2^8)+0] [(1/$measure)*(1/4)*1*1*1] [64+0+0+4+9] [0+0+0+0+0] [256+0+0] [12+0+0] [9+0+0] [5+0+0] [8+0+0] [8+0+0]

</CsScore>

</CsoundSynthesizer>