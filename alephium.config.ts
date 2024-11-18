import { Configuration } from '@alephium/cli'
import { Number256 } from '@alephium/web3'
import dotenv from 'dotenv'

dotenv.config()

export type Settings = {
    issueTokenAmount: Number256
}
const defaultSettings: Settings = { issueTokenAmount: 100n }

const configuration: Configuration<Settings> = {
    networks: {
        devnet: {
            nodeUrl: 'http://127.0.0.1:22973',
            privateKeys: [`1e0ed9f3a7976111818cb6cf97855f5df0382cdf8cc5bfcf35b3019e96e5333a`],
            settings: defaultSettings
        },
        testnet: {
            nodeUrl: process.env.TESTNET_NODE_URL as string,
            privateKeys: [`1e0ed9f3a7976111818cb6cf97855f5df0382cdf8cc5bfcf35b3019e96e5333a`],
            settings: defaultSettings
        },
        mainnet: {
            nodeUrl: process.env.TESTNET_NODE_URL as string,
            privateKeys: [`1e0ed9f3a7976111818cb6cf97855f5df0382cdf8cc5bfcf35b3019e96e5333a`],
            settings: defaultSettings
        }
    }
}

export default configuration