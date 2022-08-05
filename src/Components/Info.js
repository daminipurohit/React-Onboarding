import React from "react";
import { node, string } from 'prop-types';

import { InfoWrapperStyled, InfoImgStyled, InfoTitleStyled } from './styles/component-styled-constants';

  const Info = ({title, icon}) => {
    return (<InfoWrapperStyled>
      <InfoImgStyled><img src={icon}/></InfoImgStyled>
      <InfoTitleStyled>{title}</InfoTitleStyled>
  </InfoWrapperStyled>)
  }

  Info.propTypes = {
    icon: node.isRequired,
    title: string.isRequired
  };

  export default Info;