import { useEffect, useState } from "react"
import { Api } from "../services/Api"
import { Layout } from "../components/Layout"
import { CardImage } from "../components/CardImage"

export const Women = ()=>{
    const [data, setData] = useState([])

    const results = async()=>{
        const url = 'https://rickandmortyapi.com/api/character'
        const data = await Api(url)
        setData(data)
    }

    useEffect(()=>{
        results()
    },[])

    const womenFilter = data.filter((character)=>
    (character.gender === 'Female'))

    return(
        <Layout>
            {womenFilter.map((character)=>{
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