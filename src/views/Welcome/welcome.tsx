import { FC, memo } from "react";
import { WelcomeDiv, WelcomeGif } from "./welcomeStyles";
import Header from "../../components/Header/header";
import Footer from "../../components/Footer/footer";
import { DashboardContainer } from "../Dashboard/dashboardStyles";

const Welcome: FC = () => {

    return (
        <DashboardContainer>
            {/* <VideoBackground videoSrc="/earth.mp4" /> */}
            <Header />

            <WelcomeDiv>

                <WelcomeGif>
                    <h1>Bienvenido al maravilloso viaje por la APOD</h1>
                    <img src="https://usagif.com/wp-content/uploads/gif/outerspace-58.gif" title="Universe"></img>
                </WelcomeGif>
            </WelcomeDiv>

            <Footer />
        </DashboardContainer>
    )
}

export default memo(Welcome)

