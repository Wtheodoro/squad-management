import React from 'react';
import { Container } from './styles';
import { useDispatch } from 'react-redux'
import { loadPostMyTeams } from '../../store/ducks/myTeams/actions';

interface Btnprops {
  children: string
  width?: string
}

const GradientButton = (props: Btnprops) => {

  const { children, width } = props

  const dispatch = useDispatch()

  const addTeam = () => {
    const team = {
      name: 'Ponte Preta',
      description: 'Melhor time do interiro',
      website: 'www.amacaca.com',
      type: 'real',
      tags: 'ponte',
    }

    dispatch(loadPostMyTeams(team))
  }

  return (
    <Container width={width} onClick={addTeam}>
      {children}
    </Container>
  )
}

export default GradientButton;