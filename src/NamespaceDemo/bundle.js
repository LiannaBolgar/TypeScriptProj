var Utility;
(function (Utility) {
    var Fees;
    (function (Fees) {
        function CalculateLateFee(daysLate) {
            return daysLate * 0.25;
        }
        Fees.CalculateLateFee = CalculateLateFee;
    })(Fees = Utility.Fees || (Utility.Fees = {}));
    function MaxBookAllowed(age) {
        return age < 12 ? 3 : 10;
    }
    Utility.MaxBookAllowed = MaxBookAllowed;
    function privateFunc() { }
})(Utility || (Utility = {}));
///<reference path="utility-functions.ts"/>
var util = Utility.Fees;
var fee = util.CalculateLateFee(3);
