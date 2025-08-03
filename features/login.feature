
Feature: Funcionalidad de Login
    Como usuario del sistema
    Quiero poder iniciar sesión en el sitio
    Para acceder a las funcionalidades de producto

    Background:
        Given que el usuario está en la página de login

    Scenario: Login exitoso con credenciales válidas
        When el usuario ingresa el email de usuario "testeradl@test.com"
        When el usuario ingresa la contraseña "Tester@2025"
        When el usuario hace clic en el botón de ingresar
        Then debería ver el mensaje "Bienvenido al sistema ERP."

    Scenario: Login fallido con credenciales inválidas
        When ingresa usuario "testeradl@test1.com" y clave "Tester@2026" y presiona el botón "Ingresar"
        Then debe permanecer en la página de login
        And debe ver mensaje de error de credenciales incorrectas   
