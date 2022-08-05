import React from "react";
import { element, string, func, bool } from 'prop-types';

import { BriefCardStyled,BriefCardSubHeaderStyled, BriefCardHeaderStyled, BriefCardIconStyled } from './styles/component-styled-constants';

  const BriefCard = ({iconComp, name, desc, onClick = ()=>{}, active=false}) => {
    const onClickCard = (e) => {
        onClick(e)
    }
    return (<BriefCardStyled onClick={onClickCard} active={active} >
    <BriefCardIconStyled active={active}>
        {iconComp}
    </BriefCardIconStyled>
      <BriefCardHeaderStyled>
        {name}
      </BriefCardHeaderStyled>
      <BriefCardSubHeaderStyled>
        {desc}
      </BriefCardSubHeaderStyled>
  </BriefCardStyled>)
  }

  BriefCard.propTypes = {
    iconComp: element.isRequired,
    name: string.isRequired,
    desc: string.isRequired,
    onClick: func,
    active: bool
  };

  export default BriefCard;