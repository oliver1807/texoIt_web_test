Feature: Colecao de dados

    Como usuario, acesso o site do json placeholder
    Para realizar a busca de informacoes no menu Guide 

Scenario: Busca de dados do menu Guide
    Given que eu acesso o site do json Placeholder
    When acesso o menu Guide
    And clico no link albums 1 photos
    Then valido os dados do objeto com o id = 6