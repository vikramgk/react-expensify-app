/** 
 * Object Destructuring
*/

// const book = {
//     title: 'Ego is the Enemy',
//     author: 'Ryan Holiday',
//     publisher: {
//         //name: 'Penguin'
//     }
// };

// // assign new name and default value
// const { name: publisherName = 'Self-Published' } = book.publisher;

// console.log(publisherName);


/** 
 * Array Destructuring
*/

const address = ['129 Juniper Street', 'Chicago',  'Penn', '19247'];
const [ , , state, ] = address;

console.log(`You are in ${state}.`)

const item = ["Coffee (hot)", "$2.00", "$2.50", "$2.75"]
const [itemName, , medium, ] = item;

console.log(`A medium ${itemName} costs ${medium}`);