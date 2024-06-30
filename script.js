var controls = document.querySelectorAll('.btn');

function changeImage(element, imageNumber){
    let productImage = document.getElementById('product-img');

    Array.from(controls).forEach(btn =>{
        btn.classList.remove('active');
    })

    element.classList.add('active');
    productImage.src = `images/image${imageNumber}.png`;
}


Array.from(controls).forEach((button, index) =>{
    button.addEventListener('click', () => changeImage(button, index+1));
})