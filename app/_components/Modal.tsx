import { ReactNode } from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  style: string;
  children: ReactNode;
}

function Modal({ isOpen, onClose, style, children }: ModalProps) {
  if (!isOpen) return null;

  return (
    <div className={`fixed inset-0 z-50 ${style}`}>
      {/* Click outside to close modal */}
      <div className="absolute inset-0 bg-black/50" onClick={onClose} />
      {/* Modal content */}
      <div>{children}</div>
    </div>
  );
}

export default Modal;
