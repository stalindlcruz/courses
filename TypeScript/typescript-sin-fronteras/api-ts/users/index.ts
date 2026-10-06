import { Router } from "express";

const router = Router();

type Usuario = {
  id: number;
  nanme: string;
};

router.get("/", (req, res) => {
  res.send("Hola Mundo!");
});

router.post("/", (req, res) => {
  const { id, nanme } = req.body as Usuario;
  console.log(nanme);

  res.send("ok");
});

export default router;
