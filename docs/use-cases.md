---
title: Use cases
---

Use cases are a key concept in Software development. They represent what a user of the system can do with said system.

In archimedes we differentiate between Queries and Commands.

## Queries

A Query is a use case that gets information from the system (immutable). Queries can have parameters and return something.

## Commands

A Command is a use case that performs an action or a side effect in the system (mutable). Commands can have parameters but usually don't return anything.

## CQRS

Distinguishing between Commands and Queries means that we can cache the Queries, and the Commands invalidate the cache of the Queries. This conforms Command Query Responsibility Segregation (CQRS). This pattern is described more in [Martin's Fowler blogpost about CQRS](https://martinfowler.com/bliki/CQRS.html).
