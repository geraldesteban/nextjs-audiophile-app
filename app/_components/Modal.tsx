import { ReactNode } from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  style: string;
  children: ReactNode;
}

// Reusable modal
function Modal({ isOpen, onClose, style, children }: ModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50" onClick={onClose} />

      {/* Modal */}
      <div className="relative z-10" onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>
  );
}

export default Modal;
