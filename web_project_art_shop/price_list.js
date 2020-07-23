let books = [];
function Obj(name, value) {
    this.name = name;
    this.value = value;
}
function makeLine(current, curprice) {
    let myPaint = new Obj(current, curprice);
    books.push(myPaint);
}
makeLine("Акварель Невская Палитра СОНЕТ 24 цвета 2,5 мл, НАБОР", "357 грн");
makeLine("Акварель Невская Палитра СОНЕТ 16 цветов 2,5 мл, НАБОР","255 грн");
makeLine("Набор Ecoline Brushpen с жидкой акварелью Royal Talens, 10шт","668 грн");
makeLine("Акварель Белые Ночи 36 цветов 2,5мл, НАБОР в пластиковом пенале","1598 грн");
makeLine("Акварель Невская палитра Белые Ночи 24 цвета 2,5мл, НАБОР","848 грн");
newTable = document.createElement("table");
for (let i = 0; i <= books.length; i++) {
    let newRow = newTable.insertRow(i);
    k = i - 1;
    for (let j = 0; j < 3; j++) {
        let newCell = newRow.insertCell(j);
        if (i === 0 && j === 0) {
            newCell.innerHTML = '№';
            newCell.className = "blue";
        } else
        if (i > 0 && j === 0) {
            newCell.innerHTML = i;
        } else
         if (j === 1) {
            if (i === 0) {
                newCell.innerHTML = 'Товар';
                newCell.className = "blue";
            } else {
                newCell.innerHTML = books[k].name;
            }
        } else
        if (j === 2) {
            if (i === 0) {
                newCell.className = "blue";
                newCell.innerHTML = 'Ціна';
            } else {
                newCell.innerHTML = books[k].value;
            }
        } //else
        // if (j === 3) {
        //     if (i === 0) {
        //         newCell.className = "blue";
        //         newCell.innerHTML = 'Количество заказанных книг';
        //     }  else {
        //         newCell.innerHTML = books[k].amount;
        //     }
        // } else
        // if (j === 4) {
        //     if (i === 0) {
        //         newCell.className = "blue";
        //         newCell.innerHTML = 'Цена заказа';
        //     }  else {
        //         newCell.innerHTML = books[k].amount*books[k].value;
        //     }
        // } else
        // if (j === 5) {
        //     if (i === 0) {
        //         newCell.className = "blue";
        //         newCell.innerHTML = 'Вариант доставки';
        //     }  else {
        //         if (books[k].posting == 'post')
        //             newCell.innerHTML = 'Поштою';
        //         else newCell.innerHTML = 'Доставка до дому';
        //     }
        // } else
        // if (j === 6) {
        //     if (i === 0) {
        //         newCell.className = "blue";
        //         newCell.innerHTML = 'У святковій упаковці';
        //     }  else {
        //         if (books[k].box == true)
        //             newCell.innerHTML = 'Так';
        //         else newCell.innerHTML = 'Ні';
        //     }
        // } else
        // if (j === 7) {
        //     if (i === 0) {
        //         newCell.className = "blue";
        //         newCell.innerHTML = 'Цена заказа с доставкой';
        //     } else {
        //         let delivery, boxing = 0;
        //         if (books[k].posting == 'post')
        //             delivery = 0.05*(books[k].amount*books[k].value);
        //         else delivery = 0.15*(books[k].amount*books[k].value);
        //         if (books[k].box == true) {
        //             boxing = delivery*0.1;
        //         }
        //         newCell.innerHTML = books[k].amount*books[k].value + delivery + boxing;
            }
         }
document.getElementById("pricelist").appendChild(newTable);