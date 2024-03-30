import React from "react";

function MenuModalBody({item}){
    return(
        <div class="row modal-body">
            <div class="col-6">
                <p>Price: ${item.price}</p>
                <p>Description: {item.description}</p>
                <p>Rewards Cost: {item.rewardsPointsCOST}</p>
                <p>Rewards Gain: {item.rewardsPointsADD}</p>
            </div>
            <div class="col-6">
                <p>Nutritional Value:</p>
                <div class="row menu-modal-row">
                    <div class="col-6">
                        Calories:
                    </div>
                    <div class="col-6">
                        {item.macronutrients.calories}
                    </div>
                </div>
                <div class="row menu-modal-row">
                    <div class="col-6">
                        Fat:
                    </div>
                    <div class="col-6">
                        {item.macronutrients.fats}g
                    </div>
                </div>
                <div class="row menu-modal-row">
                    <div class="col-6">
                        Carbohydrates:
                    </div>
                    <div class="col-6">
                        {item.macronutrients.carbs}g
                    </div>
                </div>
                <div class="row menu-modal-row">
                    <div class="col-6">
                        Protein:
                    </div>
                    <div class="col-6">
                        {item.macronutrients.protein}
                    </div>
                </div>
                <div class="row menu-modal-row">
                    <div class="col-6">
                        Allergens:
                    </div>
                    <div class="col-6">
                        {item.allergens}
                    </div>
                </div>
            </div>
        </div>
        );
}

export default MenuModalBody;
