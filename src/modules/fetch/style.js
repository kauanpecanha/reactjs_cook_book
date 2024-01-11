import { styled } from "styled-components"

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
`;

export const Title = styled.h1`
    font-size: 35px;
`;

export const Input = styled.input`
    border: 0;
`;
export const Button = styled.button`
    border-radius: 15px;
    border: 0;
    width: 200px;
    cursor: pointer;
`;
export const Image = styled.img`
    width: 250px;
    border-radius: 125px;
    border: 1px solid black;
`;

export const Name = styled.span`
    font-size: 20px;
`;