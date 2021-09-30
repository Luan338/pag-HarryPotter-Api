import styled, {createGlobalStyle} from "styled-components";

export const GlobalStyle = createGlobalStyle`

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
`;

export const SampleNextArrow = styled.div`
    border-radius: 50%;
    border: 1px solid black;
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1;
    width: 50px;
    height: 50px;
    position: absolute;
    right: 0;
    top: 50%;
    opacity: 0.5;
    cursor: pointer;
    &:hover{
        transition: 1s all;
        opacity: 1;
    }
    img{
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        position: absolute;
        margin: 0;
    }
`;

export const SamplePrevArrow = styled(SampleNextArrow)`
    left: 0;
    transform: rotate(180deg);
`;

export const Group = styled.section`
    display: flex;
    height: 100vh;
    align-items: center;
    justify-content: center;
`;

export const TmjMeuParceiro = styled.div`
   max-width: 1300px;
   width: 100%;
   overflow: hidden;
   position: relative;

   .slick-track{
       display: flex;
   }    
   .slick-slide{
       margin: 30px 25px;

  }
`;


export const Home = styled.h3`
    display: none;
`;

export const Container = styled.div`
    display: flex;
    width: 400px;
    height: 350px;
    border: 1px solid black;
    border-radius: 20px;
    overflow: hidden;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    transition: 0.5s all;

    &:hover{
        transform: scale(1.1);
    }
   
    &:hover ${Home}{
        background-color: blue;
        display: flex;
        
    }
`;

export const Img = styled.img`
    width: 300px;
    height: 400px;
    object-fit: cover;
    cursor: pointer;
   
`;

export const Name = styled.h2`
    font-size: 20px;
    text-align: center;
`;

