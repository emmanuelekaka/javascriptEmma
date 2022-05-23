const fetch = require('node-fetch');
const loadData = async () =>{
    try{
        const url ='./data.json'
        const res = await fetch(url)
        const data = res.json()
        console.log(data)
    }catch(err){
        console.error(err)
    }
}
loadData()