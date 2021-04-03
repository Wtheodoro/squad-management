import React from 'react';
import { Container } from './styles';

interface Btnprops {
  children: string
  width?: string
}

const GradientButton = (props: Btnprops) => {

  const { children, width } = props

  return (
    <Container width={width}>
      {children}
    </Container>
  )
}

export default GradientButton;