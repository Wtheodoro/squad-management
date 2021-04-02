import styled from 'styled-components';

interface ContainerProps {
    width?: string
}

export const Container = styled.div<ContainerProps>`
    min-height: 3rem;
    min-width: 3rem;
    width: ${props => props.width};
    font-size: 3rem;
    background: linear-gradient(to bottom, rgb(192, 14, 79) , rgb(139, 31, 110));
    color: white;
    border-radius: 14px;

    display: flex;
    justify-content: center;
    align-items: center;

    cursor: pointer;
    transition: all 0.2s;

    &:hover {
        box-shadow: 0 0 1em rgb(255, 100, 230);
    }
`;
