import { useState } from "react";
import Button from "./components/button/Button";
import Modal from "./components/modal/Modal";
function App() {
  const [openModal, setOpenModal] = useState(false);

  return (
    <div className="flex justify-center items-center flex-col h-screen">
      <Button label="Open Modal" onClick={() => setOpenModal(true)} />
      <Modal isOpen={openModal} onClose={() => setOpenModal(false)}>
        <h2>Confirmation</h2>
        <p></p>
        <div>
          <Button label="Confirm" onClick={() => console.log("Confirmed!")} />
          <Button label="Cancel" onClick={() => setOpenModal(false)} />
        </div>
      </Modal>
    </div>
  );
}

export default App;
