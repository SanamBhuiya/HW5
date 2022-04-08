function generate_secret_number(){
    return Math.floor((Math.random())*100+1);
}
const secret_number = generate_secret_number();
let attempts = 0;
function get_secret_number(){
    attempts+=1;
    document.getElementById("attempt").innerHTML = `You have ${5-attempts} attempt(s) left`
    let input = document.getElementById("input").value;
    if(input == secret_number){
        document.getElementById("content").innerHTML = "Success! You will be redirected to play again!"
        setTimeout(function(){window.location.replace("HW5PT2.html")},5000);

    }
    if (input > secret_number){
        alert(`The secret number is greater than ${input}`)
    }
    else{
        alert(`The secret number is less than ${input}`)
    }
    if (attempts >=5){
        document.getElementById("content").innerHTML = `Oops! The number was ${secret_number}<br>You will be redirected to try again!`
        setTimeout(function(){window.location.replace("HW5PT2.html")}, 5000);        
    }

}