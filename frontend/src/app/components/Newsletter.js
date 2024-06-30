import Image from 'next/image';

const Newsletter = ({ imageUrl }) => {
  return (
    <div className="bg-pink-500 flex items-center justify-center py-12">
      <div className="flex items-center max-w-4xl mx-auto bg-pink-500 p-6 rounded-lg">
        <div className="w-1/2">
          <img src={imageUrl} alt="Newsletter Image" width={400} height={400} className="rounded-lg" />
        </div>
        <div className="w-1/2 pl-8">
          <h2 className="text-5xl font-bold text-black mb-4">The  Newsletter</h2>
          <p className="text-black mb-6">
            Join 40,000 creatives to enjoy a regular dose of inspiration and motivation, delivered to your inbox every Tuesday.
          </p>
          <form className="flex">
            <input
              type="email"
              placeholder="Your email address"
              className="px-4 py-2 w-full border border-gray-300 rounded-l-lg focus:outline-none"
            />
            <button
              type="submit"
              className="px-4 py-2 bg-black text-white font-semibold rounded-r-lg hover:bg-gray-800 focus:outline-none"
            >
              SUBSCRIBE
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
