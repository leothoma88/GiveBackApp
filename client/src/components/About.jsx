import React from "react";
import Leo from "../assets/mern-about-leo.jpg";
import Kianna from "../assets/mern-about-kianna.jpg";
import Cristina from "../assets/mern-about-cristina.jpg";
import Foster from "../assets/mern-about-foster.jpg";
import {AiFillGithub} from 'react-icons/ai'
import {AiFillLinkedin} from 'react-icons/ai'


const About = () => {
  return (
    <div className="flex flex-col justify-center w-full h-full pt-10 bg-[#df3e56]">
      <div className="w-full mx-auto text-center text-[#FCFFE7] bg-[#df3e56]">

        <h1 className="text-5xl md:text-5xl sm:text-4xl font-bold p-6">
          What is The GiveBack App?
        </h1>
        <p className="text-lg p-8">
          At GiveBack we make the connection for you to donate to what your
          heart desires in an easy way by giving you a secure and easy access to
          your favorite charities and non-profits. <br />
          Simply browse through hundreds of charities and organizations, find
          exactly what you're looking for, save it to your profile and donate to
          it as many times as you wish!.
        </p>

        <div className="bg-[#FCFFE7] text-[#191f3d] pt-4 pb-6 w-full">

        <h2 className="text-4xl md:text-4xl sm:text-3xl font-bold mt-16 mb-8">
          Meet the Givers behind it all
        </h2>

        <div className="grid grid-cols-1 place-content-center md:grid-cols-2 lg:grid-cols-4 gap-2">
          
          <div className="mx-auto p-4">
            <img
              className="box-border rounded-full w-64 h-64"
              src={Kianna}
              alt="Female in an orange shirt with trees behind"
            />
            <h3 className="text-2xl font-medium mb-2">Kianna Reid</h3>
            {/* Kianna's Social Media */}
            <div className="flex justify-center w-full gap-4 text-4xl">
                <a href="https://github.com/Kianna41" rel="noreferrer" target="_blank" className="hover:scale-110 hover:text-[#df3e56]"><AiFillGithub/></a>
                <a href="https://www.linkedin.com/in/kianna-reid-7715a3242/" rel="noreferrer" target="_blank" className="hover:scale-110 hover:text-[#df3e56]"><AiFillLinkedin/></a>
            </div>
          </div>

          <div className="mx-auto p-4">
            <img
              className="box-border rounded-full w-64 h-64"
              src={Cristina}
              alt="Female in a black shirt with nature behind"
            />
            <h3 className="text-2xl font-medium mb-2">Cristina Yunes</h3>
            {/* Cristina's Social Media */}
            <div className="flex justify-center w-full gap-4 text-4xl">
                <a href="https://github.com/Yuyitax" rel="noreferrer" target="_blank" className="hover:scale-110 hover:text-[#df3e56]"><AiFillGithub/></a>
                <a href="https://www.linkedin.com/in/cristinayunes/" rel="noreferrer" target="_blank" className="hover:scale-110 hover:text-[#df3e56]"><AiFillLinkedin/></a>
            </div>
          </div>

          <div className="mx-auto p-4">
            <img
              className="box-border rounded-full w-64 h-64"
              src={Leo}
              alt="Male in a white shirt and black vest"
            />
            <h3 className="text-2xl font-medium mb-2">Leo Thomas</h3>
            {/* Leo's Social Media */}
            <div className="flex justify-center w-full gap-4 text-4xl">
                <a href="https://github.com/leothoma88" rel="noreferrer" target="_blank" className="hover:scale-110 hover:text-[#df3e56]"><AiFillGithub/></a>
                <a href="https://www.linkedin.com/in/darrellthomas1/" rel="noreferrer" target="_blank" className="hover:scale-110 hover:text-[#df3e56]"><AiFillLinkedin/></a>
            </div>
          </div>

          <div className="mx-auto p-4">
            <img
              className="box-border rounded-full w-64 h-64"
              src={Foster}
              alt="Male in"
            />
            <h3 className="text-2xl font-medium mb-2">Foster Thomas</h3>
            {/* Foster's Social Media */}
            <div className="flex justify-center w-full gap-4 text-4xl">
                <a href="https://github.com/pfthomas" rel="noreferrer" target="_blank" className="hover:scale-110 hover:text-[#df3e56]"><AiFillGithub/></a>
                <a href="https://www.linkedin.com/in/foster-thomas-406588213/" rel="noreferrer" target="_blank" className="hover:scale-110 hover:text-[#df3e56]"><AiFillLinkedin/></a>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default About;
