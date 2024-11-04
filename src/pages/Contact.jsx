import React, { useState } from 'react'
import phone_icon from '../assets/Contact_icons/phone-icon.svg'
import email_icon from '../assets/Contact_icons/E-mail.svg'
import location_icon from '../assets/Contact_icons/location-icon.svg'
import insta_icon from '../assets/Contact_icons/Instagram.svg'
import linkedIn_icon from '../assets/Contact_icons/linkdein.svg'
import twitter_icon from '../assets/Contact_icons/Twitter.svg'
import github_icon from '../assets/Contact_icons/facebook.svg' 
import  Axios from 'axios'

const Contact = () => {
  const [name, setName] = useState("");
  const [email,setEmail]=useState("")
  const [message,setMessage]=useState("")

const handleSubmit = async (e) => {
 e.preventDefault()
  try {
    const response = await Axios.post('https://portfolio-azww.onrender.com/send-email',{name,email,message})
    alert(response.data.message)
  } catch (error) {
    console.error(error);
    alert('Error sending email.');
  }
};

  
  
  return (
   

    <>
        
        <div>
          <p className='text-center text-3xl font-bold my-12'>CONTACT </p>
          <div className='grid grid-cols-1 md:grid-cols-2'>
            <div className='flex justify-center'>
              <div className='grid grid-rows-4 gap-8'>
                <ul className='p-6 rounded-xl text-center bg-slate-700 duration-1000 hover:scale-110 '>
                  <li className='flex gap-3 text-3xl font-semibold py-3'><img src={phone_icon} alt="" />PHONE</li>
                  <li className='text-lg '><a href="tel:+919014781140">+91 9014781140</a></li>
                </ul>

                <ul className='p-6 rounded-xl text-center bg-slate-700 duration-1000 hover:scale-110'>
                  <li className='flex gap-3 text-3xl font-semibold py-3'><img src={email_icon} alt="" />EMAIL</li>
                  <li><a href="mailto:vinaykumardag1gmail.com">vinaykumardag1@gmail.com</a></li>
                </ul>
                <ul className='p-6 rounded-xl bg-slate-700 duration-1000 hover:scale-110'>
                  <li className='flex gap-3 text-3xl font-semibold py-3'><img src={location_icon} alt="" />ADDRESS</li>
                  <li  className='text-sm'>Dhanalakshmipuram,Nellore,<br/>Andhrapradesh.</li>
                </ul>
                <ul className='p-6 flex items-end gap-10 '>
                  <li><a href="https://www.instagram.com/daggupati_vinay"><img src={insta_icon} alt="" /></a></li>
                  <li><a href="https://www.linkedin.com/in/vinay-kumar-daggupati-b3141224b/"><img src={linkedIn_icon} alt="" /></a></li>
                  <li><a href="https://twitter.com/vinay_daggupati"><img src={twitter_icon} alt="" /></a></li>
                  <li><a href="https://github.com/vinaykumardag1/"><img src={github_icon} alt="" /></a></li>
                </ul>
              </div>
            </div>
            <div  className=''>
              <p className='text-center text-3xl '>LETS WORK TOGETHER</p>
              <p className='text-center py-4'>I Develop code beautifully  simple things and i love what i do just <br/>simple like that</p>
              <form onSubmit={handleSubmit} className='flex flex-col gap-5'>
                <div className='flex justify-center '>
                  <input type="text" placeholder='Name' className='bg-black border border-white-500 rounded-lg p-2 w-2/3' 
                  name="name" 
                  onChange={(e)=>setName(e.target.value)} 
                  required/>
                </div>
                <div  className='flex justify-center'>
                <input type="email" placeholder='email'  className='bg-black border border-white-500 rounded-lg p-2 w-2/3'
                 onChange={(e)=>setEmail(e.target.value)}
                 required/>
                </div>
                <div  className='flex justify-center'>
                  <textarea placeholder='message'  className='text-white bg-black border border-white-500 rounded-lg p-2 w-2/3 h-40 md:h-80' 
                  onChange={(e)=>setMessage(e.target.value)}
                  required />
                </div>
               <div className='w-full md:w-1/2 flex justify-center'>
                <button onClick={handleSubmit} type='Submit' className='bg-blue-500 w-40 border-none rounded-xl py-3  md:ml-6'
                >Submit</button>
             </div>
              </form>

            </div>
          </div>
        </div>
    </>
  )
}

export default Contact
