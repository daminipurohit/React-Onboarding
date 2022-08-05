import React from 'react';
import { Circle } from './StepProgressBar';
import {CheckmarkStemStyled, CheckmarkKickStyled, CheckmarkStyled} from './styles/component-styled-constants';

const CheckMark = () => {
return (
<Circle id="checkmark" active height="40px" width="40px">
<CheckmarkStyled>
    <CheckmarkStemStyled />
    <CheckmarkKickStyled />
</CheckmarkStyled>
</Circle>
)}

export default CheckMark;