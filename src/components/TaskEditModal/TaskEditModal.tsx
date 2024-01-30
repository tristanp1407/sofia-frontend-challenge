import React, { useEffect } from "react";
import * as yup from "yup";
import { DateTime } from "luxon";
import { useForm } from "react-hook-form";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { yupResolver } from "@hookform/resolvers/yup";
import Close from "@mui/icons-material/Close";
import Box from "@mui/material/Box";

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

const taskSchema = yup.object().shape({
  title: yup.string().min(1, "Title is required").required("Title is required"),
  description: yup.string().nullable().max(256, "Description too long"),
  dueDate: yup.string().nullable(),
  dueTime: yup.string().nullable(),
});

export const TaskEditModal: React.FunctionComponent<TaskEditModelProps> = ({
  task,
  state,
  onClose,
}) => {
  // check window defined
  if (typeof window === "undefined") return;

  const { addTask, updateTask } = useTasks();

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors, isValid },
  } = useForm({
    resolver: yupResolver(taskSchema),
    defaultValues: {
      title: task?.title,
      description: task?.description,
      dueDate: task?.dueDate,
      dueTime: task?.dueTime,
    },
    mode: "onChange",
  });

  const { dueTime, dueDate } = watch();

  // If the user selects a due time but not a due date, set the due date to today
  useEffect(() => {
    if (dueTime && !dueDate) {
      setValue("dueDate", DateTime.now().toFormat("yyyy-MM-dd"));
    }
  }, [dueTime]);

  const handleSaveTask = handleSubmit((data) => {
    const formattedDate = data.dueDate
      ? DateTime.fromISO(data.dueDate).toFormat("yyyy-MM-dd")
      : undefined;

    const taskData = {
      title: data.title,
      description: data.description ?? undefined,
      dueDate: formattedDate,
      dueTime: data.dueTime ?? undefined,
    };

    if (state === "create") {
      addTask(taskData);
    } else if (state === "update") {
      updateTask({ ...task, ...data } as Task);
    }
    onClose();
  });

  return (
    <Modal
      open={state !== "closed"}
      onClose={onClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Styled.Wrapper>
        <Styled.CloseButton onClick={onClose}>
          <Close />
        </Styled.CloseButton>
        <form onSubmit={handleSaveTask}>
          <TextField
            label="Title"
            variant="outlined"
            error={!!errors.title}
            helperText={errors.title?.message}
            {...register("title")}
            fullWidth
            margin="normal"
          />

          <TextField
            label="Description (Optional)"
            type="textarea"
            variant="outlined"
            error={!!errors.description}
            helperText={errors.description?.message}
            {...register("description")}
            fullWidth
            margin="normal"
            multiline
          />

          <Flex gap={1} justifyContent="space-between">
            <TextField
              label="Due Date (Optional)"
              type="date"
              defaultValue={task?.dueDate}
              variant="outlined"
              error={!!errors.dueDate}
              helperText={errors.dueDate?.message}
              {...register("dueDate")}
              fullWidth
              margin="normal"
              InputLabelProps={{ shrink: true }}
            />
            <TextField
              label="Due Time (Optional)"
              type="time"
              defaultValue={task?.dueTime}
              variant="outlined"
              error={!!errors.dueTime}
              helperText={errors.dueTime?.message}
              {...register("dueTime")}
              fullWidth
              margin="normal"
              InputLabelProps={{ shrink: true }}
            />
          </Flex>

          <Box mt={4}>
            <Flex justifyContent="flex-end" gap={1}>
              <Button variant="outlined" onClick={onClose}>
                Cancel
              </Button>

              <Button variant="contained" type="submit" disabled={!isValid}>
                Save
              </Button>
            </Flex>
          </Box>
        </form>
      </Styled.Wrapper>
    </Modal>
  );
};
