import { useContext } from "react";
import { CounterContext } from "./pages/App";

const ButtonComponent = () => {
    const { setCounterValue, isLoading } = useContext(CounterContext);
    const onClickHandler = () => {
        if(isLoading) {
            return;
        }
        
        setCounterValue((counterValue) => {
            return counterValue + 1;
        })
    }

    return (
        <a href="#" className="btn btn-primary" onClick={onClickHandler}>Click Me</a>
    )
}

export default ButtonComponent;