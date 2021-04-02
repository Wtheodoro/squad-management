import styled from 'styled-components';

export const Container = styled.div`
    .header-content {
        display: flex;
        justify-content: space-between;
        align-items: center;

        background-image: linear-gradient(to right, rgb(192, 14, 79) , rgb(139, 31, 110));
        color: white;

        .left,
        .right {
            display: flex;
            align-items: center;
            padding: 0 2rem;
        }

        p {
            padding: 0 1rem;
        }

        svg {
            font-size: 2rem;
        }
    }
`;
