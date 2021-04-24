import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .player {
        background-color: rgba(46, 189, 89, .2);

        display: flex;
        justify-content: center;
        align-items: center;
        .empty {
            width: 3rem;
            height: 3rem;
            border-radius: 50%;
            background-color: rgba(255, 255, 255, .5);
            display: flex;
            justify-content: center;
            align-items: center;
            margin: 1.7rem 2.2rem;
        }
    }

    .defense,
    .middle-one,
    .attack {
        width: 100%;
        display: flex; 
        justify-content: space-between;
    }

    .draggable {
        z-index: 1;
        margin: 0.1rem;
    }
`;
