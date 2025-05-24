import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";

import Modal from "../components/modal/Modal";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Modal",
  component: Modal,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
} satisfies Meta<typeof Modal>;

export default meta;
type Story = StoryObj<typeof Modal>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
// export const DialogModal: Story = {
//   args: { isOpen },
// };

const DialogModal = () => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <button onClick={() => setOpenModal(true)}>Open Modal</button>
      <Modal isOpen={openModal} onClose={() => setOpenModal(false)}>
        Modal Things
      </Modal>
    </>
  );
};

export const Basic: Story = {
  render: () => <DialogModal />,
};
