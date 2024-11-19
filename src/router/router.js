import Recipe from "../pages/Recipe";
import RecipesList from "../pages/RecipesList";
import ChosenRecipesList from "../pages/ChosenRecipesList";

export const router = [
    {
        path: '/recipe-list',
        element: <RecipesList/>
    },
    {
        path: '/recipe-list/:recipe',
        element: <Recipe/>
    },
    {
        path: '/chosen-recipes-list',
        element: <ChosenRecipesList/>
    }
];