
async function Invset(){

    var invNo = document.getElementById("invNo").value;
    var invDate = document.getElementById("invDate").value;
    var invAmount = document.getElementById("invAmount").value;
    mycontract.methods.setInvoiceDetails(invNo,invDate,invAmount).send({from: addr, gas: 100000})
}

async function Panset(){
    // ethereum.request({ method: 'eth_requestAccounts' });
    // var addr = ethereum.selectedAddress;
    


    var invNo = document.getElementById("invNo2").value;
    var BuyerPAN = document.getElementById("BuyerPAN").value;
    var SellerPAN = document.getElementById("SellerPAN").value;

    mycontract.methods.setPANdetails(BuyerPAN,SellerPAN,invNo).send({from: addr, gas: 150000})
}

web3.eth.accounts.wallet.add("0cfe5ede472b392c6c876bfc054d089ecf8b8a2ee03b01fbed613c8d085f38a4");
addr = "0x5cB4dBEA11A444947f7316901eD80Ccb6809a539";

document.getElementById("defaultaccount").innerText=addr;