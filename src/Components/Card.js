import React from "react";
import { any, string, bool } from 'prop-types';

import { CardStyled, CardHeaderStyled, CardSubHeaderStyled,
   CardBodyStyled,CardHeaderTrimStyled } from './styles/component-styled-constants';

  const Card = ({disableHeaders = false, cardHeader, cardSubHeader, children, trim=false}) => {
    const CardHeaderWrapper = trim ? CardHeaderTrimStyled : CardHeaderStyled;
    return (<CardStyled>
      {
      !disableHeaders && <><CardHeaderWrapper>
        {cardHeader}
      </CardHeaderWrapper>
      <CardSubHeaderStyled>
        {cardSubHeader}
      </CardSubHeaderStyled>
      </>}
      <CardBodyStyled>{children}</CardBodyStyled>
  </CardStyled>)
  }

  Card.propTypes = {
    children: any.isRequired,
    cardHeader: string,
    cardSubHeader: string,
    disableHeaders: bool,
    trim: bool
  };

  export default Card;