const numberss:number[] = [1,2,3,4,5,6,7,8,998,10]

function findMinMax (...args: number[]):{min:number, max:number}{
    const min = Math.min(...args)
    const max = Math.max(...args)

    return {min,max}
}

const { min, max } = findMinMax(...numberss);

// Step 4: Log the minimum and maximum values to the console
console.log(`Minimum value: ${min}`);
console.log(`Maximum value: ${max}`);