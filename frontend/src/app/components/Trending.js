import React from 'react'
import Card from './Card';

const Trending = () => {
    const cards = [
        {
          date: 'March 15, 2023',
          title: '50 Essential Free Resources for Graphic Designers 2023',
          description: 'The past few years have definitely seen a lot of creatives tightening the purse strings. Whilst there are definitely some areas...',
          tags: ['Resources', 'Graphic Design'],
          imageUrl: 'https://webneel.com/wnet/file/images/6-17/4-son-tinh-editorial-digital-illustration-by-wazza-pink.jpg', // Replace with your image path
        },
        {
          date: 'March 23, 2023',
          title: 'Best Illustration Blogs You Have To Read (2023 Update)',
          description: 'One of the best things about graphic design is that it never stands still for a moment. But that does mean that keeping up with the latest trends, techniques...',
          tags: ['News', 'Illustrations'],
          imageUrl: 'https://cdn.dribbble.com/userupload/10694801/file/original-87ccf51c896ba98b4dc01b5eafced47a.png?resize=752x', // Replace with your image path
        },
        {
          date: 'December 15, 2022',
          title: "In Love: Super Dope encourages women to 'shoot their shot' in pioneering new animation",
          description: 'The past few years have definitely seen a lot of creatives tightening the purse strings. Whilst there are definitely some areas...',
          tags: ['Inspiration', 'Animation'],
          imageUrl: 'https://mir-s3-cdn-cf.behance.net/project_modules/1400/a7be69107608459.5faaecf52619a.png', // Replace with your image path
        },
        {
          date: 'March 23, 2023',
          title: 'Best Product Design You Have To See (2023 Update)',
          description: 'One of the best things about graphic design is that it never stands still for a moment. But that does mean that keeping up with the latest trends, techniques...',
          tags: ['Inspiration', 'Advertising'],
          imageUrl: 'https://cdn.dribbble.com/users/1731254/screenshots/14175675/ethnic_beauty_ukraine_illustration_tubikarts_2x.png', // Replace with your image path
        },
      ];
  return (
   <>
  <div className='bg-yellow-300 flex items-center flex-col'>
 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-4 max-w-screen-xl ml-8 mt-20">
      {cards.map((card, index) => (
        <Card key={index} {...card} />
      ))}
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-4 max-w-screen-xl ml-8">
      {cards.map((card, index) => (
        <Card key={index} {...card} />
      ))}
    </div>
    </div>
   </>
  )
}

export default Trending