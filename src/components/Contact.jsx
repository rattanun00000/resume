import React from 'react';
import { FaGithub, FaFacebook, FaLinkedin, FaPhoneAlt } from 'react-icons/fa';

import { BsFillPersonLinesFill } from 'react-icons/bs';

const Contact = () => {
  return (
    <div name="contect" className="w-full h-screen bg-[#0a192f] text-gray-300">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-pink-600 ">
            Contact
          </p>
          <div className="mt-10 ml-10">
            <ul>
              <li className="w-[240px] h-[60px] flex justify-between items-center  mt-2 bg-blue-600 hover:scale-110 duration-500">
                <a
                  className="flex justify-between items-center w-full text-gray-300"
                  href="https://www.facebook.com/rattanun.rodchawang"
                >
                  <FaFacebook size={30} /> Rattanun Rodchawang
                </a>
              </li>
              <li className="w-[240px] h-[60px] flex justify-between items-center mt-2 bg-[#277BC0] hover:scale-110 duration-500">
                <a
                  className="flex justify-between items-center w-full text-gray-300"
                  href="https://www.linkedin.com/in/rattanun-rodchawang-965031249"
                >
                  <FaLinkedin size={30} />
                  Rattanun Rodchawang
                </a>
              </li>
              <li className="w-[240px] h-[60px] flex justify-between items-center mt-2 bg-[#252A34] hover:scale-110 duration-500">
                <a
                  className="flex justify-between items-center w-full text-gray-300"
                  href="https://github.com/rattanun00000"
                >
                  <FaGithub size={30} />
                  Rattanun00000
                </a>
              </li>
              <li className="w-[240px] h-[60px] flex justify-between items-center mt-2 bg-[#333333] hover:scale-110 duration-500">
                <a
                  className="flex justify-between items-center w-full text-gray-300"
                  href="/"
                >
                  <FaPhoneAlt size={25} />
                  093-1322492
                </a>
              </li>
              <li className="w-[240px] h-[60px] flex justify-between items-center mt-2 bg-[#565f69] hover:scale-110 duration-500">
                <a
                  className="flex justify-between items-center w-full text-gray-300"
                  href="https://drive.google.com/file/d/1QHJc1ZdrsnRsZQ9Ag0zBv14VvX9EzWK7/view?usp=sharing"
                >
                  <BsFillPersonLinesFill size={30} />
                  My resume
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
