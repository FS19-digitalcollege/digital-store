import { Outlet } from "react-router-dom";
import DashboardHeader from "../../components/DashboardHeader";

const DashBoardLayout = () => {
    return (
        <div className={'flex'}>
            <DashboardHeader />
            <Outlet />
        </div>
    );
}

export default DashBoardLayout;