module.exports = {
    givenNumber: 0,
    numbers: [],

    set setGivenNumber(number) {
        this.givenNumber = number;
    },

    fillNumbers() {
        this.numbers.length = this.givenNumber + 1;

        this.numbers.fill(true);
    },

    stieveOfEratoshenes() {
        for  (let int = 2; int * int <= this.givenNumber; int++) {

            // If this.primes[int] is not changed,
            // then it is a prime
            if (this.numbers[int] === true) {

                // Update all multiples of int
                for (let multiple = int * int; multiple <= this.givenNumber; multiple += int) {

                    this.numbers[multiple] = false;
                }
            }
        }

        let primeNumbers = [];

        // Print all prime numbers
        for (let j = 2; j <= this.givenNumber; j++)
            if (this.numbers[j])
                primeNumbers.push(j);

        console.log(primeNumbers);

        return primeNumbers;
    },

    calc(number) {
        console.time();
        this.setGivenNumber = number;

        this.fillNumbers();

        this.stieveOfEratoshenes();
        console.timeEnd();
    }
};