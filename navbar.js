function getNavBar({carousel}){
    const navbar = `
<nav class="navbar navbar-expand-lg navbar-light bg-custom">
    <a class="navbar-brand" href="#">UI/UX App</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
            ${carousel ? carouselDropdown() : noDropdown()}
            ${projectsDropdown()}
        </ul>
    </div>
</nav>
    `
    return navbar;
}

function projectsDropdown(){
    const dropdown = `
    <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="projectsDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Projects
        </a>
        <div class="dropdown-menu" aria-labelledby="projectsDropdown">
            <a class="dropdown-item" href="tictact.html">TicTacToeJS</a>
            <a class="dropdown-item" href="blackjack.html">BlackJackPy</a>
        </div>
    </li>
    `
    return dropdown;
}

function carouselDropdown(){
    const dropdown = `
    <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="carouselDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            About
        </a>
        <div class="dropdown-menu" aria-labelledby="carouselDropdown">
            <a class="dropdown-item slides-target" href="#">Purpose</a>
            <a class="dropdown-item slides-target" href="#">Interest</a>
            <a class="dropdown-item slides-target" href="#">Philosophy</a>
        </div>
    </li>`
    return dropdown

}

function noDropdown(){
    const element = `
        <li class="nav-item">
            <a class="nav-link" href="index.html">About</a>
        </li>
    `
    return element;
}