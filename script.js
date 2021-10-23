const productName = document.querySelector('.product_name');
const productPrice = document.querySelector('.product_price');
const nameInput = document.querySelector('.product_name');
const priceInput = document.querySelector('.product_price');
const addProduct = document.querySelector('.submit');
const table = document.querySelector('.table');
const msg = document.querySelector('.msg');

let productData = [
    // {
    //     id: 0,
    //     name: 'Laptop',
    //     price: 500
    // },
    // {
    //     id: 1,
    //     name: 'Phone',
    //     price: 300
    // }
];

const getProduct = (productList) => {
    if (productData.length > 0) {
        msg.innerText = '';
        productList.forEach(product => {
            let tr = document.createElement('tr');
            tr.className = 'product_list';
            tr.id = `product-${product.id}`;
            tr.innerHTML = `
                <th class='product_name'>${product.name}</th>
                <td class='product_price'>$ ${product.price}</td>
                <td class='edit_product'><i class="fas fa-pen-square"></i></td>
                <td class='delete_product'><i class="fas fa-trash-alt"></i></td>
            `;
            table.appendChild(tr);
        });        
    } else {
        msg.innerText = 'No products to show.'
    }
};
getProduct(productData);

addProduct.addEventListener('click', (e) => {
    e.preventDefault();
    const name = nameInput.value;
    const price = priceInput.value;
    let id;

    if (productData.length === 0) {
        id = 0;
    } else {
        id = productData[productData.length - 1].id + 1;
    }

    if (name === '' || price === '' || 
        !(!isNaN(parseFloat(price)) && isFinite(price))) {
        alert('Please Input valid information...')
    } else {
        productData.push(
            {
                id,
                name,
                price
            }
        )
        table.innerText = '';
        getProduct(productData);
        nameInput.value = '';
        priceInput.value = '';
    };
});

table.addEventListener('click', e => {
    const target = e.target.parentElement.parentElement;
    console.log(target);
    target.remove(target);

    const id = parseInt(target.id.split('-')[1]);
    console.log( typeof id);
    const newProductData = productData.filter(product => {
        return product.id !== id;
    })
    productData = newProductData;
    console.log(productData);
})