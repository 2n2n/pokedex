import { Link } from 'react-router-dom';
const NavigationComponent = () => {
    return (
        <ul>
            <li>
                <Link to="/" state={{ some: "value" }}>Home</Link>
            </li>
            <li>
                <Link to="/pokedex">Pokedex</Link>
            </li>
            <li>
                <Link to="/app">Application</Link>
            </li>
        </ul>
    )
}

export default NavigationComponent;