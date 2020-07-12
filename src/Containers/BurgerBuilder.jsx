import React, { Component } from "react";
import Aux from "../hoc/Aux";
import Burger from "../Components/Burger/Burger";
import BuildControls from "../Components/Burger/BuildControls/BuildControls";
import Modal from '../Components/UI/Modal/Modal'
import OrderSummary from '../Components/Burger/OrderSummary/OrderSummary'

const INGREDIENT_PRICES = {
  salad: 0.5,
  cheese: 0.4,
  meat: 1.3,
  bacon: 0.7,
};

export default class BurgerBuilder extends Component {
  state = {
    ingredients: {
      salad: 0,
      bacon: 0,
      cheese: 0,
      meat: 0,
    },
    totalPrice: 4,
    purchaseable: false,
    purchasing: false,
  };

  updatePurchasedState = (ingredients) => {
   
    const sum = Object.keys(ingredients).map(igKey => {
      return ingredients[igKey]
    })
      .reduce((sum, el) => {
      return sum + el
      }, 0)

    this.setState({purchaseable: sum > 0})
  }

  addIngredientHandler = (type) => {
    const oldCount = this.state.ingredients[type];
    const updatedAmount = oldCount + 1;

    const updatedIngredients = {
      ...this.state.ingredients,
    };
    updatedIngredients[type] = updatedAmount;
    const priceAddition = INGREDIENT_PRICES[type];

    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice + priceAddition;

    this.setState({
      totalPrice: newPrice,
      ingredients: updatedIngredients,
    });

    this.updatePurchasedState(updatedIngredients);
  };

  removeIngredientHandler = (type) => {
    const oldCount = this.state.ingredients[type];

    if (oldCount <= 0) {
      return;
    }

    const updatedAmount = oldCount - 1;

    const updatedIngredients = {
      ...this.state.ingredients,
    };
    updatedIngredients[type] = updatedAmount;
    const priceDeduction = INGREDIENT_PRICES[type];

    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice - priceDeduction;

    this.setState({
      totalPrice: newPrice,
      ingredients: updatedIngredients,
    });

    this.updatePurchasedState(updatedIngredients);
  };

  purchaseHandler = () => {
    this.setState({purchasing: true})
  }

  purchaseCancel = () => {
    this.setState({purchasing: false})
  }

  purchaseContinue = () => {
    alert('CHeckout!')
  }

  render() {
    const disabledInfo = {
      ...this.state.ingredients,
    };
    for (let key in disabledInfo) {
      disabledInfo[key] = disabledInfo[key] <= 0;
    }
    return (
      <Aux>
      <Modal show={this.state.purchasing} modalClosed={this.purchaseCancel}>
        <OrderSummary purchaseCancel={this.purchaseCancel} price={this.state.totalPrice} purchaseContinue={this.purchaseContinue} ingredients={this.state.ingredients}/>
      </Modal>
        <Burger ingredients={this.state.ingredients} />
        <BuildControls
          ingredientAdded={this.addIngredientHandler}
          ingredientRemoved={this.removeIngredientHandler}
          disabled={disabledInfo}
          price={this.state.totalPrice}
          purchaseable={this.state.purchaseable}
          ordered={this.purchaseHandler}
        />
      </Aux>
    );
  }
}
