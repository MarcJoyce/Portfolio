import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

function LazyImage({image, placeholder, title}) {
  
  const [imageSrc, setImageSrc] = useState(placeholder);

  useEffect(() => {
    setImageSrc(image);
  }, [image])
  
  //Return ImageSrc or Placeholder 2248

  return (
    <Image src={imageSrc || placeholder} alt={title} />
  )
}

const Image = styled.img`
    position: absolute;
    height: 100%;
    width: 100%;
    object-fit: cover;
  `;

export default LazyImage
