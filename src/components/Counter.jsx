import {useDispatch, useSelector} from "react-redux";
import {increment, decrement} from "../redux/counter/counterSlice";

const Counter =()=>{

    const count = useSelector(state => state.counter.value);
    const dispatch = useDispatch();

    const handleIncrease = () =>{
        dispatch(increment())
    }

    const handleDecrease = () =>{
        dispatch(decrement())
    }

    return (
        <>
            <h1>Count {count} </h1>
            <button onClick={handleDecrease}>Decrease</button>
            <button onClick={handleIncrease}>Increase</button>
        </>
    )
}
export default Counter;