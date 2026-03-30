

export type CacheEntry<T> = {
    createdAt: number;
    val: T;
};

export class Cache {
    #cache = new Map<string, CacheEntry<any>>();
    #reapIntervalID: NodeJS.Timeout | undefined = undefined;
    #interval: number;

    add<T>(key: string, val: T) {
        this.#cache.set(key, {
            createdAt: Date.now(),
            val: val
        });
    }

    get<T>(key: string): T | undefined {
        const entry = this.#cache.get(key);
        if (entry) {
            return entry.val;
        } else {
            return undefined;
        };
    }

    #reap() {
        for (const entry of this.#cache.keys()) {
            const cached = this.#cache.get(entry);
            if (cached && cached.createdAt < Date.now()-this.#interval) {
                this.#cache.delete(entry);
            }
        };
        return;
    }

    #startReapLoop() {
        this.#reapIntervalID = setInterval(() => {
            this.#reap();
        }, this.#interval);
    }

    stopReapLoop() {
        clearInterval(this.#reapIntervalID);
        this.#reapIntervalID = undefined;
    }

    constructor(num: number) {
        this.#interval = num;
        this.#startReapLoop();
    }

}