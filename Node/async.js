// PROMISE

const fs = require('fs');


const readFilePromise = path => new Promise((resolve, reject) =>{
    fs.readFile(path, {encoding: 'utf8'}, (err, res)=>{
        if(err)
            reject(err)
        else 
            resolve(res)
    })
});


// ===========================
readFilePromise('./data/a')
.then(resultA => {
    return readFilePromise('./data/b')
    .then(resultB => {
        return resultA + resultB
    })
})
.then(resultAll => console.log(resultAll))
.catch(err => console.log(err))

// ============================ 
Promise.all([
    readFilePromise('./data/a'),
    readFilePromise('./data/b'),
])
.then( result => {
    console.log(result.join(''))
})
.catch(err => {
    console.log('erreur', err)
})





