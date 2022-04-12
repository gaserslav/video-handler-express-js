# video handler express js
 video handler express js


this function is for hosting videos on express js 



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

so parametars....

1 request object (object with which you handle what client have sent)

2 response object (one that handle what you(Server) should send to client)

3 async function that gets **parts** of data(video) it has 2 parametars (from and to) from is starting byte to is ending byte

4 async function that gets size of that data(video) 

5 (optional) size of *chunk*(amount of data that video will be break into before sending (it would be stupied to send whole video at once) simular to *pipe* function in stream object) default chunk is 1MB

>why is it the way it is ?


lets say video that you want to host isnt directly on server (database for example) so you cant use *fs* to access it
