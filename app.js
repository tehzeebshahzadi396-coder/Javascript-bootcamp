console.log("Hello world");
console.log(5+5);

console.log(5-5);

let a=10;
let b=5;

console.log(a+b);
console.log(a/b);
console.log(a*b);

console.log(10>5);
console.log(10<5);
console.log(10===10);
console.log(10===5);
console.log(10==="5");
console.log(10 !==5);
console.log(10 !==10);

//logical operators

let age =20;

console.log(age >28 && age <60);
console.log(age <10 || age >18);
console.log(!(age >18));


let number = -5;

if (number === -5) {
    console.log("Number is -5");
}
else{
    console.log("Error");
}
// for loop

for(let i=1; i<=5; i++){
    console.log(i);
}
for (let i=1; i<=5; i++){
    let marks =i*20;
    if(marks>=80){
        console.log("Grade A" );
    }else if (marks >=60){
        console.log("Grade B");
    }else{
        console.log("Grade F");
    }
}