'use strict';

const signal = 'yellow';

// if (signal === 'red') {
//     console.log('Stop!');
// } else if (signal === 'yellow') {
//     console.log('Caution!');
// } else if (signal === 'blue'){
//     console.log('Go!');
// }
//条件分岐で完全一致を多用する場合は、switch()という命令文を使用すると簡潔に書ける

switch (signal) {
    case 'red':
        console.log('stop');
        break;
    case 'yellow':
        console.log('caution');
        break;
    case 'blue':
        console.log('go');
        break;
    default:
        console.log("Wrong signal");
        break;
}