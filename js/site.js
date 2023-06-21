function calculateLoan() {
    const loanAmount = parseFloat(document.getElementById("loanAmount").value);
    const loanTerm = parseInt(document.getElementById("loanTerm").value);
    const interestRate = parseFloat(document.getElementById("interestRate").value) / 100;
  
    const monthlyRate = interestRate / 12;
    const monthlyPayment = (loanAmount * monthlyRate) / (1 - Math.pow(1 + monthlyRate, -loanTerm));
  
    document.getElementById("monthlyPayment").textContent = "$" + monthlyPayment.toFixed(2);
  
    let remainingBalance = loanAmount;
    let totalInterestPaid = 0;
  
    const tableBody = document.getElementById("results");
    tableBody.innerHTML = "";
  
    for (let month = 1; month <= loanTerm; month++) {
      const interestPaid = remainingBalance * monthlyRate;
      const principalPaid = monthlyPayment - interestPaid;
      const totalInterest = totalInterestPaid + interestPaid;
      remainingBalance -= principalPaid;
  
      const row = document.createElement("tr");
      row.innerHTML = `
        <td>${month}</td>
        <td>$${monthlyPayment.toFixed(2)}</td>
        <td>$${principalPaid.toFixed(2)}</td>
        <td>$${interestPaid.toFixed(2)}</td>
        <td>$${totalInterest.toFixed(2)}</td>
        <td>$${remainingBalance.toFixed(2)}</td>
      `;
  
      tableBody.appendChild(row);
    }
  
    calculateValues(); // Call the calculateValues function to display total values
  }
 // Function to calculate and assign total values
function calculateValues() {
    // Get the necessary elements
    const totalPrincipalElement = document.getElementById("totalPrincipal");
    const totalInterestElement = document.getElementById("totalInterest");
    const totalCostElement = document.getElementById("totalCost");
  
    // Get the input values
    const loanAmount = parseFloat(document.getElementById("loanAmount").value);
    const interestRate = parseFloat(document.getElementById("interestRate").value) / 100;
    const loanTerm = parseInt(document.getElementById("loanTerm").value);
  
    // Calculate the values
    const monthlyRate = interestRate / 12;
    const totalInterest = (loanAmount * monthlyRate * loanTerm).toFixed(2);
    const totalPrincipal = loanAmount.toFixed(2);
    const totalCost = (parseFloat(totalPrincipal) + parseFloat(totalInterest)).toFixed(2);
  
    // Assign the values to the elements
    totalPrincipalElement.textContent = totalPrincipal;
    totalInterestElement.textContent = totalInterest;
    totalCostElement.textContent = totalCost;
  }
  