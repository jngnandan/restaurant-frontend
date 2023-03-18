
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';


import { useNavigate } from 'react-router-dom';

const foodList = [
    {id: 1,
     name: 'Food 1',
     pic: 'http://loremflickr.com/1800/1800/Food',
     price: 10,
    },
    {id: 2,
        name: 'Food 2',
        pic: 'http://loremflickr.com/1800/1800/Food',
        price: 20,
    },
    {id: 3,
        name: 'Food 3',
        pic: 'http://loremflickr.com/1800/1800/Food',
        price: 15,
       },
       {id: 4,
        name: 'Food 3',
        pic: 'http://loremflickr.com/1800/1800/Food',
        price: 15,
       },
       {id: 5,
        name: 'Food 3',
        pic: 'http://loremflickr.com/1800/1800/Food',
        price: 15,
       },
       {id: 6,
        name: 'Food 3',
        pic: 'http://loremflickr.com/1800/1800/Food',
        price: 15,
       }
]

function FoodItem() {
    const [items, setItems] = useState(0)
    
    const {id} = useParams()
    let num = id

    const navigate = useNavigate();

    const foodId = foodList.find(eachitem => eachitem.id == num)
    
    console.log(foodId.name)

    {items < 0 && setItems(0)}


    return(
        foodId ?
            <div>
            <p>Food Item</p>
            </div> : null)
        
}

export default FoodItem;