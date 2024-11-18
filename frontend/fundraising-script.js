// JavaScript to handle fundraising and fund spending

let totalFunds = 0; // Initialize total funds raised
let spentFunds = []; // Initialize an array to track where funds have been spent

// Raise Fund - Donate Amount
document.getElementById('raiseFundForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    // Get donation amount from form
    const donationAmount = parseFloat(document.getElementById('donationAmount').value.trim());

    // Validate donation amount
    if (isNaN(donationAmount) || donationAmount <= 0) {
        alert('Please enter a valid donation amount.');
        return;
    }

    // Update total funds raised
    totalFunds += donationAmount;
    
    // Display the updated total funds
    document.getElementById('totalFunds').textContent = totalFunds.toFixed(2);

    // Clear the donation form
    document.getElementById('donationAmount').value = '';
});

// Report Fund Spending
document.getElementById('spendFundForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    // Get spending details from form
    const spendAmount = parseFloat(document.getElementById('spendAmount').value.trim());
    const spendDescription = document.getElementById('spendDescription').value.trim();

    // Validate the input
    if (isNaN(spendAmount) || spendAmount <= 0) {
        alert('Please enter a valid spend amount.');
        return;
    }

    if (spendDescription === '') {
        alert('Please provide a description for the spending.');
        return;
    }

    // Subtract the spent amount from the total funds
    totalFunds -= spendAmount;

    // Update the total funds raised
    document.getElementById('totalFunds').textContent = totalFunds.toFixed(2);

    // Add the spending to the list of spent funds
    spentFunds.push({ amount: spendAmount, description: spendDescription });

    // Update the list of spent funds displayed
    const spentFundsList = document.getElementById('spentFundsList');
    const listItem = document.createElement('li');
    listItem.textContent = `${spendDescription}: $${spendAmount.toFixed(2)}`;
    spentFundsList.appendChild(listItem);

    // Clear the spending form
    document.getElementById('spendAmount').value = '';
    document.getElementById('spendDescription').value = '';
});
