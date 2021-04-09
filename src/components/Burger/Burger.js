import classes from './Burger.module.css'
import BurgerIngeriedent from './BurgerIngredinet/BurgerIngeriedent'

const burger = (props) => { 

    let transformedIngredients = Object.keys(props.ingredients).map( igKey => {
        return [...Array(props.ingredients[igKey])].map((_, i) => {
            return <BurgerIngeriedent key={igKey + i} type={igKey} />});
    }).reduce((arr, el) => {return arr.concat(el)},[]);
    if (transformedIngredients.length ===0 ) {transformedIngredients = <p>Please start adding ingeriedents!</p>}
    return (
        <div className={classes.Burger} >
            <BurgerIngeriedent type='bread-top'></BurgerIngeriedent>
            {transformedIngredients}
            <BurgerIngeriedent type='bread-bottom'></BurgerIngeriedent>
        </div>
    );
}

export default burger; 