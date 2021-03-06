import React ,{Component} from 'react';
import Aux from '../../hoc/Aux';
import Burger from "../../components/Burger/Burger"
import BuildControls from '../../components/Burger/BuildControls/BuildControls'
import Modal from '../../components/UI/Modal/Modal'
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary'


const   INGREDIENT_PRICE = {
    salad: 0.5,
    bacon: 0.7,
    cheese: 0.4,
    meat: 1.3,
};

class BurgerBuilder extends Component {

    state = {
        ingredients: {
            salad: 0,
            bacon:0,
            cheese:0,
            meat:0 ,
        },
        totalPrice: 4,
        purchasable: false,
        purchasing: false
    }

    updatePurchaseState (ingredients) {
        const sum =Object.keys(ingredients).map(igKey =>{ return ingredients[igKey]}).reduce((sum, el) => {return sum+el} ,0)
        this.setState({purchasable: sum > 0})
    }

    addIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        const updateCount = oldCount+1;
        const updatedIngredients = {...this.state.ingredients};
        updatedIngredients[type] = updateCount;
        const priceAddition = INGREDIENT_PRICE[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice + priceAddition;
        this.setState({totalPrice:newPrice, ingredients: updatedIngredients})
        this.updatePurchaseState(updatedIngredients);
    }

    removeIngredientHandler = (type) => {
        if (this.state.ingredients[type] !== 0) {
            const oldCount = this.state.ingredients[type];
            const updateCount = oldCount-1;
            const updatedIngredients = {...this.state.ingredients};
            updatedIngredients[type] = updateCount;
            const priceDeduction = INGREDIENT_PRICE[type];
            const oldPrice = this.state.totalPrice;
            const newPrice = oldPrice - priceDeduction;
            this.setState({totalPrice:newPrice, ingredients: updatedIngredients})
            this.updatePurchaseState(updatedIngredients);
        }
    }

    purchaseHandler = () => {
        this.setState({purchasing: true})
    }

    purchaseCancelHandler = () => {
        this.setState({purchasing: false})
    }
    purchaseContinue = () => {
        alert('You continue!')
    }

    render (){
        const disabledinfo = {...this.state.ingredients};
        for (let key in disabledinfo){
            disabledinfo[key] = disabledinfo[key] <= 0
        }
        return(
            <Aux>
                <Modal show={this.state.purchasing} modalClosed={this.purchaseCancelHandler}>
                    <OrderSummary price={this.state.totalPrice} ingredients={this.state.ingredients} purchaseCanceled={this.purchaseCancelHandler} purchaseContinued={this.purchaseContinue}/>
                </Modal>
                <Burger ingredients={this.state.ingredients}></Burger>
                <BuildControls 
                    ingredientAdded = {this.addIngredientHandler}
                    ingredientRemoved = {this.removeIngredientHandler}
                    disabled = {disabledinfo}
                    price ={this.state.totalPrice}
                    purchasable={this.state.purchasable}
                    ordered={this.purchaseHandler}
                />
            </Aux>
        );
    };
}

export default BurgerBuilder;