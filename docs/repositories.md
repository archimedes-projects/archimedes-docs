---
title: Repositories
---

[The repository pattern](https://martinfowler.com/eaaCatalog/repository.html) abstracts how we obtain and interact with from a datasource. That datasource can be local or remote. It can even change in runtime. We usually define an interface to define how we interact with the data, and then we have one or more implementations.

The definition of the interface goes in the domain layer. The implementation in the infrastructure layer. You can [read more about domain and infrastructure in the layers section](/docs/layers).
