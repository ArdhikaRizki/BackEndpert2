// src/utils/jwt.util.ts

import jwt from 'jsonwebtoken';

// Interface untuk mendefinisikan data apa saja yang akan disimpan di dalam token
interface IJwtPayload {
  id: number;
  username: string;
  email: string;
  name: string;
}

/**
 * Fungsi untuk generate JWT
 * @param payload Data yang akan dimasukkan ke dalam token
 * @returns {string} Token JWT
 */
export const UGenerateToken = (payload: IJwtPayload): string => {
  // Ambil secret key dari environment variable, jangan tulis langsung di kode!
  const secretKey = process.env.JWT_SECRET;

  if (!secretKey) {
    throw new Error('JWT_SECRET tidak ditemukan di environment variables');
  }

  // Buat token dengan masa berlaku 1 hari (bisa disesuaikan)
  const token = jwt.sign(payload, secretKey, { expiresIn: '1d' });

  return token;
};