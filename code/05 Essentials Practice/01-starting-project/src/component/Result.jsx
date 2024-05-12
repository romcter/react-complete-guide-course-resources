import {calculateInvestmentResults, formatter} from "../util/investment.js";

export default function Result({input}) {
    const result = calculateInvestmentResults(input)
    return (
        <table id="result">
            <thead>
            <tr>
                <th>Year</th>
                <th>Investment Value</th>
                <th>Interest (Year)</th>
                <th>Total Interest</th>
                <th>Invested Capital</th>
            </tr>
            </thead>
            <tbody>
            {result.map((yearData) => {
                const totalInterest =
                    yearData.valueEndOfYear -
                    yearData.annualInvestment * yearData.year;
                const totalAmountInvested = yearData.valueEndOfYear - totalInterest;

                return (
                    <tr key={yearData.year}>
                        <td>{yearData.year}</td>
                        <td>{formatter.format(yearData.valueEndOfYear)}</td>
                        <td>{formatter.format(yearData.interest)}</td>
                        <td>{formatter.format(totalInterest)}</td>
                        <td>{formatter.format(totalAmountInvested)}</td>
                    </tr>
                );
            })}
            </tbody>
        </table>
    )
}

/*<div id="result">
    {res.map((r, colIndex) =>
            <div key={colIndex}>
                <li>{r.year}</li>
                <li>{r.interest}</li>
                <li>{r.valueEndOfYear}</li>
                <li>{r.annualInvestment}</li>
            </div>
        )}
    </div>*/

