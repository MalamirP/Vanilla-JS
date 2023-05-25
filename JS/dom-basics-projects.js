function changed() {

    const button = document.querySelector('.isSubscribed');

    if (button.innerText === 'Subscribe') {
        button.innerText = 'Subscribed';
    } else {
        button.innerText = 'Subscribe'
    }
}

function calculate() {
    const input = document.querySelector('.cost-input');

    let cost = Number(input.value);


    if (cost < 40) {
        cost = cost + 10;
    }

    const totalCost = document.querySelector('.total-cost').innerHTML = `$${cost}`


}