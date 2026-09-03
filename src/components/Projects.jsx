function Projects() {
  return (
    <>
      <div className="section-divider-line"></div>
      <p className="section-tag">Selected Portfolio</p>
      <h2>
        Selected <span>Works</span>
      </h2>
      <div className="grid">
        <div className="project-card">
          <div className="project-header">
            <span className="tag">FastAPI</span>
            <span className="tag font-bold">Data & ML</span>
          </div>
          <h3>AgentMetrics</h3>
          <p>
            API de telemetria inteligente desenvolvida para monitorar o consumo
            de recursos e metrificar o desempenho de agentes de IA em tempo
            real.
          </p>
          <div className="project-links">
            <a
              href="https://github.com/Matheus-dCastro/AgentMetrics"
              target="_blank"
              className="link-arrow"
            >
              View GitHub <span>→</span>
            </a>
          </div>
        </div>

        <div className="project-card">
          <div className="project-header">
            <span className="tag">Deep Learning</span>
            <span className="tag font-bold">Python</span>
          </div>
          <h3>Medical Image Segmentation</h3>
          <p>
            Pipeline de Deep Learning supervisionado para segmentação pixel a
            pixel de estruturas e lesões em imagens médicas utilizando
            arquitetura U-Net.
          </p>
          <div className="project-links">
            <a
              href="https://github.com/Matheus-dCastro/Projeto-de-AM-Supervisionado"
              target="_blank"
              className="link-arrow"
            >
              View GitHub <span>→</span>
            </a>
          </div>
        </div>

        <div className="project-card">
          <div className="project-header">
            <span className="tag">VS Code Theme</span>
            <span className="tag font-bold">UI & Design</span>
          </div>
          <h3>Obsidian Neon Theme</h3>
          <p>
            Tema e suíte visual para VS Code com paletas neon de alto contraste,
            ícones customizados e realce de sintaxe semântico refinado.
          </p>
          <div className="project-links">
            <a
              href="https://github.com/Matheus-dCastro/obsidian-neon-thema"
              target="_blank"
              className="link-arrow"
            >
              View GitHub <span>→</span>
            </a>
          </div>
        </div>

        <div className="project-card">
          <div className="project-header">
            <span className="tag">Automation & Web</span>
          </div>
          <h3>Cachina Soluções</h3>
          <p>
            Desenvolvimento e hospedagem do ecossistema de interfaces e
            apresentação estratégica corporativa.
          </p>
          <div className="project-links">
            <a
              href="https://github.com/Matheus-dCastro/Site-Cachina-2026"
              target="_blank"
              className="link-arrow"
            >
              Code <span>→</span>
            </a>
            <a
              href="https://cachina.com.br/"
              target="_blank"
              className="link-arrow"
            >
              Live Demo <span>→</span>
            </a>
          </div>
        </div>

        <div className="project-card">
          <div className="project-header">
            <span className="tag">Python & SQL</span>
          </div>
          <h3>Task System CLI</h3>
          <p>Arquitetura MVC completa com persistência em PostgreSQL.</p>
          <div className="project-links">
            <a
              href="https://github.com/Matheus-dCastro/Sistema-de-Controle-em-Py3"
              target="_blank"
              className="link-arrow"
            >
              View GitHub <span>→</span>
            </a>
          </div>
        </div>

        <div className="project-card">
          <div className="project-header">
            <span className="tag">Java</span>
          </div>
          <h3>TimeMaster</h3>
          <p>
            Sistema modular backend para gerenciamento de compromissos e
            agendamentos complexos desenvolvido em LP2.
          </p>
          <div className="project-links">
            <a
              href="https://github.com/Matheus-dCastro/Sistema-de-Agenda-de-Compromissos.git"
              target="_blank"
              className="link-arrow"
            >
              View GitHub <span>→</span>
            </a>
          </div>
        </div>

        <div className="project-card">
          <div className="project-header">
            <span className="tag">C++</span>
          </div>
          <h3>Zombie Dice</h3>
          <p>
            Implementação orientada a objetos e máquina de estados para execução
            de jogo de dados lógico via terminal CLI.
          </p>
          <div className="project-links">
            <a
              href="https://github.com/Matheus-dCastro/trabalho-06-projeto-zombie-dice-Turma-DIM0176---PROGRAMA-O-I---T02-2025.1-.git"
              target="_blank"
              className="link-arrow"
            >
              View GitHub <span>→</span>
            </a>
          </div>
        </div>

        <div className="project-card">
          <div className="project-header">
            <span className="tag">Game in CPP</span>
          </div>
          <h3>Projeto snaze</h3>
          <p>
            implement a simulation in which your program must guide a snake
            through a maze to a piece of food that appears in a random position.
          </p>
          <div className="project-links">
            <a
              href="https://github.com/Matheus-dCastro/trabalho-07-projeto-snaze--Turma-DIM0176---PROGRAMA-O-I---T02-2025.1-.git"
              target="_blank"
              className="link-arrow"
            >
              View GitHub <span>→</span>
            </a>
          </div>
        </div>

        <div className="project-card">
          <div className="project-header">
            <span className="tag">CPP</span>
          </div>
          <h3>password generator</h3>
          <p>
            O objetivo do programa é produzir senhas de complexidade e tamanho
            variados, dependendo das escolhas de configuração do usuário.
          </p>
          <div className="project-links">
            <a
              href="https://github.com/Matheus-dCastro/trabalho-03-projeto-passgen-Turma-DIM0176---PROGRAMA-O-I---T02-2025.1-"
              target="_blank"
              className="link-arrow"
            >
              View GitHub <span>→</span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Projects;
