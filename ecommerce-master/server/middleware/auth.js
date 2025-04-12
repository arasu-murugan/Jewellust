import jwt from 'jsonwebtoken'

const auth = (request, response, next) => {
    try {
        // Extract token from cookie or authorization header
        const bearerHeader = request?.headers?.authorization;
        const token =
            request.cookies?.accessToken ||
            (bearerHeader && bearerHeader.startsWith("Bearer ") ? bearerHeader.split(" ")[1] : null);

        if (!token) {
            return response.status(401).json({
                message: "Need to login to continue shopping!",
                success: false,
                error: true
            });
        }

        // Verify token using secret key
        const decoded = jwt.verify(token, process.env.SECRET_KEY_ACCESS_TOKEN);

        if (!decoded) {
            return response.status(401).json({
                message: "Unauthorized credentials",
                success: false,
                error: true
            });
        }

        // Attach userId to request object
        request.userId = decoded.id;

        // Proceed to next middleware/controller
        next();
    } catch (error) {
        return response.status(500).json({
            message: error.message || "Internal Server Error",
            success: false,
            error: true
        });
    }
};

export default auth;
