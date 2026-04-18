const btnAbrirCurriculo = document.getElementById("btnAbrirCurriculo");

const conteudoDetalhado = document.getElementById("conteudoDetalhado");
const botoesCards = document.querySelectorAll(".btn-card");

// Botão currículo
// Abrir currículo (local)
btnAbrirCurriculo.addEventListener("click", () => {
    window.open("CurriDenerOFR.pdf", "_blank");
});

// Conteúdo das habilidades
function mostrarConteudo(tipo) {
    if (tipo === "internet") {
        conteudoDetalhado.innerHTML = `
            <h3>Diagnóstico de Rede</h3>
            <p>Capacidade de identificar e resolver problemas de conexão de rede.</p>
            <ul>
                <li>Verificação de cabos e conexão Wi-Fi.</li>
                <li>Reinício de modem e roteador.</li>
                <li>Uso de comandos como <strong>ipconfig</strong> e <strong>ping</strong>.</li>
                <li>Teste de conectividade com rede interna e externa.</li>
                <li>Identificação de falhas em adaptadores ou provedor.</li>
            </ul>
        `;
    } else if (tipo === "ip") {
        conteudoDetalhado.innerHTML = `
            <h3>Configuração de IP</h3>
            <p>Configuração manual de rede em ambientes controlados.</p>
            <ul>
                <li>Definição de IP fixo.</li>
                <li>Configuração de máscara de sub-rede e gateway.</li>
                <li>Configuração de DNS.</li>
                <li>Testes de conectividade com ping.</li>
                <li>Evitar conflitos de IP na rede.</li>
            </ul>
        `;
    } else if (tipo === "formatar") {
        conteudoDetalhado.innerHTML = `
            <h3>Formatação e Instalação de Sistema</h3>
            <p>Processo completo de preparação de máquinas para uso.</p>
            <ul>
                <li>Backup de dados importantes.</li>
                <li>Criação de pendrive bootável.</li>
                <li>Acesso à BIOS e configuração de boot.</li>
                <li>Formatação de disco e escolha de partições.</li>
                <li>Instalação do sistema operacional.</li>
                <li>Instalação de drivers e atualizações.</li>
                <li>Instalação de programas essenciais.</li>
                <li>Validação final do funcionamento do sistema.</li>
            </ul>
        `;
    }
}

// Eventos nos cards
botoesCards.forEach((botao) => {
    botao.addEventListener("click", () => {
        const tipo = botao.dataset.tipo;
        mostrarConteudo(tipo);
    });
});