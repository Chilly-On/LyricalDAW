<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title><?= $t['admin'] ?></title>

    <!-- Bootstrap CSS -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
    <link rel="stylesheet" href="public/css/style.css">
</head>
<body>
    <?php include "sub_element/header.php"; ?>
    <h1 class="upper-main" style="background-color: #46443f"><?= $t['admin'] ?></h1>
    <main class="outer-main">
        <div class="inner-main">
            <div class="container mt-4">

                <div class="card mb-4">
                    <div class="card-header">
                        <div class="d-flex justify-content-between align-items-center">
                            <h2 id="form-title" class="h5 mb-0"><?= $t['add_product'] ?? 'Add Product' ?></h2>
                            <button id="new-product-btn" class="btn btn-success">+ <?= $t['new_product'] ?? 'New Product' ?></button>
                        </div>
                    </div>
                    <div class="card-body">
                        <form id="product-form">
                            <input type="hidden" name="id" id="product-id">

                            <div class="mb-3">
                                <label class="form-label"><?= $t['name'] ?? 'Name' ?>*</label>
                                <input type="text" name="name" class="form-control" required>
                            </div>

                            <div class="mb-3">
                                <label class="form-label"><?= $t['description'] ?? 'Description' ?></label>
                                <textarea name="description" class="form-control" rows="5" placeholder="<?= $t['description_placeholder'] ?? 'Enter product description...' ?>"></textarea>
                            </div>

                            <div class="mb-3">
                                <label class="form-label"><?= $t['price'] ?? 'Price' ?>*</label>
                                <input type="number" name="price" class="form-control" step="0.01" required>
                            </div>

                            <div class="mb-3">
                                <label class="form-label"><?= $t['image_path'] ?? 'Image Path' ?></label>
                                <input type="text" name="image" class="form-control">
                            </div>

                            <div class="mb-3">
                                <label class="form-label"><?= $t['category'] ?></label>
                                <select name="category_id" id="category-select" class="form-select"></select>
                            </div>

                            <div class="mb-3">
                                <label class="form-label"><?= $t['artist'] ?? 'Artist' ?></label>
                                <select name="brand_id" id="brand-select" class="form-select"></select>
                            </div>

                            <button type="submit" id="submit-button" class="btn btn-primary"><?= $t['add_product'] ?? 'Add Product' ?></button>
                        </form>
                    </div>
                </div>

                <div class="mb-3">
                    <h2 class="h5"><?= $t['product_list'] ?? 'Product List' ?></h2>
                    <input type="text" id="search-box" class="form-control" placeholder="<?= $t['search_placeholder'] ?>">
                </div>

                <div class="table-responsive">
                    <table class="table table-striped table-bordered" id="product-table">
                        <thead class="table-dark">
                            <tr>
                                <th>ID</th>
                                <th><?= $t['name'] ?? 'Name' ?></th>
                                <th><?= $t['price'] ?? 'Price' ?></th>
                                <th><?= $t['image'] ?? 'Image' ?></th>
                                <th><?= $t['category'] ?></th>
                                <th><?= $t['artist'] ?? 'Artist' ?></th>
                                <th><?= $t['actions'] ?? 'Actions' ?></th>
                            </tr>
                        </thead>
                        <tbody></tbody>
                    </table>
                </div>

                <div id="pagination" class="d-flex flex-wrap gap-2 mt-3"></div>

                <div class="container mt-4">
                    <!-- Manage Categories -->
                    <div class="card mb-4">
                        <div class="card-header">
                            <h2 class="h5 mb-0"><?= $t['manage_categories'] ?? 'Manage Categories' ?></h2>
                        </div>
                        <div class="card-body">
                            <form id="category-form" class="d-flex gap-2">
                                <input type="hidden" id="category-id" name="category-id">
                                <input type="text" id="new-category" class="form-control" placeholder="<?= $t['new_category_name'] ?? 'New Category Name' ?>" required>
                                <button type="submit" class="btn btn-success"><?= $t['add'] ?? 'Add' ?></button>
                            </form>
                            <ul id="category-list" class="mt-3 list-group"></ul>
                        </div>
                    </div>

                    <!-- Manage Brands -->
                    <div class="card mb-4">
                        <div class="card-header">
                            <h2 class="h5 mb-0"><?= $t['manage_artists'] ?? 'Manage Artists' ?></h2>
                        </div>
                        <div class="card-body">
                            <form id="brand-form" class="d-flex gap-2">
                                <input type="hidden" id="brand-id" name="brand-id">
                                <input type="text" id="new-brand" class="form-control" placeholder="<?= $t['new_artist_name'] ?? 'New artist Name' ?>" required>
                                <input type="text" id="brand-description" class="form-control mt-2" placeholder="<?= $t['artist_description'] ?? 'Artist Description' ?>">
                                <input type="text" id="brand-image" class="form-control mt-2" placeholder="<?= $t['image_url'] ?? 'Image URL' ?>">
                                <button type="submit" class="btn btn-success"><?= $t['add'] ?? 'Add' ?></button>
                            </form>
                            <ul id="brand-list" class="mt-3 list-group"></ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>
    <?php include "sub_element/footer.php"; ?>
    <script src="public/js/admin.js"></script>
</body>
</html>
