import { createAlova } from "alova";
import GlobalFetch from "alova/GlobalFetch";
import ReactHook from "alova/react";

export const alovaInstanceForBackend = createAlova({
  baseURL: "/api",
  statesHook: ReactHook,
  requestAdapter: GlobalFetch()
});
