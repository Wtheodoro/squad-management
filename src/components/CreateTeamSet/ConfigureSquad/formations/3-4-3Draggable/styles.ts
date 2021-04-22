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
        background-color: rgba(255, 255, 255, .5);

        display: flex;
        justify-content: center;
        align-items: center;

        margin: 1.7rem 2.2rem;
        }

    .defense,
    .middle-one,
    .middle-two,
    .attack {
        display: flex;    
    }

    p {
        padding: 0.5rem;
    }

    .draggable {
        width: 130%;
        height: 130%;
        border-radius: 50%;
        background-color: white;
        opacity: 1;
        display: flex;
        justify-content: center;
        align-items: center
    }
`;
