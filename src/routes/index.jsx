import { BrowserRouter, Route, Routes } from "react-router-dom";
import PageLayout from "../layouts/PageLayout";
import PageHome from "../pages/PageHome";
import PageProdutos from "../pages/PageProdutos";
import PageCategorias from "../pages/PageCategorias";
import PageMeusPedidos from "../pages/PageMeusPedidos";
import PageNotFound from "../pages/PageNotFound";
import ProtectedRoute from "./ProtectedRoute";

const Ways = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={'/'} element={<PageLayout />}>
                    <Route index element={<PageHome />} />
                    <Route path={'/produtos'} element={<PageProdutos />} />
                    <Route path={'/categorias'} element={<PageCategorias />} />
                    <Route 
                        path={'/meus-pedidos'} 
                        element={
                            <ProtectedRoute>
                                <PageMeusPedidos />
                            </ProtectedRoute>
                        }
                    />
                </Route>
                <Route path={'*'} element={<PageNotFound />} />
            </Routes>
        </BrowserRouter>
    );
}

export default Ways;