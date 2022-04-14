import { ReactNode } from 'react';
import ReactDOM from 'react-dom';

interface PortalProps {
  children: ReactNode;
}

function CreateToastPortal({ children }: PortalProps) {
  const container = document.getElementById('toast-container');
  let newContainer;

  if (!container) {
    const $toast = document.createElement('div');
    $toast.setAttribute('id', 'toast-container');

    newContainer = $toast;
    document.body.appendChild(newContainer);
  } else {
    newContainer = container;
  }

  return ReactDOM.createPortal(children, newContainer);
}

export default CreateToastPortal;
