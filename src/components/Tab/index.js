import { Tabs } from '@mantine/core';
import { IconPhoto, IconSalad, IconToolsKitchen2, IconPlus } from '@tabler/icons-react';
import Tabler from '../Tabler';


export default function Tab() {
  return (
    <Tabs defaultValue="gallery">
      <Tabs.List>
        <Tabs.Tab value="gallery" icon={<IconToolsKitchen2 size="0.8rem" />}>Breakfast</Tabs.Tab>
        <Tabs.Tab value="messages" icon={<IconSalad size="0.8rem" />}>Lunch & Dinner</Tabs.Tab>
      </Tabs.List>

      <Tabs.Panel value="gallery" pt="xs">

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

      <Tabs.Panel value="messages" pt="xs">        
        
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

    </Tabs>
  );
}