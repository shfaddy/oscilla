export const parameters = {

FM: { value: '0' }

};
export const body = `

iFrequencyModulation init 1 / 2 ^ iPFM

aFrequencyModulated poscil aFrequency, aFrequency * iFrequencyModulation

aNote poscil aAmplitude, aFrequencyModulated

`;
