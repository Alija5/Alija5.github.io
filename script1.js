
let x, y, v, rez1, rez2, rez3, rez4;

// prompt(`put number x \nput number y \nput your variant`);
// x = Number(`${x}`);
// y = +(`${y}`);
// v = +parseFloat(`${v}`);

x = +prompt(`put number x`);
y = +prompt(`put number y `);
v = +prompt(`put your variant: 1'+', 2'-', 3'*', 4'/' `)
rez1 = x + y;
rez2 = x - y;
rez3 = x * y;
rez4 = x / y;
// v =parseFloat(`${v}`);
switch (parseFloat(`${v}`)) {
    case 1: console.log(`${rez1}`);
    break;
    case 2: console.log(`${rez2}`);
    break;
    case 3: console.log(`${rez3}`);   
    break;   
    case 4 : console.log(`${rez4}`);
     default:;
     
}