import { useEffect, useState } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { Wrapper, Card, Gradient } from "./popular-styles";
import '@splidejs/react-splide/css';

const Popular = () => {

    localStorage.setItem()

    const [popularRecipes, setPopularRecipes] = useState([])

    useEffect(() => {

        const fetchPopularRecipes = async() => {
            const check = localStorage.getItem("popularRecipes");
            if(check){
                setPopularRecipes(JSON.parse(check));
            } else {
                const res = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_SPOONTACULAR_KEY}&number=9`);
                const data = await res.json();
                setPopularRecipes(data.recipes);
                localStorage.setItem("popularRecipes", JSON.stringify(data.recipes));
            }
    }
            fetchPopularRecipes();
    }, [])

    if(!popularRecipes.length){
        console.log("no state", popularRecipes);
        return;
    }

    const popRecipes = popularRecipes.map((recipe) => {
            return (
                <SplideSlide key={recipe.id}>
                    <Card key={recipe.id}>
                        <p>{recipe.title}</p>
                        <img src={recipe.image} alt={recipe.title} />
                        <Gradient />
                    </Card>
                </SplideSlide>
            )
        })



    return (
        <Wrapper className="custom-wrapper">
            <Splide aria-label="My Favorite Images">
                {popRecipes}
            </Splide>
        </Wrapper>
    )
}

export default Popular;



