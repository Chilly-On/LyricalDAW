<link href='https://fonts.googleapis.com/css?family=Roboto' rel='stylesheet'>
<header style="display: flex;">
    <div class="logo">
        <a href="index.php">
            <img src="public/image/logo.png" alt="Logo" width="100" height="100">
        </a>
        M3 Store
    </div>

    <div class="search-wrapper">
        <input type="text" id="search" placeholder="Search by name or category" />
        <div id="results"></div>
    </div>
    <nav>
        <ul>
			<li><span><a href="index.php?page=product">
				<button href="#" class="btn">Product/Service</button>
			</a></span></li>
			<li><span><a href="index.php?page=category">
				<button href="#" class="btn">Category</button>
			</a></span></li>
			<li><span><a href="index.php?page=contact">
				<button href="#" class="btn">Contact</button>
			</a></span></li>
            <li><span><a href='index.php?page=login'>
                <button href='#' class='btn'>Login/Signup</button>
            </a></span></li>
        </ul>
    </nav>
</header>
<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
<script src="public/js/search.js"></script>
