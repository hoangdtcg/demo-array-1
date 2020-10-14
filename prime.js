function checkPrime(num) {
    let n = num;
    let i = 2;
    if(n < 2){
        return 0;
    }
    while (i <= Math.sqrt(n)){
        if(n%i===0){
            return 0;
        }
        i++;
    }
    return 1;
}

let sum = 0;
let primes = [];
let total = 0;

function listPrime2() {
    let quantity = +prompt("So luong");
    let count = 0;
    let n = 2;
    let str = '';

    while (count < quantity){
        let check = checkPrime(n);

        if(check){
            primes[count] = n;
            str+= n+',';
            count++;
        }
        n++;
    }
    total = count;

    document.getElementById('list-prime').innerHTML = str;
}

function sumOfPrimes() {
    for (let i = 0; i < primes.length; i++) {
        sum+=primes[i];
    }

    document.getElementById('sum-primes').innerHTML = `Tong cua ${total} so nguyen to la: ${sum}`;
}

function multipleOfPrimes() {
    for (let i = 0; i < primes.length; i++) {
        sum*=primes[i];
    }
    document.getElementById('multi-primes').innerHTML = `Tich cua ${total} so nguyen to la: ${sum}`;
}

function listPrime() {
    let quantity = 6;
    let count = 0;
    let n = 2;

    while (count < quantity){
        let i = 2;

        let flag = true;
        while (i < n){
            if(n%i===0) {
                flag = false;
                break;
            }
            i++;
        }

        if(flag){
            document.write(n + ",");
            count++;
        }
        n++;

    }

    console.log(count);
}

// listPrime2();
