import React from "react"
import { Container, Cep, Rua, Cidade, Bairro, Estado } from "./style"

const CardAdress = ({cepInformation}) => {
    return(
        <Container>
            <Cep>CEP: {cepInformation.cep}</Cep>
            <Rua>Rua: {cepInformation.logradouro}</Rua>
            <Bairro>Bairro: {cepInformation.bairro}
            </Bairro>
            <Cidade> Cidade: {cepInformation.localidade}</Cidade>
            <Estado>UF: {cepInformation.uf}</Estado>
        </Container>
    )
}

export default CardAdress