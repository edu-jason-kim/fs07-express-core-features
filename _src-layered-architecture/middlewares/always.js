export default function (req, res, next) {
  console.log("app에서 실행 (공통)");
  next();
}
