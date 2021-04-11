pragma solidity >=0.7.0 <0.9.0;

contract rediyeti {
    
    struct validatorInfo {
        string nid;
        uint reward;
    }
    
    mapping(uint => validatorInfo) validators;
    uint[] public validatorIds;
    
    function storeData(string memory nid, uint id, uint reward) public payable {
        require(msg.value > .01 ether);
        validatorInfo storage newValidator = validators[id];
        newValidator.nid = nid;
        newValidator.reward = reward;
        validatorIds.push(id);
    }
    
    function getData(uint id) public view returns (string memory, uint){
        validatorInfo storage v = validators[id];
        return (v.nid, v.reward);
    }
    
    function getLength() public view returns (uint[] memory) {
        return validatorIds;
    }

}
