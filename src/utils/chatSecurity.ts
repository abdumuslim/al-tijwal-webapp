
import { AES, enc } from 'crypto-js';

const ENCRYPTION_KEY = 'tijwal-chat-key-2025'; // Simple key for demo purposes
const RATE_LIMIT_KEY = 'tijwal-chat-rate-limit';
const MAX_MESSAGES = 3;
const TIME_WINDOW = 60 * 1000; // 1 minute in milliseconds

// Message encryption/decryption
export const encryptMessage = (text: string): string => {
  return AES.encrypt(text, ENCRYPTION_KEY).toString();
};

export const decryptMessage = (ciphertext: string): string => {
  const bytes = AES.decrypt(ciphertext, ENCRYPTION_KEY);
  return bytes.toString(enc.Utf8);
};

// Rate limiting
export const checkRateLimit = (): { allowed: boolean; remainingTime?: number } => {
  const now = Date.now();
  const stored = localStorage.getItem(RATE_LIMIT_KEY);
  let timestamps: number[] = stored ? JSON.parse(stored) : [];
  
  // Clean old timestamps
  timestamps = timestamps.filter(time => now - time < TIME_WINDOW);
  
  if (timestamps.length >= MAX_MESSAGES) {
    const oldestMessage = timestamps[0];
    const remainingTime = Math.ceil((TIME_WINDOW - (now - oldestMessage)) / 1000);
    return { allowed: false, remainingTime };
  }
  
  timestamps.push(now);
  localStorage.setItem(RATE_LIMIT_KEY, JSON.stringify(timestamps));
  return { allowed: true };
};

