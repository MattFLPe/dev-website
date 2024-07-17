import '../App.css';

function NavigationBar() {
    return (
        <div className="nav-bar">
            <div className="container">
                <nav class="navbar navbar-expand-lg" style={{background: "rgb(15, 15, 16)"}}>
                <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <a class="nav-item nav-link active" href="./home.js">Home<span class="sr-only">(current)</span></a>
                        <a class="nav-item nav-link" href="#">Projects</a>
                        <a class="nav-item nav-link" href="#">Contact</a>
                        <a class="nav-item nav-link disabled" href="#">Disabled</a>
                    </div>
                </div>
                </nav>
            </div>
        </div>
      );
}

export default NavigationBar;