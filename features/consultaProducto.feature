Feature: Funcionalidad de producto
    Como usuario del sistema
    Quiero poder iniciar sesión en el sitio
    Para acceder a las funcionalidades de producto

    Background:
        Given que el usuario está en la página de login

    Scenario: Usuario registrado realiza consulta de producto
        When el usuario se dirige a opcion de Menu Entidades desplegando el menu
        When el usuario hace click en articulos
        Then debería dirigir a la pagina de articulos