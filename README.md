# video handler express js
 video handler express js


this peace of code is for hosting videos on express js 



```js
const {handleVideo}=require('./handleVideoExpress')
const express = require('express')
const fs=require('fs')
const app = express()


app.get('/video',(req,res)=>{

  fs.readFile('./videos/trolling6.mp4',(err,data)=>{

    handleVideo(req,res,async(from,to)=>{return data.slice(from,to)},async()=>{return data.length})
  })

})

```
