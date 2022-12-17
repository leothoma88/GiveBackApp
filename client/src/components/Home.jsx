import React from 'react';
import Cards from './Cards';
import CharitiesBuilder from './CharitiesBuilder';
// import Search from './Search'
import { useState } from 'react';
import baseCard from '../assets/basecard.jpg';

const Home = () => {
    const [charitiesToShow, setCharitiesToShow] = useState();
  return (
    <div>
    <main>
    <div className="flex bg-[#df3e56]">
        
            <h2 className="text-[#FCFFE7] text-2xl mt-[50px] font-bold text-center flex-1">Organizations</h2>
        </div>
        <div className="flex bg-[#df3e56]" alt="middlesections">
            <div className="drop-shadow-lg flex-auto mt-20 m-[50px]">      
                <CharitiesBuilder setCharitiesToShow = {setCharitiesToShow}/>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {charitiesToShow?.map((charity) => {
               return <Cards name={charity['name']} key={charity['name']}
               description={charity['description']}
               coverImageUrl={charity['coverImageUrl'] || baseCard}/>
             })}
             </div>
  
            </div>
        </div>
        <section className="bg-[#c0def1]">
            <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
                <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-[#191f3d]">Contact Us</h2>
                <p className="mb-8 lg:mb-16 font-light text-center text-[#191f3d] sm:text-xl">If you have any questions or would like your organization featured.</p>
                <form action="#" className="space-y-8">
                    <div>
                        <input label="email" type="email" id="email" className="shadow-sm bg-[#191f3d] border border-gray-600 text-gray-700 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="name@flowbite.com" required/>
                    </div>
                    <div>
                        <input label="subject" type="text" id="subject" className="block p-3 w-full text-sm text-gray-900 bg-[#191f3d] rounded-lg border border-gray-600 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Subject" required/>
                    </div>
                    <div className="sm:col-span-2">
                        
                        <textarea label="message" id="message" rows="6" className="block p-2.5 w-full text-sm text-gray-900 bg-[#191f3d] rounded-lg shadow-sm border border-gray-600 focus:ring-primary-500 focus:border-primary-500 dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Leave a comment..."></textarea>
                    </div>
                    <button type="submit" className="py-3 px-5 text-sm font-medium text-center text-[#FCFFE7] rounded-lg bg-[#df3e56] hover:bg-teal-500 hover:drop-shadow-lg  sm:w-fit focus:ring-4 focus:outline-none  bg-primary-600 hover:bg-primary-700 focus:ring-primary-800">Send message</button>
                </form>
            </div>
          </section>
          
        
    </main>   
    </div>
  )
}

export default Home