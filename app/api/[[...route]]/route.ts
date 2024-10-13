import { Hono } from 'hono'
import { handle } from 'hono/vercel'

import auth from '@/features/auth/server/route';
import tasks from '@/features/tasks/server/route';

const app = new Hono().basePath("/api");

const routes = app
  .route("/auth", auth)
  .route("/tasks", tasks)

export const GET = handle(app);
export const POST = handle(app);

export type AppType = typeof routes;