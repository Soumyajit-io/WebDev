//for of loop (use for string,array)
let str = "mynameisSoumyajiT";
for(let i of str){
    console.log(i);
}

//for in (use for objects and arrays)
let student = {
    Name : "Rahul",
    Age : 16
}
for(let i in student){//returns key
    console.log(i);
    console.log(student[i]);
}