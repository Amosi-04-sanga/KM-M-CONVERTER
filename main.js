//DOM element references
const kilometers = document.getElementById("kilometers")
const meters = document.getElementById("meters")


// EVENT LISTNERS
kilometers.addEventListener( "focus", () => {
    emptyValue(kilometers)
} )
meters.addEventListener( "focus", () => {
    emptyValue(meters)
} )

kilometers.addEventListener( "input", kilometersToMeters )
meters.addEventListener( "input", metersToKilometers )


// FUNCTIONS
function emptyValue(el) {
   el.value = ""
}

const possibleError = "invalid number"


function kilometersToMeters() {
    // return if input is NOT absolute value
    const kilometersInput = kilometers.value

    // do conversion KM to M
    const metersInput = kilometersInput * 1000
    // render on page
    meters.value = `${metersInput} meters`

    if(isNaN(kilometersInput)) {
        meters.value = possibleError
    }

}


function metersToKilometers() {
    // return if input is NOT absolute value
    const metersInput = meters.value

    

    // do conversion KM to M
    const kilometersInput = metersInput / 1000
    // render on page
    kilometers.value = `${kilometersInput} kilometers`
  
    if(isNaN(metersInput)) {
        kilometers.value = possibleError
    }
    
}


