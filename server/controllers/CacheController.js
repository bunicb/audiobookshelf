const Logger = require('../Logger')

class CacheController {
  constructor() { }

  // POST: api/cache/purge
  async purgeCache(req, res) {
    if (!req.user.isAdminOrUp) {
      return res.sendStatus(403)
    }
    Logger.info(`[MiscController] Purging all cache`)
    await this.cacheManager.purgeAll()
    res.sendStatus(200)
  }

  // POST: api/cache/items/purge
  async purgeItemsCache(req, res) {
    if (!req.user.isAdminOrUp) {
      return res.sendStatus(403)
    }
    Logger.info(`[MiscController] Purging items cache`)
    await this.cacheManager.purgeItems()
    res.sendStatus(200)
  }
}
module.exports = new CacheController()