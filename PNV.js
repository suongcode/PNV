let balance = 119126200000000;

// Cập nhật số tiền trên đầu trang
function updateBalance() {
    document.getElementById('balance').innerText = balance.toLocaleString() + " VND";
}

// Hàm mua sản phẩm
function buyProduct(productId, price) {
    const quantityInput = document.getElementById(`qty-${productId}`);
    const sellButton = document.getElementById(`sell-${productId}`);

    // Kiểm tra nếu sản phẩm có ID là 32
    if (productId === 32) {
        alert("Mẹ bạn quá béo, chương trình đã lỗi!");
        console.error("Lỗi: Mẹ bạn quá béo.");
        return; // Dừng thực hiện tiếp
    }

    // Tăng số lượng trong ô input
    let quantity = parseInt(quantityInput.value);
    quantity++;
    quantityInput.value = quantity;

    // Trừ số tiền tương ứng với giá sản phẩm
    balance -= price;
    updateBalance();

    // Kích hoạt nút Sell nếu số lượng > 0
    if (quantity > 0) {
        sellButton.disabled = false;
    }
}

// Hàm bán sản phẩm
function sellProduct(productId, price) {
    const quantityInput = document.getElementById(`qty-${productId}`);
    const sellButton = document.getElementById(`sell-${productId}`);

    // Giảm số lượng trong ô input
    let quantity = parseInt(quantityInput.value);
    if (quantity > 0) {
        quantity--;
        quantityInput.value = quantity;

        // Tăng số tiền tương ứng với giá sản phẩm
        balance += price;
        updateBalance();

        // Vô hiệu hóa nút Sell nếu số lượng là 0
        if (quantity === 0) {
            sellButton.disabled = true;
        }
    }
}

// Khởi tạo số tiền ban đầu
updateBalance();
