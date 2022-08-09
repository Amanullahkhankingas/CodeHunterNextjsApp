
// http://localhost:3000/api/blogs

import fs from 'fs'

export default function getblog(reqpost,respost) {

    fs.readdir(`blogdata`,'utf-8',(err,data)=>{

        if(err){
            
            respost.status(200).json({error:"the directory of blogposts is not found "})
        }
       

        respost.status(200).json(data)

        // my code just trying to durty my hands
        // for(let i=0;i<data.length;i++){
        //     postdata=[]
        //     let postdata += JSON.parse(data)
        //     respost.status(200).json({postdata})
        // }
        
    })


}
