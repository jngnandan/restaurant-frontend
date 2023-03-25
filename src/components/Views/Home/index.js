import React, { useEffect, useState, useMemo } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import 'react-multi-carousel/lib/styles.css';
import {CardWithStats} from '../../CardWithStats'
import CardsCarousel from '../../CardsCarousel'
// import Cookies from 'js-cookie'
import { useCookies } from 'react-cookie';
import { withCookies } from 'react-cookie';


import Food from '../../Food';
        
import Footer from '../../Footer'
import Reviews from '../../Reviews'


import { Link, useNavigate } from 'react-router-dom';
import { Hero } from '../../Hero';

import { FeaturesCards } from '../../FeatureCards';
import { Button } from '@mantine/core';

import { Text, Title } from '@mantine/core';
import { Cookie } from '@mui/icons-material';


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
{
 id: 1,
 name: 'Blog 1',
 pic: 'http://loremflickr.com/1800/1800/Food',
 price: '£10',
},

{
  id: 2,
  name: 'Blog 2',
  pic: 'http://loremflickr.com/1800/1800/Food',
  price: '£15',
},

{
    id: 3,
    name: 'Blog 3',
    pic: 'http://loremflickr.com/1800/1800/Food',
    price: '£20',
  },    
]

const sortOptions = [
  {
    optionId: 'PRICE_HIGH',
    displayText: 'Price (High-Low)', 
  },
  {
    optionId: 'PRICE_LOW',
    displayText: 'Price (Low-High)', 
  },

]

const apiStatusContraints = [
  {
    initial: 'INITIAL',
    success: 'SUCCESS',
    failure: 'FAILURE',
    inProgress: 'IN_PROGRESS'
  }
]

function Home() {
  const [cookies] = useCookies(['jwt_token']);
  // const Cookie = Cookies.get()

  // console.log(cookies.jwt_token.jwt_token); // outputs the value of the cookie

  const [linkId, setLinkId] = useState(null)

  const [apiStatus, setApiStatus] = useState(apiStatusContraints.initial)
  const [activeOptionId, setActiveOptionId] = useState(sortOptions[0].optionId)
  const [activeCategoryId, setActiveCategoryId] = useState()
  const [activeRatingId, setActiveRatingId] = useState()
  const [searchInput, setSearchInput] = useState()
  const navigate = useNavigate()

  const foodOnclick = (props) => {
    setLinkId(props)
    // navigate('/food/${props}')
  }

  
  const getProducts = async () => {
    const jwtToken = cookies.jwt_token.jwt_token
  
    // const url = `https://apis.ccbp.in/products?sort_by=${activeOptionId}&category=${activeCategoryId}&title_search=${searchInput}&rating=${activeRatingId}`
    
    const url = `https://apis.ccbp.in/prime-deals`

    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`, 
      },
      method: 'GET',
    }
  
    const response = await fetch(url, options)
    console.log(response)
    
    if(response.ok){
      const data = await response.json()
      console.log(data)
    }
  }
  
  useEffect(() => {
    getProducts()
  }, [])
  

// useEffect(() => {
//   const jwtToken = cookies.jwt_token.jwt_token;
//   const headers = { 'Authorization': `${jwtToken}` };
//   fetch(`https://apis.ccbp.in/products?sort_by=${activeOptionId}&category=${activeCategoryId}&title_search=${searchInput}&rating=${activeRatingId}`, { headers })
//     .then(response => response.json())
//     .then(data => console.log(data));
// }, [activeCategoryId, activeOptionId, activeRatingId, searchInput, cookies.jwt_token.jwt_token]);


  // const toke = Cookies.get('jwt_token')
  // console.log(cookies.jwt_token.jwt_token)


    return (
        <div>
        {/* <CardsCarousel/> */}
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


  <div className='flex flex-row justify-end items-end mt-3'>
    <Link to='/menu'>
    <Button variant='subtle'>View More</Button>
    </Link>
  </div>
  <FeaturesCards/>
  


{/* Reviews */}
<Title order={2}>Reviews</Title>

<Text fz="md" fw={400} c="gray" className='my-3 mb-6'>
Introducing a new way for your brand to reach the creative community
</Text>

<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
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