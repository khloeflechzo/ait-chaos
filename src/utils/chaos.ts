import Web3 from 'web3';

import { abi, ankr, chaosAddress } from '@/constants/contracts';

const web3 = new Web3(new Web3.providers.HttpProvider(ankr));

const contract = new web3.eth.Contract(abi, chaosAddress);

export async function chaosGetBalanceOfUser(address: string): Promise<void> {
  try {
    const rawBalance: string = await contract.methods.balanceOf(address).call();
    const balance: string = web3.utils.fromWei(rawBalance, 'ether');
    console.log('Balance of user ' + address + ' is ' + balance);
  } catch (error) {
    console.error('Error getting balance of user:', error);
  }
}
