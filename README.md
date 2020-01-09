## Prop types and defaults

Define a component with props using object deconstruction. You can then refer to the props without needing to prefix with props. This also helps, I think, define the props:

```
const Component = ({children, name, icon}) => (
  {children}
  {name}
  {icon}
)
```

Using propTypes you can define default prop values, set required props and constrain the content of a prop:

Set a prop type and if it is required:

```
Component.propTypes = {
  name: propTypes.string.isRequired
  icon: propTypes.string
}
```

Set a default prop:

```
Component.defaultProps = {
  name: 'Example Name',
  icon: ''
}
```

## Component composition: custom content

Components that have a _any content can go here_ custom area are difficult in practice. If the custom area accepts any component/content, that component will not be able to interact with the state of the main component.

Conclusion: custom components should be composed by the dev. Do not try to allow for any and all functionality by including a custom area in components. Instead, build a _as common as possible_ component that will fit most basic use cases. Specific use cases will require that the dev composes a custom component, but this can use the same molecules and markup as the one provided by `ui-core`.

## Git stash

Working on a branch and want to switch to another without staging/commiting? Use stashing instead. `git stash` will stash the current changes without committing, and `git stash pop` will grab the stashed changes and reapply them.
