import { useEffect, useState } from "react"
import { Api } from "../services/Api"
import { Layout } from "../components/Layout"
import { CardImage } from "../components/CardImage"

export const Home = ()=>{
    const [data, setData] = useState([])

    const results = async()=>{
        const url = 'https://rickandmortyapi.com/api/character'
        const data = await Api(url)
        setData(data)
    }

    useEffect(()=>{
        results()
    },[])


    return(
        <Layout>
            {data.map((character)=>{
                return(
                    <CardImage
                    key = {character.id}
                    titleImage={character.name}
                    descriptionImage={character.species}
                    ulrImage = {character.image}
                    />
                )
            })}
        </Layout>
    )
}