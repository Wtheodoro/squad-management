import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    background: linear-gradient(to bottom, #FFF , #E9E9E9);
    border: 1px solid #E9E9E9;
    margin: 0.5rem;
    padding: 0.8rem;
    font-size: 0.9rem;

    .name-age{
        display: flex;
        justify-content: space-between;
        margin-bottom: 0.3rem;
    }

    strong {
        color: rgb(192, 14, 79);
    }
`;
