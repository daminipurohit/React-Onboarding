import React, {useState} from 'react';
import StepViewer from './StepViewer';
import ClientLogo from '../images/ClientLogo.png';
import Info from '../Components/Info';
import UserDetails from './UserDetails';
import UserWorkspace from './UserWorkspace';
import UserSetup from './UserSetup';
import OnboardCompletion from './OnboardCompletion';
import {OnboardingStyled, StepViewStyled} from './styles/container-styled-constants';



const Onboarding = () => {
const [steps] = useState([{
    key: 'screen-1',
    updateOutput,
    component: UserDetails
},
{
    key: 'screen-2',
    updateOutput,
    component:UserWorkspace
},
{
    key: 'screen-3',
    updateOutput,
    component: UserSetup
},{
    key: 'screen-4',
    updateOutput,
    component: OnboardCompletion
}
]);

const [stepsOutput, setStepsOutput] = useState([]);

const updateOutput = ({data, step}) => {
    const updatedData = [...stepsOutput];
    updatedData[step] = {...updatedData[step], data};
    console.log('User inputs received are', updatedData)
    setStepsOutput(updatedData);
}
    return(
            <OnboardingStyled> 
                <Info icon={ClientLogo} title="Eden" />
                <StepViewStyled>
                <StepViewer steps={steps} updateOutput={updateOutput} stepsOutput={stepsOutput} />
                </StepViewStyled>
            </OnboardingStyled>
            )
}
export default Onboarding;