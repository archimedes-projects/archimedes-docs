---
title: Utils
---

Archimedes has baked in some utils that are usually needed in most projects:

-   Maybe
-   Datetime
-   HttpClient
-   Observer
-   Extended Error
-   Is Promise
-   Types
    -   Class

## Maybe

This is a monad that improves `null` and `undefined` handling. It implements the [null object pattern](https://sourcemaking.com/design_patterns/null_object). It's best used with deep nullable and optional object structures, in other cases you might be better off with using the [nullish coalescing operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing_operator) and [optional chaining operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining).

You can create a Maybe like so:

```typescript
Maybe.from(42)
```

When you use a Maybe in order to access a value you have to use the method `getOrElse`:

```typescript
const maybe = Maybe.from(42)
maybe.getOrElse(0)
```

This is best used with objects:

```typescript
type Type = { foo: Maybe<{ bar: string }> }
const maybeMap = Maybe.from<Type>({ foo: Maybe.from({ bar: 'qux' }) })
expect(maybeMap.flatMap(x => x.foo).map(x => x.bar)).toEqual(Maybe.from('qux'))
```

You can use the `map` method to map an existing value to another one. If the Maybe doesn't have a value then the map is not called. If you want to unwrap a Maybe inside a Maybe you can use the `flatMap` method.

## Datetime

This utility improves Date handling. Every date you create is in UTC timezone.

## Observer


