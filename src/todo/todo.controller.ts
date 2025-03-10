import {
  Controller,
  Get,
  Post,
  Put,
  Param,
  Body,
  Delete,
  ParseIntPipe,
  HttpException,
  HttpStatus,
} from "@nestjs/common";
import { TodoDto } from "./todo.dto";
import { TodoService } from "./todo.service";

@Controller("api/v1/todo")
export class TodoController {
  constructor(private readonly todoService: TodoService) {}

  @Get()
  async getTodos() {
    try {
      const todos = await this.todoService.findAll();
      return {
        status: HttpStatus.OK,
        message: "Todos retrieved successfully",
        data: todos,
      };
    } catch (error) {
      throw new HttpException(
        "Failed to retrieve todos",
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  @Get(":id")
  async getTodo(@Param("id", ParseIntPipe) id: number) {
    try {
      const todo = await this.todoService.findOne(id);
      if (!todo) {
        throw new HttpException("Todo not found", HttpStatus.NOT_FOUND);
      }
      return {
        status: HttpStatus.OK,
        message: "Todo retrieved successfully",
        data: todo,
      };
    } catch (error) {
      throw new HttpException(
        "Failed to retrieve todo",
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  @Post()
  async createTodo(@Body() todo: TodoDto) {
    try {
      const newTodo = await this.todoService.create(todo);
      return {
        status: HttpStatus.CREATED,
        message: "Todo created successfully",
        data: newTodo,
      };
    } catch (error) {
      throw new HttpException(
        "Failed to create todo",
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  @Put(":id")
  async updateTodo(
    @Param("id", ParseIntPipe) id: number,
    @Body() body: TodoDto,
  ) {
    try {
      const updatedTodo = await this.todoService.update(id, body);
      if (!updatedTodo) {
        throw new HttpException("Todo not found", HttpStatus.NOT_FOUND);
      }
      return {
        status: HttpStatus.OK,
        message: "Todo updated successfully",
        data: updatedTodo,
      };
    } catch (error) {
      throw new HttpException(
        "Failed to update todo",
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  @Delete(":id")
  async deleteTodo(@Param("id", ParseIntPipe) id: number) {
    try {
      await this.todoService.delete(id);
      return {
        status: HttpStatus.OK,
        message: "Todo deleted successfully",
      };
    } catch (error) {
      throw new HttpException(
        "Failed to delete todo",
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
