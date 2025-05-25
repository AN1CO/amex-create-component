import { useState } from "react";
import Modal from "./components/modal/Modal";
function App() {
  const [openModal, setOpenModal] = useState(false);

  return (
    <div className="flex justify-center items-center flex-col h-screen">
      <button
        onClick={() => setOpenModal(true)}
        className="rounded-md p-4 text-white bg-violet-600 hover:bg-violet-400 hover:text-black"
      >
        Open Modal
      </button>
      <Modal isOpen={openModal} onClose={() => setOpenModal(false)}>
        <h2>Confirmation</h2>
        <p></p>
        <div>
          <button onClick={() => console.log("Confirmed!")}>Confirm</button>
        </div>
      </Modal>
    </div>
  );
}

export default App;
