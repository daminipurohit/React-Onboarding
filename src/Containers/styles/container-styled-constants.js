import styled from 'styled-components';

const FlexContainerStyled = styled.div`
display:flex;
justify-content:center;
align-items:center;
`;

const OnboardingStyled = styled(FlexContainerStyled)`
flex-direction:column;
width: 100%;
margin-top: 3rem;
padding: 1rem;
width: 50%;
margin: 3rem 25% 0rem 25%;
`;

const StepViewStyled = styled.div`
margin-top:1rem;
`;
const UserDetailsStyled = styled(FlexContainerStyled)`
flex-direction:column;
width: 80%;
margin: 0 10%;
`;
const UserWorkspaceStyledStyled = styled.div`
max-width: 20rem;
`;
const UserSetupStyled = styled(UserDetailsStyled)``;

const OnboardCompletionStyled = styled(FlexContainerStyled)`
flex-direction:column;
width: 100%;
padding: 0 1rem;
div {
    margin-top: 1rem
}
div:nth-child(2){
    margin-top: 1.5rem;
    margin-bottom: 0.2rem;
    label {
        font-size: 1.4rem;
    }
}
div:nth-child(3){
    margin-top: 0.5rem;
    label {
        font-size: 0.7rem;
        color: #A9A9A9;
    }
}
`;

const StepViewerWrapperStyled = styled(FlexContainerStyled)`
flex-direction:column;
`;

const StepWrapperStyled = styled(StepViewerWrapperStyled)`
margin: 2rem 0px;
`;

const InputWrapperStyled = styled(FlexContainerStyled)`
align-items: flex-start;
margin:0.5rem 0;
flex-direction:column;
width:100%;
input{
border: 1px solid ${props => props.error? '#de2a2a' : 'lightgray'};
}
`;

const UrlWrapperStyled = styled(FlexContainerStyled)`
border: 1px solid lightgray;
border-radius: 0.25rem;
margin:0.5rem 0;
input{
    padding:10px;
    border:none;
    margin:0 !important;
}
input:nth-child(1){
    border-right: 1px solid lightgray;
    border-top-right-radius: 0px;
    border-bottom-right-radius: 0px;
}
input:nth-child(2){
    border-top-left-radius: 0px;
    border-bottom-left-radius: 0px;
}
`;

const ErrorStyled = styled(InputWrapperStyled)`
input{
border: 1px solid #de2a2a;
}
`;
const ErrorLabelStyled = styled.div`
color: #de2a2a;
font-size:12px;
`;
export {
    FlexContainerStyled,
    OnboardingStyled,
    StepViewStyled,
    UserDetailsStyled,
    UserWorkspaceStyledStyled,
    UserSetupStyled,
    InputWrapperStyled,
    UrlWrapperStyled,
    OnboardCompletionStyled,
    ErrorStyled,
    ErrorLabelStyled,
    StepViewerWrapperStyled,
    StepWrapperStyled
}