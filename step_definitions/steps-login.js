const { Given, When, Then, Before } = require('@cucumber/cucumber');
const { expect } = require('@playwright/test');

Given('que el usuario está en la página de login', async function () {
   await this.page.goto('/login');
   await expect(this.page).toHaveURL(/.*\/login/);
})

When('el usuario ingresa el email de usuario "testeradl@test.com"', async function () {
    await this.page.locator('#email').fill('testeradl@test.com');
});

When('el usuario ingresa la contraseña "Tester@2025"', async function () {
    await this.page.locator('#password').fill('Tester@2025');
});

When('el usuario hace clic en el botón de ingresar', async function () {
    await this.page.getByRole('button', 'Ingresar').click();
});

Then('debería ver el mensaje "Bienvenido al sistema ERP."', async function () {
    await expect(this.page).toHaveURL(/.*\/dashboard/);
});

When ('ingresa usuario "testeradl@test1.com" y clave "Tester@2026" y presiona el botón "Ingresar"', async function () {
    await this.page.locator('#email').fill('testeradl@test1.com');
    await this.page.locator('#password').fill('Tester@2026');
    await this.page.getByRole('button', 'Ingresar').click();
});

Then ('debe permanecer en la página de login', async function () {
    await expect(this.page).toHaveURL(/.*\/login/);    
})

Then ('debe ver mensaje de error de credenciales incorrectas', async function () {
    await expect (this.page.locator('.Toastify')).toHaveText('Las credenciales proporcionadas son incorrectas.')
    
})


    

