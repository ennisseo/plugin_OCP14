# Modal Component

This is a simple, reusable modal component for React applications. It can be closed by clicking outside the modal content or by pressing the escape key.

## Installation

Install the component with npm:

```bash
npm install @ennisseo/modal-component
```

## Usage / Examples

Here's an example of how to use the Modal component:

```js
import React, { useState } from 'react';
import Modal from '@ennisseo/modal-component';

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <div>
      <button onClick={openModal}>Open Modal</button>
      <Modal isOpen={isOpen} closeModal={closeModal} />
    </div>
  );
}

export default App;
```
## Props

The Modal component accepts the following props:

- `isOpen` (boolean): Determines whether the modal is open or not.
- `closeModal` (function): A function that closes the modal.

## Styling

The `Modal` component uses the following CSS classes, which you can override in your own CSS:

- `modal-overlay`: Applied to the modal's backdrop.
- `modal-content`: Applied to the modal's content area.
- `modal-close-button`: Applied to the modal's close button.