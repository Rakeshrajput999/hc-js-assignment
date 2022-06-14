let obj=[ 
    {id:1,name:"rakesh",age:18},
    {id:2,name:"rohan",age:17},
    {id:3,name:"raj",age:23},
    {id:4,name:"ravi",age:24}
]
let newString = [];
let key=0
function below18(obj){
   if(obj[key].age < 18) {
        newString.push(obj[key].name)
    }
    key++;
    if(obj.length > key) below18(obj);
}
below18(obj)
console.log(newString)