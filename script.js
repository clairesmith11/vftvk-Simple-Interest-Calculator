const compute = () => {
    const p = document.getElementById("principal").value;
    const r = document.getElementById('rate').value;
    const t = document.getElementById('years').value;
    const result = document.getElementById('result');

    //Reset results paragraph to empty string
    result.innerHTML = '';

    //Find the current year and add the input years to it
    const d = new Date();
    const year = +d.getFullYear() + +t;

    //Calculate interest
    const calc = Math.round(((r / 100) * t) * p);

    //Create results paragraph
    const markup = `
        <div>
            <p>If you deposit <span class="yellow">${p}</span>,</p>
            <p>at an interest rate of <span class="yellow">${r}</span>%.</p>
            <p>You will receive an amount of <span class="yellow">${calc}</span>,</p>
            <p>in the year <span class="yellow">${year}</span>.</p>
        </div>
    `;

    //Add results paragraph to DOM
    result.insertAdjacentHTML('beforeend', markup);

};


const getRange = () => {
    const r = document.getElementById('rate').value.toString();
    const selectedRate = document.getElementById('selectedRate');
    //Display current value of slider
    selectedRate.innerText = `${r}%`;
};

window.addEventListener('load', (event) => {
    getRange();
});