const cache = new Map();

const TTL = 60 * 1000; // 1 minute

function cacheMiddleware(req, res, next) {
    const key = req.originalUrl;
    const cachedData = cache.get(key);

    // Check if valid cached data exists
    if (cachedData) {
        const age = Date.now() - cachedData.createdAt;

        // Cache is still valid
        if (age < TTL) {
            res.setHeader("X-Cache", "HIT");

            return res.json(cachedData.data);
        }

        // Cache has expired
        cache.delete(key);
    }

    // Cache MISS
    res.setHeader("X-Cache", "MISS");

    const originalJson = res.json.bind(res);

    res.json = (data) => {
        cache.set(key, {
            data,
            createdAt: Date.now()
        });

        return originalJson(data);
    };

    next();
}

function invalidateCache() {
    cache.clear();
}

module.exports = {
    cacheMiddleware,
    invalidateCache
};