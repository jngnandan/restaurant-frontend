
import React, { useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import 'react-multi-carousel/lib/styles.css';
import {CardWithStats} from '../CardWithStats'

import Food from '../Food';
        
import Footer from '../Footer'
import Reviews from '../Reviews'


import { Link, useNavigate } from 'react-router-dom';
import { Hero } from '../Hero';

import { FeaturesCards } from '../FeatureCards';

const images = [
  {
    src:
      'https://images.unsplash.com/photo-1504639725597-78f6ec6b5383?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cGFwZXJzfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80',
    alt: 'Image 1',
  },
  {
    src:
      'https://images.unsplash.com/photo-1559548331-6fca8e7d7e63?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHBhcGVyc3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80',
    alt: 'Image 2',
  },
  {
    src:
      'https://images.unsplash.com/photo-1593642530411-ebd57fc37c59?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzR8fHBhcGVyc3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80',
    alt: 'Image 3',
  },
];

function Home() {

  const [linkId, setLinkId] = useState(null)

    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
    
    const foodList = [
        {id: 1,
         name: 'Food 1',
         pic: 'https://source.unsplash.com/400x400/?burger,pizza',
         price: '£10',
        },
        {id: 2,
            name: 'Food 2',
            pic: 'https://source.unsplash.com/400x400/?burger,meal',
            price: '£20',
          },
        {id: 3,
            name: 'Food 3',
            pic: 'https://source.unsplash.com/400x400/?dinner,pizza',
            price: '£30',
          },
           {id: 4,
            name: 'Food 3',
            pic: 'https://source.unsplash.com/400x400/?arabic,food',
            price: '£15',
          },
           {id: 5,
            name: 'Food 3',
            pic: 'https://source.unsplash.com/400x400/?food,breakfast',
            price: '£5',
          },
           {id: 6,
            name: 'Food 3',
            pic: 'https://source.unsplash.com/400x400/?chicken,food',
            price: '£25',
          }
    ]

    const blogList = [
      {id: 1,
       name: 'Blog 1',
       pic: 'http://loremflickr.com/1800/1800/Food',
       price: '£10',
      },
      {id: 2,
          name: 'Blog 2',
          pic: 'http://loremflickr.com/1800/1800/Food',
          price: '£15',
      },
      {id: 3,
          name: 'Blog 3',
          pic: 'http://loremflickr.com/1800/1800/Food',
          price: '£20',
         },    
  ]
  const navigate = useNavigate()

  const foodOnclick = (props) => {

    // console.log('cool ' + props)
    setLinkId(props)
    // navigate('/food/${props}')
  }

  console.log(linkId)


    return (
        <div>
        {/* <Carousel showThumbs={false} autoPlay infiniteLoop>
          {foodList.map((image, index) => (
            <div key={index}>
            <img className={classes.image} src={image.pic} alt={image.alt} />
            </div>
          ))}
        </Carousel> */}
        <Hero/>


<div className='m-6 mt-16'>
<h1 class="block text-xl font-bold text-gray-800 sm:text-2xl md:text-xl lg:text-2xl dark:text-white">Taste Arabic Food</h1>
<p class="mt-3 text-lg text-gray-800 dark:text-gray-400 mb-8">Introducing a new way for your brand to reach the creative community.</p>

  <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3'>
    {foodList.map(eachitem => (
      <Link to={`food/${eachitem.id}`}>
            <CardWithStats title={eachitem.name} pic={eachitem.pic} author={eachitem.price} comments={10} views={120}/>
      </Link>
    ))}
  </div>

  <FeaturesCards/>
  


{/* Reviews */}
<h1 class="m-6 block text-xl font-bold text-gray-800 sm:text-2xl md:text-3xl lg:text-3xl dark:text-white">Our customer reviews</h1>
<div className='grid grid-cols-2 md:grid-cols-3 gap-4'>
  <Reviews title='John' description='Arabic cuisine is known for its rich flavors and diverse ingredients. From hearty stews and grilled meats to aromatic rice dishes and savory pastries, the cuisine is a celebration of the region heritage'/>
  <Reviews title='Hether' description='Arabic cuisine is known for its rich flavors and diverse ingredients. From hearty stews and grilled meats to aromatic rice dishes and savory pastries, the cuisine is a celebration of the region heritage'/>
  <Reviews title='Pager' description='Arabic cuisine is known for its rich flavors and diverse ingredients. From hearty stews and grilled meats to aromatic rice dishes and savory pastries, the cuisine is a celebration of the region heritage'/>
  <Reviews title='Levis' description='Arabic cuisine is known for its rich flavors and diverse ingredients. From hearty stews and grilled meats to aromatic rice dishes and savory pastries, the cuisine is a celebration of the region heritage'/>
  <Reviews title='Stewar' description='Arabic cuisine is known for its rich flavors and diverse ingredients. From hearty stews and grilled meats to aromatic rice dishes and savory pastries, the cuisine is a celebration of the region heritage'/>
  <Reviews title='Xavier' description='Arabic cuisine is known for its rich flavors and diverse ingredients. From hearty stews and grilled meats to aromatic rice dishes and savory pastries, the cuisine is a celebration of the region heritage'/>

  </div>
   
</div>

             
      
        </div>
    );
}

export default Home;