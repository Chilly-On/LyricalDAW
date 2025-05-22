<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width,initial-scale=1.0">
    <title><?= $t['title'] ?></title>
    <link rel="stylesheet" href="public/css/style.css">
</head>
<body>
<?php include "sub_element/header.php"; ?>

<h1 class="upper-main" style="background-color: #5297b3">
    <?= $t['title'] ?>
</h1>

<main class="outer-main">
    <div class="inner-main">
        <div class="row justify-content-center">
            <div class="col-md-6">

                <div class="text-center mb-4">
                    <h2><?= $t['create_account'] ?></h2>
                </div>

                <div class="card shadow">
                    <div class="card-body">
                        <form action="php/sign_up.php" method="POST" id="form">
                            <div class="mb-3">
                                <label for="email" class="form-label"><?= $t['email'] ?></label>
                                <input type="email" class="form-control" name="email" id="email" required>
                            </div>

                            <div class="mb-3">
                                <label for="password" class="form-label"><?= $t['password'] ?></label>
                                <input type="password" class="form-control" name="password" id="password" required>
                            </div>

                            <div class="mb-3">
                                <label for="confirm_password" class="form-label"><?= $t['confirm_password'] ?></label>
                                <input type="password" class="form-control" name="confirm_password" id="confirm_password" required>
                            </div>

                            <button type="submit" class="btn btn-info w-100"><?= $t['submit'] ?></button>
                        </form>
                    </div>
                </div>

                <div class="text-center mt-4">
                    <h5><?= $t['already_account'] ?></h5>
                    <a href="index.php?page=login&lang=<?= $lang ?>" class="btn btn-outline-secondary mt-2"><?= $t['login_here'] ?></a>
                </div>

            </div>
        </div>
    </div>
</main>

<?php include "sub_element/footer.php"; ?>

<!-- JS Password Validation -->
<script>
document.getElementById("form").addEventListener("submit", function(e) {
    const password = document.getElementById("password").value;
    const confirm = document.getElementById("confirm_password").value;
    const regex = /^(?=.*[A-Za-z])(?=.*\d).{8,}$/;

    if (!regex.test(password)) {
        alert("<?= $t['password_error'] ?>");
        e.preventDefault();
        return;
    }

    if (password !== confirm) {
        alert("<?= $t['password_mismatch'] ?>");
        e.preventDefault();
    }
});
</script>

</body>
</html>
