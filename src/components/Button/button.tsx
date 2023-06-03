import { FC, memo } from "react"
import type { Props } from "./buttonTypes";
import { CustomButton } from "./buttonStyles";


const Button: FC<Props> = ({ children }) => {
    return (
        <CustomButton>{children}</CustomButton>
    )
};

export default memo(Button)