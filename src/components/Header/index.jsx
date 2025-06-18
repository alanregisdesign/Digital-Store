import { Link } from "react-router-dom";
import { useOnboarding } from "../../contexts/OnboardingContext";
import './index.css';

const Header = () => {
    const { startOnboarding } = useOnboarding();

    return(
        <>
            <header>
                    <div className="logo">LOGO</div>
                    <div className="buscar">
                        <input type="text" placeholder="Pesquisar produto"/>
                    </div>
                    <div className="acoes">
                        <button 
                            className="tour-btn"
                            onClick={startOnboarding}
                            title="Iniciar tour da plataforma"
                        >
                            Tour
                        </button>
                        <Link to="/cadastro">Cadastre-se</Link>
                        <Link to="/login">Entrar</Link>
                        <h6>Carrinho</h6>
                    </div>
                    <nav>
                        <ul>
                            <li><Link to="/">Início</Link></li>
                            <li><Link to="produtos">Produtos</Link></li>
                            <li><Link to="/categorias">Categorias</Link></li>
                            <li><Link to="/meus-pedidos">Meus Pedidos</Link></li>
                        </ul>
                    </nav>
            </header>
        </>
    )
};

export default Header;
