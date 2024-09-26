const diffarence = (x, y) => x -y;
const diff = diffarence(20, 25);
console.log(diff);

const multiplay = (first, secend, thard) => first * secend * thard;
const multi = multiplay(50, 60 ,70);
console.log(multi);

//  single paramitar or one paramitar

const getAge = (parson) => parson.age;
const student = {name: 'kausar mia', age: 35};
const age  = getAge(student);
console.log(age);

const Age = num => num.age;
const students = {name: 'kausar', age:35};
const ageEl = Age(students);
console.log(ageEl);


const doublIt = num => num*2;
const result = doublIt(50);
console.log(result);

const doMath  =  (x, y, z) => {
    const sum = x + y + z;
    const mult = x * y * z;
    const results = sum + mult;
    return results;
}
const math  = doMath(10, 20, 30);
console.log(math);
