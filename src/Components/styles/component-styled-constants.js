import styled from 'styled-components';

const FlexContainerStyled = styled.div`
display:flex;
justify-content:center;
align-items:center;
`;

const CircleStyled = styled(FlexContainerStyled)`
font-size: 11px;
font-weight: 500;
height:${props => props.height? props.height: '30px'};
width:${props => props.height? props.height: '30px'};
border-radius: 50%;
color: ${props => props.active?'#fff':'#677084'};
border: ${props => props.active?'none':'1px solid lightgray'};
background-color: ${props => props.active?'#664DE5':'#fff'};
`;

const DashStyled = styled.div`
height:2px;
 width:50px;
background: ${props => props.active?'linear-gradient(to right, #664DE5 0%, #664DE5 50%, lightgray 50%, lightgray 100%)'
:props.complete?'#664DE5':'lightgray'};
`;

const InfoWrapperStyled = styled(FlexContainerStyled)`
flex-wrap: wrap;
`;

const InfoImgStyled = styled.div`
img {
    height:20px;
    width:20px;
}
`;

const InfoTitleStyled = styled.div`
margin-left:8px;
font-weight:bold;
font-size:1.5rem;
`;

const CardStyled = styled.div`
padding:1rem;
margin-top: 3rem;
min-width: 23rem;
`;
const CardHeaderStyled = styled.div`
font-size:1.5rem;
font-weight: bold;
text-align:center;
`;
const CardHeaderTrimStyled = styled(CardHeaderStyled)`
width: 316px;
text-overflow: ellipsis;
cursor: pointer;
word-break: break-all;
overflow: hidden;
white-space: nowrap;
&:hover {
    overflow: visible; 
    white-space: normal;
}
`;

const CardSubHeaderStyled = styled.div`
color: gray;
text-align:center;
margin: 10px auto;
font-size: 0.8rem;
`;
const CardBodyStyled = styled(FlexContainerStyled)`
width:100%;
`;

const BriefCardStyled = styled.div`
display:flex;
flex-direction: column;
border: ${props => props.active?' 1px solid #664DE5':'1px solid lightgray'};
align-items: start;
padding: 1rem;
margin: 10px;
max-width: 9rem;
max-height: 9rem;
border-radius:0.25rem;
`;


const BriefCardHeaderStyled = styled.div`
font-weight:600;
margin: 10px 0px;
font-size: 14px
`;
const BriefCardSubHeaderStyled = styled.div`
color: gray;
font-size: 11px;
margin-top: 8px;
`;
const BriefCardIconStyled = styled.div`
height: 20px;
width: 20px;
svg{
    fill: ${props => props.active?'#664DE5':'#000'};
    stroke: ${props => props.active?'#664DE5':'#000'};
}
`;

const ButtonStyled = styled.button`
box-sizing: border-box;
display: flex;
height: 32px;
align-items: center;
justify-content: center;
width: fit-content;
border-radius: 0.25rem;
border-width: 0.07rem;
border-style: solid;
border-color: transparent;
font-weight: 500;
font-size: 0.7rem;
padding: 0px 16px;
cursor: pointer;
background-color: #664DE5;
color: rgb(255, 255, 255);
outline: none !important;
width: 100%;
`;

const ButtonWrapperStyled=styled.div`
width:100%;
`;

const ButtonDisabled = styled(ButtonWrapperStyled)`
button {
background: lightgray;
}
`;

const LabelStyled = styled.label`
font-size: 0.7rem;
font-weight: 600;
color: #5A5A5A;
`;

const InputStyled = styled.input`
color: gray;
outline: none !important;
padding: 6px 10px;
border: 1px solid lightgray;
border-radius: 0.25rem;
margin: 0.4rem 0px;
width:100%;
`;

const SubLabelStyled = styled(LabelStyled)`
color: lightgray;
font-size: 0.6rem;
`;

const CheckmarkStemStyled = styled.div`
position: absolute;
width:3px;
height:22px;
background-color:#fff;
left:15px;
top:-14px;
`;
const CheckmarkKickStyled = styled.div`
position: absolute;
width:11px;
height:3px;
background-color:#fff;
left:6px;
top:5px;
`;

const CheckmarkStyled = styled.div`
display:inline-block;
width: 42px;
height:42px;
-ms-transform: rotate(45deg); /* IE 9 */
-webkit-transform: rotate(45deg); /* Chrome, Safari, Opera */
transform: rotate(45deg);
`;


export {
    FlexContainerStyled,
    CircleStyled,
    DashStyled,
    InfoWrapperStyled,
    InfoImgStyled,
    InfoTitleStyled,
    CardStyled,
    CardHeaderStyled,
    CardSubHeaderStyled,
    CardBodyStyled,
    BriefCardHeaderStyled,
    BriefCardSubHeaderStyled,
    BriefCardIconStyled,
    BriefCardStyled,
    ButtonStyled,
    LabelStyled,
    InputStyled,
    SubLabelStyled,
    CheckmarkStemStyled,
    CheckmarkKickStyled,
    CheckmarkStyled,
    ButtonWrapperStyled,
    ButtonDisabled,
    CardHeaderTrimStyled
}