export interface Post{ 
    postId:string;
    title:string;
    body:string;
    attachments:Array<string>;
    creator:string;
    creatorId:string;
    numberOfLikes:number;
    comments:Array<comment>;
}

export interface comment{
    body:string;
    creator:string;
    creatorId:string;
    creationDate:string;
    creationTime:string;
    
}