import React from 'react'

const Home = () => {
  return (
    <div>
    <main>
    <div className="flex">
            <p className="text-white text-xl mt-[50px] font-bold text-center flex-1">Organizations</p>
        </div>
        <div className="flex" alt="middlesections">
            <div className="drop-shadow-lg flex-auto mt-20 m-[50px]  ">
            <div className="grid grid-cols-3 gap-4">
                <div className='h-96 rounded-md  border-slate-400 px-9 py-10 bg-white'>Organization 1</div>
                <div className='h-96 rounded-md px-9 py-10 bg-white'>Organization 1</div>
                <div className='rounded-md px-9 py-10 bg-white'>Organization 1</div>
                <div className='rounded-md px-9 py-10 bg-white'>Organization 1</div>
                <div className='h-96 rounded-md px-9 py-10 bg-white'>Organization 1</div>
                <div className='rounded-md px-9 py-10 bg-white'>Organization 1</div>
                <div className='h-96 rounded-md px-9 py-10 bg-white'>Organization 1</div>
                <div className='rounded-md px-9 py-10 bg-white'>Organization 1</div>
                <div className='rounded-md px-9 py-10 bg-white'>Organization 1</div>
                
        </div> 
            </div>
        </div>
        <section className="bg-gray-900 ">
            <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
                <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-white">Contact Us</h2>
                <p className="mb-8 lg:mb-16 font-light text-center text-gray-400 sm:text-xl">If you have any questions or would like your organization featured.</p>
                <form action="#" className="space-y-8">
                    <div>
                        <label for="email" className="block mb-2 text-sm font-medium text-gray-300">Your email</label>
                        <input type="email" id="email" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="name@flowbite.com" required/>
                    </div>
                    <div>
                        <label for="subject" className="block mb-2 text-sm font-medium text-gray-300">Subject</label>
                        <input type="text" id="subject" className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Let us know how we can help you" required/>
                    </div>
                    <div className="sm:col-span-2">
                        <label for="message" className="block mb-2 text-sm font-medium text-gray-400">Your message</label>
                        <textarea id="message" rows="6" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Leave a comment..."></textarea>
                    </div>
                    <button type="submit" className="py-3 px-5 text-sm font-medium text-center text-black rounded-lg bg-slate-300 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none  bg-primary-600 hover:bg-primary-700 focus:ring-primary-800">Send message</button>
                </form>
            </div>
          </section>
          
        
    </main>   
    </div>
  )
}

export default Home