
import { useAppDispatch, useAppSelector } from 'redux/hooks'
import {changeCount} from 'redux/countReducer' 


const Counter = () => {

 
const count = useAppSelector((state) => state.counterino)
const dispatch = useAppDispatch()

  return (
    <>
    {Object.keys(count).map((num) => (
<button onClick = {() => dispatch(changeCount(num))}>change count({count[Number(num)]} )</button> 

    ))}


    </>
  )
}

export default Counter