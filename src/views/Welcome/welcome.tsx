import { FC, memo } from "react";
import { WelcomeDiv, WelcomeGif } from "./welcomeStyles";
import Header from "../../components/Header/header";
import Footer from "../../components/Footer/footer";
import { DashboardContainer } from "../Dashboard/dashboardStyles";

const Welcome: FC = () => {

    return (
        <WelcomeDiv>
            <Header />



            <WelcomeGif>
                <h1>Welcome to the wonderful journey through APOD</h1>
                <h3>(Astronomy Picture of the Day)</h3>
                <img src="https://usagif.com/wp-content/uploads/gif/outerspace-58.gif" title="Universe"></img>
            </WelcomeGif>


            <Footer />
        </WelcomeDiv>
    )
}

export default memo(Welcome)

