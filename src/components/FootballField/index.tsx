import React from 'react';

import { Container } from './styles';

const FutballField = () => {
  return (
    <Container>
      <div className="atk">
        <p>Most picked player</p>
        <img src="http://portalmorada.com.br/assets/uploads/noticias/ha-63-anos-pele-fazia-o-seu-1o-gol-em-jogo-oficial-pelo-santos-f6Fv.jpg" alt="pelé"/>
        <p className="percentage">
          75%
        </p>
      </div>
      <div className="middle">
        <div className="center-line"/>
      </div>
      <div className="def">
        <p>Less picked player</p>
        <img src="http://portalmorada.com.br/assets/uploads/noticias/ha-63-anos-pele-fazia-o-seu-1o-gol-em-jogo-oficial-pelo-santos-f6Fv.jpg" alt="pelé"/>
        <p className="percentage">
          25%
        </p>
      </div>
    </Container>
  )
}

export default FutballField;