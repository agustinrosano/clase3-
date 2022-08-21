import logo from './logo.svg';
import './App.css';

function App() {
  return (
 <header>
    <nav class="navbar navbar-expand-lg navbar-light bg-primary d-flex">


        <div class="container-fluid">
          <a class="navbar-brand" href="#">$HOP</a>


          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>


          <div class="collapse navbar-collapse d-flex justify-content-center" id="navbarNavAltMarkup">
            <div class="navbar-nav d-flex justify-content-evenly">
                <a class="nav-link" href="#">Licores</a>
                <a class="nav-link" href="#">Bebidas</a>
                <a class="nav-link" href="#">Agua</a>
            </div>
          </div>

          <a class="navbar-brand  d-flex justify-content-end" href="#">Carrito</a>

        </div>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-A3rJD856KowSb7dwlZdYEkO39Gagi7vIsF0jrRAoQmDKKtQBHUuLZ9AsSv4jD4Xa" crossorigin="anonymous"></script>
      </nav>
    </header>
  );
}

export default App;
