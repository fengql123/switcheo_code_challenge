import "./App.css";
import { useState } from "react";

function App() {
  const [ethAddress, setEthAddress] = useState("");
  const [amount, setAmount] = useState("");
  const [otp, setOtp] = useState("");

  return (
    <div className="App">
      <form className="row g-3 needs-validation" novalidate>
        <div>
          <label for="eth-address" className="form-label">
            ETH Address
          </label>
          <input
            type="text"
            className="form-control"
            id="eth-address"
            value={ethAddress}
            onChange={(e) => setEthAddress(e.target.value)}
            required
          />
          {ethAddress && (
            <div
              style={{
                marginTop: "10px",
                marginBottom: "10px",
                color: "green",
              }}
            >
              <p>valid input!</p>
            </div>
          )}
        </div>
        <div>
          <label for="send-amount" className="form-label">
            Amount to send
          </label>
          <input
            type="text"
            className="form-control"
            id="send-amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            required
          />
          {amount && (
            <div
              style={{
                marginTop: "10px",
                marginBottom: "10px",
                color: "green",
              }}
            >
              <p>valid input!</p>
            </div>
          )}
        </div>
        <div>
          <label for="input-otp" className="form-label">
            OTP Authentication
          </label>
          <input
            type="text"
            className="form-control"
            id="input-otp"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            required
          />
          {otp && (
            <div
              style={{
                marginTop: "10px",
                marginBottom: "10px",
                color: "green",
              }}
            >
              <p>valid input!</p>
            </div>
          )}
        </div>
        <div>
          <button type="button" class="btn btn-outline-secondary">
            Send Tokens
          </button>
        </div>
      </form>
    </div>
  );
}

export default App;
