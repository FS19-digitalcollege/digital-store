import { BrowserRouter, Route, Routes } from "react-router-dom";
import PageLayout from "../layouts/PageLayout";
import PageHome from "../pages/PageHome";
import PageProdutos from "../pages/PageProdutos";
import PageCategorias from "../pages/PageCategorias";
import PageMeusPedidos from "../pages/PageMeusPedidos";
import PageNotFound from "../pages/PageNotFound";
import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";

const Ways = () => {
    const { isLogged } = useContext(AuthContext);
    return (
        <BrowserRouter>
            <Routes>
                <Route path={'/'} element={<PageLayout />}>
                    <Route index element={<PageHome />} />
                    <Route path={'/produtos'} element={<PageProdutos />} />
                    <Route path={'/categorias'} element={<PageCategorias />} />
                    {
                        isLogged && (
                            <Route path={'/meus-pedidos'} element={<PageMeusPedidos />} />
                        )
                    }
                </Route>
                <Route path={'*'} element={<PageNotFound />} />
            </Routes>
        </BrowserRouter>
    );
}

export default Ways;