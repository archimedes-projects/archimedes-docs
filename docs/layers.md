---
title: Layers
---

In Software development we autoimpose limitations in order to make our Software easy to change. One of this limitations are the separation of layers. There is usually 4 layers:

-   domain
-   application
-   delivery
-   infrastructure

## Layers

We can materialize this by creating folders with those names. The main rule of thumb is that you can't interact from certain layers with others.

<div class="text--center margin-vert--lg">
    <img alt="Graph of 3 concentric circles. The innermost shows a label named domain, the outer one has a label named application and the outermost is divided in two halves: infrastructure and delivery" src="/img/layers.png"/>
</div>

As shown in the graph above, the inner layers can "see" the outer layers but not the other way around. When we say "see" we mean that we can use or import things from those layers.

### Domain

The domain is the most important layer. It contains our domain objects, entities, repository definitions, business logic and validations. Reading the code through this layer we should know what the application is about. This layer is framework agnostic and does not know about the other layers at all.

### Application

The application layer has the [use cases](./use-cases.md), the state (if needed), and roles and permissions logic.

### Delivery

The delivery layer holds the code which represents how the user is going to interact with the application. Here we would put the code related to a frontend framework, or in the case we are developing a backend the REST API code. This layer mainly interacts with other layers through use cases.

### Infrastructure

The infrastructure layer has all the code that we know is coupled with a framework or library, or for instance the repository implementations. All this code being coupled and together makes it easier to manage.

## Feature modules

A big application should be split into feature modules. A feature module can contain on its own other subfeatures. In each feature we would see the folder structure that we talked about in the previous section:

```
-   features
    -   user
        -   domain
        -   application
        -   delivery
        -   infrastructure
    -   store
        -   features
            -   offers
                -   domain
                -   application
                -   delivery
                -   infrastructure
            -   discounts
                -   domain
                -   application
                -   delivery
                -   infrastructure
        -   domain
        -   application
        -   delivery
        -   infrastructure
```

We can also add a core folder where we would put all the code that is generic and is used in several domains.

This structure makes it **easier to navigate through the project**, **reduces conflicts** and makes it **more maintainable**.
