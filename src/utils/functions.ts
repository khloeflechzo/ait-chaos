'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
// Captures 0x + 4 characters, then the last 4 characters.
const truncateRegex = /^(0x[a-zA-Z0-9]{0})[a-zA-Z0-9]+([a-zA-Z0-9]{3})$/;
/**
 * Truncates an ethereum address to the format 0x0000…0000
 * @param address Full address to truncate
 * @returns Truncated address
 */
export const truncateEthAddress = function (address: string): string {
  const match = address.match(truncateRegex);
  if (!match) return address;
  return match[1] + '\u2026' + match[2];
};
