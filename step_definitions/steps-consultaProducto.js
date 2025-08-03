const { Given, When, Then, Before } = require('@cucumber/cucumber');
const { expect } = require('@playwright/test');

When ('el usuario se dirige a opcion de Menu Entidades desplegando el menu', async function () {
  await this.page.locator('button', {name : 'Entidades'}).click();
});


When ('el usuario hace click en articulos', async function () {
    await this.page.click('button', {name : 'Artículos'})
    
    
});

Then ('debería dirigir a la pagina de articulos', async function () {
    await expect(this.page.locator('#Listado de Artículos')).toBeVisible
    
});






