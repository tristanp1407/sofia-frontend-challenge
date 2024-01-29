import { Task } from "@/types";

import * as Styled from "./styles";
import { TaskCard } from "../TaskCard";

type TaskListProps = {
  tasks: Task[];
};

export const TaskList: React.FunctionComponent<TaskListProps> = ({ tasks }) => {
  // TODO: Order by date
  return (
    <Styled.Wrapper>
      {tasks.map((task) => (
        <TaskCard {...task} key={task.id} />
      ))}
    </Styled.Wrapper>
  );
};
