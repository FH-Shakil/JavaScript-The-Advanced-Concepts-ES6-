const students = [
    {id: 21, name: 'Johny Depp'},
    {id: 31, name: 'Chillan Murphy'},
    {id: 41, name: 'Janos Momoa'},
    {id: 71, name: 'Robart Pattison'}
];

const names = students.map( s => s.name);
const ids = students.map(s => s.id);
const bigger = students.filter( s => s.id>40);
const biggerOne = students.find( s => s.id>40);

console.log(biggerOne);