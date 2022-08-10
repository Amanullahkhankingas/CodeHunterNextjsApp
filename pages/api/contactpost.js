import React from 'react'
import fs from 'fs'

export default async function handler(req,res) {
  
    if (req.method === 'POST') {
        console.log(req.body)

        let data = await fs.promises.readdir('contactdata');
        console.log(data)
         
        // fs.writeFile(`contactdata/1.json`, JSON.stringify(req.body),()=>{})  //callback function require
        fs.promises.writeFile(`contactdata/${data.length+1}.json`, JSON.stringify(req.body))  //remove callback function and return promises
 
        res.status(200).json(req.body)
    }
    else{
            res.status(200).json(["this is not a post request"])

    }
}
