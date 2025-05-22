<!DOCTYPE html>
<html lang="<?= $lang ?>">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width,initial-scale=1.0">
    <title><?= $t['login'] ?></title>
    <link rel="stylesheet" href="public/css/style.css">
</head>
<body>
    <?php include "sub_element/header.php"; ?>
    <h1 class="upper-main" style="background-color: #5297b3">
        <?= $t['login'] ?>
    </h1>
    <main class="outer-main">
        <div class="inner-main">
            <div class="row justify-content-center">
            <div class="col-md-6">

                <!-- Message Section -->
                <?php if (empty($_GET['attempt'])): ?>
                    <div class="text-center mb-4">
                        <h2><?= $t['login_message'] ?></h2>
                    </div>
                <?php else: ?>
                    <div class="text-center mb-4 text-danger">
                        <h2><?= $t['login_error'] ?></h2>
                    </div>
                <?php endif; ?>

                <!-- Login Form -->
                <div class="card shadow">
                    <div class="card-body">
                        <form action="php/login.php" method="POST" id="form">
                            <div class="mb-3">
                                <label for="email" class="form-label"><?= $t['email'] ?>:</label>
                                <input type="email" class="form-control" name="email" id="email" required>
                            </div>

                            <div class="mb-3">
                                <label for="password" class="form-label"><?= $t['password'] ?>:</label>
                                <input type="password" class="form-control" name="password" id="password" required>
                            </div>

                            <button type="submit" class="btn btn-info w-100"><?= $t['submit'] ?></button>
                        </form>
                    </div>
                </div>

                <!-- Sign Up Link -->
                <div class="text-center mt-4">
                    <h5><?= $t['new_here'] ?></h5>
                    <a href="index.php?page=signUp" class="btn btn-outline-secondary mt-2"><?= $t['signup_here'] ?></a>
                </div>

                <div class="text-center mt-4">
                    <a href="#" class="btn btn-outline-secondary mt-2"><?= $t['forgot_password'] ?></a>
                </div>

            </div>
            </div>
        </div>
    </main>
    <?php include "sub_element/footer.php"; ?>
</body>
</html>
