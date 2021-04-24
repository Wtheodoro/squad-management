import styled from 'styled-components';

export const Container = styled.div`
    width: 6.5626rem;
    width: 5rem;
    height: 9.375rem;
    height: 8rem;
    position: relative;
    z-index: 1;
    overflow: hidden;
`;

export const CardBody = styled.div`
    width: 100%;
    height: 100%;
    border-radius: 14px;
    background: linear-gradient(to top, #8F6B29, #8F6B29, #FDE08D, #DF9F28 );
    position: absolute;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    > img {
        height: 40%;
        position: absolute;
        top: 30%;
    }
`;

export const PositionLabel = styled.p`
    font-size: 0.8rem;
    position: absolute;
    top: 1%;
`;

export const NameLabel = styled.p`
    font-size: .9rem;
    position: absolute;
    top: 80%;
`;

export const AgeTeamCountry = styled.div`
    width: 25%;
    height: 80%;
    background: linear-gradient(to top, #8F6B29, #8F6B29, #DF9F28, #FDE08D, #DF9F28 );
    position: absolute;
    left: 10%;
    top: 20%;
    display: flex;
    flex-direction: column;
    align-items: center;

    > p {
        font-size: 1rem;
    }

    > img {
        width: 70%;
        margin-top: 30%;
    }

`;
