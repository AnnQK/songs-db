import { create, router as _router, defaults } from "json-server";
import clone from "clone";
import data from "./db.json";

const isProductionEnv = process.env.NODE_ENV === "production";
const server = create();

// For mocking the POST request, POST request won't make any changes to the DB in production environment
const router = _router(isProductionEnv ? clone(data) : "db.json", {
  _isFake: isProductionEnv,
});
const middlewares = defaults();

server.use(middlewares);

server.use((req, res, next) => {
  if (req.path !== "/") router.db.setState(clone(data));
  next();
});

server.use(router);
server.listen(process.env.PORT || 8000, () => {
  console.log("JSON Server is running");
});

// Export the Server API
export default server;
