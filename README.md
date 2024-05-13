# Projeto E2E web no json placeholder

Esse projeto tem por finalidade a validacao web de pesquisa da collections de requisições apis retornadas em tela atraves de desafio proposto

Tecnologias utilizadas:
* Automacao foi realizada com cypress versao 12.14.0 (foi necessario essa versao para um comportament correto no report);
* cypress-cucumber-preprocessor versao 4.3.1, para que conforme proposto no desafio, a utilizacao do BDD;
* Allure-report para que fosse possivel não somente o relatorio da automacao, como tambem o printscreen do resultado esperado.

Instrucoes para a rodada de testes:
* Para a execucao em headless e na sequencia, solicitar o relatorio seguir os seguintes passos:
  -> no prompt de comando, inserir a instrucao npm run test e na sequencia informar allure open para verificar de forma separada
  -> Para a execucao em headless e a geracao instantanea do Report apos o fim da rodada de testes inserir a instrucao npm run test:rep no prompt de comando.  

