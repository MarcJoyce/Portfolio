import React from 'react'
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import EmailIcon  from '@material-ui/icons/Email';

import styled from 'styled-components';

function SocialIcon({ icon, link }) {

 

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
    <Icon href={link} rel="noreferrer" target="_blank" aria-label={icon}>
      {iconSelector(icon)}
    </Icon>
  )
}

const Icon = styled.a`
svg {
  font-size: 32px;
  transition: 0.3s all ease;
}
`;

export default SocialIcon
