import React from "react";

function MenuModalBody({item}){
    return(
        <div className="row modal-body">
            <div className="col-6">
                <p>Price: ${item.price}</p>
                <p>Description: {item.description}</p>
                <p>Rewards Cost: {item.rewardsPointsCOST}</p>
                <p>Rewards Gain: {item.rewardsPointsADD}</p>
            </div>
            <div className="col-6">
                <p>Nutritional Value:</p>
                <div className="row menu-modal-row">
                    <div className="col-6">
                        Calories:
                    </div>
                    <div className="col-6">
                        {item.macronutrients.calories}
                    </div>
                </div>
                <div className="row menu-modal-row">
                    <div className="col-6">
                        Fat:
                    </div>
                    <div className="col-6">
                        {item.macronutrients.fats}g
                    </div>
                </div>
                <div className="row menu-modal-row">
                    <div className="col-6">
                        Carbohydrates:
                    </div>
                    <div className="col-6">
                        {item.macronutrients.carbs}g
                    </div>
                </div>
                <div className="row menu-modal-row">
                    <div className="col-6">
                        Protein:
                    </div>
                    <div className="col-6">
                        {item.macronutrients.protein}
                    </div>
                </div>
                <div className="row menu-modal-row">
                    <div className="col-6">
                        Allergens:
                    </div>
                    <div className="col-6">
                        {item.allergens}
                    </div>
                </div>
            </div>
        </div>
        );
}

export default MenuModalBody;
