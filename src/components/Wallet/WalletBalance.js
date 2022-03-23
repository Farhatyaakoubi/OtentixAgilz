import { useState } from 'react';
import { ethers } from 'ethers';

function WalletBalance() {

    const [balance, setBalance] = useState();
    
    const getBalance = async () => {
        const [account] = await window.ethereum.request({ method: 'eth_requestAccounts' });
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const balance = await provider.getBalance(account);
        setBalance(ethers.utils.formatEther(balance));
    };
  
    return (
      <div>
          <h5>Your Balance: {balance}</h5>
          <button className="btn w-100 mt-3 mt-sm-4" type="submit">Connect to MetaMask</button>
      </div>
    );
  };
  
  export default WalletBalance;