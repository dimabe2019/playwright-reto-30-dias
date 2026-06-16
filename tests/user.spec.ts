import {expect, test} from '@playwright/test';

test('Get all the usernames registered', async ({page}) => {
   await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
      await page.getByPlaceholder('Username').fill('Admin')
      await page.getByPlaceholder('Password').fill('admin123')
      await page.getByRole('button', {name: 'Login'}).click()
    
      await expect(page.getByRole('link', {name: 'Admin'})).toBeVisible()

      await page.getByRole('link', {name: 'Admin'}).click()

      await page.getByRole('navigation', {name: 'Topbar Menu'}).getByText('User Management').click()

      await page.getByRole('menuitem', {name: 'Users'}).click()

      const rows = page.getByRole('table').getByRole('row')
      const usernames: string[] = []

      const rowCount = await rows.count()

      for (let i = 1; i < rowCount; i++) {
        const username = await rows.nth(i).getByRole('cell').nth(1).innerText()
        usernames.push(username)
      }

      console.log(usernames)

})

test('Get all the usernames employee name', async ({page}) => {
      await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
      await page.getByPlaceholder('Username').fill('Admin')
      await page.getByPlaceholder('Password').fill('admin123')
      await page.getByRole('button', {name: 'Login'}).click()
    
      await expect(page.getByRole('link', {name: 'Admin'})).toBeVisible()

      await page.getByRole('link', {name: 'Admin'}).click()

      await page.getByRole('navigation', {name: 'Topbar Menu'}).getByText('User Management').click()

      await page.getByRole('menuitem', {name: 'Users'}).click()

     // Seleccionar todas las filas de la tabla (incluye encabezado)
     const rows = page.getByRole('table').getByRole('row')
     const employeeNames: string[] = []

     const rowCount = await rows.count()

     for (let i = 1; i < rowCount; i++) {
       // La columna "Employee Name" suele ser la cuarta celda (índice 3)
       const employeeName = (await rows.nth(i).getByRole('cell').nth(3).innerText()).trim()
       employeeNames.push(employeeName)
     }

     console.log(employeeNames)
})