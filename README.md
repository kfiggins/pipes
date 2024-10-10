# pipes

# Concept

Create a one way server rendered JS framework using FP pipes.

# Theory of how it will work

1. Get all needed data. First pipe, all calls will be nested under this pipe.
2. Pipe to create the components. Each component will have HTML, CSS, JS.
3. A step to glue all of the components together into an single HTML, single Stylesheet and single .js file
4. Send back to client.


Any actions that are taken will essentially reload the page, get all the data again (future oculd have some caching ideas) then run through all the pipes with the fresh data.

The pipes need to be able to have children so it's easy to nest components together.


# How I'd like it to look

``` js

pipe({ctx})
    .getData()
    .generateComponents()
    .compileComponents()

```

``` js

pipe({ctx, data})
    .generateHeader()
    .generateBody()

```

