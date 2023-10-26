import { Link } from "react-router-dom";

const PageNotFound = () => {
    return (
        <>
            <h1>Pagina não encontrada</h1>
            <Link to={'/'}>Voltar</Link>
        </>
    );
}

export default PageNotFound;