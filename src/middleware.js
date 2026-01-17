export const  myMiddleware = (store) => (next) => (action) => {
  console.log("Middleware got action:", action);
  next(action); // pass action to the next middleware or reducer
};
