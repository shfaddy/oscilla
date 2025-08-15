export const parameters = {

tension: { value: '1' },
vibratoPitch: { value: '2a', system: 16 },
vibratoAmplitude: { value: '3' }

};

export const body = `

iTension init 1 - ( 1 / 2^iPTension )
iVibratoFrequency init 2^( iPVibratoPitch / 16 )
iVibratoAmplitude init 1 - ( 1 / 2^iPVibratoAmplitude )

aNote wgbrass k ( aAmplitude ), k ( aFrequency ), iTension, iAttack, iVibratoFrequency, iVibratoAmplitude

`;
