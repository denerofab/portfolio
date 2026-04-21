const btnAbrirCurriculo = document.getElementById("btnAbrirCurriculo");
const conteudoDetalhado = document.getElementById("conteudoDetalhado");
const botoesCards = document.querySelectorAll(".btn-card");

btnAbrirCurriculo.addEventListener("click", () => {
    window.open("CurriDenerOFR.pdf", "_blank");
});

const detalhes = {
    internet: {
        titulo: "Diagnóstico de Rede",
        conteudo: `
            <p>Capacidade de identificar e resolver problemas de conexão de rede a partir de uma análise inicial organizada.</p>
            <ul>
                <li>Verificação de cabos de rede e conexão Wi-Fi.</li>
                <li>Reinício de modem e roteador quando necessário.</li>
                <li>Uso de comandos como <strong>ipconfig</strong> e <strong>ping</strong>.</li>
                <li>Teste de conectividade com rede interna e externa.</li>
                <li>Identificação de falhas em adaptadores, roteador ou provedor.</li>
            </ul>
        `
    },
    ip: {
        titulo: "Configuração de IP",
        conteudo: `
            <p>Configuração manual de rede em ambientes locais, compreendendo a função de cada parâmetro para o funcionamento correto da comunicação.</p>
            <ul>
                <li>Definição de IP fixo.</li>
                <li>Configuração de máscara de sub-rede e gateway.</li>
                <li>Configuração de DNS preferencial e alternativo.</li>
                <li>Testes de conectividade com <strong>ping</strong>.</li>
                <li>Prevenção de conflitos de IP na rede.</li>
            </ul>
        `
    },
    formatar: {
        titulo: "Formatação e Instalação de Sistema",
        conteudo: `
            <p>Processo completo de preparação da máquina para uso, desde a organização inicial até a validação final do sistema.</p>
            <ul>
                <li>Backup de dados importantes antes do procedimento.</li>
                <li>Criação de pendrive bootável.</li>
                <li>Acesso à BIOS e configuração da ordem de boot.</li>
                <li>Formatação do disco e escolha correta de partições.</li>
                <li>Instalação do sistema operacional.</li>
                <li>Instalação de drivers, atualizações e programas essenciais.</li>
                <li>Validação final do funcionamento da máquina.</li>
            </ul>
        `
    }
};

function mostrarConteudo(tipo) {
    const item = detalhes[tipo];

    if (!item) {
        return;
    }

    conteudoDetalhado.classList.add("hidden-fade");

    setTimeout(() => {
        conteudoDetalhado.innerHTML = `
            <h3>${item.titulo}</h3>
            ${item.conteudo}
        `;
        conteudoDetalhado.classList.remove("hidden-fade");
    }, 250);
}

botoesCards.forEach((botao) => {
    botao.addEventListener("click", (event) => {
        event.stopPropagation();
        const tipo = botao.dataset.tipo;
        mostrarConteudo(tipo);
    });
});
