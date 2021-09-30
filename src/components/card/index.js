import React, {useState, useEffect} from 'react'
import Slider from 'react-slick'
import axios from 'axios'
import * as S from './styles'
import Img  from './arrow.png'

const Card = () =>{
    const [list, setList] = useState([])
    const bridgeApi = axios.create({
        baseURL: 'http://hp-api.herokuapp.com/api/characters'
    })

    useEffect( ()=>{
        getApi()
    },[])

    const getApi = async () =>{
        const response = await bridgeApi.get()

        setList(response.data)
        console.log(response)
    }
    const settings = {
        className: "center",
        centerMode: true,
        infinite: true,
        centerPadding: "60px",
        slidesToShow: 1,
        slidesToScroll: "none",
        speed: 500,
        variableWidth: true,
        nextArrow: <S.SampleNextArrow><img src={Img} /></S.SampleNextArrow>,
        prevArrow: <S.SamplePrevArrow><img src={Img} /></S.SamplePrevArrow>
      };

    return(
        <S.Group>
            <S.GlobalStyle />
            <S.TmjMeuParceiro>
                <Slider {...settings}>
                {list.map((item) =>(
                        <S.Container>
                        <S.Name>{item.name}</S.Name>
                        <S.Img src={item.image}/>
                        <S.Home>{item.house}</S.Home>
                        </S.Container>             
                ))}
                </Slider>
            </S.TmjMeuParceiro>
        </S.Group>
    )
}
export default Card