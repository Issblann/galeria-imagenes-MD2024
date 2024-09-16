import { Layout } from "../components/Layout"
import { CardImage } from "../components/CardImage"
import { useFetch } from "../Hooks/useFetch"

export const Women = ()=>{
    const {data, loading, error} = useFetch('https://rickandmortyapi.com/api/character')

    if(loading) return<p>Loading...</p>;
    if(error) return<p>Error: {error.message}</p>;

    const womenFilter = data.filter((character) => character.gender ==='Female')

    return(
        <Layout>
            {womenFilter.map((character)=>{
                return(
                    <CardImage
                    key = {character.id}
                    titleImage={character.name}
                    descriptionImage={character.species}
                    urlImage = {character.image}
                    />
                )
            })}
        </Layout>
    )
}