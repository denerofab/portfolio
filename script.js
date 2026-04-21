const btnAbrirCurriculo = document.getElementById("btnAbrirCurriculo");
const detalheHabilidade = document.getElementById("detalheHabilidade");
const botoesVerMais = document.querySelectorAll(".btn-ver-mais");

const detalhes = {
    rede: {
        titulo: "Diagnóstico de Rede",
        descricao: `
            Tenho conhecimento em diagnóstico básico de rede, realizando verificações
            iniciais para identificar falhas de conexão em ambientes cabeados e sem fio.
            Isso inclui testes de conectividade, análise do IP recebido e uso de
            comandos como <strong>ipconfig</strong> e <strong>ping</strong> para validar
            a comunicação da máquina com a rede local e externa.
        `
    },
    ip: {
        titulo: "Configuração de IP",
        descricao: `
            Tenho familiaridade com a configuração manual de IP, máscara de sub-rede,
            gateway padrão e DNS em redes locais. Entendo a importância desses dados
            para o funcionamento correto da comunicação entre dispositivos, sendo uma
            habilidade útil para estações de trabalho, impressoras e equipamentos que
            exigem endereçamento fixo.
        `
    },
    formatacao: {
        titulo: "Formatação e Instalação de Sistema",
        descricao: `
            Tenho experiência com preparação de máquinas para uso, incluindo backup de
            arquivos importantes, criação de mídia bootável, configuração de boot,
            instalação do sistema operacional, drivers, atualizações e programas
            essenciais. O objetivo é deixar a máquina pronta, estável e funcional para
            o usuário.
        `
    }
};

btnAbrirCurriculo.addEventListener("click", () => {
    window.open("CurriDenerOFR.pdf", "_blank");
});

function atualizarDetalhe(skill) {
    const item = detalhes[skill];

    if (!item) {
        return;
    }

    detalheHabilidade.classList.add("hidden-fade");

    setTimeout(() => {
        detalheHabilidade.innerHTML = `
            <h3>${item.titulo}</h3>
            <p>${item.descricao}</p>
        `;

        detalheHabilidade.classList.remove("hidden-fade");
    }, 250);
}

botoesVerMais.forEach((botao) => {
    botao.addEventListener("click", (event) => {
        event.stopPropagation();

        const skill = botao.dataset.skill;
        atualizarDetalhe(skill);
    });
});
