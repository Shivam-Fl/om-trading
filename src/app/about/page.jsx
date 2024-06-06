import Image from 'next/image';
import React from 'react'

const content = [
    {
      title: 'Our Mission',
      description: 'To exceed our customers\' expectations with innovative and bespoke Trading and Supply Chain Management services for their operations and supply chain. Globally. 24/7.',
      image:"/ourMission.jpg"
    },
    {
      title: 'Our Vision',
      description: 'To be the world\'s most trusted partner for international trading and supply chain solutions.',
      image: '/ourVision.jpg'
    },
    {
      title: 'Our Customer Promise',
      description: 'As your trusted partner, we deliver Om Trading Corporation\'s Total Supply Chain expertise consistently with precision, pace, and passion - enabling you to power ahead efficiently.',
      image: '/customerPromise.jpg'
    }
  ];
  
export default function page() {
  return (
    <div className='font-[NeoSansPro-Regular]'>
       <header className="bg-blue-600 h-52 text-white p-6">
        <div className="container flex max-sm:justify-center max-sm:items-center text-center sm:h-80 mx-10 relative">
            <h1 className="font-extralight mb-4 text-start text-4xl xl:text-7xl pt-14 sm:pt-24 font-[NeoSansPro-Medium] ">About us</h1>
            <p className="text-sm sm:text-xl  text-gray-800 max-sm:max-w-[15rem] max-lg:max-w-[20rem] lg:max-w-lg bg-gray-200 px-4 py-5 xl:px-10 lg:py-12 absolute max-sm:-bottom-20  bottom-20 sm:-right-14 md:right-8 lg:right-32  font-[NeoSansPro-Light] font-bold">Innovative solutions for international trading and supply chain management.</p>
        </div>
    </header>

    <main className=" container mx-auto my-10 p-6 bg-white shadow-md">
        <section className='xl:max-w-[55%] text-justify lg:text-lg font-[NeoSansPro-Regular]'>
           
            <p>Welcome to Om Trading Corporation. We offer innovative solutions that encompass every aspect of international trading; through efficient supply chain management and high-quality procurement services to our customers around the world. We go beyond Trading and Supply Chain Management: we are a Total Supply Chain Solution Provider to industries worldwide.</p>
            <p className="mt-4">Although our history goes back over 25 years, we're continually innovating and evolving to reduce risk for consumers, brands, and organizations in every sector around the world.</p>
            
        </section>

        <section className="mt-10 p-4 sm:p-10 -container rounded-3xl shadow-lg bg-blue-50 font-[NeoSansPro-Regular]">
            <h2 className="text-3xl text-center font-bold mb-4">Making a Positive Impact on the World</h2>
            <p className='mx-auto max-w-4xl text-center xl:text-lg'>Everything we do is designed to have a positive impact on our clients, people, and our planet. We are determined to be the agents of positive change around the world and have a strong company culture driven by our purpose, mission, vision, values, and customer promise.</p>

            <section className="mt-10 bg-blue-500 rounded-2xl shadow-sm p-4">
            <h3 className="text-xl md:text-2xl text-center font-semibold mb-2">Our Purpose:<span className='font-normal'> Bringing quality, efficiency, and sustainability to international trading.</span> </h3>
            
        </section>
        <div className="container mx-auto flex flex-wrap justify-center items-center gap-14  mt-14">
        {content.map((item, index) => (
              <div key={index} className="bg-white max-w-80 rounded-lg shadow-md">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover"
                    
                  />
                  <div className="absolute inset-0 bg-brown opacity-50"></div>
                </div>
                <div className="px-6 py-4">
                  <h2 className="text-2xl font-bold mt-4">{item.title}</h2>
                  <p className="text-gray-600 mt-2">{item.description}</p>
                </div>
              </div>
            ))}
        </div>
        
        </section>
        
    </main>

    {/* <footer className="bg-blue-600 text-white p-6 mt-10">
        <div className="container mx-auto text-center">
            <p>&copy; 2024 Om Trading Corporation. All rights reserved.</p>
        </div>
    </footer> */}


    </div>
  )
}
