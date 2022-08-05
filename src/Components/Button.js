import React from "react";
import { string, func, bool } from 'prop-types';
import {ButtonStyled, ButtonWrapperStyled, ButtonDisabled} from './styles/component-styled-constants';

const Button = ({label, onClick, disabled = false}) => {
    const ButtonWrapper = disabled ? ButtonDisabled : ButtonWrapperStyled;
    return (<ButtonWrapper>
    <ButtonStyled onClick={onClick} disabled={disabled}>
        {label}
    </ButtonStyled>
    </ButtonWrapper>)
}
Button.propTypes = {
    label: string.isRequired,
    onClick: func.isRequired,
    disabled: bool
};
export default Button;