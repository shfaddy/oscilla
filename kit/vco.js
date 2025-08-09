export const parameters = {

mode: { value: '0', combinator: undefined },

lowPass: { value: '1' },
highPass: { value: '1' }

};

export const body = `

aNote vco2 k ( aAmplitude ), k ( aFrequency ), iPMode

iLowPass init 2^iPLowPass

aNote butterlp aNote, aFrequency * iLowPass


iHighPass init 2^iPHighPass

aNote butterhp aNote, aFrequency / iHighPass

`;
