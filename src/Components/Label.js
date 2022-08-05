import React from "react";
import {FlexContainerStyled,LabelStyled,SubLabelStyled} from './styles/component-styled-constants';

const Label = ({label, subLabel=''}) => {
    return <>
        <FlexContainerStyled>
        <LabelStyled>{label}</LabelStyled>
        {subLabel && <SubLabelStyled>{subLabel}</SubLabelStyled>}
        </FlexContainerStyled>
    </>
}

export default Label;