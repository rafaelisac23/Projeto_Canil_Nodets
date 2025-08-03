import { Request, Response } from "express";

export const home = (req: Request, res: Response) => {
  res.render("pages/page");
};

export const dogs = (req: Request, res: Response) => {
  res.send("pages/dogs");
  //res.render('pages/page);
};
export const cats = (req: Request, res: Response) => {
  res.send("pages/cats");
  //res.render('pages/page);
};
export const fishes = (req: Request, res: Response) => {
  res.send("pages/fishes");
  //res.render('pages/page);
};
