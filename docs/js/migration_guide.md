---
title: Migration guide
---

## Migration Guide 2.0

---

### Change `@EvictCache` decorator to `@InvalidateCache`

```typescript
@InvalidateCache
export class FooQry extends Query<number> {}
```

### Links are async now

If you have any custom link you should change your `next` method to return a Promise now.

**BEFORE**

```typescript
import { BaseLink } from '@archimedes/arch'

export class CustomLink extends BaseLink {
  next(context: Context): void {
    [...]
    this.nextLink.next(context)
  }
}
```

**AFTER**

```typescript
import { BaseLink } from '@archimedes/arch'

export class CustomLink extends BaseLink {
  async next(context: Context): Promise<void> {
    [...]
    await this.nextLink.next(context)
  }
}
```

### Options to CacheManager and NotificationCenter

Archimedes 2.0 adds options to CacheManager and NotificationCenter, so maybe you would need change the way to instance it.

An example of Angular provider injection change:

**BEFORE**

```typescript
const ARCHIMEDES_PROVIDERS = [
    { provide: CacheManager, useClass: CacheManager },
    { provide: NotificationCenter, useClass: NotificationCenter }
]
```

**AFTER**

```typescript
const ARCHIMEDES_PROVIDERS = [
    { provide: CacheManager, useFactory: () => new CacheManager() },
    { provide: NotificationCenter, useFactory: () => new NotificationCenter() }
]
```

### Runner is deprecated

Now you should use Archimedes class to create the chain of responsibility:

```typescript
import { Archimedes, LoggerLink, ExecutorLink } from '@archimedes/arch'

async ngDoBootstrap(applicationRef: ApplicationRef) {
    const loggerLink = this.injector.get(LoggerLink)
    const executorLink = this.injector.get(ExecutorLink)
    Archimedes.createChain([executorLink, loggerLink])
}
```

---
