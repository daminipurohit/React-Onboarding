import React from "react";
import { array, number } from 'prop-types';
import  { FlexContainerStyled, CircleStyled, DashStyled } from './styles/component-styled-constants';

export const Circle = props => {
    return <CircleStyled {...props}>{props.children}</CircleStyled>
  }
  
  const Dash = (props) => {
    return <DashStyled {...props}></DashStyled>
  }

const StepProgressBar = ({steps, activeCount}) => {
    return steps.map((step,i) => {
        const active = i<=activeCount;
        return(<React.Fragment key={step.key}>
            <FlexContainerStyled >
                <Circle id={`circle-${i}`} active={active}>{i+1}</Circle>
                {(i<steps.length-1) && <Dash active={i===activeCount} complete={i<activeCount} />}
            </FlexContainerStyled>
        </React.Fragment>)
    })
}

StepProgressBar.propTypes = {
    steps: array.isRequired,
    activeCount: number
  };

export default StepProgressBar;