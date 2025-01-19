const fs = require('fs');
const http = require('http');
const url = require('url');
const templateReplace  = require('./modules/replaceTemplate.js');

/////////////////////////////// 
//FIles
// Bolking, synchronous way 
// const textIn = fs.readFileSync('./txt/input.txt', 'utf-8');
// console.log(textIn);
// const textOut = `This content from input file is \n ${textIn}`;
// fs.writeFileSync('./txt/output3.txt', textOut);
// console.log("File written");

// // Non blocking, asynchoronous way
// // TODO: callback hell (solution is use async await promises)
// fs.readFile('./txt/start.txt', 'utf-8', (err, data)=>{
//   if(err)  return console.log("Error 💥");
//   console.log(data);
//   fs.readFile(`./txt/${data}.txt`, 'utf-8', (err, data2) =>{
//     console.log(data2);
//     fs.readFile('./txt/append.txt', 'utf-8', (err, data3) =>{
//       console.log(data3);
//       fs.writeFile('./txt/final2.txt', `${data3}\n${data2}`, 'utf-8', err => {
//         if(err) return console.log("Error 💥 in write file!!");
//         console.log("File has been written!");
//       });
//     });
//   });
// });

// console.log("We start in file operations !");

/////////////////////////////////////////////
// Server
// Create server
// console.log("Mostafa Asker");
const tempOverview = fs.readFileSync(`${__dirname}/templates/template-overview.html`, 
  'utf-8'
);

const tempCard = fs.readFileSync(
  `${__dirname}/templates/template-card.html`,
  'utf-8'
);
const tempProduct = fs.readFileSync(
  `${__dirname}/templates/template-product.html`,
  'utf-8'
);

const data = fs.readFileSync(`${__dirname}/dev-data/data.json`, 'utf-8');
const dataObj = JSON.parse(data);

const server = http.createServer((req, res) => {
  const {pathname, query} = url.parse(req.url, true);
  console.log(pathname, );
  
  if(pathname === '/' || pathname === '/overview'){
    res.writeHead(200, {
      'Content-type' : 'text/html'
    });
    const cardsHtml = dataObj.map(el => templateReplace(tempCard, el));
    const output = tempOverview.replace('{%PRODUCT_CARDS%}', cardsHtml);
    res.end(output)  
  }

  else if (pathname === '/product'){
    res.writeHead(200, {
      'Content-type' : 'text/html'
    });
    const output = templateReplace(tempProduct, dataObj[query.id]);
    res.end(output);
  }
  else{
    res.writeHead(404, {
      'Content-type' : 'text/html'
    });
    res.end("Not found");
  }
});

server.listen(8000, '127.0.0.1', () => {
  console.log('Listening to requests on port 8000');
});

