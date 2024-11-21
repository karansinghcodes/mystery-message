import { Message } from "@/model/User";

export interface ApiResponse{
    succes:boolean;
    message:string;
    isAcceptingMessages?:boolean;
    messages?:Array<Message>;


}