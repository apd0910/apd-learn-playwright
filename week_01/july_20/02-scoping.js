var genderType = "male"; // global declaration

function printGender() {

    let color = "brown"// function scope

    if (genderType.startsWith("female")) {
        var age = 30;
        let color = "pink";
        console.log("She/her favourite colour"+color);//Here the color is declared using let variable declaration
    } else {
        var age = 35;
        console.log("He/him:"+color);       
    }

    console.log(age);//var deaclared within the block scope still accesible globally    
}

printGender();
console.log(genderType);