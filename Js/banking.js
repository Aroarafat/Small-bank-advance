const depositButton = document.getElementById("deposit-button");
depositButton.addEventListener('click', function () {
    const depositTotal = document.getElementById("deposit-total");
    const depositTotalText = depositTotal.innerText;
    const depositTotalNumber = parseFloat(depositTotalText);
    const newDeposit = document.getElementById("deposit-input");
    const newDepositText = newDeposit.value;
    const newDepositNumber = parseFloat(newDepositText);
    depositTotal.innerText = depositTotalNumber + newDepositNumber;
    newDeposit.value = '';


    const balanceTotal = document.getElementById("balance-total");
    const balanceTotalText = balanceTotal.innerText;
    const balanceTotalNumber = parseFloat(balanceTotalText);
    balanceTotal.innerText = balanceTotalNumber + newDepositNumber;

});
const withdrawButton = document.getElementById("withdraw-button");
withdrawButton.addEventListener('click', function () {
    const withdrawTotal = document.getElementById("withdraw-total");
    const withdrawTotalText = withdrawTotal.innerText;
    const withdrawTotalNumber = parseFloat(withdrawTotalText);
    const newWithdraw = document.getElementById("withdraw-input");
    const newWithdrawText = newWithdraw.value;
    const newWithdrawNumber = parseFloat(newWithdrawText);
    withdrawTotal.innerText = withdrawTotalNumber + newWithdrawNumber;
    newWithdraw.value = '';


    const balanceTotal = document.getElementById("balance-total");
    const balanceTotalText = balanceTotal.innerText;
    const balanceTotalNumber = parseFloat(balanceTotalText);
    balanceTotal.innerText = balanceTotalNumber - newWithdrawNumber;
})