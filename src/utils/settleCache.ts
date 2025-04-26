class SettleCache {
  storage: Storage
  //TODO constructor init func
  constructor(storage: Storage) {
    this.storage = storage
  }
  //TODO get cache func
  getCache(key: string): any {
    const value = this.storage.getItem(key)
    if (value) {
      return JSON.parse(value)
    }
  }
  //TODO set cache func
  setCache(key: string, value: any): void {
    this.storage.setItem(key, JSON.stringify(value))
  }
  //TODO remove cache func
  removeCache(key: string): void {
    this.storage.removeItem(key)
  }
  //TODO clear cache func
  clearCache(): void {
    this.storage.clear()
  }
  //TODO get cache size func
  getCacheSize(): number {
    let size = 0
    for (let i = 0; i < this.storage.length; i++) {
      const key = this.storage.key(i)
      if (key) {
        size += this.storage.getItem(key)?.length || 0
      }
    }
    return size
  }
  //TODO get cache keys func
  getCacheKeys(): string[] {
    const keys: string[] = []
    for (let i = 0; i < this.storage.length; i++) {
      const key = this.storage.key(i)
      if (key) {
        keys.push(key)
      }
    }
    return keys
  }
  //TODO get cache values func
  hasCache(key: string): boolean {
    return this.storage.getItem(key) !== null
  }
}

const localStorageCache = new SettleCache(localStorage)
const sessionStorageCache = new SettleCache(sessionStorage)

export { localStorageCache, sessionStorageCache }
