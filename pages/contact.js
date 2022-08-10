import React, { useState } from 'react'
import style from '../styles/Blog.module.css'

const Contact = () => {

    const [name,setName] = useState('')
    const [email,setEmail] = useState('')
    const [phone,setPhone] = useState('')
    const [desc,setDesc] = useState('')
 
    const data = {name, email, phone, desc}

    const handleSubmit = (e)=>{
          e.preventDefault()

          fetch('http://localhost:3000/api/contactpost',{
            method : 'POST',
            headers:{
                'Content-Type':'Application/json',
            },
            // body: JSON.stringify([name,email,phone,desc])
            body: JSON.stringify(data)

          })
    }
    const handleChange = (e)=>{
         if(e.target.name === 'name'){
            setName(e.target.value)
         }
        else if(e.target.name === 'email'){
            setEmail(e.target.value)
         }
        else if(e.target.name === 'phone'){
            setPhone(e.target.value)
         }
        else if(e.target.name === 'desc'){
            setDesc(e.target.value)
         }
        
    }
    
    
  return (
    <div>
      <form onSubmit={handleSubmit} className={style.container}>
        <div className={style.mb3}>
            <label htmlFor="name">Name</label>
            <input type="text" className="from-control"  name='name' id="name" value={name} onChange={handleChange} />
        </div>
        <div className={style.mb3}>
            <label htmlFor="email">Email</label>
            <input type="email" className="from-control" name='email' id="email" value={email} onChange={handleChange} />
        </div>
        <div className={style.mb3}>
            <label htmlFor="phone">Phone No</label>
            <input type="phone" className="from-control" name='phone' id="phone" value={phone} onChange={handleChange} />
        </div>
        <div className={style.mb3}>
            <label htmlFor="desc">Elaborate Your Concern</label>
            <input type="text" className="from-control" name='desc' id="desc" value={desc} onChange={handleChange} />
        </div>
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default Contact
