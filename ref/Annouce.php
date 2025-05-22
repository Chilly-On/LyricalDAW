<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title><?= $t['annouce'] ?></title>
    <link rel="stylesheet" href="public/css/style.css">
</head>
<body>
    <?php include "sub_element/header.php"; ?>
    <h1 class="upper-main" style="background-color: #46443f">
        <?= $t['notification'] ?>
    </h1>
    <main class="outer-main">
        <div class="inner-main">
            
            <div class="alert alert-success text-center" role="alert">
                <h4 class="alert-heading"><?= $t['registration_successful'] ?></h4>
                <p><?= $t['you_registered'] ?></p>
                <hr>
                <a href='index.php?page=login' class="btn btn-primary mt-2"><?= $t['return_login'] ?></a>
             </div>
        </div>
    </main>
    <?php include "sub_element/footer.php"; ?>
</body>
</html>