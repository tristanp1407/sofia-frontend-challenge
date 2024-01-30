import { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { AddCircleOutline } from "@mui/icons-material";

import { TaskList } from "@/components/TaskList";
import { useTasks } from "@/taskContext";
import { ModalState, TaskEditModal } from "@/components/TaskEditModal";
import { Typography } from "@/components/Typography";

import * as Styled from "./styles";

export const TodoListPage: React.FunctionComponent = () => {
  const [modalState, setModalState] = useState<ModalState>("closed");

  const { tasks } = useTasks();

  const openTasks = tasks.filter(({ completed }) => !completed);
  const completedTasks = tasks.filter(({ completed }) => completed);

  return (
    <>
      <Styled.Container>
        <Typography variant="h3">Your Todos</Typography>

        <Box mt={3} mb={2} ml={0} mr="auto">
          <Button
            onClick={() => setModalState("create")}
            startIcon={<AddCircleOutline />}
          >
            Add task
          </Button>
        </Box>

        {openTasks.length > 0 ? (
          <TaskList tasks={openTasks} />
        ) : (
          <Styled.NoTasksContainer>
            <Typography variant="h3">🧘 Relax, job is done.</Typography>
          </Styled.NoTasksContainer>
        )}

        {completedTasks.length > 0 && (
          <>
            <h3>{`Completed (${completedTasks.length})`}</h3>
            <TaskList tasks={completedTasks} />
          </>
        )}
      </Styled.Container>

      <TaskEditModal
        state={modalState}
        onClose={() => setModalState("closed")}
      />
    </>
  );
};
