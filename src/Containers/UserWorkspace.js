import React, {useState, useEffect} from "react";
import { func } from 'prop-types';

import { UserWorkspaceStyledStyled, InputWrapperStyled,UrlWrapperStyled,
  ErrorLabelStyled,
    } from './styles/container-styled-constants';
    import {validateData, validateField} from '../utils/helpers';

import Card from "../Components/Card";
import Input from '../Components/Input';
import Label from "../Components/Label";
import Button from '../Components/Button';
  const UserWorkspace = ({updateStep}) => {
    const [name, setName] = useState('');
    const [url, setUrl] = useState('');
    const [error, setError] = useState({});
    const [disableButton, setDisableButton] = useState(true);

    const onChangeText = e => {
        const handler = (e.target.name === 'name')?setName:setUrl;
        handler(e.target.value);
        if(e.target.name === 'name') {
          const errorData = validateField(e.target.name, e.target.value, error);
          setError(errorData);
        }
    }
    const onButtonClick = () => {
        const errors = validateData({name});
        if(Object.keys(errors).length){
          setDisableButton(true);
         return setError(errors);
        }
        setDisableButton(false);
        updateStep({name, url});
    }

    useEffect(() => {
      if(name) {
        setError({})
      } else {
        setDisableButton(true);
      }
    }, [name]);

    const isErrored = !!Object.keys(error).length;

    return (<Card cardHeader="Let's setup a home for all your work"
    cardSubHeader="You can always create another workspace later.">
    <UserWorkspaceStyledStyled>
    <InputWrapperStyled>
    <Label label="Workspace Name" />
    <Input type="text" value={name} placeholder=""
         name="name" onChange={onChangeText} />
      {error?.name && <ErrorLabelStyled>Required!</ErrorLabelStyled>}
    </InputWrapperStyled>
    <InputWrapperStyled>
    <Label label="Workspace URL" subLabel="(Optional)" />
    <UrlWrapperStyled>
    <Input type="text" value="www.eden.com/" placeholder=""
       name="domain" disabled />
    <Input type=  "text" value={url} placeholder=""
       name="url" onChange={onChangeText} />
    </UrlWrapperStyled>
    </InputWrapperStyled>
    <Button onClick={onButtonClick} label="Create Workspace" disabled={isErrored && disableButton} />
  </UserWorkspaceStyledStyled>
  </Card>)
  }
  UserWorkspace.propTypes = {
    updateStep: func.isRequired,
  };

  export default UserWorkspace;