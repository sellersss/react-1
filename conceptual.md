### Conceptual Exercise

Answer the following questions below:

- What is React? When and why would you use it?

React is a Javascript library for building extensive user interfaces. It is a good example of the DRY principle as it incorporates reusable components across a web application. A great benefit of using React over vanilla Javascript is that the codebase is much easier to maintain and scale when implementing reusable components. Use cases for React are nearly endless.

- What is Babel?

Babel is a Javascript compiler used to convert ECMAScript 2015+ code into a backwards compatible version of Javascript in current and older browsers or environments.

- What is JSX?

JSX stands for Javascript XML and it allows us to write HTML in React.

- How is a Component created in React?

Components are created using a function or class. A function component accepts a single argument `props` and returns the contents of said component. An ES6 class component extends `React.Component` and uses a `render()` function to return the components contents. Examples:
```javascript
// function component
function Library(props) {
  return <ul><li>{props.book}</li></ul>;
}

// class component
class Library extends React.Component {
  render() {
    return <ul><li>{this.props.book}</li></ul>;
  }
}
```
- What are some difference between state and props?

State and props differ in which component "owns" certain data. State is owned locally and updated by the component itself, while props are owned by a parent component and are read only. Props can only be updated if a callback function is passed to the child to trigger an upstream change. The state of a parent component can be pass a prop to the child. They are referencing the same value, but only the parent component can update it.

- What does "downward data flow" refer to in React?

Downward data flow is provided by React to ensure a stable code. React eliminates any possible effects of child elements against parent ones. Only one downward direction of data flow is used. Any object can be changed witout effect to parent data by simple modification of its state and application.

- What is a controlled component?

In HTML, form elements typically maintain their own state and update it based on user input. In React, mutable state is typically kept in the state property of components, and only updated with `setState()`. This is called a controlled component.

- What is an uncontrolled component?

An uncontrolled component works like form elements do outside of React. When a user inputs data into a form field the updated information is reflected without React needing to do anything. However, this also means that you can't force the field to have a certain value.

- What is the purpose of the `key` prop when rendering a list of components?

Keys help React identify which items have changed, are added, or are removed from a list. Keys should be given to the elements inside an array to give the elements a stable identity.

- Why is using an array index a poor choice for a `key` prop when rendering a list of components?

Indexes for keys should only be used as a last resort. If the order of items in an array changes, then the index will also change. This can throw off React by messing with the component's state.

- Describe useEffect.  What use cases is it used for in React components?

`useEffect` accepts a function that contains likely effectful code. The function passed to `useEffect` will run after the render is committed to the screen, which allows for more imperative elements. Timing effects and conditionally firing effects are the main use cases.

- What does useRef do?  Does a change to a ref value cause a rerender of a component?

`useRef` returns a mutatable ref object whose `.current` property is initialized to a passed argument, `initialValue`. The returned object will persist for the full lifetime of the component. A change to a ref value causes a "rerender" (AKA, DOM manipulation) of a specific element. To rerender the entire component, `useState` must be used instead of `useRef`.

- When would you use a ref? When wouldn't you use one?

The most common use case of `useRef` is to access and manipulate DOM elements outside of the React component. Its value will persist for the component lifetime. You wouldn't use one when you are updating an entire page's content.

- What is a custom hook in React? When would you want to write one?

A custom hook lets you use state and other React features without writing a class. Building your own hooks lets you extract component logic into reusable functions. You can use them when you need to share logic between two React functions or hooks.