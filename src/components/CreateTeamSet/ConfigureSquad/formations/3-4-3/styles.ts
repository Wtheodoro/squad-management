import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .player {
        width: 3rem;
        height: 3rem;
        border-radius: 50%;
        background-color: #FFF;
        opacity: 0.5;

        display: flex;
        justify-content: center;
        align-items: center;

        margin: 1.7rem 2.2rem;
        }

    .def,
    .middle-one,
    .middle-two,
    .atk {
        display: flex;    
    }
`;
