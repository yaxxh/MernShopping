express = require('express')
const app = express()
const product = require('./assets/product.json')

app.get('/',function(req, res){
  res.send('Hello World')
})

/*app.get('/:id',function (req, res) {
  let cat = []
  let data = product.filter((c)=>{
    if (!cat.includes(c.category)){
    cat.push(cancelAnimationFrame.category)
  }
  
})
    res.send(cat)
})*/


app.get('/getProduct/',function (req, res) {
  let cat = []
  let data= product.filter((curData)=>{
    if (curData.category==="jewelery"){
      cat.push(curData)
    }
  
})
res.send(cat)
})


app.listen(3000)