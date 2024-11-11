import React from 'react'

import svg1 from '../assets/skills_icon/Vector.svg'
import svg2 from '../assets/skills_icon/CSS3.svg'
import svg3 from '../assets/skills_icon/javascript.svg'
import svg4 from '../assets/skills_icon/bootstrap.svg'
import svg5 from '../assets/skills_icon/React.svg'
import svg6 from '../assets/skills_icon/tailwind.svg'
import cap_icon from '../assets/skills_icon/cap_icon.svg'
import work_experice from '../assets/skills_icon/work_xperience.svg'
import acheivement_icon from '../assets/skills_icon/achivement-icon.svg'
import download_icon from '../assets/skills_icon/download-icon.svg'
import resume from '../assets/skills_icon/resume.pdf'


const Skills = () => {
  const skills_icons=[
    {
      id:1,icon:svg1,per:'90%'
    },
    {
      id:2,icon:svg2,per:'85%'
    },
    {
      id:3,icon:svg3,per:'80%'
    },
    {
      id:4,icon:svg4,per:'90%'
    },
    {
      id:5,icon:svg5,per:'80%'
    },
    {
      id:6,icon:svg6,per:'70%'
    },
  ]
  
  return (
    <>
    <div>
    <div className='py-10'>
      <h4 className='text-3xl text-center font-bold'>MY SKILLS</h4> 
      <p className='text-sm text-center mt-3'>Showcasing my Skills and ongoing initiatives, highlighting <br/> innovation and dedication."</p>       
    </div>
    <div className='flex gap-5 flex-col md:flex-row'>
      {skills_icons.map((item)=>(
        <div key={item.id} className='py-4 flex  flex-col px-2 border  border-light-500 rounded-3xl'>
          <img src={item.icon} alt="" className='py-2 grayscale transition-all  duration-100 hover:grayscale-0'/>
          <p className='text-center'>{item.per}</p>
        </div>
      ))}
    </div>
   
    <p className='text-3xl font-bold text-center py-20'>RESUME</p>
      <div className='grid grid-cols-1 md:grid-cols-2'>
        <div>       
           <Edu_intern/>
        </div>
        <div className='bg-[#042f2e] p-7 m-11 rounded-3xl text-white'>
         <p className='flex text-3xl justify-center'><img src={acheivement_icon} alt="" /> Acheivments</p>
          <Achivement/>
        </div>
      </div>
      <div className='flex justify-end'>
      <a href={resume} download> 
        <button className='flex justify-center gap-2 border-2 border-white px-7 py-3 rounded-xl'><img src={download_icon} alt="download" />Resume</button>
      </a>
      </div>
     </div>
    </>
  )
}
export const Edu_intern=()=>{
  const List=[
    {
      id:1,
      head:"MY EDUCATION",
      image:cap_icon,
      text:"Graduation",
      desc:"Bachelor of Computer Application -V.S University"
    },
    {
      id:2,
      head:"MY EXPERIENCE",
      image:work_experice,
      text:"Internship-W3 Technologies",
      desc:"Led the development of responsive websites,guaranteeing seamless user experiences across various devices"
    },
  ]
  return(
    <>
    {List.map((item)=>(
    <div key={item.id} className='p-10 m-10 bg-[#18181b] text-white rounded-3xl'>
      <p className='flex justify-center text-3xl font-bold'> <img src={item.image} alt="" />{item.head}</p>
      <ul   className='py-2'>
        <li className='text-2xl my-2'>{item.text}</li>
        <li className='list-none'>{item.desc}</li>
      </ul>
    </div>
    ))}
    </>
  )
}
export const Achivement=()=>{
  const List2=[
    {
      text:"Scaler Masters",
      desc:"Getting a certificate for building a E-Commerce website using React Master Class"
    },
    {
      text:"Devifesta",
      desc:"Getting a certificate for Participated in Hackathon at SkillBridge."
    },
    {
      text:"Award",
      desc:"Getting an Award for Best Team Player",
    }
  ]
  return(
   
<>
   
    
       {List2.map((item,index)=>(
     
      
      <ul key={index} className='p-6 text-white'>
        <li className='text-2xl'>{item.text}</li>
        <li className='list-none pt-2'>{item.desc}</li> 
      </ul>
     
     ))
     }
   </>
  )
}

export default Skills
