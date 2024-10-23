// navbar.js
function loadNavbar() {
    const navbarHTML = `
    <nav class="navbar navbar-expand-lg bg-dark navbar-dark" style="padding-top:30px; padding-left:20px; padding-right:20px">
        <div class="container-fluid">
            <a class="navbar-brand" href="index.html">QUILTRO</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#">Agregar nuevo</a>
                        <ul class="dropdown-menu">
                            <li><a class="dropdown-item" href="materias-primas.html">Materias Primas</a></li>
                            <li><a class="dropdown-item" href="agregar-producto.html">Producto</a></li>
                        </ul>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#">Inventario</a>
                        <ul class="dropdown-menu">
                            <li><a class="dropdown-item" href="inventarioMP.html">Materias primas</a></li>
                            <li><a class="dropdown-item" href="inventarioP.html">Productos terminados</a></li>
                        </ul>
                    </li>
                    <li class="nav-item"><a class="nav-link" href="productos.html">Productos</a></li>
                    <li class="nav-item"><a class="nav-link" href="creacionProducto.html">Producción</a></li>
                </ul>
            </div>
        </div>
    </nav>`;
    
    // Inserta la navbar en el elemento con id 'navbar'
    document.getElementById('navbar').innerHTML = navbarHTML;
}
