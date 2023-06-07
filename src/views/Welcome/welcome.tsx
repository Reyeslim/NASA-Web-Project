import { FC, memo } from "react";
import { WelcomeDiv, WelcomeGif } from "./welcomeStyles";
import Footer from "../../components/Footer/footer";
import StartJourney from "../../components/StartJourney/startJourney";


const Welcome: FC = () => {

    return (
        <WelcomeDiv>
            <WelcomeGif>
                <h1>Welcome to the wonderful journey through APOD</h1>
                <h3>(Astronomy Picture of the Day)</h3>
                <StartJourney />
                {/* <img src="https://usagif.com/wp-content/uploads/gif/outerspace-58.gif" title="Universe"></img> */}
            </WelcomeGif>
            <Footer />
        </WelcomeDiv>
    )
}

export default memo(Welcome)