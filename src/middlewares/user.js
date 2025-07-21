const authentication = (req, res, next) => {
  console.log("user router에서 실행 1");
  next();
};

const authorization = (req, res, next) => {
  console.log("user router에서 실행 2");
  next();
};

const userMiddlewares = {
  authentication,
  authorization,
};

export default userMiddlewares;
