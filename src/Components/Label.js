import React from "react";
import { string } from 'prop-types';
import {FlexContainerStyled,LabelStyled,SubLabelStyled} from './styles/component-styled-constants';

const Label = ({label, subLabel=''}) => {
    return <>
        <FlexContainerStyled>
        <LabelStyled>{label}</LabelStyled>
        {subLabel && <SubLabelStyled>{subLabel}</SubLabelStyled>}
        </FlexContainerStyled>
    </>
}

Label.propTypes = {
    label: string.isRequired,
    subLabel: string
  };

export default Label;