const fs = require('fs')

fs.writeFile('message.txt', "Oi mãe", (err) => {
  if (err) {
    throw err;
  } else {
  console.log('The file has been saved!')
  } 
  
})