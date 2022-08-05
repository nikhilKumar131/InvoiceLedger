function home(){
    location.href="http://localhost:3000/"
}

function admin(){
    location.href="http://localhost:3000/admin"
}


/* To connect using MetaMask */
async function metamask() { if (window.ethereum) {
 
    await window.ethereum.request({ method: "eth_requestAccounts" });
    window.web3 = new Web3(window.ethereum);
    
   } else {
    console.log("No wallet");
   }
}

