<?php session_start(); ?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Admin modify product</title>
    <link rel="stylesheet" href="css/style.css">>
</head>


    <?php include "sub_element/header.php"; ?>
    <body>
    <main>

    </main>
</body>
    <?php include "sub_element/footer.php"; ?>

    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    <script>
        document.addEventListener("DOMContentLoaded", function () {
            const form = document.getElementById("product-form");
            const productIdInput = document.getElementById("product-id");
            const submitButton = document.getElementById("submit-button");
            const formTitle = document.getElementById("form-title");

            // Load categories into select dropdown
            fetch("php/get_categories.php")
                .then(response => response.json())
                .then(categories => {
                    const select = document.getElementById("category-select");
                    categories.forEach(cat => {
                        const option = document.createElement("option");
                        option.value = cat.id;
                        option.textContent = cat.name;
                        select.appendChild(option);
                    });
                })
                .catch(error => console.error("Failed to load categories:", error));

            // Handle form submit (add or update)
            form.addEventListener("submit", function (e) {
                e.preventDefault();

                const formData = new FormData(form);
                const isEdit = productIdInput.value !== "";

                fetch("php/add_product.php", {
                    method: "POST",
                    body: formData
                })
                .then(response => response.json())
                .then(result => {
                    alert(result.message);
                    if (result.success) {
                        form.reset();
                        productIdInput.value = "";
                        formTitle.textContent = "Add Product";
                        submitButton.textContent = "Add Product";
                        loadProducts(); // Reload table
                        // Optional: reload product list
                    }
                })
                .catch(error => {
                    console.error("Error submitting form:", error);
                    alert("Something went wrong.");
                });
            });

            // Example: Prefill for editing
            window.prefillForm = function(product) {
                productIdInput.value = product.id;
                form.name.value = product.name;
                form.description.value = product.description;
                form.price.value = product.price;
                form.image.value = product.image;
                form.category_id.value = product.category_id;

                formTitle.textContent = "Edit Product";
                submitButton.textContent = "Update Product";
            };
            loadProducts();
        });
let currentPage = 1;
let limit = 5;

function loadProducts(search = "") {
    fetch(`php/get_products.php?search=${encodeURIComponent(search)}&page=${currentPage}&limit=${limit}`)
        .then(res => res.json())
        .then(data => {
            const tableBody = document.querySelector("#product-table tbody");
            tableBody.innerHTML = "";
            data.products.forEach(product => {
                const row = document.createElement("tr");
                row.innerHTML = `
                    <td>${product.id}</td>
                    <td>${product.name}</td>
                    <td>${product.description}</td>
                    <td>${product.price}</td>
                    <td><img src="${product.image}" width="50"></td>
                    <td>${product.category_name}</td>
                    <td>
                        <button onclick='prefillForm(${JSON.stringify(product)})'>Edit</button>
                        <button onclick='deleteProduct(${product.id})'>Delete</button>
                    </td>
                `;
                tableBody.appendChild(row);
            });
            renderPagination(data.total);
        });
}

function renderPagination(totalItems) {
    const paginationDiv = document.getElementById("pagination");
    const totalPages = Math.ceil(totalItems / limit);
    paginationDiv.innerHTML = "";

    for (let i = 1; i <= totalPages; i++) {
        const btn = document.createElement("button");
        btn.textContent = i;
        if (i === currentPage) btn.disabled = true;
        btn.onclick = () => {
            currentPage = i;
            loadProducts(document.getElementById("search-box").value);
        };
        paginationDiv.appendChild(btn);
    }
}

// Search box listener
document.getElementById("search-box").addEventListener("input", function () {
    currentPage = 1;
    loadProducts(this.value);
});


function deleteProduct(id) {
    if (confirm("Are you sure you want to delete this product?")) {
        fetch(`php/delete_product.php?id=${id}`, {
            method: "GET"
        })
        .then(response => response.json())
        .then(result => {
            alert(result.message);
            if (result.success) {
                loadProducts();
            }
        })
        .catch(error => {
            console.error("Delete failed:", error);
            alert("Error deleting product.");
        });
    }
}

    </script>
</body>
</html>
