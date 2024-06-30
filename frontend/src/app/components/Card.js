import Image from 'next/image';

const Card = ({ date, title, description, tags, imageUrl }) => {
  return (
    <div className="bg-black border border-gray-700 rounded-lg shadow-md overflow-hidden max-w-xs mx-auto">
      <div className="relative h-48">
             <img src={imageUrl} alt={title} width={400} height={200} className="w-full h-48 object-cover" />
      </div>
      <div className="p-4">
        <p className="text-white text-sm mb-2">{date}</p>
        <h3 className="text-lg text-white font-semibold mb-2">{title}</h3>
        <p className="text-gray-300 mb-4">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag, index) => (
            <span key={index} className="px-3 py-1 outline-blue-500  text-xs font-semibold text-gray-300  rounded-full">
              {tag}
            </span>
          ))}
        </div>
        <a href="#" className="text-white hover:underline">
          Read More →
        </a>
      </div>
    </div>
  );
};

export default Card;
