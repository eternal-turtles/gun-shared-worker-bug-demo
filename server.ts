import { serveDir, serveFile } from "https://deno.land/std@0.194.0/http/file_server.ts";

Deno.serve((req: Request) => {
  return serveDir(req, {
    fsRoot: "src",
    urlRoot: ""
  });
});
