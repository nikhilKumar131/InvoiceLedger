
function invToDetails(){
    var inv = document.getElementById('invoiceNo').value;
        mycontract.methods.getInvoiceDetails(inv).call().then((input) =>{
            document.getElementById('resultsInv').innerHTML= "Date:  " + input[0] +"    " +"InvoiceAmount:   " + input[1];

        })}


async function PanToInv(){
    var Pan = document.getElementById("PanId").value;
        var invArray = await mycontract.methods.getPANtoInv(Pan).call();
        var length = await invArray.length
        console.log(length)
        var text = "";
        for(let i=0; i<length; i++){
            console.log(invArray[i]);
            text = text + invArray[i] +" \n";
        }
        document.getElementById("resultsPAN").innerText= "Invoice numbers: \n" + text;
    }


    web3.eth.accounts.wallet.add("0cfe5ede472b392c6c876bfc054d089ecf8b8a2ee03b01fbed613c8d085f38a4");
    addr = "0x5cB4dBEA11A444947f7316901eD80Ccb6809a539";