// Declaração das variáveis
var nomeCompleto = "João Melo";
var anoCorrente = 2026;
var twitter = "@ualkpet";
var facebook = "@ualkpet.oficial";
var instagram = "@ualkpet";
var linkedin = "@ualkpet-br";
var sexo = "Masculino";
var localizacao = "São Paulo";

// Exibição estilizada das informações
document.write('<div class="info-aluno">');
document.write('<p><strong>Desenvolvido por:</strong> ' + nomeCompleto + '</p>');
document.write('<p><strong>Ano:</strong> ' + anoCorrente + '</p>');
document.write('<p><strong>Redes Sociais:</strong> ' + instagram + ' | ' + facebook + ' | ' + twitter + ' | ' + linkedin + '</p>');
document.write('<p><strong>Sexo:</strong> ' + sexo + '</p>');
document.write('<p><strong>Localização:</strong> ' + localizacao + '</p>');
document.write('</div>');