/* Estilos generales */
body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
    background-color: #f4f4f9;
  }
  
  /* Encabezado profesional */
  header {
    background: linear-gradient(45deg, #0078d7, #005bb5);
    color: #fff;
    padding: 1.5rem 2rem;
    text-align: center;
    font-size: 2rem;
    font-weight: 600;
    margin-left: 220px; /* Espacio para el sidebar */
    letter-spacing: 1.5px;
    text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.3);
    border-bottom: 3px solid #005bb5;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  }
  
  /* Sidebar fijo con fondo azul original */
  .sidebar {
    width: 220px;
    background-color: #0078d7;
    color: white;
    padding: 1rem;
    height: 100vh; /* Ocupa el 100% del viewport */
    box-sizing: border-box;
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    flex-direction: column;
  }
  
  .sidebar h2 {
    margin-top: 0;
    font-size: 1.5rem;
  }
  
  .sidebar ul {
    list-style: none;
    padding: 0;
    margin-bottom: 0;
  }
  
  .sidebar li {
    margin: 1rem 0;
  }
  
  .sidebar li button {
    background: none;
    border: none;
    color: white;
    font-size: 1rem;
    cursor: pointer;
    text-align: left;
    width: 100%;
    transition: transform 0.3s ease-in-out;
  }
  
  .sidebar li button:hover {
    transform: scale(1.1);
    text-decoration: underline;
  }
  
  /* Contenedor para el logo, ubicado al final del sidebar sin fondo */
  .logo-container {
    margin-top: auto;
    padding-top: 1rem;
    text-align: center;
  }
  
  .logo-container img {
    width: 100%;
    height: auto;
    display: block;
    transition: transform 0.5s ease;
  }
  
  .logo-container img:hover {
    transform: rotate(360deg) scale(1.1);
  }
  
  /* Contenedor principal: se separa del sidebar */
  .container {
    margin-left: 220px; /* Espacio para el sidebar */
    padding: 2rem;
    overflow-y: auto;
    min-height: calc(100vh - 70px);
  }
  
  /* Secciones de formulario */
  .form-section {
    display: none;
  }
  
  .form-section.active {
    display: block;
  }
  
  .form-section h1 {
    margin-top: 0;
    margin-bottom: 1rem;
  }
  
  /* Tarjetas (Cards) */
  .card-container {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    justify-content: center;
  }
  
  .card {
    background-color: white;
    border: 1px solid #ddd;
    border-radius: 8px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    padding: 1rem;
    width: 100%;
    max-width: 250px;
    text-align: center;
    display: flex;
    flex-direction: column;
    transition: transform 0.3s ease-in-out;
  }
  
  .card:hover {
    transform: scale(1.05);
  }
  
  .card-image-container {
    height: 150px;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 1rem;
  }
  
  .card img {
    max-width: 100%;
    max-height: 100%;
    object-fit: contain;
    background-color: #f9f9f9;
  }
  
  .card h3 {
    margin: 0.5rem 0;
    font-size: 1.2rem;
  }
  
  .card p {
    color: #555;
    flex-grow: 1;
  }
  
  .card a {
    display: inline-block;
    margin-top: 1rem;
    padding: 0.5rem 1rem;
    background-color: #0078d7;
    color: white;
    text-decoration: none;
    border-radius: 5px;
  }
  
  .card a:hover {
    background-color: #005bb5;
  }
  
  /* Modal para la tarjeta Despachos */
  .modal {
    display: none; /* Oculto por defecto */
    position: fixed;
    z-index: 1000;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,0.6);
    animation: fadeIn 0.3s;
  }
  
  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }
  
  .modal-content {
    background: #fff;
    margin: 10% auto;
    padding: 2rem;
    width: 80%;
    max-width: 400px;
    border-radius: 12px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    position: relative;
    animation: slideIn 0.3s;
    text-align: center;
  }
  
  @keyframes slideIn {
    from { transform: translateY(-30px); }
    to { transform: translateY(0); }
  }
  
  .close {
    position: absolute;
    top: 10px;
    right: 16px;
    font-size: 24px;
    font-weight: bold;
    color: #aaa;
    cursor: pointer;
    transition: color 0.3s;
  }
  
  .close:hover {
    color: #000;
  }
  
  .modal-content button {
    background-color: #0078d7;
    color: #fff;
    border: none;
    padding: 0.75rem 1.5rem;
    margin: 0.5rem;
    border-radius: 5px;
    cursor: pointer;
    font-size: 1rem;
    transition: background-color 0.3s;
  }
  
  .modal-content button:hover {
    background-color: #005bb5;
  }