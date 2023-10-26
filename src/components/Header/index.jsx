import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";

const Header = () => {
    const { isLogged, setIsLogged } = useContext(AuthContext);
    const navigate = useNavigate();
    return (
        <header>
            <nav>
                <ul>
                    <li>
                        <Link to={'/'}>Home</Link>
                    </li>
                    <li>
                        <Link to={'/produtos'}>Produtos</Link>
                    </li>
                    <li>
                        <Link to={'/categorias'}>Categorias</Link>
                    </li>
                    {
                        isLogged && (
                            <li>
                                <Link to={'/meus-pedidos'}>Meus Pedidos</Link>
                            </li>
                        )
                    }
                    <li>
                        <button
                            onClick={() => {
                                setIsLogged(!isLogged);
                                navigate('/');
                            }}
                        >Logar</button>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;