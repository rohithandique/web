import { getConfig } from 'config'
import type Web3 from 'web3'

let maybeWeb3Provider: InstanceType<typeof Web3.providers.HttpProvider> | null
let maybeWeb3Instance: Web3 | null

export const getWeb3Instance = async (): Promise<Web3> => {
  if (!maybeWeb3Provider) {
    const web3 = (await import('web3')).default
    maybeWeb3Provider = new web3.providers.HttpProvider(getConfig().REACT_APP_ETHEREUM_NODE_URL)
    maybeWeb3Instance = new web3(maybeWeb3Provider)
    return maybeWeb3Instance!
  } else {
    return maybeWeb3Instance!
  }
}
