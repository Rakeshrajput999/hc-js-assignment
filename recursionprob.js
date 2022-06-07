let obj =[
    {id:1,name:"ajay",age:16},
    {id:2,name:"rohan",age:18},
    {id:3,name:"veer",age:23},
    {id:4,name:"abhay",age:24},
]

// get array of person of having age moe the

// console.log(Object.entries(obj))


const searchTerm = "ajay"
let result = []

function getEachItem(object) {
  object.forEach(item => {
    searchItem(item)
  })
  return [...new Set(result)]

};

function searchItem(item) {
  Object.keys(item).forEach(key => {
    if (typeof item[key] === "object") {
      searchItem(item[key])
    }
    if (typeof item[key] === "string") {
      let searchAsRegEx = new RegExp(searchTerm, "gi");
      if (item[key].match(searchAsRegEx)) {
        result.push(item.id)
      }
    }
  })
}

console.log(getEachItem(obj))
