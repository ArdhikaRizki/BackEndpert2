import { Request, Response, NextFunction } from 'express';
import { SLogin } from '../services/auth.service';

export const CLogin = async (
    req: Request,
    res: Response,
    next: NextFunction
): Promise<void> => {
    try {
        console.log('=== DEBUG LOGIN ===');
        console.log('req.body:', req.body);
        console.log('Content-Type:', req.headers['content-type']);
        const { username, password } = req.body;
        const result = await SLogin(username, password);
        res.status(200).json(result);
    } catch (error) {
        next(error);
    }
};