import Controller from '@shfaddy/oscilla/controller';

export default class Envelope extends Controller {

constructor ( details ) {

super ( Object .assign ( details, {

parameters: {

attack: { value: 5 },
decay: { value: 3 },
sustain: { value: 2 },
release: { value: 1 },

sweep: { value: 16 },
shift: { value: 6 }

}

} ) );

};

};
