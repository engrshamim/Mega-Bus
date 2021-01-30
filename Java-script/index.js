function bookingItemChange(booking , isIncrease) {
    const bookingInput = document.getElementById(booking +'-count');
    const bookingCount = parseInt(bookingInput.value);
    let bookingNewCount = bookingCount ;
    if (isIncrease == true) {
        bookingNewCount = bookingCount + 1;
    }
    if (isIncrease == false && bookingCount > 0) {
        bookingNewCount = bookingCount - 1;
    }
    bookingInput.value =bookingNewCount;
    totalCalculate();
}

function totalCalculate() {
    const firstClassCount = getInputValue('firstClass');
    const economyCount = getInputValue('economy');

    var totalPrice = firstClassCount * 150 + economyCount * 100;
    document.getElementById('subtotal').innerText ='$' + totalPrice;

    const tax = Math.round(totalPrice * 0.1);
    document.getElementById('tax').innerText = '$' + tax;

    const grandAmount = totalPrice + tax;
    document.getElementById('grand-total').innerText = '$' + grandAmount;
}
function getInputValue (booking) {
    const bookingInput = document.getElementById(booking + '-count');
    const bookingCount  = parseInt( bookingInput .value);
    return bookingCount;
}

const loginBtn = document.getElementById("login-id");
        loginBtn.addEventListener("click", function(){
            let firstClassInput = document.getElementById('firstClass-count').value;
            let economyInput = document.getElementById('economy-count').value;
            console.log(economyInput)
            if(firstClassInput == 0 && economyInput == 0){
                Swal.fire({
                    icon: 'error',
                    title: 'Booking a Ticket minimum of one. ',
                    text: 'Thanks for your cooperation!',
                })
            }
            else{
                Swal.fire(
                'Your E-ticket Booking Successfully Done.',
                'Thanks for staying with us!',
                'success'
              );
            }

            
            console.log(firstClassInput);
            
        })
