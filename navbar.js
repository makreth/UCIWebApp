function getNavBar(){
    const navbar = `
<nav class="navbar navbar-expand-lg navbar-light bg-custom">
    <a class="navbar-brand" href="#">UI/UX App</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
        <li class="nav-item active">
            <a class="nav-link" href="#">About<span class="sr-only">(current)</span></a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="#">Interest</a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="#">Philosophy</a>
        </li>
    </div>
</nav>
    `
    return navbar;
}