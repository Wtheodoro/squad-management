import styled from 'styled-components';

interface ContainerProps {
    width?: string
}

export const Container = styled.button<ContainerProps>`
    min-height: 2.5rem;
    min-width: 2.5rem;
    width: ${props => props.width};
    font-size: 2rem;
    background: linear-gradient(to bottom, rgb(192, 14, 79) , rgb(139, 31, 110));
    color: white;
    border-radius: 5px;

    display: flex;
    justify-content: center;
    align-items: center;

    cursor: pointer;
    transition: all 0.2s;

    &:hover {
        box-shadow: 0 0 1em rgb(255, 100, 230);
    }

    text-decoration: none;
`;
