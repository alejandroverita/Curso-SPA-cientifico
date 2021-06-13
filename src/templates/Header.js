const Header = () => {
    const view = `
        <div class="Header-main">
            <div class= "Header-logo">
                <h1>
                    <a href="/">
                        <img src="https://i.imgur.com/7utDxm8.png" alt="Rick and Morty">
                    </a>
                </h1>
            </div>
            <div class = "Header-nav">
                <a href="#/about/" class="nav-element">
                    About
                </a>
                <button class="switch" id="switch">
                    <span><i class="fas fa-sun"></i><span>
                    <span><i class="fas fa-moon"></i><span>
                </button>
            </div>
        </div>
    `;
    return view;
};

export default Header;