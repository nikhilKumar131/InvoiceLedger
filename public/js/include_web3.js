//adding provider
var provider = 'https://eth-goerli.g.alchemy.com/v2/PjLf6IUSKlEKYtbuaND6hxV1A8hyvvVD';
var web3 = new Web3(provider);

//adding smartcontract from Goerli chain
var address="0xC4045214C1da68819E41F5229e004705094b7Bd1";
var abi=[
	{
		"stateMutability": "payable",
		"type": "fallback"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"name": "BuyerPanSetChecker",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "invNo",
				"type": "uint256"
			}
		],
		"name": "getInvoiceDetails",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "BuyerPan",
				"type": "string"
			}
		],
		"name": "getPANtoInv",
		"outputs": [
			{
				"internalType": "uint256[]",
				"name": "",
				"type": "uint256[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "invSetChecker",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "invNo",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "invDate",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "invAmount",
				"type": "uint256"
			}
		],
		"name": "setInvoiceDetails",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "BuyerPan",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "SellerPan",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "invNo",
				"type": "uint256"
			}
		],
		"name": "setPANdetails",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"stateMutability": "payable",
		"type": "receive"
	}
]
var mycontract = new web3.eth.Contract(abi,address);

