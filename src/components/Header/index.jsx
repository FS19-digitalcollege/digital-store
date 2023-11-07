import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";
import 'boxicons';
import './index.css';
import logo from "./assets/logo.png";

const Header = () => {
    const { isLogged } = useContext(AuthContext);
    const [cartOpen, setCartOpen] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    return (
        <header>
            <div className="logo">
                <Link to={'/'}>
                    <img src={logo} alt="Digital Store" />
                </Link>
            </div>
            <div className="busca">
                <input type="text" placeholder="Pesquisar produto..." />
                <box-icon name="search"></box-icon>
            </div>
            <div className="acoes">
                <Link to={'/cadastro'} className="underlined">Cadastre-se</Link>
                <Link to={'/login'} className="filled">Entrar</Link>
                <box-icon name="cart" items="0" onClick={() => setCartOpen(!cartOpen)}></box-icon>
                <div className={`cart ${cartOpen && 'active'}`}>
                    <h3>Meu Carrinho</h3>
                    <ul>
                        <li>
                            <img src="" alt="" />
                            <div className="info">
                                <h3>Tênis Nike Revolution 6 Next Nature Masculino</h3>
                                <h4>R$ 219,00 <del>R$ 219,00</del></h4>
                            </div>
                        </li>
                        <li>
                            <img src="" alt="" />
                            <div className="info">
                                <h3>Tênis Nike Revolution 6 Next Nature Masculino</h3>
                                <h4>R$ 219,00 <del>R$ 219,00</del></h4>
                            </div>
                        </li>
                    </ul>
                    <h3>Valor total: <span>R$ 219,00</span></h3>
                    <div className="acoes">
                        <Link className="underlined">Esvaziar</Link>
                        <Link className="filled">Ver Carrinho</Link>
                    </div>
                </div>
            </div>
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
                </ul>
            </nav>
        </header>
    );
}

export default Header;