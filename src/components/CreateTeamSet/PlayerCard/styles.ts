import styled from 'styled-components';

export const Container = styled.div`
    width: 21.875rem;
    height: 31.25rem;
    margin: 2rem;
    background-color: lightgrey;
    position: relative;
    z-index: 1;
    overflow: hidden;
`;

export const CardBody = styled.div`
    width: 21.875rem;
    height: 31.25rem;
    border-radius: 100% 100% 100% 100%/ 25% 25% 100% 100%;
    background: linear-gradient(to top, #8F6B29, #8F6B29, #FDE08D, #DF9F28 );
    position: absolute;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    > img {
        height: 12rem;
        position: absolute;
        top: 15%;
        
    }
`;

export const CountryLabel = styled.p`
    font-size: 2rem;
    position: absolute;
    top: 0;
`;

export const NameLabel = styled.p`
    font-size: 4rem;
    position: absolute;
    top: 65%;
`;

export const AgeTeamCountry = styled.div`
    width: 25%;
    height: 80%;
    background: linear-gradient(to top, #8F6B29, #8F6B29, #DF9F28, #FDE08D, #DF9F28 );
    position: absolute;
    left: 10%;
    display: flex;
    flex-direction: column;
    align-items: center;

    > p {
        font-size: 400%;
    }

    > img {
        width: 70%;
        margin-top: 30%;
    }

`;
