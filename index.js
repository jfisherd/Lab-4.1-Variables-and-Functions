// Task 1
function formatFullName(firstName, lastName) {
    if (firstName==""||lastName==""){
        return "Invalid name input"
    }
    else {
        firstName = firstName.charAt(0).toUpperCase() + firstName.slice(1)
        lastName = lastName.charAt(0).toUpperCase() + lastName.slice(1)
        fullName = `${lastName}, ${firstName}`
        return fullName
    }
}

sampleName = formatFullName("jeff","dahmer")
invalidName = formatFullName("","")
console.log(sampleName)
console.log(invalidName)

//Task 2
function calculateTotalCost(price,quantity,taxRate){
    if (price<0,quantity<0,taxRate<0) {
        return "Invalid input"
    }
    else {
        totalCost = (price * quantity) * (1 + taxRate)
        totalCost = Math.round(totalCost*100)/100
        return totalCost
    }
}

samplePurchase = calculateTotalCost(10,3,0.08)
invalidPurchase = calculateTotalCost(-10,-10,-10)
console.log(samplePurchase)
console.log(invalidPurchase)

// Task 3
function checkEligibility(age,isEmployed) {
    if (age<18) {
        return "This individual is not eligible due to age."
    } else if (age>=18 && isEmployed==true) {
        return "This indivudual is eligible"
    } else {
        return "This individual is conditionally eligible due to employment"
    }
}

sampleApplicant1 = checkEligibility(18,true)
sampleApplicant2 = checkEligibility(95,false)
sampleApplicant3 = checkEligibility(12,true)
console.log(sampleApplicant1)
console.log(sampleApplicant2)
console.log(sampleApplicant3)

// Task 4
function calculateTotalCost(price,quantity,taxRate,discountRate=0){ // discountRate defaults to 0 if not included as an argument
    if (price<0,quantity<0,taxRate<0) {
        return "Invalid input"
    }
    else {
        totalCost = (price * quantity) * (1-discountRate) * (1 + taxRate) // cost now accounts for discounted rates
        totalCost = Math.round(totalCost*100)/100
        return totalCost
    }
}

samplePurchase = calculateTotalCost(10,3,0.08)
invalidPurchase = calculateTotalCost(-10,-10,-10)
discountedPurchase = calculateTotalCost(100,100,0.07,0.5)
console.log(samplePurchase)
console.log(invalidPurchase)
console.log(discountedPurchase)