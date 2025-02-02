import React from 'react';
import NavbarFunctions from '../Navbar/NavbarFunctions';
import NavBarUser from '../Navbar/NavBarUser';
import { useState } from 'react';

const CheckBalance = () => {
    const [selectedAccount, setSelectedAccount] = useState('');
    const [balance, setBalance] = useState(null);

    const handleAccountChange = (e) => {
        setSelectedAccount(e.target.value);
    };

    const handleCheckBalance = () => {
        // Simulate fetching balance from an API or database
        // Replace this with your actual logic to retrieve the balance
        if (selectedAccount === 'savings') {
            setBalance(5000); // Example balance for savings account
        } else if (selectedAccount === 'debitcard') {
            setBalance(1000); // Example balance for debit card account
        }
    };

    return (
        <div>
            <NavBarUser />
            <NavbarFunctions />
            <div className="container mt-3">
                <div className="row">
                    <div className="col-md-6 offset-md-3">
                        <div className="mb-5"> {/* Remove the "card" class to remove square*/}
                            <div className="card-body">
                                <h2 className="card-title text-center violet-text bold-text">Check Balance</h2>
                                <br></br>
                                <div className="form-group">
                                    <label style={{ fontWeight: 'bold' }}>Select Account Type:</label>
                                    <select
                                        className="form-control"
                                        value={selectedAccount}
                                        onChange={handleAccountChange}
                                    >
                                        <option value="">Select Account</option>
                                        <option value="savings">Savings Account</option>
                                        <option value="debitcard">Debit Card Account</option>
                                    </select>
                                </div>
                                <button
                                    className={`btn btn-primary btn-block mt-3 custom-button ${!selectedAccount ? 'violet-disabled' : ''
                                        }`}
                                    onClick={handleCheckBalance}
                                    disabled={!selectedAccount}
                                >
                                    Check Balance
                                </button>

                                {balance !== null && (
                                    <div className="mt-3">
                                        <h4 className="text-center">Current Balance:</h4>
                                        <p className="text-center">{`$${balance}`}</p>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CheckBalance;
