import styled from 'styled-components';

export const Container = styled.div`
    width: 23rem;
    height: 33rem;
    background: linear-gradient(to bottom, rgb(192, 14, 79) , rgb(139, 31, 110));
    border-radius: 5px;
    position: relative;

    .squad {
        width: 100%;
        height: 100%;
    }

    .line {
        background-color: #FFF;
        opacity: 0.3;
        height: 1px;
        width: 100%;
        position: absolute;
        top: 50%;
    }

    .circle {
        height: 5rem;
        width: 5rem;
        opacity: 0.3;
        border-radius: 50%;
        border: 1px solid #FFF;
        position: absolute;
        top: 42%;
        left: 39.8%;
    }
`;
