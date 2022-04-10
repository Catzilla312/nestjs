import { Injectable } from "@nestjs/common";

@Injectable()
export class AppService{
    getUsers(){
        return [{
            id:3,
            name:'King'
        }]
    }
}