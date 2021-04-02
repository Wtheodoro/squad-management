import styled from 'styled-components';

export const Container = styled.div`
    color: #FFF;
    background: linear-gradient(to bottom, rgb(192, 14, 79) , rgb(139, 31, 110));
    height: 25vh;
    border-radius: 14px;

    display: flex;
    justify-content: space-around;
    position: relative;

    .middle {
        height: 5rem;
        width: 5rem;
        border-radius: 50%;
        border: 1px solid #FFF;

        position: absolute;
        top: 25%;
        left: 44%;

        .center-line {
            width: 1px;
            height: 30vh;
            background-color: #FFF;

            position: absolute;
            left: 50%;
            top: -60%;
        }
    }

    img {
        height: 8rem;
        width: 8rem;
        border-radius: 50%;
    }

    .atk,
    .def {
        position: relative;

        .percentage{
            position: absolute;
            top: 20%;
            left: 85%;
        }
    }
`;
