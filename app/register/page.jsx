import React from 'react';

const Register = () => {
  return (
    <div className="min-h-screen py-40" style={{ backgroundImage: 'linear-gradient(115deg, #9F7AEA, #FEE2FE)' }}>
      <div className="container mx-auto">
        {/* wrapper */}
        <div className="flex flex-col lg:flex-row w-10/12 lg:w-8/12 bg-white rounded-xl mx-auto shadow-lg overflow-hidden">
          {/* left */}
          <div
            className="w-full lg:w-1/2 flex flex-col items-center justify-center p-12 bg-no-repeat bg-center bg-cover"
            style={{ backgroundImage: "url('https://jmdevelopments77.files.wordpress.com/2020/11/pexels-photo-572897.jpeg')" }}
          >
            <h1 className="text-white text-3xl font-bold mb-3">Welcome</h1>
            <div>
              <p className="text-white">
              
                <a href="#" className="text-purple-500 font-semibold">Learn more</a>
              </p>
            </div>
          </div>
          {/* right */}
          <div className="w-full lg:w-1/2 py-16 px-12">
            <h2 className="text-3xl mb-4">Register</h2>
            <p className="mb-4">Create your account. It’s free and only take a minute</p>
            <form action="#">
              <div className="grid grid-cols-2 gap-5">
                <input type="text" className="border border-gray-400 py-1 px-2" placeholder="First Name" />
                <input type="text" className="border border-gray-400 py-1 px-2" placeholder="Last Name" />
              </div>
              <div className="mt-5">
                <input type="email" placeholder="Email" className="border border-gray-400 py-1 px-2 w-full" />
              </div>
              <div className="mt-5">
                <input type="password" placeholder="Password" className="border border-gray-400 py-1 px-2 w-full" />
              </div>
              <div className="mt-5">
                <input type="password" placeholder="Confirm Password" className="border border-gray-400 py-1 px-2 w-full" />
              </div>
              <div className="mt-5">
                <input type="checkbox" className="border border-gray-400" />
                <span>
                  I accept the <a href="#" className="text-purple-500 font-semibold">Terms of Use</a> & <a href="#" className="text-purple-500 font-semibold">Privacy Policy</a>
                </span>
              </div>
              <div className="mt-5">
                <button type="submit" className="bg-purple-500 w-full text-center text-white py-3">Register Now</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
