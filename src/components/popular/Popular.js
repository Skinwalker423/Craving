import { useEffect, useState } from "react";

import { Wrapper, Card } from "./popular-styles";

const Popular = () => {

    const [popularRecipes, setPopularRecipes] = useState([])

    useEffect(() => {

        const fetchPopularRecipes = async() => {
        const res = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_SPOONTACULAR_KEY}&number=9`);
        const data = await res.json();
        setPopularRecipes(data.recipes);
    }
        fetchPopularRecipes();
    }, [])

    if(!popularRecipes.length){
        console.log("no state", popularRecipes);
        return;
    }

    const popRecipes = popularRecipes.map((recipe) => {
            return (
                <Card key={recipe.id}>
                    <h3>{recipe.title}</h3>
                    <img src={recipe.image} alt={recipe.title} />
                </Card>
            )
        })



    return (
        <Wrapper className="popular">
            <h1>Popular</h1>
            {popRecipes}
        </Wrapper>
    )
}

export default Popular;



