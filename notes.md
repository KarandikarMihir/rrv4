- Wrap routes with `<BrowserRouter />`
- `<Link>` takes `to` as a prop. Don't forget prefix it by `/`.
- Props injected to a route- `history`, `location`, `match`
    - `history` has methods like `go()`, `goBack()`, `push()`, `listen()`
    - `location` has `pathname`, `key` etc.
    - `match` has `isExact`, `params`, `pathname`, `url` etc.
- Children routes' `path` should be prefixed by `match.url` and then append respective child's path.
    - Eg. ```<Link to={`${match.url}/props-vs-state`}>{'Props Vs. State'}</Link>```
- Route can take `render` as a prop. Expects a function that returns a react element.
- `exact` prop is used to avoid unwanted rendering of a route.