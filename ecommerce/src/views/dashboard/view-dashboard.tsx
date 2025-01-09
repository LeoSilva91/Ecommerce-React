import AppContainer from "../../components/app-container/app-container";
import AppFooter from "../../components/app-footer/app-footer";
import AppHeader from "../../components/app-header/app-header";
import { Outlet } from "react-router";

const ViewDashboard: React.FC = () => {
    return(
        <div>
            <AppHeader />
            <AppContainer>
                <Outlet />
            </AppContainer>
            <AppFooter />
        </div>
    )
}

export default ViewDashboard;