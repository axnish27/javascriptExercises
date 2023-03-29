const getTheTitles = function(arr) {
  let len = arr.length   
  const arrTitles = [] 
  for(let i = 0; len > i; i++){
    arrTitles.push(arr[i].title)
  }
  return arrTitles
};

const books = [
    {
      title: 'Book',
      author: 'Name'
    },
    {
      title: 'Book2',
      author: 'Name2'
    }
  ]
  
  console.log(getTheTitles(books))

// Do not edit below this line
module.exports = getTheTitles;
