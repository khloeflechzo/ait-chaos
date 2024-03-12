export async function fetchCollectionByAddress(address: string): Promise<string | null> {
  const url = `https://testnets-api.opensea.io/api/v2/chain/sepolia/account/${address}/nfts?collection=chaos-23`;
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Failed to fetch data: ${response.status} ${response.statusText}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching data:', error);
    return null;
  }
}
