const permitMiddleware = (roles = []) => {
    return (req, res, next) => {
        if (!req.user) {
            return res.status(401).send({"msg": "Unauthenticated"});
        }
        if (!roles.includes(req.user.role)) {
            return res.status(403).send({"msg": "Unauthorized"});
        }
        next();
    }
};
export default permitMiddleware
