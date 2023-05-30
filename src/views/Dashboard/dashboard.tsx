import { FC, memo } from "react";
import { DashboardContainer, DashboardContent } from "./dashboardStyles";
import Header from "../../components/Header/header";


const Dashboard: FC = () => {
    return (
        <DashboardContainer>
            <Header />

            <DashboardContent>
                Esto es el DashboardContent
                {/* A la espera de que se hagan las cards, para reflejarlas en el Dashboard vídeo 1 en 20:10 minutos. */}
            </DashboardContent>

        </DashboardContainer>
    );
};


export default memo(Dashboard)