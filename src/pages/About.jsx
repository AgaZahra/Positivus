import MainContent from '@/components/MainContent'
import React from 'react'
import img from '@/assets/media/img/about.png'
import SingleCard from '@/components/SingleCard'

const About = () => {
  return (
    <>
    <MainContent img={img}  title={"Together for Success"} desc={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo blanditiis consequuntur similique itaque nemo quos, ratione quisquam doloribus adipisci totam, ducimus atque optio placeat temporibus voluptatibus ipsa amet, enim aut!"}/>

    <section className='card'>
      <SingleCard/>

    </section>
    
    </>
  )
}

export default About