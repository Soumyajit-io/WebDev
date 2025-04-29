//we will create multiple languages
// we have two ways
//1.    factory fn
//2.    constructor fn
 

//                              factory fn
function createRectangle(len, bre){
    let rectangle = {
        length : len,
        breadth : bre,
        
    };
    return rectangle;
}

let rectangle1 = createRectangle(4,5);
let rectangle2 = createRectangle(7,9);
console.log(rectangle1,'\n',rectangle2);

//                             constructor fn
function Rectangle(len,bre){
    this.length = len;
    this.breadth = bre;
}
let rectangleObject = new Rectangle(4,6);// new create an empty object
console.log(RectangleObject);