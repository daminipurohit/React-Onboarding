import React from 'react';
import { Circle } from './StepProgressBar';
import {CheckmarkStemStyled, CheckmarkKickStyled, CheckmarkStyled} from './styles/component-styled-constants';

const CheckMark = ({fill = '#000', stroke='#000', height = '200px', width = '200px'}) => {
return (
<Circle id="checkmark" active height="40px" width="40px">
<CheckmarkStyled>
    <CheckmarkStemStyled />
    <CheckmarkKickStyled />
</CheckmarkStyled>
</Circle>
)}

export default CheckMark;