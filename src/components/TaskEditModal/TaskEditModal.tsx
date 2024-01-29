import Modal from "@mui/material/Modal";

import { Task } from "@/types";
import { Flex } from "@components/Flex";
import { useTasks } from "@/taskContext";

import * as Styled from "./styles";

export type ModalState = "create" | "update" | "closed";

type TaskEditModelProps = {
  task?: Task;
  state: ModalState;
  onClose: () => void;
};

export const TaskEditModal: React.FunctionComponent<TaskEditModelProps> = ({
  task,
  state,
  onClose,
}) => {
  const { addTask, updateTask } = useTasks();

  const handleSaveTask = () => {
    if (state === "create") {
      // addTask()
    }
  };

  return (
    <Modal
      open={state !== "closed"}
      onClose={onClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Styled.Wrapper>
        <Styled.CloseButton onClick={onClose}>X</Styled.CloseButton>
        <input type="text" defaultValue={task?.title || "Title"} />
        <input defaultValue={task?.description || "Description"} />
        <Flex gap={1} justifyContent="space-between">
          <input
            type="date"
            defaultValue={task?.dueDateTime.toISOString()}
            style={{ flexGrow: 1 }}
          />
          <input
            type="time"
            defaultValue={task?.dueDateTime.toISOString()}
            style={{ flexGrow: 1 }}
          />
        </Flex>
        <Flex justifyContent="flex-end" gap={1}>
          <button onClick={onClose}>cancel</button>
          <button onClick={() => handleSaveTask()}>save</button>
        </Flex>
      </Styled.Wrapper>
    </Modal>
  );
};
