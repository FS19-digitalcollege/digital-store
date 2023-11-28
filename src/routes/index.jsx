import { BrowserRouter, Route, Routes } from "react-router-dom";
import PageLayout from "../layouts/PageLayout";
import PageHome from "../pages/PageHome";
import PageProdutos from "../pages/PageProdutos";
import PageCategorias from "../pages/PageCategorias";
import PageMeusPedidos from "../pages/PageMeusPedidos";
import PageNotFound from "../pages/PageNotFound";
import ProtectedRoute from "./ProtectedRoute";
import DashBoardLayout from "../layouts/DashboardLayout";
import Dashboard from "../pages/Dashboard";
import DashboardBrands from "../pages/DashboardBrands";

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
                <Route path={'/dashboard'} element={<DashBoardLayout />}>
                    <Route index element={<Dashboard />} />
                    <Route path={'/dashboard/brands'} element={<DashboardBrands />} />
                </Route>
                <Route path={'*'} element={<PageNotFound />} />
            </Routes>
        </BrowserRouter>
    );
}

export default Ways;