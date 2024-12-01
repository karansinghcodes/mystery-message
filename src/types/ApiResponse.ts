import { Message } from "@/model/User";

export interface ApiResponse{
    succes:boolean;
    message:string;
    isAcceptingMessage?:boolean;
    messages?:Array<Message>;


}