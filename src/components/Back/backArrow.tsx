import { FC, memo } from "react";
import { BackButton } from "./backArrowStyles";
import { useNavigate } from "react-router-dom";

const BackArrow: FC = () => {

    const navigate = useNavigate();
    const goBack = () => {
        navigate(-1);
    }

    return (<BackButton onClick={goBack}></BackButton>)
}
export default memo(BackArrow)