import React, {useState} from 'react';
import StepProgressBar from '../Components/StepProgressBar';

import  { StepViewerWrapperStyled, StepWrapperStyled,FlexContainerStyled } from './styles/container-styled-constants';

const StepViewer = ({steps, updateOutput, stepsOutput}) => {
    const [currentStep, setCurrentStep] = useState(0);

    const updateStep = (data) => {
        if(currentStep < steps.length-1)setCurrentStep(c=>c+1);
        updateOutput({data,step:currentStep})
    }

    const CurrentStepView = steps[currentStep].component;

    return <StepViewerWrapperStyled>
        <StepWrapperStyled>
            <FlexContainerStyled>
            <StepProgressBar steps={steps} activeCount={currentStep} />
            </FlexContainerStyled>
            <CurrentStepView updateStep={updateStep} stepsOutput={stepsOutput} />
        </StepWrapperStyled>
    </StepViewerWrapperStyled>
}

export default StepViewer;