// ========get path from node js======

const path = require('path');

console.log(path.parse("C:/Node JS/Path-Module"));

// output:
// {
//     root: 'C:/',
//         dir: 'C:/Node JS',
//             base: 'Path-Module',
//                 ext: '',
//                     name: 'Path-Module'
// }