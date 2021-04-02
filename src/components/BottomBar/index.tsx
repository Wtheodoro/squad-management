import React from 'react';

import { Container } from './styles';

const BottomBar = () => {

  let year = new Date().getFullYear()
  return (
    <Container>
      <p>{year} All rights reserved</p>
    </Container>
  )
}

export default BottomBar;