import { useRef, useEffect, useCallback } from "react";
import CloseIcon from "../../assets/close-circle.svg";

interface ModalProps {
  isOpen: boolean;
  onClose?: () => void;
  title?: string;
  children: React.ReactNode;
}

interface CloseButtonProps {
  onClick: () => void;
}

const CloseButton = ({ onClick }: CloseButtonProps) => (
  <button
    name="Close"
    aria-label="Close"
    onClick={onClick}
    className="absolute top-1 right-1"
  >
    <img className="w-8 h-8" src={CloseIcon} />
  </button>
);

export default function Modal({
  isOpen,
  onClose,
  title,
  children,
}: ModalProps) {
  const modalRef = useRef<HTMLDialogElement>(null);

  // prevent rerendering from UseEffect
  const handleCloseModal = useCallback(() => {
    if (onClose) {
      onClose();
    }
  }, [onClose]);

  // basic open modal when isOpen is set to true
  useEffect(() => {
    const modalElement = modalRef.current;
    if (!modalElement) return;

    if (isOpen) {
      modalElement.showModal();
    } else {
      modalElement.close();
    }
  }, [isOpen]);

  // close modal when clicking outside of modal
  useEffect(() => {
    const modalElement = modalRef.current;
    if (!modalElement) return;

    const handleCancel = (event: Event) => {
      event.preventDefault(); // prevent default closing behavior
      handleCloseModal();
    };

    const handleClickOutside = (event: MouseEvent) => {
      if (
        modalElement.open &&
        event.target === modalElement // click on the backdrop
      ) {
        handleCloseModal();
      }
    };

    const handleNativeClose = () => {
      if (modalElement.open) {
        handleCloseModal();
      }
    };

    modalElement.addEventListener("cancel", handleCancel);
    modalElement.addEventListener("click", handleClickOutside);
    modalElement.addEventListener("close", handleNativeClose);

    return () => {
      modalElement.removeEventListener("cancel", handleCancel);
      modalElement.removeEventListener("click", handleClickOutside);
      modalElement.removeEventListener("close", handleNativeClose);
    };
  }, [handleCloseModal]);

  // for when you use escape to close a modal, React keeps track of the close/open state
  const handleKeyDown = (event: React.KeyboardEvent<HTMLDialogElement>) => {
    if (event.key === "Escape") {
      handleCloseModal();
    }
  };

  return (
    <dialog
      ref={modalRef}
      onKeyDown={handleKeyDown}
      className="max-w-fit p-6 rounded-2xl relative m-auto backdrop:backdrop-grayscale-50"
    >
      <div className="p-6 rounded w-96 relative flex-col">
        {onClose ? <CloseButton onClick={handleCloseModal} /> : null}
        {title ? (
          <h1 className="text-center text-xl font-bold">{title}</h1>
        ) : null}
        <div className="p-4">{children}</div>
      </div>
    </dialog>
  );
}
