 
const {Readable} = require('stream'); 
async function handleVideo(req,res,getPart,getSize,chunk){
 
    req.on('close',()=>{ 
        return
    })
 
    let range=req.headers.range
    const video_size=await getSize()
     if(!video_size){
         res.write("ERROR")
         return
    }

    if(!range){   
         range="bytes=0-"
     } 
     const start =parseInt(range.replace(/\D/g, ""));
     const end = Math.min(start + chunk, video_size - 1)
     const contentLength = end - start+1
     const headers = {
        "Content-Range": `bytes ${start}-${end}/${video_size}`,
        "Accept-Ranges": "bytes",
        "Content-Length": contentLength,
        "Content-Type": "video/mp4",
    }
    res.writeHead(206, headers)
    console.log(range)
    console.log(new Date())
    console.log(headers) 
  
    res.write(await getPart(start,end))   
      
}
 async function handleVideo(req,res,getPart,getSize,chunk){
  //default chunk is 1BM
  handleVideo(req,res,getPart,getSize,1000*1000)
 }



module.exports={

    handleVideo

}
