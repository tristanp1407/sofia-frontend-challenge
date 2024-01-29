import { TaskList } from "@/components/TaskList";
import { useTasks } from "@/taskContext";

import * as Styled from "./styles";

export const TodoListPage: React.FunctionComponent = () => {
  const { tasks } = useTasks();

  const openTasks = tasks.filter(({ completed }) => !completed);
  const completedTasks = tasks.filter(({ completed }) => completed);

  return (
    <>
      <Styled.Container>
        <h1>Your To Dos</h1>
        <TaskList tasks={openTasks} />
        <h3>Completed</h3>
        <TaskList tasks={completedTasks} />
      </Styled.Container>
    </>
  );
};
