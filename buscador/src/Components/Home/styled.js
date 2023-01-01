import styled from "styled-components"


export const Container = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: linear-gradient(#121212, #212b46);
`

export const Title = styled.h1`
    font-size: 85px;
    color: #fff;
    animation: flipTitle 2s;

    @keyframes flipTitle {

        from{
            transform: rotateX(90deg);
        }
        to{
            transform: rotateX(0deg);
        }
        
    }

`

export const ContainerInput = styled.div`
    background-color: rgba(255,255,255, 0.2);
    padding: 15px;
    margin:  34px 0;
    display: flex;
    border-radius: 8px;
    box-shadow: 1px 3px 8px rgba(0,0,0, 0.5);

    input{
        background-color: transparent;
        border: 0;
        font-size: 20px;
        color: white;
        outline: none;
        margin-right: 8px;
    }

    input:placeholder{
        color: #f1f1f1;
    }
`


export const Search = styled.button`
    background-color: transparent;
    border: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    transition: transform 0.5;

    :hover{
        transform: scale(1.2);
    }

`