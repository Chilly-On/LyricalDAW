<?php
$product_id = isset($_GET['id']) ? (int) $_GET['id'] : 0;

$sql = "SELECT 
                product.*, 
                category.name AS category_name, 
                brand.name AS brand_name, 
                brand.description AS brand_description, 
                brand.image AS brand_image
            FROM product
            JOIN category ON product.category_id = category.id
            JOIN brand ON product.brand_id = brand.id
            WHERE product.id = ?";
$stmt = $conn->prepare($sql);

if ($stmt) {
    $stmt->bind_param("i", $product_id); // "i" means integer
    $stmt->execute();
    $result = $stmt->get_result();

    if ($result && $result->num_rows > 0) {
        $product = $result->fetch_assoc();
    } else {
        $url = 'index.php?page=404';
		header('Location: '.$url);
    }
    $stmt->close();
} else {
    echo "<div class='alert alert-danger'>Failed to prepare statement.</div>";
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title><?= $product ? htmlspecialchars($product['name']) : "Product Not Found" ?></title>
    <link rel="stylesheet" href="public/css/style.css">
</head>
<body>
    <?php include "sub_element/header.php"; ?>

    <h1 class="upper-main"><?= $t["product_service"]; ?></h1>
    <main class="outer-main">
        <div class="inner-main">
            <div class="container mt-5">
            <?php if ($product): ?>
            <div class="row">
                <!-- Product Image -->
                <div class="col-md-6">
                    <img src="<?= htmlspecialchars($product['image']) ?>" class="img-fluid rounded shadow" alt="<?= $product['name']?>" style="width: 300px; height: 300px;">
                </div>

                <!-- Product Details -->
                <div class="col-md-6">
                    <h1><?= htmlspecialchars($product['name']) ?></h1>
                    <h4 class="text-success"><?= htmlspecialchars($product['price']) ?> yen</h4>

                    <p><strong><?= $t['category']?>:</strong> <?= htmlspecialchars($product['category_name']) ?></p>

                    <!-- Brand with image -->
                    <p>
                        <strong><?= $t['artist']?>:</strong>
                        <a href="index.php?page=product&brand_id=<?= $product['brand_id'] ?>" class="text-decoration-none d-inline-flex align-items-center">
                            <img src="<?= htmlspecialchars($product['brand_image']) ?>" 
                                 alt="<?= htmlspecialchars($product['brand_name']) ?>" 
                                 style="width: 30px; height: 30px; object-fit: cover; border-radius: 5px; margin-right: 8px;">
                            <span class="text-dark"><?= htmlspecialchars($product['brand_name']) ?></span>
                        </a>
                    </p>

                    <!-- Allow HTML in the description -->
                    <p class="mt-3"><?= nl2br($product['description']) ?></p>

                    <form action="php/add_to_cart.php" method="POST">
                        <input type="hidden" name="product_id" value="<?= $product['id'] ?>">
                        <button type="submit" class="btn btn-primary mt-3">Add to Cart</button>
                    </form>
                </div>
            </div>

            </div>
            <?php else: ?>
            <div class="alert alert-danger text-center">
                <h4 class="alert-heading">Product Not Found</h4>
                <p>Sorry, we couldn't find the product you're looking for.</p>
                <a href="index.php" class="btn btn-primary mt-2">Return to Homepage</a>
            </div>
            <?php endif; ?>
            </div>
        </div>
    </main>



    <?php include "sub_element/footer.php"; ?>
</body>
</html>
