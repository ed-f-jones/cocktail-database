import React from 'react';
import {useParams} from "react-router-dom";

function SingleCocktail() {
    const {id} = useParams()
    return (
        <h1>
            hello from cocktail page id :{id}
        </h1>
    )
}

export default SingleCocktail

