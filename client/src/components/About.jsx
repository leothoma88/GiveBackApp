import React from 'react'
import placeholder from '../assets/ph.jpg'
const About = () => {
  return (
    <div className="text-white">
        <div className=' mx-auto text-center flex flex-col justify-center'>
        <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-6'> About </h1>
        <div className="w-full h-screen bg-cool-gray-900 py-16 px-4">
            <div className='bg-[#3E4C59] max-w-[1240px] mx-auto grid md:grid-cols-2 flex justify-center'>
                <h4 className='font-bold p-2 text-'> Providing an opportunity to make a change. </h4>
                <p className='py-4'> GiveBack allows the ease of access to find their favorite charities and donate to them. </p>
            </div> 
            <div>
                <h4> Discover organizations relevant to what you're passionate about</h4>
                <p> Browse through charities and organizations. Filter results to cater to your interests and find exactly what you're looking for.</p>
            </div>

            <h2 className="'md:text-7xl sm:text-6xl text-4xl font-bold md:py-6'">Meet the Team</h2>


            <div className="flex container mt-10 py-16 px-4">
            <div className="flex grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="relative justify-center">
                    <img className="box-border rounded-full w-25 h-25" src={placeholder} alt="Image" />
                    <br/>
                    <div className="p-6 justify-center">
                    <h5 text-xl font-medium mb-2> Kianna Reid</h5>
                    </div>
                </div>
                <div className="justify-center">
                <img className="rounded-full lg:w-25 lg:h-25 " src={placeholder} alt="Image" />
                    <br/>
                    <div className="p-6">
                    <h5 text-xl font-medium mb-2> Cristina Yunes</h5>
                    </div>
                </div>
                <div className="relative justify-center">
                <img className="rounded-full w-25 h-25" src={placeholder} alt="Image" />
                    <br/>
                    <div className="p-6">
                    <h5 text-xl font-medium mb-2> Leo Thomas</h5>
                    </div>
                </div>
                <div className="relative justify-center">
                <img className="rounded-full w-25 h-25" src={placeholder} alt="Image" />
                    <br/>
                    <div className="p-6">
                    <h5 text-xl font-medium mb-2> Foster Thomas</h5>
                    </div>
                </div>
            </div>
            </div>
        </div>    
        </div>
    </div>
  )
}
{/* <img className="rounded-full w-16 h-16" src={placeholder} alt="Image" /> */}
export default About;
