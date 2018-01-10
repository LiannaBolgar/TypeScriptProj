namespace Utility {
export namespace Fees{
export function CalculateLateFee(daysLate: number): number {
    return daysLate* 0.25;
}
}
//Task 14
export function MaxBookAllowed(age: number): number{
    return age < 12 ? 3 : 10;
}

function privateFunc(): void{}
}