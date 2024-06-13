//services хранится бизнес логика 
//типа обработчики маршрутизаторов

import { Request, Response } from "express";
import { CreateUserDto } from "../dtos/CreateUser.dto";
import { CreateUserQueryParams } from "../types/query-params";
import { User } from "../types/response";

export function getUsers(request: Request, response: Response) {
    response.send([]);
}

export function getUserById(request: Request, response: Response){
    response.send({});
}

export function createUser(
request: Request<{
    id: number
}, {}, CreateUserDto, CreateUserQueryParams>, 
response: Response<User>){
    request.query.loginAfterCreate;
    request.params.id;

    return response.status(200).send({
        id: 1,
        username: 'zhans',
        email: 'zhansaya'
    })
}