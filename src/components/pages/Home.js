import { useLocation } from 'react-router-dom';

import NavigationComponent from "../NavigationComponent";
const Home = () => {
    let { state } = useLocation();
    return (
        <>
            <h1>Welcome Home! {state?.some}</h1>
            <NavigationComponent />
        </>
    );
}

export default Home;