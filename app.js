import express from 'express';
import chalk from 'chalk';
import debug from 'debug';
import morgan from 'morgan';
import path from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const productRouter = express.Router();

const __dirname = path.dirname(__filename);
const app = express();
const port = process.env.PORT;

app.use(morgan ('combined'));
app.use(express.static(path.join(__dirname,"/public/")));

app.set("views","./src/views");
app.set("view engine", "ejs")

productRouter.route("/").get((req,res) => {
  res.render("products",{
    products: [
      {id:1,productTitle: 'น้ำยาล้างจาน1', productDescription: 'น้ำยาล้างจานสูตร 1 ดีเลิศ', productPrice: 45},
      {id:2,productTitle: 'น้ำยาล้างจาน2', productDescription: 'น้ำยาล้างจานสูตร 2 ดีเลิศ', productPrice: 55},
      {id:3,productTitle: 'น้ำยาล้างจาน3', productDescription: 'น้ำยาล้างจานสูตร 3 ดีเลิศ', productPrice: 65},
      {id:4,productTitle: 'น้ำยาล้างจาน4', productDescription: 'น้ำยาล้างจานสูตร 4 ดีเลิศ', productPrice: 75},
    ]
  });
});

productRouter.route("/:id").get((req,res) => {
  const id = req.params.id;
  res.render("products",{
    products: [
      {id:1,productTitle: 'น้ำยาล้างจาน1', productDescription: 'น้ำยาล้างจานสูตร 1 ดีเลิศ', productPrice: 45},
      {id:2,productTitle: 'น้ำยาล้างจาน2', productDescription: 'น้ำยาล้างจานสูตร 2 ดีเลิศ', productPrice: 55},
      {id:3,productTitle: 'น้ำยาล้างจาน3', productDescription: 'น้ำยาล้างจานสูตร 3 ดีเลิศ', productPrice: 65},
      {id:4,productTitle: 'น้ำยาล้างจาน4', productDescription: 'น้ำยาล้างจานสูตร 4 ดีเลิศ', productPrice: 75},
    ][id]
  });
});
app.use("/products", productRouter); 

app.get("/", (req,res) =>{
res.render('index', {username: 'Numchok'});
})

app.listen(port, () => {
  console.log('Lestening on port %d',port)
})