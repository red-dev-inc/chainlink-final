import Avalanche from "avalanche"

//Fuji Testnet Configuration

const network_id = 5;
const blockchain_id = 'X'
const port = 443
const protocol = 'https'
const ip = 'api.avax-test.network'
const avax = new Avalanche(ip, port, protocol, network_id, blockchain_id)
const pchain = avax.PChain()


//Smart Contract Details

const contract_address = '0x5d1A94fdEA7372c5a8432064DDdAC0579aFA8B9B'
const abi = [{
        "inputs": [{
                "internalType": "string",
                "name": "nid",
                "type": "string"
            },
            {
                "internalType": "uint256",
                "name": "id",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "reward",
                "type": "uint256"
            }
        ],
        "name": "storeData",
        "outputs": [],
        "stateMutability": "payable",
        "type": "function"
    },
    {
        "inputs": [{
            "internalType": "uint256",
            "name": "id",
            "type": "uint256"
        }],
        "name": "getData",
        "outputs": [{
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
        "inputs": [],
        "name": "getLength",
        "outputs": [{
            "internalType": "uint256[]",
            "name": "",
            "type": "uint256[]"
        }],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [{
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
        }],
        "name": "validatorIds",
        "outputs": [{
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
        }],
        "stateMutability": "view",
        "type": "function"
    }
]


export { pchain, contract_address, abi }