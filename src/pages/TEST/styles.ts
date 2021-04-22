import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    margin-top: 2rem;
    
    .search-athlete {
        width: 30rem;
        max-height: 70vh;
        overflow-y: scroll;
        background-color: #232323;

        &::-webkit-scrollbar {
            width: 6px;
            background-color: transparent;
        }

        &::-webkit-scrollbar-thumb {
            background-color: rgb(192, 14, 79);
            outline: none;
            border-radius: 15px;
        }
    }
`;

export const Canvas = styled.div`
    background-color: lightcoral;
    min-height: 50vh;
    width: 100vw;

    display: flex;
    justify-content: center;
`;
