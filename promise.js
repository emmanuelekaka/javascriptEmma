let data = new Promise((resolve, reject)=>
{
    let k = 'lunch'
    if (k=='lunch'){
        resolve('lunch is a thought')
    }else{
        reject('U get real food at campus')
    }
})
data.then(message=>{
    console.log(message)
}).catch(err =>console.log(err))