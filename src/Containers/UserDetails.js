import React, {useEffect, useState} from "react";
import { func } from 'prop-types';
 
import Card from "../Components/Card";
import Input from "../Components/Input";
import Label from "../Components/Label";
import {validateData, validateField} from '../utils/helpers';
import Button from "../Components/Button";

import { UserDetailsStyled, 
  InputWrapperStyled,
  ErrorLabelStyled,
    } from './styles/container-styled-constants';

  const UserDetails = ({updateStep}) => {
    const [name, setName] = useState('');
    const [displayName, setDisplayName] = useState('');

    const [error, setError] = useState({});
    const [disableButton, setDisableButton] = useState(true);

    const onChangeText = e => {
        const handler = (e.target.name === 'name')?setName:setDisplayName;
        handler(e.target.value);
        const errorData = validateField(e.target.name, e.target.value, error);
          setError(errorData);
    }

    useEffect(() => {
      if(name && displayName) {
        setError({})
      } else {
        setDisableButton(true);
      }
    }, [name, displayName]);

    const onButtonClick = () => {
        const data = {name, displayName};
        const errors = validateData(data);
        if(Object.keys(errors).length){
          setDisableButton(true);
         return setError(errors);
        }
        setDisableButton(false);
        updateStep({name, displayName});
    }
    const isErrored = !!Object.keys(error).length;
    return (<Card cardHeader="Welcome! First things first provide details."
    cardSubHeader="You can always change them later." trim
>
    <UserDetailsStyled>
      <InputWrapperStyled error={!!error?.name}>
        <Label label="Full Name" />
        <Input type="text" value={name} placeholder=""
         name="name" onChange={onChangeText} />
         {error?.name && <ErrorLabelStyled>Required!</ErrorLabelStyled>}
      </InputWrapperStyled>
      <InputWrapperStyled error={!!error?.displayName}>
        <Label label="Display Name"/>
        <Input type="text" value={displayName} placeholder=""
         name="displayName" onChange={onChangeText} />
         {error?.displayName && <ErrorLabelStyled>Required!</ErrorLabelStyled>}
      </InputWrapperStyled>
      <Button onClick={onButtonClick} label="Create Workspace" disabled={isErrored && disableButton} />
  </UserDetailsStyled>
    </Card>
  )
  }
  UserDetails.propTypes = {
    updateStep: func.isRequired,
  };

  export default UserDetails;