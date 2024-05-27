// console.log(2>1);
// console.log(2>=1);
// console.log(2<1);
// console.log(2==1);
// console.log(2!=1);


// console.log("2">1);
// console.log("02">1);


// console.log(null>0);
// console.log(null==0);
// console.log(null>=0);
/*The reason is that an equality check == and comparisons > <>= <= works
differently. Comparisons convert null to a  number, treating it as 0. That's
why null(3)>=0 is true and (1) null > 0 is false  */


//In case of undefined it is different
// console.log(undefined>0);
// console.log(undefined==0);
// console.log(undefined>=0);


// ===
// console.log("2" == 2);
// console.log("2" === 2);
