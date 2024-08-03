
export default function Input({onChange, input}) {
  

  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label htmlFor="">Initial Investment</label>
          <input
            type="number"
            onChange={(event) =>
              onChange("initialInvestment", event.target.value)
            }
            value={input.initialInvestment}
          />
        </p>
        <p>
          <label htmlFor="">Annual Investment</label>
          <input
            type="number"
            onChange={(event) =>
              onChange("annualInvestment", event.target.value)
            }
            value={input.annualInvestment}
          />
        </p>
      </div>

      <div className="input-group">
        <p>
          <label htmlFor="">Expected Return</label>
          <input
            type="number"
            onChange={(event) =>
              onChange("expectedReturn", event.target.value)
            }
            value={input.expectedReturn}
          />
        </p>
        <p>
          <label htmlFor="">Duration</label>
          <input
            type="number"
            onChange={(event) =>
              onChange("duration", event.target.value)
            }
            value={input.duration}
          />
        </p>
      </div>
    </section>
  );
}
