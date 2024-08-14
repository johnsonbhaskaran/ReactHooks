# React Hooks

### _Definition:_

## useRef

- It allow us to create mutable variables, which will not re-render the component.
- Also used for accessing DOM elements

## useMemo

- It returns a memoized value.
- It's like caching a value so that it doesn't need to be recalculated.
- It runs only when one of it's dependencies gets updated.
- It improves performance.

- useMemo is similar to useCallback. It also improves performance.
- but useMemo returns memoized value
- and useCallback returns a memoized function.
