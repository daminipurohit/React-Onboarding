import React from "react";
import Card from "../Components/Card";
import TickIcon from "../Components/TickIcon";
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
    <TickIcon />
    <Label label={`Congratulations, ${userDisplayName}!`} />
    <Label label="You have completed onboarding you can start using the Eden!" />
    <Button onClick={onButtonClick} label="Create Workspace" />
    </OnboardCompletionStyled>
    </Card>)
}
export default OnboardCompletion;