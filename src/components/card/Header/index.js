import React from 'react'
import * as S from './styles'

export function Header(){
    return(
        <S.Container>
            <S.BoxList>
                <List>Sobre</List>
                <List>Contato</List>
                <List>Quem somos</List>
            </S.BoxList>
        </S.Container>
    )
}