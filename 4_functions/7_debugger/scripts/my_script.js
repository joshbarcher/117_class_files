//get page elements
let primeList = document.getElementById("prime-list");
let first = document.getElementById("first-check");
let second = document.getElementById("second-check");

first.innerHTML = isPrime(299);
second.innerHTML = isPrime(191);

for (let i = 1; i <= 300; i++)
{
    primeList.innerHTML += "<li>" + i + ": " + isPrime(i) + "</li>";
}

