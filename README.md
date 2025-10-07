<a href="http://customer-support-zone-nur-nayeem.surge.sh/">Live Link<a/>

## 1. What is JSX, and why is it used?

**Ans:** JSX stands for Javascript XML. It looks like HTML but it actually written inside javascript code. It let us write UI elements such as button, text and images in a way that looks like HTML. It is primarily used with libraries like React for building user interfaces.  

There are several benefits come with using JSX:

1. **Readability:** JSX code closely resembles the layout structure, making it easier for developers to understand the structure and visual representation of the UI components.

2. **Maintainability:** As components grow and become more complex, JSX keeps them readable and maintainable. 

3. **Reusability:** Components written with JSX can be reused across different parts of the application, reducing code duplication and making development faster.

4. **Performance Optimizations:** React can optimize JSX during the transpilation process, which can result in performance benefits in certain scenarios.

*Example:* Using JSX allows us to build complex UIs with components that are both efficient and easy to understand, aiding in faster development and iterations.

---

## 2. What is the difference between State and Props?

**Ans:** In React application, props are data passed from parent to a child component. On the other hand state is data managed internally by a component that can change over time. 

**Difference:**

**Props (Short form of properties):**

1. Props are passed from a parent component to a child component.  
2. They are immutable, meaning they cannot be changed by the child component receiving them.  
3. They are similar to function arguments, a component receives props to customize its output.  

**State:**

1. State is managed and controlled entirely by the component itself.  
2. State is Mutable, meaning it can be changed within the component using methods like setState.  
3. It is similar to a local variable within a function that can be updated and influences the component's behavior.  

---

## 3. What is the useState hook, and how does it work?

**Ans:** The useState hook in React is a built-in function that helps a functional component remember and update changing data, which is called state. When this state changes, React automatically re-renders the component to show the latest information. The hook returns an array with two items: the first is the current state value, and the second is a function that we can use to update that value whenever needed.

**How useState works:**

1. Call `useState()` with an initial value to set the starting state.  
2. Normally React stores this state and keeps it between re-renders.  
3. `useState` hook returns two items: one is current state value, another is a set state function.  
4. When the set state function is called with a new value, React re-renders the component and the current state value changes.  

---

## 4. How can you share state between components in React?

**Ans:** We can share state between components in several ways. Some of those are below:

1. **Lifting State Up:** Initialize the state in the closest common parent component and pass it down as props to the child components that need it.  
2. **Using React Context:** Create a context with `React.createContext()`, wrap the components with a Provider, and access the shared state in any child using `useContext()` hook.  
3. **Using a global state library:** For large apps, use tools like Redux or Zustand to keep state in a central store that all components can access.  

There are more ways to share states between components such as query params, custom hooks, etc.

---

## 5. How is event handling done in React?

**Ans:** Instead of using `addEventListener` on DOM elements, React allows us to declare event handlers directly within our JSX elements using camelCase attribute names such as `onClick`, `onChange`, `onSubmit`, etc. When the event happens, React automatically calls this function and provides an event object with details about the action. Inside the function, state can be updated using `useState` or other actions can be performed. Some common uses are below:

1. Using `event.preventDefault()` to stop default browser behavior, like form submission.  
2. Updating state to change what appears on the screen.  
3. Calling other functions or props to perform additional actions.  
