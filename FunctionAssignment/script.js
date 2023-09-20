
function nameWeight () {
    const name = prompt ('Please enter your name');
    const weightInKg = prompt ('Please enter weight in Kg');
    const weightInPounds =  weightInKg * 2.20462;

    alert(`Welcome ${name},your weight in pounds is ${weightInPounds} pounds`);
}
  nameWeight();