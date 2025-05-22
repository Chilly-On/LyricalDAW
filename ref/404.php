<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width,initial-scale=1.0">
    <title><?= $t['err'] ?></title>
    <link rel="stylesheet" href="public/css/style.css">
</head>
<body>
    <?php include "sub_element/header.php"; ?>
    <?php global $t; ?>
    <h1 class="upper-main" style="background-color: #46443f">
        <?= $t['notification'] ?>
    </h1>
    <main class="outer-main">
        <div class="inner-main">
            <div class="container mt-5">
                <div class="alert alert-danger text-center" role="alert">
                    <h4 class="alert-heading"><?= $t['error'] ?></h4>
                    <p>404: <?= $t['not_found_message'] ?></p>
                    <hr>
                    <a href='index.php' class="btn btn-primary mt-2"><?= $t['return_home'] ?></a>
                </div>
            </div>
        </div>
    </main>
    <?php include "sub_element/footer.php"; ?>
</body>
</html>
