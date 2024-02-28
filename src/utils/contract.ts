import Web3 from 'web3';

import { abi, ankr, contractAddress } from '@/constants/contracts';

const web3 = new Web3(new Web3.providers.HttpProvider(ankr));

const contract = new web3.eth.Contract(abi, contractAddress);

export async function getBalanceOfUser(address: string): Promise<void> {
  try {
    const balance = await contract.methods.balanceOf(address).call();
    console.log('Balance of user ' + address + ' is ' + balance);
  } catch (error) {
    console.error('Error getting balance of user:', error);
  }
}

export async function getOwnedNFT(address: string, index: number): Promise<void> {
  try {
    const tokenId = await contract.methods.ownedNFT(address, index).call();
    console.log(
      'Token ID of NFT at index ' + index + ' owned by address ' + address + ' is ' + tokenId
    );
  } catch (error) {
    console.error('Error getting owned NFT:', error);
  }
}

export async function getReward(address: string): Promise<void> {
  try {
    const reward = await contract.methods.getReward(address).call();
    console.log('Reward of address ' + address + ' is ' + reward);
  } catch (error) {
    console.error('Error getting reward:', error);
  }
}

export async function stakeNFT(tokenId: string): Promise<void> {
  try {
    const tx = contract.methods.stake([tokenId]);
    const receipt = await tx.send({ from: contractAddress });
    console.log('Staked NFT successfully:', receipt.transactionHash);
  } catch (error) {
    console.error('Error staking NFT:', error);
  }
}

export async function unstakeNFT(tokenId: string): Promise<void> {
  try {
    const tx = contract.methods.unstake([tokenId]);
    const receipt = await tx.send({ from: contractAddress });
    console.log('Unstaked NFT successfully:', receipt.transactionHash);
  } catch (error) {
    console.error('Error unstaking NFT:', error);
  }
}

export async function claimReward(): Promise<void> {
  try {
    const tx = contract.methods.claimReward();
    const receipt = await tx.send({ from: contractAddress });
    console.log('Reward claimed successfully:', receipt.transactionHash);
  } catch (error) {
    console.error('Error claiming reward:', error);
  }
}
