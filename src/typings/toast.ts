export interface Toast {
  title: string;
  message: string;
  duration?: number;
  type?: ToastType;
}

export interface ToastState extends Toast {
  id: string;
}

export type ToastType = 'success' | 'error' | 'info';
