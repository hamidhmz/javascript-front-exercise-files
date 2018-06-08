//index22
//219
console.log("Math.PI:"+Math.PI);
console.log("Math.floor(Math.PI):"+Math.floor(Math.PI));
console.log("Math.round(Math.PI):"+Math.round(Math.PI));
console.log("Math.ceil(Math.PI):"+Math.ceil(Math.PI));
console.log("Math.abs(-5.44):"+Math.abs(-5.44));
console.log("Math.sqrt(100):"+Math.sqrt(100));
console.log("Math.pow(10,2):"+Math.pow(10,2));
//221
var d = new Date('2010-01-10');
console.log("Date():"+Date());
console.log("d:"+d);
console.log("new Date('2010-01'):"+ new Date('2010-01'));
console.log("new Date('2010'):"+new Date('2010'));
console.log("new Date(APRIL,10,2010):"+new Date("APRIL,10,2010"));
console.log("new Date(APRIL,10,2010).getTime():"+new Date("APRIL,10,2010").getTime());

var d = new Date("APRIL,10, 1980");
console.log("new Date('APRIL,10, 1980').setFullYear(2017):"+new Date("APRIL,10, 1980").setFullYear(2017));
console.log("new Date('APRIL,10, 1980').setDate(new Date('APRIL,10, 1980').getDate() + 100):"+new Date('APRIL,10, 1980').setDate(new Date('APRIL,10, 1980').getDate() + 100));
d.setFullYear(2017);
d.setDate(d.getDate() + 100);
//d.setMonth(11);
        