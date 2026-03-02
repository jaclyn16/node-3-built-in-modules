/* -------------------------
🍕 Pizza Order Printer 
----------------------------
Make a Node.js app that prints pizza orders to the console.

Check the README.md file for instructions.
------------------------- */
import fs from "fs/promises";

const userInput = process.argv[2];
const orderNumber = process.argv[3];

async function pizzaApp() {
    const file = await fs.readFile("data.json", "utf8");
    const orders = JSON.parse(file);

    if (userInput === "getAllOrders") {
        for (let i = 0; i < orders.length; i++) {
            console.log(orders[i]);
        }
    }
    if (userInput === "getOneOrder") {
        if (orders[orderNumber] !== undefined) {
            console.log(orders[orderNumber]);
        } else {
            console.log("Order not Found. Please enter a valid order number.");
        }
    }
}

pizzaApp();