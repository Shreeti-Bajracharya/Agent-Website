import React from 'react'
import assets from '../assets/assets'
import Title from './title'
import ServiceCard from './ServiceCard'
const Services = () => {

    const servicesData=[
        {
            title:'Software Development',
            description:'Custom-built software tailored to your business needs — secure, efficient, and scalable.',
            icon:assets.ads_icon
        },
        {
            title:'Web Design & Development',
            description:'We create stunning, user-friendly websites that blend creativity with functionality.',
            icon:assets.marketing_icon
        },
        {
            title:'Mobile App Solutions',
            description:'From Android to iOS, we develop apps that deliver performance and exceptional user experiences.',
            icon:assets.content_icon
        },
        {
            title:'IT Consulting & Security',
            description:'Future-proof your business with our strategic IT guidance and cybersecurity expertise.',
            icon:assets.social_icon
        },
    ]
  return (
    <div id='services' className='relative flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl-px-40 pt-30 text-gray-700 dark:text-white'>
        <img src={assets.bgImage2} className='absolute -top-110 -left-70 -z-1 dark:hidden' />

        <Title title='How can we help?' desc='From strategy to execution we craft digital solutions that move your business forward.'/>

        <div className='flex flex-col md:grid grid-cols-2'>
            {servicesData.map((service,index)=>(
                <ServiceCard key={index} service={service} index={index}/>
            ))}
        </div>
      
    </div>
  )
}

export default Services
