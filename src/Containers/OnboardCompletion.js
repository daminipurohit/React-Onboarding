import React from "react";
import { func } from 'prop-types';

import Card from "../Components/Card";
import CheckMark from "../Components/CheckMark";
import {OnboardCompletionStyled} from './styles/container-styled-constants';
import Button from "../Components/Button";
import Label from "../Components/Label";

const OnboardCompletion = ({updateStep, stepsOutput}) => {
        const onButtonClick = () => {
        updateStep({complete: true});
    }
    const userDisplayName = stepsOutput[0]?.data?.displayName || '';
    return (<Card disableHeaders>
    <OnboardCompletionStyled>
    <CheckMark />
    <Label label={`Congratulations, ${userDisplayName}!`} />
    <Label label="You have completed onboarding you can start using the Eden!" />
    <Button onClick={onButtonClick} label="Create Workspace" />
    </OnboardCompletionStyled>
    </Card>)
}
OnboardCompletion.propTypes = {
    updateStep: func.isRequired,
  };
export default OnboardCompletion;