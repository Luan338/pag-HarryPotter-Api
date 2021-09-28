import React, {useState, useEffect} from 'react'
import axios from 'axios'
import * as S from './styles'

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

    return(
        <S.TmjMeuParceiro>
            {list.map((item) =>(
                    <S.Container>
                    <S.Name>{item.name}</S.Name>
                    <S.Img src={item.image}/>
                    </S.Container>             
            ))}
        </S.TmjMeuParceiro>
    )
}
export default Card