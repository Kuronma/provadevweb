import { Link } from "react-router-dom";

const Header = (props) => {
    return (
        <header className="header">
            <h1 className="tituloHeader">{props.children}</h1>
            <nav className="linksHeader">
                <span><Link to="/">Home</Link></span>
                <span><Link to="/transacoes">Transações</Link></span>
            </nav>
        </header>
    );
};

export default Header;