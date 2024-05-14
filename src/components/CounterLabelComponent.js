import { useContext, useEffect } from "react";
import { CounterContext, LoaderContext } from "./pages/App";
import LoaderComponent from "./LoaderComponent";

const CounterLabelComponent = () => {
    const { counterValue } = useContext(CounterContext);
    const { isLoading, setIsLoading } = useContext(LoaderContext);

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
        }, 1000)
    }, [])

    return (
        <LoaderComponent loading={isLoading}>
            <p>Count: {counterValue}</p>
        </LoaderComponent>
    )
}

export default CounterLabelComponent;