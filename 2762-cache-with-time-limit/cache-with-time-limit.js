var TimeLimitedCache = function() {
    this.cache = new Map();
};

TimeLimitedCache.prototype.set = function(key, value, duration) {
    const existing = this.cache.get(key);

    const alreadyExists = existing !== undefined;

    if (alreadyExists) {
        clearTimeout(existing.timer);
    }

    const timer = setTimeout(() => {
        this.cache.delete(key);
    }, duration);

    this.cache.set(key, {
        value: value,
        timer: timer
    });

    return alreadyExists;
};

TimeLimitedCache.prototype.get = function(key) {
    const item = this.cache.get(key);

    if (item === undefined) {
        return -1;
    }

    return item.value;
};

TimeLimitedCache.prototype.count = function() {
    return this.cache.size;
};