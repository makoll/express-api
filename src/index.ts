import "reflect-metadata"; // リフレクションを使用するため必須
import { createExpressServer } from "routing-controllers";
// controllersディレクトリを作成し、前章の内容を./controllers/UserController.tsに保存
import { UserController } from "./controllers/UserController";

// express appの作成。ここでオプションに登録するコントローラーを渡す
const app = createExpressServer({
  controllers: [UserController]
});

// express を port 3000 で起動
app.listen(3000);
