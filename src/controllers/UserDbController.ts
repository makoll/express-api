import { JsonController, Body, Post } from "routing-controllers";
import { getRepository, Raw } from "typeorm";
import User from "@/entities/User";

@JsonController("/userdbs")
export class UserDbController {
  @Post("/")
  async post(@Body() user: User) {
    const userRepository = getRepository(User);
    const new_user = new User();
    new_user.name = "Qiita";
    new_user.age = 25;
    await userRepository.save(new_user);
    const users = await userRepository.find();
    return users;
  }
}
