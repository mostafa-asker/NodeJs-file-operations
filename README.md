# Node.js Product Overview Server  

A simple Node.js server that serves a product overview page and individual product details using HTML templates and JSON data. This project demonstrates core Node.js functionality such as file handling, server creation, and modular code design.  

---

## Features  

- **Overview Page:** Displays a list of products dynamically rendered using HTML templates.  
- **Product Details Page:** Provides detailed information for a specific product based on its ID.  
- **Error Handling:** Returns a 404 page for unknown routes.  
- **JSON Data Handling:** Reads product data from a local `data.json` file.  

---

## Project Structure  

📦 Project Root
├── dev-data/
│ └── data.json # JSON data for products
├── templates/
│ ├── template-overview.html # Overview page template
│ ├── template-card.html # Product card template
│ ├── template-product.html # Product details page template
├── modules/
│ └── replaceTemplate.js # Template replacement helper
├── index.js # Main server file
└── README.md # Project documentation


---

## Requirements  

- **Node.js**: v14+  
- Basic knowledge of JavaScript and Node.js.  

---

## Setup  

### 1. Clone the Repository  

```bash  
git clone https://github.com/your-username/node-product-server.git  
cd node-product-server  

