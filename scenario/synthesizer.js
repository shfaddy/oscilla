export default `

giMusic init 0
giKey init 0

instr key

giKey init p4

endin

instr 1

iPitch init p4
iDistance init p5

iAmplitude init 1 / 2 ^ iDistance

iAttack init 1 / 2 ^ p6
iDecay init 1/ 2 ^ p7
iSustain init iAmplitude / 2 ^ p8
iRelease init 1 / 2 ^ p9

aAmplitude linsegr 0, iAttack, iAmplitude, iDecay, iSustain, iRelease, 0

iFrequency init 2 ^ ( 4 + ( giKey + iPitch ) / 16 )

iSweep init 2 ^ ( p10 / 16 )

iShift init 1 / 2 ^ p11

aFrequency linseg iFrequency * iSweep, iShift, iFrequency

aNote poscil aAmplitude, aFrequency

gaMusic = gaMusic + aNote

endin

instr music

aNote clip gaMusic, 1, 0dbfs

out aNote

gaMusic = 0

endin

` .trim ();
