import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    justify-content: space-evenly;

    .left-list,
    .right-list {
        padding: 0 1rem 1rem;

        p {
            margin-bottom: 0.5rem;
        }
    }


    .list {
        background-color: rgb(227, 223,227);
        width: 19rem;
        padding: 0.1rem;
        border-radius: 5px;
    }
`;
