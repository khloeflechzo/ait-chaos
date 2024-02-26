import { ethers } from 'ethers';

import { abi, contractAddress, ifura } from '@/constants/contracts';

const provider = new ethers.JsonRpcProvider(ifura);
export const contract = new ethers.Contract(contractAddress, abi, provider);

async function getBalanceOfUser(address: string | number): Promise<void> {
  try {
    const tx = await contract.balanceOf(address);
    console.log('Balance of user ' + address + ' is ' + tx);
  } catch (error) {
    console.error('Error staking NFT:', error);
  }
}

async function stakeNFT(tokenId: string | number): Promise<void> {
  try {
    const tx = await contract.stake([tokenId]);
    await tx.wait();
    console.log('Staked NFT successfully');
  } catch (error) {
    console.error('Error staking NFT:', error);
  }
}

async function unstakeNFT(tokenId: string | number): Promise<void> {
  try {
    const tx = await contract.unstake([tokenId]);
    await tx.wait();
    console.log('Unstaked NFT successfully');
  } catch (error) {
    console.error('Error unstaking NFT:', error);
  }
}

async function claimReward(): Promise<void> {
  try {
    const tx = await contract.claimReward();
    await tx.wait();
    console.log('Reward claimed successfully');
  } catch (error) {
    console.error('Error claiming reward:', error);
  }
}

export { claimReward, getBalanceOfUser, stakeNFT, unstakeNFT };
