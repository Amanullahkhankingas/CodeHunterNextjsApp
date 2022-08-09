
// http://localhost:3000/api/blogs

import fs from 'fs'

export default async function getblog (reqpost,respost) {


    let data = await fs.promises.readdir(`blogdata`,'utf-8')
    // console.log(data)
    
    let allblogs=[];

    for (let index = 0; index < data.length; index++) {
        const item = data[index];

        // console.log(item)
       const myblog = await fs.promises.readFile(`blogdata/${item}`,'utf-8')
        // console.log(myblog)
      
        allblogs.push(JSON.parse(myblog))
        
    }
    respost.status(200).json(allblogs)


    
    // fs.readdir(`blogdata`,'utf-8',(err,data)=>{

    //     if(err){
            
    //         respost.status(200).json({error:"the directory of blogposts is not found "})
    //     }
    //     // respost.status(200).json(data)
    //     // respost.status(200).json(postdata)
        
    // })


}
