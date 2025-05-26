import type { StoryObj } from "@storybook/react";
import { useState } from "react";

import Modal from "../components/modal/Modal";

const meta = {
  title: "Modal",
  component: Modal,
  parameters: {
    layout: "centered",
  },
};

export default meta;
type Story = StoryObj<typeof Modal>;

const TestModal = () => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <div>
      <button
        onClick={() => setOpenModal(true)}
        className="rounded-md p-4 text-white bg-violet-600 hover:bg-violet-400 hover:text-black"
      >
        Open Modal
      </button>
      <Modal
        isOpen={openModal}
        title="Confirm"
        onClose={() => setOpenModal(false)}
      >
        <p>
          Cupcake ipsum dolor sit amet muffin bear claw biscuit. Macaroon pie
          dragée jelly sesame snaps jelly-o pie cupcake liquorice. Chocolate
          cake chocolate cake danish bear claw cake.
        </p>
      </Modal>
    </div>
  );
};

const NoCloseButtonTestModal = () => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <div>
      <button
        onClick={() => setOpenModal(true)}
        className="rounded-md p-4 text-white bg-violet-600 hover:bg-violet-400 hover:text-black"
      >
        Open Modal
      </button>
      <Modal
        hideCloseBtn
        isOpen={openModal}
        title="Confirm"
        onClose={() => setOpenModal(false)}
      >
        <p>
          Cupcake ipsum dolor sit amet muffin bear claw biscuit. Macaroon pie
          dragée jelly sesame snaps jelly-o pie cupcake liquorice. Chocolate
          cake chocolate cake danish bear claw cake.
        </p>
      </Modal>
    </div>
  );
};

export const Basic: Story = {
  render: () => <TestModal />,
};

export const NoCloseButton: Story = {
  render: () => <NoCloseButtonTestModal />,
};
