import { useEffect, useRef, useState } from "react";

/**
 * 
 * @todo
 * 1. when odd number, background color should be green
 * 2. when even number, background color should be blue
 */
const TestComponent = () => {
    const [counter, setCounter] = useState(0);
    const h1Ref = useRef();

    const onClickHandler = () => {
        setCounter((prevState) => prevState + 1)
    }

    return (
        <>  
            <h1 ref={h1Ref}>Clicks: {counter}</h1>
            <button onClick={onClickHandler}>Click Me</button>
        </>
    )
}

export default TestComponent;