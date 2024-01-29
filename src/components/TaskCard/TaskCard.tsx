import { useState } from "react";
import { Checkbox } from "@mui/material";

import { Task } from "@/types";
import { Flex } from "@components/Flex";
import { useTasks } from "@/taskContext";
import { ModalState, TaskEditModal } from "@components/TaskEditModal";

import * as Styled from "./styles";

interface TaskCardProps extends Task {}

export const TaskCard: React.FunctionComponent<TaskCardProps> = ({
  id,
  title,
  description,
  completed,
  dueDateTime,
}) => {
  const [modalState, setModalState] = useState<ModalState>("closed");

  const { updateTask } = useTasks();

  const handleCompleteTask = (checked: boolean) => {
    updateTask({ id, completed: checked });
  };

  return (
    <>
      <TaskEditModal
        state={modalState}
        onClose={() => setModalState("closed")}
        task={{ id, title, description, completed, dueDateTime }}
      />

      <Styled.Container>
        <Flex alignItems="center">
          <Checkbox
            defaultChecked={completed}
            value={completed}
            onChange={(e) => handleCompleteTask(e.target.checked)}
          />
          <div>
            <Styled.Title>{title}</Styled.Title>
            <Styled.Description>{description}</Styled.Description>
          </div>
          <h6>{dueDateTime.toString()}</h6>
        </Flex>
        <Flex>
          <button onClick={() => setModalState("update")}>edit</button>
          <button>delete</button>
        </Flex>
      </Styled.Container>
    </>
  );
};
