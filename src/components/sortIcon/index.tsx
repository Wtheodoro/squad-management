import React from 'react';
import { Container } from './styles';
import { TiArrowUnsorted } from "react-icons/ti";
import sort from '../../hooks/sortHook';
import AllTypesReducer from '../../store/ducks/AllTypesReducer';

interface SortIconProps {
  param: string
}

const sortIcon = (props: SortIconProps) => {

  const { param } = props

  const sortByParam = (param: string) => {
    const myTeams = useSelector((state: AllTypesReducer) => state.reducerMyTeams.myTeams)
  }

  return (
    <Container onClick={()=>sortByParam(param)}>
      <TiArrowUnsorted />
    </Container>
  )
}

export default sortIcon;

function useSelector(arg0: (state: any) => any) {
  throw new Error('Function not implemented.');
}
function setList(arg0: import("../../store/ducks/myTeams/types").TeamType[]) {
  throw new Error('Function not implemented.');
}

