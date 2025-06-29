const cache = new Map();

export const getPromiseFromCache = (key, promiseFn) => {
    if (cache.has(key)) {
        return cache.get(key);
    }

    const promise = promiseFn();

    cache.set(key, promise);

    return promise;
};

export function invalidateCache(key) {
    cache.delete(key);
}
