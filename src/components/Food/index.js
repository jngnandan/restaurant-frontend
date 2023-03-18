
import { useNavigate } from 'react-router-dom';


const Food = (props) => {
    const {data, foodOnclick} = props

    const navigate = useNavigate()
    const handleEvent = (event) => {
      foodOnclick(event.currentTarget.id)
      navigate(`/food/${event.currentTarget.id}`)
    }

    return(
  <div>
    <p>Food</p>
  </div>
  )
}

export default Food
