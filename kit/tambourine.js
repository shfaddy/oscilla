export const parameters = {

shakers: { value: '5' },
damp: { value: '1' },
shake: { value: '1' },
second: { value: '1' },
third: { value: '1' }

};

export const body = `

iShakers init 2^iPShakers
iDamp init .75 / 2^iPDamp
iShake init 1 / 2^iPShake
iSecond init iFrequency * ( 2^iPSecond )
iThird init iFrequency * ( 2^( iPSecond + iPThird ) )

aNote tambourine 1, p3, iShakers, iDamp, iShake, iFrequency, iSecond, iThird

`;
