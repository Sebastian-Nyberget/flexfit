import { z } from "zod";
import { TaskType } from "./types";

export const createTaskSchema = z.object({
    name: z.string().min(1, "Required"),
    type: z.nativeEnum(TaskType, { required_error: "Required" }),
    dueDate: z.coerce.date(),
    assigneeId: z.string().trim().min(1, "Required"),
    description: z.string().optional(),
});