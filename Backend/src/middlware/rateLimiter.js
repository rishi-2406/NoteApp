import ratelimit from "../config/upstash.js";


const rateLimiter = async (req , res , next) => {
    try {
        // limit key usually is user id so rate limiting is per user
        const {success} = await ratelimit.limit('limit-key');
        if(!success) return res.status(429).json({message : "Too many request try again later"})
        next;
    } catch (e) {
        console.log("rate limit error", e);
        next(e); // we can add error to the next function
    }
    next();
}

export default rateLimiter;
