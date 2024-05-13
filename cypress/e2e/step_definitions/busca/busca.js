import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'

Given("que eu acesso o site do json Placeholder", () => {
  
  cy.visit("https://jsonplaceholder.typicode.com/")  
})

When('acesso o menu Guide', () => {

    cy.get(':nth-child(1) > .mr-4').should('be.visible')
    cy.get(':nth-child(1) > .mr-4').click()
    
})

When('clico no link albums 1 photos',() => {
    
    cy.get('body>div>main>ul>li>a[href="/albums/1/photos"]').scrollIntoView().should('be.visible')    
    .get('body>div>main>ul>li>a[href="/albums/1/photos"]').click()    
})

Then("valido os dados do objeto com o id = 6", () => {           

    cy.get('pre').then(($pre) => {
        const data = JSON.parse($pre.text());
  
        
        const jsonData = data.map((photo) => {
          return {
            albumId: photo.albumId,
            id: photo.id,
            title: photo.title,
            url: photo.url,
            thumbnailUrl: photo.thumbnailUrl
          }
        })

        cy.writeFile("cypress/fixtures/resultado.json",jsonData)
        
        const photoId6 = jsonData.find((photo) => photo.id === 6);        
        console.log(photoId6)
        
        expect(photoId6.title).to.eq('accusamus ea aliquid et amet sequi nemo')
        expect(photoId6.url).to.eq('https://via.placeholder.com/600/56a8c2')
        expect(photoId6.thumbnailUrl).to.eq('https://via.placeholder.com/150/56a8c2')                
    }) 

    cy.screenshot('success-collection')
    
})