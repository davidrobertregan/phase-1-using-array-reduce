const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Code your solution here

const reducer = (total, currentValue) => total + currentValue; 

console.log(reducer(batteryBatches, 0))

const totalBatteries = batteryBatches.reduce(reducer)

console.log(totalBatteries);

