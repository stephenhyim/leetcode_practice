function adjacentElementsProduct(inputArray) {
    let maxProduct = 0
    for (let i = 0; i < inputArray.length - 1; i++) {
        let currentProduct = 0
        for (let j = 1; j < inputArray.length; j++) {
            currentProduct = inputArray[i] * inputArray[j]
            if (currentProduct > maxProduct) {
                currentProduct = maxProduct
            }
        }
    }
    return maxProduct
}

return adjacentElementsProduct([3,6,-2,-5,7,3])
