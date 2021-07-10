import { Router, Request, Response } from "express";
const router = Router();

router.get("/", (req: Request, res: Response) => {
  res.send(
    '<body bgcolor="red">' +
      
      '<p style="margin: 20px 0px 0px 80px">' +
      '<font color="#ffffff">' +
      "Assignment 5, server running" +
      "</font>" +
      "</p>" +
      "</body>"
  );
});

export default router;
