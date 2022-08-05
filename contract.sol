// SPDX-License-Identifier: MIT

pragma solidity^0.8.7;

contract Invoice{

    //set and get invoice Details
    mapping(uint => string) dateMapping;
    mapping(uint => uint) amountMapping;
    mapping(uint => bool) public invSetChecker;
    function setInvoiceDetails(uint invNo, string calldata invDate, uint invAmount) public{
        require(invSetChecker[invNo] == false,"This invoice number is already used");
        dateMapping[invNo] = invDate;
        amountMapping[invNo] = invAmount;
        invSetChecker[invNo] = true;
    }

    function getInvoiceDetails( uint invNo) public view returns(string memory, uint){
        return  (dateMapping[invNo] , amountMapping[invNo]);
    }

    //set and get Seller and Buyer Pan
    mapping(string => uint[]) BuyerToInvoiceArray;
    mapping(string => uint[]) SellerToInvoiceArray;
    mapping(string => bool) public BuyerPanSetChecker;
    
    function setPANdetails(string memory BuyerPan, string memory SellerPan, uint invNo) public {
        require(invSetChecker[invNo] == true,"Enter the invoice details first");
        BuyerToInvoiceArray[BuyerPan].push(invNo);
        SellerToInvoiceArray[SellerPan].push(invNo);
        BuyerPanSetChecker[BuyerPan] = true;
    }

    function getPANtoInv(string memory BuyerPan) public view returns(uint[] memory){
        return BuyerToInvoiceArray[BuyerPan];
    }

    //fallbackfunction
    receive() external payable{}
    fallback() external payable{}
}

//0xC4045214C1da68819E41F5229e004705094b7Bd1
