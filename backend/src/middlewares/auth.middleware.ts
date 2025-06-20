import { Request, Response, NextFunction } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";

interface AuthenticatedRequest extends Request {
    user?: string | JwtPayload;
}

export const authMiddleware = (
    req: AuthenticatedRequest,
    res: Response,
    next: NextFunction
): void => {
    const token = req.cookies.token;

    if (!token) {
        res.status(401).json({
            success: false,
            message: "No authentication token found in cookies",
        });
        return;
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET!);
        req.user = decoded;
        next();
    } catch (error) {
        res.status(403).json({
            success: false,
            message: "Invalid or expired token",
        });
        return; 
    }
};
