import React from 'react';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <Header />
      <Services />
      <FeeCalculator />
      <Contact />
    </div>
  );
};

const Header = () => {
  return (
    <header className="App-header">
      <h1>Nyabawa Legal Practice</h1>
      <nav>
        <ul>
          <li>Home</li>
          <li>Services</li>
          <li>Contact</li>
        </ul>
      </nav>
    </header>
  );
};

const Services = () => {
  return (
    <section className="services">
      <h2>Our Services</h2>
      <ul>
        <li>Consultation</li>
        <li>Legal Advice</li>
        <li>Fee Calculator</li>
      </ul>
    </section>
  );
};

const FeeCalculator = () => {
  const [amount, setAmount] = React.useState(0);
  const [fee, setFee] = React.useState(0);

  const calculateFee = () => {
    // Simple fee calculation logic
    setFee(amount * 0.1); // Example: 10% fee
  };

  return (
    <section className="fee-calculator">
      <h2>Fee Calculator</h2>
      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        placeholder="Enter amount"
      />
      <button onClick={calculateFee}>Calculate Fee</button>
      <p>Fee: ${fee.toFixed(2)}</p>
    </section>
  );
};

const Contact = () => {
  return (
    <section className="contact">
      <h2>Contact Us</h2>
      <p>Email: info@nyabawalegal.com</p>
      <p>Phone: 123-456-7890</p>
    </section>
  );
};

export default App;