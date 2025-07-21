import Controller from '@shfaddy/oscilla/controller';

export default class Clock extends Controller {

constructor ( details, parameters = {

tempo: { value: '120' },
measure: { value: '4' }

} ) {

super ( { parameters } );

this .details = Object .assign ( details, { clock: this } );

};

};
