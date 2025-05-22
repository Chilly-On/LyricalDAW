<?php
// PENDING FOR LAZY LOADING

// Initialize pg and sort
$pg_num = isset($_GET['pg']) && is_numeric($_GET['pg']) ? intval($_GET['pg']) : 1;
$sort = isset($_GET['sort']) ? $_GET['sort'] : "none";
$category_id = isset($_GET['category_id']) ? intval($_GET['category_id']) : 0;
$brand_id = isset($_GET['brand_id']) ? intval($_GET['brand_id']) : 0;
$link = "index.php?page=product";

// Set sorting
$order_by = "";
if ($sort == "name") {
    $order_by = "ORDER BY name ASC";
} else if ($sort == "price") {
    $order_by = "ORDER BY price ASC";
}
$filters = [];

if ($category_id > 0) {
    $filters[] = "p.category_id = $category_id";
    $link .= "&category_id=$category_id";
}
if ($brand_id > 0) {
    $filters[] = "p.brand_id = $brand_id";
    $link .= "&brand_id=$brand_id";
}
/*if ($search !== '') {
    $filters[] = "(p.name ILIKE '%$search_escaped%' OR c.name ILIKE '%$search_escaped%')";
}*/

// Combine all filters into WHERE clause
$where_sql = '';
if (!empty($filters)) {
    $where_sql = "WHERE " . implode(' AND ', $filters);
}



// Pagination
$items_per_page = 3;
$offset = ($pg_num - 1) * $items_per_page;

$sql = "
    SELECT p.*, c.name AS category_name, b.name AS brand_name, b.image AS brand_image, b.id AS brand_id
    FROM product p
    JOIN category c ON p.category_id = c.id
    JOIN brand b ON p.brand_id = b.id
    $where_sql
    $order_by
    LIMIT $items_per_page OFFSET $offset
";
$result = $conn->query($sql);

// Count total items for pagination
$total_result = $conn->query("
    SELECT COUNT(*) as count 
    FROM product p
    JOIN category c ON p.category_id = c.id
    JOIN brand b ON p.brand_id = b.id
    $where_sql
");
$total_row = $total_result->fetch_assoc();
$total_items = $total_row['count'];
$total_pages = ceil($total_items / $items_per_page);
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width,initial-scale=1.0">
    <title>Product & Service</title>

    <!-- Bootstrap CSS -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
    <link rel="stylesheet" href="public/css/style.css">
</head>
<body>

    <?php include "sub_element/header.php"; ?>

    <h1 class="upper-main"><?= $t["product_service"]; ?></h1>

    <main class="outer-main">
        <div class="inner-main">
            <div class="container">

                <?php if ($sort == "name") echo "<h4 class='text-center text-secondary mb-4'>" . $t['sorted_by_name'] . "</h4>"; ?>
                <?php if ($sort == "price") echo "<h4 class='text-center text-secondary mb-4'>" . $t['sorted_by_price'] . "</h4>"; ?>
                
                
                <div class="row g-4" id="product-list">
                    <?php
                    $_GET['pg'] = 1;
                    include 'php/load_products.php';
                    ?>
                </div>

                <!-- Sort Buttons -->
                <div class="controls text-center mt-4">
                    <h5><?php echo $t["sort_by"]; ?>:</h5>
                    <a class="btn btn-outline-secondary mx-1" href="<?= $link ?>&pg=1&sort=name"><?php echo $t["name"]; ?></a>
                    <a class="btn btn-outline-secondary mx-1" href="<?= $link ?>&pg=1&sort=price"><?php echo $t["price"]; ?></a>
                </div>
            </div>
        </div>
    </main>
    <?php include "sub_element/footer.php"; ?>

    <script>
    let currentPage = 1;
    const totalPages = <?= $total_pages ?>;
    let loading = false;
    const sort = '<?= $sort ?>';
    const categoryId = <?= $category_id ?>;
    const brandId = <?= $brand_id ?>;

    function loadMoreProducts() {
        if (loading || currentPage >= totalPages) return;

        loading = true;
        currentPage++;

        const params = new URLSearchParams({
            pg: currentPage,
            sort: sort,
            category_id: categoryId,
            brand_id: brandId
        });

        console.log("Loading page:", currentPage, "Params:", params.toString());

        fetch('php/load_products.php?' + params.toString())
            .then(res => res.text())
            .then(html => {
                console.log("Fetched HTML:", html);
                const container = document.getElementById('product-list');
                container.insertAdjacentHTML('beforeend', html);
                loading = false;
            })
            .catch(err => {
                console.error("Fetch error:", err);
                loading = false;
            });
    }

    let loadTimeout;

    window.addEventListener('scroll', () => {
        const nearBottom = window.innerHeight + window.scrollY >= document.body.offsetHeight - 500;
        if (nearBottom) {
            clearTimeout(loadTimeout); // Clear any previous timeout
            loadTimeout = setTimeout(() => {
                loadMoreProducts();
            }, 100); // Delay of 100 milliseconds
        }
    });
    </script>



    <!-- Bootstrap JS -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
</body>
</html>

