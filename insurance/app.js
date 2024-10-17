var InsuranceCalculator = /** @class */ (function () {
    function InsuranceCalculator() {
    }
    InsuranceCalculator.prototype.calculatePremium = function (age, carValue, drivingExperience) {
        var basePremium = carValue * 0.02; // Base rate: 2% of car value
        if (age < 25)
            basePremium *= 1.2; // 20% higher for young drivers
        if (drivingExperience < 5)
            basePremium *= 1.1; // 10% higher for less experienced drivers
        return basePremium;
    };
    return InsuranceCalculator;
}());
// Example Usage
var insuranceCalc = new InsuranceCalculator();
console.log(insuranceCalc.calculatePremium(24, 20000, 2)); // Higher premium due to young age and less experience
