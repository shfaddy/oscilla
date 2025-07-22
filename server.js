#!/usr/bin/env node

import Oscilla from '@shfaddy/oscilla';
import Scenarist from '@shfaddy/scenarist/shell';

try {

await new Scenarist ( new Oscilla, {

prefix: [ 'oscilla' ]

} ) .publish ();

} catch ( error ) {

console .error ( "Scenarist got killed!" );
console .error ( error );

}
