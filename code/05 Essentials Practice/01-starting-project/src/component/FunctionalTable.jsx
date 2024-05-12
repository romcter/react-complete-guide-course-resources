export default function FunctionalTable({handleChange, userInput}) {
    return (
        <div id='user-input'>
            <div className="input-group">
                <p>
                    <label>Initial investment </label>
                </p>
                <p>
                    <input
                        type="number"
                        required
                        value={userInput.initialInvestment}
                        onChange={(event) => handleChange("initialInvestment", event.target.value)} />
                </p>

                <p>
                    <label> Annual investment </label>
                </p>
                <p>
                    <input
                        type="number"
                        required
                        value={userInput.annualInvestment}
                        onChange={(event) => handleChange("annualInvestment", event.target.value)}/>
                </p>
            </div>
            <div className="input-group">
                <p>
                    <label>Expected return</label>
                </p>
                <p>
                    <input
                        type="number"
                        required
                        value={userInput.expectedReturn}
                        onChange={(event) => handleChange("expectedReturn", event.target.value)}/>
                </p>

                <p>
                    <label>Duration</label>
                </p>
                <p>
                    <input
                        type="number"
                        required
                        value={userInput.duration}
                        onChange={(event) => handleChange("duration", event.target.value)}/>
                </p>
            </div>
        </div>
    )
}