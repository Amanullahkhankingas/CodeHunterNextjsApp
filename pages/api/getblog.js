// http://localhost:3000/api/getblog?slug=thsi%20is%20the%20slug%20test%20for%20api%20getblog%20endpooint%20test
// http://localhost:3000/api/getblog?slug=how_to_learn_javascript

import fs from 'fs'

export default function getblog(reqpost,respost) {
    console.log(reqpost.query)

    // fs.readFile('blogdata/how_to_learn_javascript.json','utf-8',(err,data)=>{
    fs.readFile(`blogdata/${reqpost.query.slug}.json`,'utf-8',(err,data)=>{

        if(err){
            console.log("file not found")
            respost.status(200).json({error:"requesting blogpost is not found"})
        }
        // respost.status(200).json(reqpost.query)

        respost.status(200).json(JSON.parse(data))
        
    })

//    respost.status(200).json({kiler:"this is the api endpoint to get post by user request"})
}
