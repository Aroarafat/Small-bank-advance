const depositButton = document.getElementById("deposit-button");
const withdrawButton = document.getElementById("withdraw-button");
depositButton.addEventListener('click', function () {
    changeBlance("deposit")
});


withdrawButton.addEventListener('click', function () {
    changeBlance("withdraw");
});

function changeBlance(type) {
    const previousTotal = document.getElementById(`${type}-total`);
    const previousTotalText = previousTotal.innerText;
    const previousTotalNumber = parseFloat(previousTotalText);

    const newMoney = document.getElementById(`${type}-input`);
    const newMoneyText = newMoney.value;
    if (newMoneyText.length != 0) {
        const newMoneyNumber = parseFloat(newMoneyText)

        previousTotal.innerText = previousTotalNumber + newMoneyNumber;
        newMoney.value = '';


        const balanceTotal = document.getElementById("balance-total")
        const balanceTotalText = balanceTotal.innerText
        const balanceTotalNumber = parseFloat(balanceTotalText)

        if (type == "withdraw") {
            balanceTotal.innerText = balanceTotalNumber - newMoneyNumber
        }
        else {
            balanceTotal.innerText = balanceTotalNumber + newMoneyNumber
        }
    }
    else {
        alert("please enter a number")
    }
}
