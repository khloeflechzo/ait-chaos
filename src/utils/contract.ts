// import { ethers } from 'ethers';

// import { abi, contractAddress, ifura } from '@/constants/contracts';

// const provider = new ethers.JsonRpcProvider(ifura);
// export const contract = new ethers.Contract(contractAddress, abi, provider);

// async function getBalanceOfUser(address: string | number): Promise<void> {
//   try {
//     const tx = await contract.balanceOf(address);
//     console.log('Balance of user ' + address + ' is ' + tx);
//   } catch (error) {
//     console.error('Error staking NFT:', error);
//   }
// }

// async function stakeNFT(tokenId: string | number): Promise<void> {
//   try {
//     const tx = await contract.stake([tokenId]);
//     await tx.wait();
//     console.log('Staked NFT successfully');
//   } catch (error) {
//     console.error('Error staking NFT:', error);
//   }
// }

// async function unstakeNFT(tokenId: string | number): Promise<void> {
//   try {
//     const tx = await contract.unstake([tokenId]);
//     await tx.wait();
//     console.log('Unstaked NFT successfully');
//   } catch (error) {
//     console.error('Error unstaking NFT:', error);
//   }
// }

// async function claimReward(): Promise<void> {
//   try {
//     const tx = await contract.claimReward();
//     await tx.wait();
//     console.log('Reward claimed successfully');
//   } catch (error) {
//     console.error('Error claiming reward:', error);
//   }
// }

// export { claimReward, getBalanceOfUser, stakeNFT, unstakeNFT };

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

export async function getOwnedNFT(user: string, index: number): Promise<void> {
  try {
    const tokenId = await contract.methods.ownedNFT(user, index).call();
    console.log('Token ID of NFT at index ' + index + ' owned by user ' + user + ' is ' + tokenId);
  } catch (error) {
    console.error('Error getting owned NFT:', error);
  }
}
