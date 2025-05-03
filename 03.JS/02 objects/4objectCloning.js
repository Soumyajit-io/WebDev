//object cloning
let src = {
    value1:10,
    value2:20

 };
 let src2= {
    vaule3 : 10
 }
let b= {};
for(let i in src){//using loops
    b[i]=src[i];
}
console.log(b);


let c= Object.assign({},src,src2);//using assign(multiple)
console.log(c);

let d = {...src};//using spread
console.log(d);


