import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    align-items: flex-start;
    align-content: flex-start;
    flex-wrap: wrap;
    /* min-height: 3rem; */
    width:  30rem;
    padding: 0 8px;
    border: 1px solid #CCC;
    border-radius: 5px;

    &:focus-within {
        border: 1px solid rgb(192, 14, 79);
    }

    input {
        flex: 1;
        border: none;
        height: 2.8rem;
        font-size: 0.8rem;
        padding: 4px 0 0;
        &:focus {
            outline: transparent
        }
    }

    #tags {
        display: flex;
        flex-wrap: wrap;
        padding: 0;
        margin: 8px 0 0 0;
    }

    .tag {
        width: auto;
        height: 32px;
        display: flex;
        align-items: center;
        justify-content: center;
        color: #fff;
        padding: 0 8px;
        font-size: 14px;
        list-style: none;
        border-radius: 6px;
        margin: 0 8px 8px 0;
        background: rgb(192, 14, 79);

        .tag-title {
            margin-top: 3px;
        }

        .tag-close {
            display: block;
            width: 16px;
            height: 16px;
            line-height: 16px;
            text-align: center;
            font-size: 14px;
            margin-left: 8px;
            color: #0052cc;
            border-radius: 50%;
            background: #fff;
            cursor: pointer;
        
	}
}
`;
