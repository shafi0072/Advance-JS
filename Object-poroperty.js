const students =  [
    {id:21, name:'Omar Sunny'},
    {id:31, name:'Mannaaaaaa'},
    {id:41, name:'Moyouri'},
    {id:71, name:'Deepjol'}
];
// let output = [];
// for(let i = 0; i < students.length; i++){
//     let element = students[i];
//     let Names = element.name
//     output.push(Names);
// }
// console.log(output);

const names =  students.map ( s => s.name);
const id = students.map(i => i.id);
const bigger= students.filter(s => s.id > 40 );
const biggerOne = students.find(s => s.id > 40);
console.log(names);
console.log(id);
console.log(bigger);
console.log(biggerOne);