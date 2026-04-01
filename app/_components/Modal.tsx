import { ReactNode } from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}

// Reusable modal
function Modal({ isOpen, onClose, children }: ModalProps) {
  if (!isOpen) return null;

  return (
    <div
      className={`flex justify-center items-center h-screen w-screen fixed top-0 left-0 z-50`}
    >
      {/* Click outside to close modal */}
      <div className="absolute inset-0 bg-black/50" onClick={onClose} />
      {/* Modal content */}
      <div className="relative">{children}</div>
    </div>
  );
}

export default Modal;
