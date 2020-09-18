import React from 'react';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';
import './Burger.css';

const Burger = (props) => {

    let transformedIngredients = Object.keys(props.ingredients).map(transformedIngredient => {
        return [...Array(props.ingredients[transformedIngredient])].map((_, index) => {
            return <BurgerIngredient key={transformedIngredient + index} type={transformedIngredient} />
        })
    }).reduce((arr, el) => {
        return arr.concat(el)
    }, []);

    if(transformedIngredients.length === 0){
        transformedIngredients = <p>Please start adding ingredients!</p>
    }

    return (
        <div className="Burger">
            <BurgerIngredient type="bread-top" />
            {transformedIngredients}
            <BurgerIngredient type="bread-bottom" />
        </div>
    )
}

export default Burger;