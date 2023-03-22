import { Tabs } from '@mantine/core';
import { IconPhoto, IconSalad, IconToolsKitchen2, IconPlus, IconSparkles } from '@tabler/icons-react';
import Tabler from '../Tabler';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const tabList = [
    {
        id: 1,
        value: 'popular',
        name: '⭐ Popular'
    },
    {
        id: 2,
        value: 'burgers',
        name: '🍔 Burgers'
    },
    {
        id: 3,
        value: 'pizzas',
        name: '🍕 Pizzas'
    },
    {
        id: 4,
        value: 'lunch',
        name: '🍛 Lunch'
    },
    {
        id: 5,
        value: 'drinks',
        name: '🍹 Drinks'
    }
]

var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,

    responsive: [
        {
        breakpoint: 1024,
        settings: {
            slidesToShow: 5,
            slidesToScroll: 5,
            infinite: true,
            dots: true
          }
        },
        {
        breakpoint: 400,
        settings: {
            slidesToShow: 4,
            slidesToScroll: 4,
            initialSlide: 4
          }
        }

    ]
  };

export default function Tab() {
  return (
    <Tabs defaultValue="popular" pt="xs">
      <Tabs.List>
      <Slider className='flex flex-row' {...settings}>
        {tabList.map(eachitem => 
            <Tabs.Tab value={eachitem.value} icon='' key={eachitem.id}>{eachitem.name}</Tabs.Tab>
            )}
        </Slider>
      </Tabs.List>

      <Tabs.Panel value="popular" pt="xs">

       {/* Food Items */}
<div class="relative overflow-x-auto">
    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" class="px-6 py-3">
                    Product name
                </th>
                <th scope="col" class="px-6 py-3">
                    Price
                </th>
                <th scope="col" class="px-6 py-3">
                    Calories
                </th>
                <th scope="col" class="px-6 py-3">
                    
                </th>
     
            </tr>
        </thead>
        <tbody>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Arabic Biryani
                </th>
                <td class="px-6 py-4">
                    £20
                </td>
                <td class="px-6 py-4">
                    230kcl
                </td>
                <td class="px-4 py-4">
                <IconPlus size={20} className='text-blue-500' />
                </td>
   
            </tr>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Grill Burger
                </th>
                <td class="px-6 py-4">
                    £10
                </td>
                <td class="px-6 py-4">
                    400kcl
                </td>
                <td class="px-4 py-4">
                <IconPlus size={20} className='text-blue-500' />
                </td>

            </tr>
            <tr class="bg-white dark:bg-gray-800">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Cheese Pizza
                </th>
                <td class="px-6 py-4">
                    £15
                </td>
                <td class="px-6 py-4">
                    356kcl
                </td>
                <td class="px-4 py-4">
                <IconPlus size={20} className='text-blue-500' />
                </td>
            </tr>
        </tbody>
    </table>
</div>

      </Tabs.Panel>

      <Tabs.Panel value="burgers" pt="xs">        
        
{/* Food Items */}
<div class="relative overflow-x-auto">
    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" class="px-6 py-3">
                    Product name
                </th>
                <th scope="col" class="px-6 py-3">
                    Price
                </th>
                <th scope="col" class="px-6 py-3">
                    Calories
                </th>
                <th scope="col" class="px-6 py-3">
                    
                </th>
     
            </tr>
        </thead>
        <tbody>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Arabic Full Thika
                </th>
                <td class="px-6 py-4">
                    £30
                </td>
                <td class="px-6 py-4">
                    530kcl
                </td>
                <td class="px-4 py-4">
                <IconPlus size={20} className='text-blue-500' />
                </td>
   
            </tr>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Big Burger
                </th>
                <td class="px-6 py-4">
                    £15
                </td>
                <td class="px-6 py-4">
                    400kcl
                </td>
                <td class="px-4 py-4">
                <IconPlus size={20} className='text-blue-500' />
                </td>

            </tr>
            <tr class="bg-white dark:bg-gray-800">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Cheese Pizza
                </th>
                <td class="px-6 py-4">
                    £15
                </td>
                <td class="px-6 py-4">
                    356kcl
                </td>
                <td class="px-4 py-4">
                <IconPlus size={20} className='text-blue-500' />
                </td>

            </tr>
        </tbody>
    </table>
</div>


      </Tabs.Panel>

      <Tabs.Panel value="pizzas" pt="xs">

       {/* Food Items */}
<div class="relative overflow-x-auto">
    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" class="px-6 py-3">
                    Product name
                </th>
                <th scope="col" class="px-6 py-3">
                    Price
                </th>
                <th scope="col" class="px-6 py-3">
                    Calories
                </th>
                <th scope="col" class="px-6 py-3">
                    
                </th>
     
            </tr>
        </thead>
        <tbody>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Arabic Biryani
                </th>
                <td class="px-6 py-4">
                    £20
                </td>
                <td class="px-6 py-4">
                    230kcl
                </td>
                <td class="px-4 py-4">
                <IconPlus size={20} className='text-blue-500' />
                </td>
   
            </tr>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Grill Burger
                </th>
                <td class="px-6 py-4">
                    £10
                </td>
                <td class="px-6 py-4">
                    400kcl
                </td>
                <td class="px-4 py-4">
                <IconPlus size={20} className='text-blue-500' />
                </td>

            </tr>
            <tr class="bg-white dark:bg-gray-800">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Cheese Pizza
                </th>
                <td class="px-6 py-4">
                    £15
                </td>
                <td class="px-6 py-4">
                    356kcl
                </td>
                <td class="px-4 py-4">
                <IconPlus size={20} className='text-blue-500' />
                </td>
            </tr>
        </tbody>
    </table>
</div>

      </Tabs.Panel>

      <Tabs.Panel value="lunch" pt="xs">        
        
{/* Food Items */}
<div class="relative overflow-x-auto">
    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" class="px-6 py-3">
                    Product name
                </th>
                <th scope="col" class="px-6 py-3">
                    Price
                </th>
                <th scope="col" class="px-6 py-3">
                    Calories
                </th>
                <th scope="col" class="px-6 py-3">
                    
                </th>
     
            </tr>
        </thead>
        <tbody>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Arabic Full Thika
                </th>
                <td class="px-6 py-4">
                    £30
                </td>
                <td class="px-6 py-4">
                    530kcl
                </td>
                <td class="px-4 py-4">
                <IconPlus size={20} className='text-blue-500' />
                </td>
   
            </tr>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Big Burger
                </th>
                <td class="px-6 py-4">
                    £15
                </td>
                <td class="px-6 py-4">
                    400kcl
                </td>
                <td class="px-4 py-4">
                <IconPlus size={20} className='text-blue-500' />
                </td>

            </tr>
            <tr class="bg-white dark:bg-gray-800">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Cheese Pizza
                </th>
                <td class="px-6 py-4">
                    £15
                </td>
                <td class="px-6 py-4">
                    356kcl
                </td>
                <td class="px-4 py-4">
                <IconPlus size={20} className='text-blue-500' />
                </td>

            </tr>
        </tbody>
    </table>
</div>


      </Tabs.Panel>

      <Tabs.Panel value="drinks" pt="xs">

       {/* Food Items */}
<div class="relative overflow-x-auto">
    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" class="px-6 py-3">
                    Product name
                </th>
                <th scope="col" class="px-6 py-3">
                    Price
                </th>
                <th scope="col" class="px-6 py-3">
                    Calories
                </th>
                <th scope="col" class="px-6 py-3">
                    
                </th>
     
            </tr>
        </thead>
        <tbody>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Arabic Biryani
                </th>
                <td class="px-6 py-4">
                    £20
                </td>
                <td class="px-6 py-4">
                    230kcl
                </td>
                <td class="px-4 py-4">
                <IconPlus size={20} className='text-blue-500' />
                </td>
   
            </tr>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Grill Burger
                </th>
                <td class="px-6 py-4">
                    £10
                </td>
                <td class="px-6 py-4">
                    400kcl
                </td>
                <td class="px-4 py-4">
                <IconPlus size={20} className='text-blue-500' />
                </td>

            </tr>
            <tr class="bg-white dark:bg-gray-800">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Cheese Pizza
                </th>
                <td class="px-6 py-4">
                    £15
                </td>
                <td class="px-6 py-4">
                    356kcl
                </td>
                <td class="px-4 py-4">
                <IconPlus size={20} className='text-blue-500' />
                </td>
            </tr>
        </tbody>
    </table>
</div>

      </Tabs.Panel>

    </Tabs>
  );
}