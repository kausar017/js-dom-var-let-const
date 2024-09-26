const glass =  { 
    name: 'glass', 
    color: 'golden', 
    price: 50, 
    isClined: true
};

// console.log(glass);

const keys = Object.keys(glass);
const valu = Object.values(glass);
// console.log(keys);
// console.log(valu);

const entris = Object.entries(glass);
console.log(entris);

delete glass.isClined;
// console.log(glass);

const { isClined, ...shortGlass} =glass;
console.log(shortGlass);

// Object.freeze(glass);
glass.source ='Bangladash';
glass.price = 5000;
delete glass.name                      
console.log(glass);


