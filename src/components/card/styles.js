import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    width: 200px;
    height: 400px;
    align-items: center;
    justify-content: center;
    margin: 0 10px 10px 5px;
    flex-direction: column;
`;

export const Img = styled.img`
    width: 200px;
    height: 400px;
    object-fit: cover;
    cursor: pointer;
`;

export const TmjMeuParceiro = styled.div`
   display: flex;
   justify-content: center;
   flex-wrap: wrap;
   align-items: center; 
`;

export const Name = styled.h2`
    font-size: 20px;
`;