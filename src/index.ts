import "reflect-metadata"; // リフレクションを使用するため必須
import { getConnectionOptions, createConnection, BaseEntity } from "typeorm";
import { createExpressServer } from "routing-controllers";
// controllersディレクトリを作成し、前章の内容を./controllers/UserController.tsに保存
import { UserController } from "./controllers/UserController";
import { UserDbController } from "./controllers/UserDbController";

const app = async () => {
  // --- TypeORMの設定
  const connectionOptions = await getConnectionOptions();
  const connection = await createConnection(connectionOptions);
  // ActiveRecordパターンでTypeORMを使用する場合
  BaseEntity.useConnection(connection);

  const app = createExpressServer({
    controllers: [UserController, UserDbController]
  });
  app.listen(3000, () => console.log("Example app listening on port 3000!"));
};

app();
