import styled from 'styled-components';

export const Container = styled.div`
    box-sizing: border-box;
    background-color: rgb(227, 223,227);
    min-height: 100vh;
    width: 100vw;

    h1 {
        padding: 1rem 1.5rem;
        border-bottom: 1px solid rgb(227, 223,227);
        color: rgb(88, 47, 140);
    }

    h2 {
        color: #808080;
        margin: 1rem 0;
    }
    
    .content {
        width: 95%;
        min-height: 96%;
        margin: 2rem;
        background: #FFF;
        border-radius: 14px;

        form {
            display: flex;
            flex-direction: column;
            align-content: space-between;
            align-items: center;

            .team-information {
                width: 100%;
                display: flex;
                justify-content: space-evenly;
                /* align-items: center; */

            }

            .label-input:hover {
                color: rgb(192, 14, 79);
            }
        }

        input {
            width: 20rem;
            border-radius: 5px;
            padding: 0.3rem 0.8rem;
            margin: 0.5rem 0 1.5rem;
            border: 1px solid #CCC;

            &:focus {
                outline-color: rgb(192, 14, 79);
            }
        }

        input[type=radio] {
            width: 2rem;
        }

        input[type=radio]:checked {
            color: rgb(192, 14, 79);
        }

        textarea {
            border-radius: 5px;
            border: 1px solid #CCC;

            &:focus {
                outline-color: rgb(192, 14, 79);
            }
        }
    }
`;
