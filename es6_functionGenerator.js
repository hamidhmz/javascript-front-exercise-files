//364 index49
"use strict"

function* pgGen() {
    let counter = 0;
    while (counter < 20) {
        yield counter++;
    }
}
let pg = pgGen();
for (let i = 0; i < 10; i++) {
    let holder = pg.next();
    if (holder.done) {
        break;
    }
    console.log(holder.value);
    //console.log(holder.done);
}
console.log(pg);
console.log(pg.next());
console.log(pg.next());
console.log(pg.next());
console.log(pg.next());