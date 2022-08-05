import React, {useState} from "react";
import Card from "../Components/Card";
import { UserSetupStyled, FlexContainerStyled } from './styles/container-styled-constants';
import BriefCard from "../Components/BriefCard";
import User from '../Components/UserIcon.js';
import MultiUser from '../Components/UserGroupIcon.js';
import Button from "../Components/Button";

  const UserSetup = ({updateStep}) => {
    const [options] = useState([{iconComp: <User />, id:'user', name:'For myself', desc: 'Write better. Think more clearly. Stay organized.'},
    {iconComp: <MultiUser />, id:'team' ,name:'With my team', desc: 'Wikis, docs, tasks & projects, all in one place.'}]);
    const [activeOption, setActiveOption] = useState(options[0].id);

     const onClickOption = (e, id) => {
        e.stopPropagation()
        setActiveOption(id);
    }
    const onButtonClick = () => {
        updateStep({selectedOption: activeOption});
    }
    return (<Card cardHeader="How are you planning to use Eden?"
     cardSubHeader="We will streamline your setup experience accordingly.">
    <UserSetupStyled>
        <FlexContainerStyled>
        {
            options.map(each => {
                return (
                    <BriefCard key={each.id} onClick={(e)=>onClickOption(e,each.id)} 
                    {...each} active={activeOption===each.id} />

                )
            })
        }
        </FlexContainerStyled>
      <Button onClick={onButtonClick} label="Create Workspace" />
  </UserSetupStyled>
  </Card>
  )
  }

  export default UserSetup