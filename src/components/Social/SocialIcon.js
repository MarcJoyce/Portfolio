import React from 'react'
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import EmailIcon  from '@material-ui/icons/Email';

import styled from 'styled-components';

function SocialIcon(props) {

  const Icon = styled.a`
    svg {
      font-size: 32px;
    }
  `;

  const iconSelector = (icon) => {
    switch(icon) {
      case 'github':
        return <GitHubIcon />
      case 'linkedin':
        return <LinkedInIcon />
      case 'email':
        return <EmailIcon />
      default:
        return ''
    }
  }
  
  return (
    <Icon href={props.link} rel="noreferrer" target="_blank">
      {iconSelector(props.icon)}
    </Icon>
  )
}

export default SocialIcon
