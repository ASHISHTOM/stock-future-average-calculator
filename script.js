function calculateAverage() {
  const currentQuantities = parseFloat(document.getElementById('currentQuantities').value);
  const currentAverage = parseFloat(document.getElementById('currentAverage').value);
  const futureQuantities = parseFloat(document.getElementById('futureQuantities').value);
  const newBuyPrice = parseFloat(document.getElementById('newBuyPrice').value);

  if (isNaN(currentQuantities) || isNaN(currentAverage) || isNaN(futureQuantities) || isNaN(newBuyPrice)) {
    document.getElementById('result').textContent = "Please enter valid numbers in all fields.";
    return;
  }

  const futureAverage = 
    ((currentAverage * currentQuantities) + (newBuyPrice * futureQuantities)) /
    (currentQuantities + futureQuantities);

  document.getElementById('result').textContent = `Future Average: ${futureAverage.toFixed(2)}`;
}
