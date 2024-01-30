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

  const openTasks = tasks
    ?.filter(({ completed }) => !completed)
    .sort((a, b) => {
      if (a.dueDate && b.dueDate) {
        return new Date(b.dueDate).getTime() - new Date(a.dueDate).getTime();
      }
      return 0;
    });

  const completedTasks = tasks?.filter(({ completed }) => completed);

  return (
    <>
      <Styled.PageContainer>
        <Typography variant="h3" textTransform="uppercase" align="center">
          Your Todos
        </Typography>

        <Box mt={3} mb={2} ml={0} mr="auto">
          <Button
            onClick={() => setModalState("create")}
            startIcon={<AddCircleOutline />}
          >
            Add a task
          </Button>
        </Box>

        <Styled.ScrollArea>
          {openTasks?.length > 0 ? (
            <TaskList tasks={openTasks} />
          ) : (
            <Box my={2}>
              <Styled.NoTasksContainer>
                <Typography variant="h3">🧘 Relax, job is done.</Typography>
              </Styled.NoTasksContainer>
            </Box>
          )}

          {completedTasks?.length > 0 && (
            <>
              <Typography
                variant="h6"
                gutterBottom
                fontWeight={400}
              >{`Completed (${completedTasks.length})`}</Typography>
              <TaskList tasks={completedTasks} />
            </>
          )}
        </Styled.ScrollArea>
      </Styled.PageContainer>

      <TaskEditModal
        state={modalState}
        onClose={() => setModalState("closed")}
      />
    </>
  );
};
