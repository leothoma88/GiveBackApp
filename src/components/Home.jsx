import React from 'react'

const Home = () => {
  return (
    <div>
    <main>
        <div className="flex" alt="middlesections">
            <div className="font-bold px-8 drop-shadow-lg flex-1 h-96 mt-20 ml-[50px] w-1/2 h-[30rem] bg-white"><br/><br/><br/><br/>This is the stuff that people came to see <br/><br/><br/> You know the stuff that we talk about. We do the things that people are scared to do.<br/><br/> We put our lifes on the line everyday.<br/><br/>We save puppies, cows, birds,anything you can think of.<br/><br/>We believe in the world and so should to<br/><br/></div>
            <div className="drop-shadow-lg flex-1 h-96 mt-20 m-[50px] w-1/2 h-[30rem] ">
            <div className="my-3 grid grid-cols-2 gap-4">
                <div className='rounded-md border-slate-400 px-9 py-10 bg-white'>Organization 1</div>
                <div className='rounded-md px-9 py-10 bg-white'>Organization 1</div>
                <div className='rounded-md px-9 py-10 bg-white'>Organization 1</div>
                <div className='rounded-md px-9 py-10 bg-white'>Organization 1</div>
                <div className='rounded-md px-9 py-10 bg-white'>Organization 1</div>
                <div className='rounded-md px-9 py-10 bg-white'>Organization 1</div>
                <div className='rounded-md px-9 py-10 bg-white'>Organization 1</div>
                <div className='rounded-md px-9 py-10 bg-white'>Organization 1</div>
                
        </div> 
            </div>
        </div> 
        <div className="flex">
            <p className="text-xl font-bold text-center flex-1">Summary</p>
            <p className="text-xl font-bold text-center flex-1">Organizations</p>
        </div>
        <section className=" dark:bg-gray-900">
            <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
                <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">Contact Us</h2>
                <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">If you have any questions or would like your organization featured.</p>
                <form action="#" className="space-y-8">
                    <div>
                        <label for="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your email</label>
                        <input type="email" id="email" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="name@flowbite.com" required/>
                    </div>
                    <div>
                        <label for="subject" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Subject</label>
                        <input type="text" id="subject" className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Let us know how we can help you" required/>
                    </div>
                    <div className="sm:col-span-2">
                        <label for="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Your message</label>
                        <textarea id="message" rows="6" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Leave a comment..."></textarea>
                    </div>
                    <button type="submit" className="py-3 px-5 text-sm font-medium text-center text-black rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Send message</button>
                </form>
            </div>
          </section>
          
        
    </main>   
    </div>
  )
}

export default Home