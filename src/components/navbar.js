import '../App.css';

function NavigationBar() {
    return (
        <div className="nav-bar">
            <div className="container">
                <nav className="navbar" style={{background: "rgb(15, 15, 16)"}}>
                
                    <div className="navbar-nav">
                        <div className='container-nav'>
                        <a class="nav-item active" href="./home.js"><i class="fa fa-home"></i></a>
                        <a class="nav-item" target="_blank" href="https://github.com/MattFLPe"><i class="fab fa-github"></i></a>
                        <a class="nav-item" target="_blank" href="#"><i class="fab fa-linkedin"></i></a>
                        <a class="nav-item" href="#"><i class="fa fa-user"></i></a>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
      );
}

export default NavigationBar;