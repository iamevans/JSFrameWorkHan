
import {num, onAdd, longNameFunction as long} from './A12_ExportModule' 
import onMulti from './A13_DefaultModule';
import {name} from './A13_DefaultModule';

console.log(num);
console.log(onAdd(10, 20));
console.log(long(10, 20));

console.log(onMulti(10, 20));
console.log(name);



