---
title: Use cases
---

Use cases are a key concept in Software development. They represent what an user of the system can do with said system.

In archimedes we differentiate between Queries and Commands.

A Query is an use case that gets information from the system (immutable).

A Command is an use case that peforms an action or a side effect in the system (mutable).

Distinguishing between Commands and Queries mean that we can cache the Queries and the Commands invalidate the cache of the Queries. This conforms Command Query Responsibility Segregation (CQRS).
