import { z } from "zod";
import { Env, Hono, MiddlewareHandler } from "hono";
import { zValidator } from "@hono/zod-validator";
import { Account, Databases, ID, Models, Query, Storage, Users } from "node-appwrite";

import { sessionMiddleware } from "@/lib/session-middleware";
import { DATABASE_ID, TASKS_ID } from "@/config";

import { createTaskSchema } from "../schemas";
import { TaskType } from "../types";
import { createAdminClient } from "@/lib/appwrite";

const app = new Hono()
  .get(
    "/",
    sessionMiddleware,
    zValidator(
        "query",
        z.object({
          assigneeId: z.string().nullish(),
          type: z.nativeEnum(TaskType).nullish(),
          search: z.string().nullish(),
          dueDate: z.string().nullish(),
        })
    ),
    async (c) => { 
      const { /*users*/ } = await createAdminClient();
      const databases = c.get("databases")
      const user = c.get("user");

      const {   
        type,
        search,
        assigneeId,
        dueDate,
      } = c.req.valid("query");

      const query = [
        Query.orderDesc("$createdAt")
      ];

      if (type) {
        console.log("type: ", type);
        query.push(Query.equal("type", type));
      }

      if (assigneeId) {
        console.log("assigneeId: ", assigneeId);
        query.push(Query.equal("assigneeId", assigneeId));
      }

      if (dueDate) {
        console.log("dueDate: ", dueDate);
        query.push(Query.equal("dueDate", dueDate));
      }

      if (search) {
        console.log("search: ", search);
        query.push(Query.equal("name", search));
      }

      const tasks = await databases.listDocuments(
        DATABASE_ID,
        TASKS_ID,
        query
      );

      const assigneeIds = tasks.documents.map((tasks) => tasks.assigneeId)


    }
  )
  .post(
    "/",
    sessionMiddleware,
    zValidator("json", createTaskSchema),
    async (c) => {
      const user = c.get("user");
      const databases = c.get("databases")
      const {
        name,
        type,
        dueDate,
        assigneeId,
      } = c.req.valid("json");

      const highestPositionTask = await databases.listDocuments(
        DATABASE_ID,
        TASKS_ID,
        [
          Query.equal("type", type),
          Query.orderAsc("position"),
          Query.limit(1),
        ],
      );

      const newPosition =
        highestPositionTask.documents.length > 0
        ? highestPositionTask.documents[0].position + 1000
        : 1000;

      const task = await databases.createDocument(
        DATABASE_ID,
        TASKS_ID,
        ID.unique(),
        {
          name,
          type,
          dueDate,
          assigneeId,
          positon: newPosition
        },
      );

      return c.json({ data:task })
    }
  );

export default app;
