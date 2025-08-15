import { parse } from 'node:path';

const { dir } = parse ( new URL ( import .meta .url ) .pathname );

export const header = `

giStrikeFT ftgen 0, 0, 256, 1, "${ dir }/prerequisites/marmstk1.wav", 0, 0, 0
giVibratoFT ftgen 0, 0, 128, 10, 1

`;

export const body = `

aNote gogobel 1, iFrequency, .5, .5, giStrikeFT, 6.0, 0.3, giVibratoFT

aNote *= aAmplitude

`;
