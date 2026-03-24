function iniciarJornada() {
    // 1. Entrada: prompt para nome e Cosmo Inicial
    let nome = prompt("Qual o nome do Cavaleiro?");
    let cosmo = +prompt("Qual o seu Cosmo Inicial? (Digite um número)"); // Operador unário + converte para número

    if (isNaN(cosmo)) {
        alert("Por favor, insira um valor numérico para o Cosmo.");
        return;
    }

    // 2. Decisão: Sacrificar sentido
    let sacrificarSentido = confirm("Deseja sacrificar um de seus sentidos para elevar seu Cosmo ao Sétimo Sentido?");
    if (sacrificarSentido) {
        cosmo *= 2;
        alert("Seu Cosmo elevou-se infinitamente! Cosmo atual: " + cosmo);
    }

    // 3. Batalha: Subtrair dano nas 12 casas (Simulação)
    let statusVida = "Vivo";
    let danoTotal = 500; // Exemplo de dano fixo acumulado pelas 12 casas

    cosmo -= danoTotal; // Subtraindo dano usando -=

    // 4. Validação
    const divResultado = document.getElementById("resultado");
    
    if (cosmo >= 1000 && statusVida === "Vivo") {
        // 5. Saída: Relatório de vitória
        divResultado.innerHTML = `<h2>Parabéns, ${nome}!</h2><p>Você salvou Athena com <strong>${cosmo}</strong> de cosmo restante!</p>`;
        divResultado.style.color = "#d4af37";
    } else {
        divResultado.innerHTML = `<h2>Fim de Jogo</h2><p>${nome}, seu cosmo (${cosmo}) não foi suficiente para atravessar as 12 casas...</p>`;
        divResultado.style.color = "#ff4d4d";
    }
}