const square = function (x) {
    return x * x;
};

/*
const squareArrow = (x) => {
    return x * x;
};
*/

const squareArrow = (x) => x * x;

console.log(square(9));

console.log(squareArrow(9));


// Arrow function doesn't bind its own value. So `this` keyword inside an arrow function doesn't work

const user = {
    name: "Demo User",
    places: ['Aligarh', 'Agra', 'Delhi'],
    printPlacesLived: function () {
        const that = this;
        console.log(this.name); //This line will not work if we will use arrow function in printPlacesLived.
        this.places.forEach((city) => {
            // console.log(this.name + 'has lived in '+this.city);   // This don't work.
            console.log(that.name + ' has lived in '+city);
        });
    },
}

user.printPlacesLived();