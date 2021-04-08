import styled from 'styled-components';

export const Container = styled.div`
    box-sizing: border-box;
    background-color: rgb(227, 223,227);
    min-height: 100vh;
    width: 100vw;

    h1 {
        padding: 1rem 1.5rem;
    }

    h2 {
        color: #808080;
        margin: 1rem 0;
    }

    .top {
        display: flex;
        justify-content: space-between;
        border-bottom: 1px solid rgb(227, 223,227);
        color: rgb(88, 47, 140);

        a {
            margin-right: 1.5rem;
        }
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
            margin-bottom: 0;

            .team-information {
                width: 100%;
                display: flex;
                justify-content: space-evenly;
            }

            .label-input {
                margin: 1rem 0;

                &:hover {
                    color: rgb(192, 14, 79);
                }
            }

            .configure-squad {
                width: 100%;
                display: flex;
                justify-content: space-evenly;
            }
        }

        input {
            width: 20rem;
            border-radius: 5px;
            padding: 0.3rem 0.8rem;
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

    .search-athlete {
        max-height: 70vh;
        overflow-y: scroll;

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

    .error {
        color: red;
    }
`;
