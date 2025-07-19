import Controller from '@shfaddy/oscilla/controller';
import Parameter from '@shfaddy/oscilla/parameter';

export default class Tone extends Controller {

constructor ( details, parameters = {

pitch: { value: 0 },
distance: { value: 0 }

} ) {

super ( { parameters } );

this .details = details;
this .number = ++details .tones % 10 === 0 ? ++details .tones : details .tones;

};

get $number () { return this .number };

async $_note ( { play: $, note } ) {

return [

`i 1.${ this .number }`,
note .sequence ? '+' : 0,
`[ ${ note .length } ]`,
note .phone,
`[ ${ note .pitch } + ${ await $ ( 'pitch' ) } ]`,
`[ ${ note .distance } + ${ await $ ( 'distance' ) } ]`,

] .join ( ' ' );

};

};
