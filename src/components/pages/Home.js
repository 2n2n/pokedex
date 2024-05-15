import { useLocation } from 'react-router-dom';

import NavigationComponent from "../NavigationComponent";
import TestComponent from '../TestComponent';
const Home = () => {
    let { state } = useLocation();
    return (
        <>
            <h1>Welcome Home! {state?.some}</h1>
            <NavigationComponent />
            <TestComponent />
        </>
    );
}

export default Home;