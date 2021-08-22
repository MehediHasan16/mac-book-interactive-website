


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

    // const defaultBestPrice = document.getElementById("default-cost");
    // const defaultBestPriceText = defaultBestPrice.innerText;
    // const defaultBestPriceAmount = parseInt(defaultBestPriceText);

    const bestPriceAmount = optionAmountUpdate('default');


    //memory cost total

    // const defaultBestPrice = document.getElementById("memory-cost");
    // const defaultBestPriceText = defaultBestPrice.innerText;
    // const defaultBestPriceAmount = parseInt(defaultBestPriceText);
    const memoryPriceAmount = optionAmountUpdate('memory');


    //storage cost total 

    const storagePriceAmount = optionAmountUpdate('storage');


    //shipping Charge cost total 

    const shippingChargeAmount = optionAmountUpdate('delivery');


    const selectedImacCostTotal = bestPriceAmount + memoryPriceAmount + storagePriceAmount + shippingChargeAmount;

    // total cost output 
    const totalAmount = document.getElementById('total-cost');
    totalAmount.innerText = selectedImacCostTotal;
    //apply Pomo code
    /* document.getElementById("apply-btn").addEventListener('click', function () {
        console.log(' pomo code click')
        const applyPomoCode = document.getElementById("input-pomo-code");
        const applyPomoCodeText = applyPomoCode.value;
        console.log(applyPomoCodeText);
    });
 */
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

    // const memoryCost = document.getElementById("memory-cost");
    // const memoryCostText = memoryCost.innerText;
    // memoryCost.innerText = 180;
    configurationOptionCostUpdate('memory', 180);
});

// storage part 
document.getElementById("storage-256SSD").addEventListener("click", function () {

    // const storageSsd = document.getElementById("storage-cost");
    // const memoryCostText = storageSsd.innerText;
    // storageSsd.innerText = 0;
    configurationOptionCostUpdate('storage', 0);
});


document.getElementById("storage-512SSD").addEventListener("click", function () {

    // const storageSsd = document.getElementById("storage-cost");
    // const memoryCostText = storageSsd.innerText;
    // storageSsd.innerText = 100;
    configurationOptionCostUpdate('storage', 100);

});
document.getElementById("storage-1tbSSD").addEventListener("click", function () {

    // const storageSsd = document.getElementById("storage-cost");
    // const memoryCostText = storageSsd.innerText;
    // storageSsd.innerText = 180;

    configurationOptionCostUpdate('storage', 180);
});



//delivery charge

document.getElementById("delivery-free").addEventListener("click", function () {

    // const deliveryCost = document.getElementById("delivery-cost");
    // const deliveryCostText = deliveryCost.innerText;
    // deliveryCost.innerText = 0;
    configurationOptionCostUpdate('delivery', 0);

});


document.getElementById("delivery-charge").addEventListener("click", function () {

    // const deliveryCost = document.getElementById("delivery-cost");
    // const deliveryCostText = deliveryCost.innerText;
    // deliveryCost.innerText = 20;
    configurationOptionCostUpdate('delivery', 20);
});

