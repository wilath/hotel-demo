export class BlogPost{
    public postID: number;
    public title: string;
    public author: string;
    public date: Date;
    public photos: Array<string> | string;
    public content: Array<string> ;
    

    
    constructor(postid:number, title:string, author:string, date: Date, photos:Array<string> | string, content: Array<string> ){
        this.postID = postid;
        this.title = title
        this.author = author
        this.date = date;
        this.photos = photos
        this.content = content

    }
}

