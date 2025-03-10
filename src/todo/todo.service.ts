import { Injectable } from "@nestjs/common";
import { TodoDto } from "./todo.dto";
import { PrismaService } from "src/prisma/prisma.service";

@Injectable()
export class TodoService {
  constructor(private prismaService: PrismaService) {}

  findAll() {
    return this.prismaService.todo.findMany();
  }

  findOne(id: number) {
    return this.prismaService.todo.findUnique({
      where: { id },
    });
  }

  create(todo: TodoDto) {
    return this.prismaService.todo.create({
      data: todo,
    });
  }

  update(id: number, todo: TodoDto) {
    return this.prismaService.todo.update({
      where: { id },
      data: todo,
    });
  }

  delete(id: number) {
    return this.prismaService.todo.delete({
      where: { id },
    });
  }
}
