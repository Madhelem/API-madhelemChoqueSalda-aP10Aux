
import { Request, Response } from "express";
import Post, { IPost } from "../models/post";

class PostControllers {
    public async index(req: Request, res: Response) {
        const serverResponse = await Post.find({});    
        res.json({ message: "serverResponce", serverResponse });
    }
    public async newPost(req: Request, res: Response) {
        const { title, url, content,  image,  createdAt, updatedAt, iduser} = req.body;
        const nPost = new Post(req.body);
        await nPost.save();
        res.json({ message: "post created", nPost });
    }
    public async editPost(req: Request, res: Response) {
        const { id } = req.params;
        const { title, body } = req.body;
        const ePost = await Post.findByIdAndUpdate(id, req.body, {new: true });
        res.json({ message: "post updated", ePost });
    }
    public async DeletePost(req: Request, res: Response) {
        const { id } = req.params;
        const dPost = await Post.findByIdAndDelete(id);
        res.json({ message: "post.deleted", dPost });
    }
 
    
}
export const postControllers = new PostControllers();