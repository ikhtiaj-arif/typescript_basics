const searchName=(value:string | null) => {
    if(value === null) {
        console.log("Nothing To Search!");
    }else{
        console.log("Searching");
    }
}
// searchName(null)

const getSpeed =(speed:unknown) => {
    if(typeof speed === "number"){
        const convertedSpeed = (speed * 1000)/3600
        console.log(`My speed is ${convertedSpeed}`);
    }
    if(typeof speed === "string"){
        const [value, unit] = speed.split(" ")
        const convertedSpeed = (parseFloat(value) * 1000)/3600
        console.log(`My speed is ${convertedSpeed}`);
    }else{
        console.log(`Wrong input type`);
    }
}

getSpeed(10)
getSpeed("100 kmh^-1")

function throwError(message:string){

    throw new Error(message)
}

throwError("Something went wrong")