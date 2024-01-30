import { useState } from "react";
import Checkbox from "@mui/material/Checkbox";
import Box from "@mui/material/Box";
import EditOutlined from "@mui/icons-material/EditOutlined";
import DeleteOutline from "@mui/icons-material/DeleteOutline";

import { Task } from "@/types";
import { Flex } from "@components/Flex";
import { useTasks } from "@/taskContext";
import { ModalState, TaskEditModal } from "@components/TaskEditModal";
import { formatDateAndTime } from "@/utils/formatDateTime";
import { Typography } from "@components/Typography";

import * as Styled from "./styles";

interface TaskCardProps extends Task {}

export const TaskCard: React.FunctionComponent<TaskCardProps> = (task) => {
  const [modalState, setModalState] = useState<ModalState>("closed");

  const { id, title, description, completed, dueDate, dueTime } = task;

  const { updateTask, removeTask } = useTasks();

  const handleCompleteTask = (checked: boolean) => {
    updateTask({ ...task, completed: checked });
  };

  const handleRemoveTask = () => {
    if (completed) {
      return removeTask(id);
    }

    window.confirm("Are you sure you want to delete this incomplete task?") &&
      removeTask(id);
  };

  const formattedDueDateTime = formatDateAndTime(dueDate, dueTime);

  return (
    <>
      <TaskEditModal
        state={modalState}
        onClose={() => setModalState("closed")}
        task={task}
      />

      <Styled.Container>
        <Flex gap={2}>
          <Checkbox
            defaultChecked={completed}
            value={completed}
            onChange={(e) => handleCompleteTask(e.target.checked)}
          />

          <div>
            <Typography
              variant="h6"
              fontWeight={600}
              margin={0}
              color={completed ? "light" : "neutral"}
              strikethrough={completed}
            >
              {title}
            </Typography>

            <Styled.Description color="light" strikethrough={completed}>
              {description}
            </Styled.Description>
            {formattedDueDateTime && (
              <Box mt={0.7}>
                <Styled.Pill>{formattedDueDateTime}</Styled.Pill>
              </Box>
            )}
          </div>
        </Flex>
        <Styled.ButtonContainer>
          <Styled.IconButton onClick={() => setModalState("update")}>
            <EditOutlined />
          </Styled.IconButton>

          <Styled.IconButton onClick={handleRemoveTask}>
            <DeleteOutline />
          </Styled.IconButton>
        </Styled.ButtonContainer>
      </Styled.Container>
    </>
  );
};
