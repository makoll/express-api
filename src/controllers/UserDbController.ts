import { JsonController, Param, Body, Get, Post, Put, Delete } from "routing-controllers";
import User from "../entities/User";

@JsonController("/userdbs")
export class UserDbController {
  @Post("/")
  async post(@Body() user: User) {
    const new_user = new User();
    new_user.name = "Qiita";
    new_user.age = 25;
    await new_user.save();
    const users = await User.find();
    return users;
  }
}
