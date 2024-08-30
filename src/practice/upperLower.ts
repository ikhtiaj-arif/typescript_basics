

function upperLower(color: "red" | "green" | "blue" , upperCase?:boolean ):void {
    if(upperCase){
        console.log( color.toUpperCase())
    }
    else{
        console.log( color.toLocaleLowerCase())
    }
}


upperLower("red", true)
upperLower("green", false)
upperLower("blue")
upperLower("blue", true)