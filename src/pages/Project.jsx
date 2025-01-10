import React from 'react'

import Bsmr_image from '../assets/project_images/BSMR.jpeg'
import kdssg_image from '../assets/project_images/kdssg.jpeg'
import onmifood_image from '../assets/project_images/omnifoods.png'

import movie_app from '../assets/project_images/movie_app.jpeg'
import netflix_clone from '../assets/project_images/Netflix_clone.jpeg'
import music_player from '../assets/project_images/music_player.jpeg'

// 
import Websitehub from '../assets/project_images/websitehub.png'

import { Carousel,CarouselContent,CarouselNext,CarouselPrevious,CarouselItem } from '@/components/ui/carousel'
import Card from '@/components/Card'

const Project = () => {
    const project_data=[
        {
          id:1,
          image:Bsmr_image,
          title:'BSMR TRAVELS',
          about:'Developed the BSMR Traveling website using technologies such as HTML , CSS, and Bootstrap ',
          link:'https://bsmr.vercel.app/'
        },
        {
          id:2,
          image:kdssg_image,
          title:'KDSSG',
          about:'Developed website of KDSG Center for Excellence online training platform, employing a responsive development approach  to accommodate diverse user device',
          link:'https://kdssg.vercel.app/'
        },
        {
          id:3,
          image:onmifood_image,
          title:'OMNIFOODS',
          about:'Omnifood is a food delivery site .It is a static website.HTML5 is used to structure the site and CSS and Bootstrap is used to provide the beautiful styling . HTML , Css were used to build this site',
          link:'https://omnifoods-sooty.vercel.app/'
        }
      ]

      const ReactProject=[
        {
          id:1,
          image:movie_app,
          title:'Movie App',
          about:'Developed a Movie App using Reactjs and Tailwindcss, providing a platform to browse and filter movies. Implemented  filters to allow users to search for movies by name.',
          link:'https://movie-app-eight-swart.vercel.app/',
        },{
          id:2,
          image:netflix_clone,
          title:'Netflix Clone',
          about:'Developed the BSMR Traveling website using technologies such as HTML , CSS, and Bootstrap ',
          link:'https://netflix-clone-lime-eight-20.vercel.app/'
        },
        {
          id:3,
          image:music_player,
          title:'Music Player',
          about:"Crafted with React and styled with Tailwind CSS, my latest project is a sleek Music Player featuring a collection of favorite tunes. Users can effortlessly play, pause, and skip tracks both forward and backward, all with intuitive controls. With a minimalist design and seamless functionality.",
          link:'https://music-player-topaz-tau.vercel.app/'
        }
      ]
      const mern_projects=[
        {
          id:1,
          image: Websitehub,
          title:'Websitehub',
          about:'WebsiteHub is a platform that categorizes top websites across various domains, including education, government, and technology. Each listing provides the websites name, URL, and a brief description, facilitating easy access to valuable online resources. The platform is built using technologies such as Node.js, Express.js, and MongoDB, ensuring a robust and efficient user experience. For more details, you can visit the projects GitHub repository.',
          link:'https://websitehub.vercel.app',
        }
      ]
  return (
    <div>
     <div className='text-center py-8'>
        <h2 className='text-3xl py-4'>My Recent Works</h2>
        <p>Showcasing my latest projects and ongoing initiatives, highlighting <br/> innovation and dedication."</p>
      </div>
      <p className='text-center py-9 text-3xl'>HTML/CSS</p>
    <div className='flex justify-center'>
        <Carousel  className='w-full md:w-1/2'>
            <CarouselContent >
            {project_data.map((item)=>(
            
            <CarouselItem className='rounded-3xl border-1 border-white' key={item.id}>
           <Card item={item}/>
           </CarouselItem> 

            ))}   
            </CarouselContent>
          
            <CarouselNext className='hidden md:flex'/>
            <CarouselPrevious className='hidden md:flex'/>
            
        </Carousel>
       
      
    </div>
    {/*  */}
    <div>
     <p className='text-center py-10 text-3xl'>React Projects</p>
     <div className='flex justify-center'>
     <Carousel className='w-full md:w-1/2'>
            <CarouselContent>
            {ReactProject.map((item)=>(
            
            <CarouselItem  key={item.id}>
            <Card item={item}/>
            </CarouselItem> 

            ))}   
            </CarouselContent>
          
            <CarouselNext className='hidden md:flex' />
            <CarouselPrevious className='hidden md:flex' />
            
        </Carousel>
        </div>
    </div>
    {/*  */}
    <div>
     <p className='text-center py-10 text-3xl'>MERN/NODEJS Projects</p>
     <div className='flex justify-center'>
     <Carousel className='w-full md:w-1/2'>
            <CarouselContent>
            {mern_projects.map((item)=>(
            
            <CarouselItem  key={item.id}>
            <Card item={item}/>
            </CarouselItem> 

            ))}   
            </CarouselContent>
          
            <CarouselNext className='hidden md:flex' />
            <CarouselPrevious className='hidden md:flex' />
            
        </Carousel>
        </div>
    </div>
    
    </div>
  )
}


export default Project
