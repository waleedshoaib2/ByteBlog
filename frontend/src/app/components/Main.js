import React from 'react';

const Main = () => {
    
  return (
    <div className='flex flex-row mx-20'>
    <div className="max-w-screen-md bg-black text-white p-8 items-center mt-8 ml-8">
      <p className="text-4xl font-bold mb-4 mt-4 leading-lose">Best Integrated Development Environment That Every Developer Needs in 2024</p>
      <p className="text-lg mb-6">If you are looking to take your coding sense to a whole new level, you need to start working on stuff you are not comfortable with...</p>
      <button className="bg-yellow-500 text-black px-8 py-2 rounded-full text-lg font-bold">Read More</button>
    </div>

    <img src = "https://mir-s3-cdn-cf.behance.net/projects/max_808/dca7a0108054513.Y3JvcCw4NjIsNjc1LDMzNSww.jpg"
    height={600}
    width={600}/>
    </div>
    
    
  );
};

export default Main;
