import styled from 'styled-components';

export const Container = styled.div`
    
    .top-list {
        display: flex;
        padding: 1.5rem;

        .name {
            width: 30%;
            border-right: 2px solid rgb(227, 223,227);
        }

        .description {
            margin-left: 1rem;
            width: 70%;
        }

        .name,
        .description {
            display: flex;
            justify-content: space-between;
            align-items: center;

            svg {
                margin-right: 1rem;
                cursor: pointer;

                &:hover {
                    font-size: 1.5rem;
                }
            }
        }
    }
`;
