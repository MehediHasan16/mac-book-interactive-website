


// configuration Option Cost  Update
function configurationOptionCostUpdate(configuration, inputAmount) {

    const configurationCost = document.getElementById(configuration + "-cost");
    const configurationCostText = configurationCost.innerText;
    // const configurationCosttotal = parseInt(configurationCostText);
    configurationCost.innerText = inputAmount;

    updateConfigurationOptionCostTotal();
};
// function option amount 
function optionAmountUpdate(optionInput) {
    const optionAmount = document.getElementById(optionInput + "-cost");
    const optionAmountText = optionAmount.innerText;
    const optionAmountotal = parseInt(optionAmountText);
    return optionAmountotal;
}

function updateConfigurationOptionCostTotal() {
    //best price total
    const bestPriceAmount = optionAmountUpdate('default');


    //memory cost total   
    const memoryPriceAmount = optionAmountUpdate('memory');


    //storage cost total 
    const storagePriceAmount = optionAmountUpdate('storage');


    //shipping Charge cost total 
    const shippingChargeAmount = optionAmountUpdate('delivery');


    const selectedImacCostTotal = bestPriceAmount + memoryPriceAmount + storagePriceAmount + shippingChargeAmount;

    // total cost output 
    const totalAmount = document.getElementById('total-cost');
    totalAmount.innerText = selectedImacCostTotal;


    // total lest  cost output 
    const totalLestAmount = document.getElementById("totalLest-cost")
    totalLestAmount.innerText = selectedImacCostTotal;

};
//apply Pomo code
document.getElementById("apply-btn").addEventListener('click', function () {

    const applyPomoCode = document.getElementById("input-pomo-code");
    const applyPomoCodeText = applyPomoCode.value;
    const lestTotalAmount = document.getElementById('totalLest-cost');
    const lestTotalAmountText = lestTotalAmount.innerText


    const pomoCode = 'stevekaku';
    if (applyPomoCodeText == pomoCode) {
        const discount = (lestTotalAmountText / 100) * 20;
        const discountAmountTatol = lestTotalAmountText - discount;
        lestTotalAmount.innerText = discountAmountTatol;

    }
    else {
        lestTotalAmount.innerText = lestTotalAmountText;
    }
    applyPomoCode.value = '';


});




// memory card

document.getElementById("memory-8GB").addEventListener("click", function () {

    configurationOptionCostUpdate('memory', 0);
});

document.getElementById("memory-16GB").addEventListener("click", function () {


    configurationOptionCostUpdate('memory', 180);
});

// storage part 
document.getElementById("storage-256SSD").addEventListener("click", function () {


    configurationOptionCostUpdate('storage', 0);
});


document.getElementById("storage-512SSD").addEventListener("click", function () {

    configurationOptionCostUpdate('storage', 100);

});
document.getElementById("storage-1tbSSD").addEventListener("click", function () {

    configurationOptionCostUpdate('storage', 180);
});

//delivery charge

document.getElementById("delivery-free").addEventListener("click", function () {

    configurationOptionCostUpdate('delivery', 0);

});


document.getElementById("delivery-charge").addEventListener("click", function () {

    configurationOptionCostUpdate('delivery', 20);
});

