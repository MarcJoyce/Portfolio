import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

function LazyImage({image, placeholder, title}) {
  
  const [imageSrc, setImageSrc] = useState(placeholder);

  useEffect(() => {
    setImageSrc(image);
  }, [])
  
  const Image = styled.img`
    position: absolute;
    height: 100%;
    width: 100%;
    object-fit: cover;
  `;

  return (
    <Image src={imageSrc || placeholder} alt={title} />
  )
}

export default LazyImage
