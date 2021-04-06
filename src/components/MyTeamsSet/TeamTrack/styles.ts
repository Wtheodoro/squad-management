import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    padding: 1.5rem;
    margin: 0 1rem;
    border-bottom: 1px solid rgb(227, 223,227);
    border-radius:5px;


    .team-name {
        width: 30%;
    }

    .team-description {
        margin-left: 1rem;
        width: 70%;
        display: flex;
        justify-content: space-between;

        .icons {
            font-size: 1.2rem;
            color: rgb(192, 14, 79);
            display: none;
            cursor: pointer;
        }

    }

    &:hover {
        color: rgb(192, 14, 79);
        background-color: rgb(247, 218, 247);

        .team-description {
            .icons {
                display: block;
                
            }
        }
    }

    a {
        text-decoration: none;
        color: inherit;
        margin-right: 1rem;
    }
`;
