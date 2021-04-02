import styled from 'styled-components';

export const Container = styled.div`
    height: 100vh;
    background-color: rgb(227, 223,227);

    .content {
        margin: 2rem 0;
        display: flex;
        justify-content: space-evenly;
        align-items: center;
    }

    .right-side {
        display: flex;
        flex-direction: column;
    }
`;
