
# JavaScript State Management, Prop System, and Router

This project implements a state management system, a prop system, and a simple router, similar to the functionalities found in React. It is a lightweight framework that demonstrates key concepts of state management, templating, and routing.

## Objectives

1. **State System**: Mimics the state management system of React.
2. **Prop System**: Implements a simple prop system for dynamic content rendering.
3. **Simple React Router**: Provides basic routing functionality similar to React Router DOM.

## Features

### State System
- **Default Value**: Set a default value using the constructor of the `state` class.
- **Usage**: Use your state with the `use` method. 
  ```javascript
  const color = new state('red');
  color.use(div.style, 'background'); 
  // This sets div.style.background = 'red';
  ```
- **Update State**: Update the state using the `change` method.
- **Deactivate State**: Remove the state for an element using the `remove` method.
  ```javascript
  color.remove(div.style);
  ```

### Prop System
- **Create a Frame**: In your main HTML file, create an HTML element for the frame and pass it to the `prop` constructor:
  ```html
  <div class="sample">
      <p>
          Some initial text
      </p>
      name={name},
      roll={roll},
      class={class}
      <div>
      </div>
  </div>
  ```
- **Send Props**: Send an object with the props attributes to the `dataentry()` method.
- **Render Output**: Prepare your new element using the `output()` method.

### React Router
- **Initialize Router**: Create an empty element in the DOM and pass it to the `router` constructor to activate the router.
- **Add Routes**: Use the `addroute` method to pass a 'path' and the component that needs to be rendered.
- **Navigate**: Use the `navigate` global function to navigate to any route.
- **Dynamic Routing**: Dynamic routing with parameters is partially implemented. You can access parameters available inside the `navigate()` method of the `router` class.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/your-repo-name.git
   ```
2. Open the `index.html` file in your browser to see the project in action.

## Usage

1. Instantiate the state, prop, and router classes in your JavaScript code.
2. Use the methods provided to manage state, render props, and navigate between routes.

## Contributing

Contributions are welcome! Please feel free to submit a pull request or open an issue for any enhancements or bug fixes.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
