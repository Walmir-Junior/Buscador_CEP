import React from "react"
import { Container, Search, Title, ContainerInput } from "./styled"
import { FiSearch } from "react-icons/fi"
import CardAdress from "../CardAdress"
import { useState } from "react"
import api from "../../Services/api"

const Home = () => {

    const [input, setinput] = useState("")
    const [cepInformation, setCepInformation] = useState({})

    const search = async () => {

        if (input === "") {
            alert('Preencha algum CEP')
            return
        }

        try {

            const response = await api.get(`${input}/json/`)
            setCepInformation(response.data)
            setinput("")

        } catch {
            alert("Não conseguimos encontrar este CEP :( ")
            setinput("")
        }
    }


    return (
        <Container>
            <Title>Buscador de CEP</Title>

            <ContainerInput>
                <input
                    value={input}
                    onChange={(event) => setinput(event.target.value)}
                    type="text"
                    placeholder="Digite seu CEP..."
                />
                <Search onClick={search}>

                    <FiSearch
                        size={25}
                        color="fff"
                    />
                </Search>
            </ContainerInput>

            {Object.keys(cepInformation).length > 0 && (

                <main>
                    <CardAdress
                        cepInformation={cepInformation}
                    />
                </main>
            )}
        </Container>
    )
}

export default Home