const questions = [
  // ======================
  // FÁCEIS (40)
  // ======================
  {
    question: "Qual comando exibe a lista de arquivos em um diretório?",
    options: ["ls", "cd", "pwd", "rm"],
    answer: "ls",
    topic: "Gerenciamento de Arquivos",
    level: "Fácil",
  },
  {
    question: "Qual arquivo contém informações sobre as contas de usuários?",
    options: ["/etc/passwd", "/etc/shadow", "/etc/group", "/etc/hosts"],
    answer: "/etc/passwd",
    topic: "Gerenciamento de Usuários",
    level: "Fácil",
  },
  {
    question: "Qual comando é usado para criar um diretório?",
    options: ["mkdir", "touch", "cd", "ls"],
    answer: "mkdir",
    topic: "Gerenciamento de Arquivos",
    level: "Fácil",
  },
  {
    question: "Qual comando mostra o diretório atual?",
    options: ["pwd", "ls", "whoami", "id"],
    answer: "pwd",
    topic: "Navegação no Sistema",
    level: "Fácil",
  },
  {
    question: "Qual comando é usado para mudar de diretório?",
    options: ["cd", "mv", "ls", "pwd"],
    answer: "cd",
    topic: "Navegação no Sistema",
    level: "Fácil",
  },
  {
    question: "Qual comando exibe o nome do usuário atual?",
    options: ["whoami", "id", "echo $USER", "groups"],
    answer: "whoami",
    topic: "Usuários e Grupos",
    level: "Fácil",
  },
  {
    question: "Qual arquivo contém as senhas criptografadas dos usuários?",
    options: ["/etc/shadow", "/etc/passwd", "/etc/group", "/etc/hostname"],
    answer: "/etc/shadow",
    topic: "Gerenciamento de Usuários",
    level: "Fácil",
  },
  {
    question: "Qual comando mostra o conteúdo de um arquivo?",
    options: ["cat", "ls", "echo", "grep"],
    answer: "cat",
    topic: "Manipulação de Arquivos",
    level: "Fácil",
  },
  {
    question: "Qual comando é usado para remover um arquivo?",
    options: ["rm", "rmdir", "unlink", "delete"],
    answer: "rm",
    topic: "Gerenciamento de Arquivos",
    level: "Fácil",
  },
  {
    question: "Qual comando remove diretórios vazios?",
    options: ["rmdir", "rm -r", "unlink", "delete"],
    answer: "rmdir",
    topic: "Gerenciamento de Arquivos",
    level: "Fácil",
  },
  {
    question: "Qual comando mostra o espaço livre em disco?",
    options: ["df", "du", "lsblk", "mount"],
    answer: "df",
    topic: "Sistemas de Arquivos",
    level: "Fácil",
  },
  {
    question: "Qual comando mostra o uso de disco por diretório?",
    options: ["du", "df", "ls", "stat"],
    answer: "du",
    topic: "Sistemas de Arquivos",
    level: "Fácil",
  },
  {
    question: "Qual comando é usado para criar um arquivo vazio?",
    options: ["touch", "cat", "echo", "vi"],
    answer: "touch",
    topic: "Gerenciamento de Arquivos",
    level: "Fácil",
  },
  {
    question: "Qual comando exibe as primeiras linhas de um arquivo?",
    options: ["head", "tail", "less", "more"],
    answer: "head",
    topic: "Manipulação de Arquivos",
    level: "Fácil",
  },
  {
    question: "Qual comando exibe as últimas linhas de um arquivo?",
    options: ["tail", "head", "less", "cat"],
    answer: "tail",
    topic: "Manipulação de Arquivos",
    level: "Fácil",
  },
  {
    question: "Qual comando é usado para copiar arquivos?",
    options: ["cp", "mv", "ln", "scp"],
    answer: "cp",
    topic: "Gerenciamento de Arquivos",
    level: "Fácil",
  },
  {
    question: "Qual comando é usado para mover ou renomear arquivos?",
    options: ["mv", "cp", "ln", "rename"],
    answer: "mv",
    topic: "Gerenciamento de Arquivos",
    level: "Fácil",
  },
  {
    question: "Qual comando mostra o calendário?",
    options: ["cal", "date", "time", "clock"],
    answer: "cal",
    topic: "Ferramentas do Sistema",
    level: "Fácil",
  },
  {
    question: "Qual comando mostra a data e hora atuais?",
    options: ["date", "cal", "time", "clock"],
    answer: "date",
    topic: "Ferramentas do Sistema",
    level: "Fácil",
  },
  {
    question: "Qual comando é usado para mostrar o manual de um comando?",
    options: ["man", "info", "help", "--help"],
    answer: "man",
    topic: "Ajuda e Documentação",
    level: "Fácil",
  },

  // ... (continua até 40 fáceis)
  
  // ======================
  // MÉDIAS (40)
  // ======================
  {
    question: "Qual comando exibe processos em tempo real?",
    options: ["top", "ps", "jobs", "kill"],
    answer: "top",
    topic: "Gerenciamento de Processos",
    level: "Médio",
  },
  {
    question: "Qual comando exibe variáveis de ambiente?",
    options: ["env", "printenv", "set", "export"],
    answer: "env",
    topic: "Shell e Variáveis",
    level: "Médio",
  },
  {
    question: "Qual comando altera permissões de arquivos?",
    options: ["chmod", "chown", "umask", "ls -l"],
    answer: "chmod",
    topic: "Permissões",
    level: "Médio",
  },
  {
    question: "Qual comando altera o dono de um arquivo?",
    options: ["chown", "chmod", "chgrp", "ls -l"],
    answer: "chown",
    topic: "Permissões",
    level: "Médio",
  },
  {
    question: "Qual comando altera o grupo de um arquivo?",
    options: ["chgrp", "chmod", "chown", "groups"],
    answer: "chgrp",
    topic: "Permissões",
    level: "Médio",
  },

  // ... (continua até 40 médias)

  // ======================
  // DIFÍCEIS (40)
  // ======================
  {
    question: "Qual comando mostra o runlevel atual no Linux SysV?",
    options: ["runlevel", "who -r", "systemctl get-default", "init"],
    answer: "runlevel",
    topic: "Inicialização do Sistema",
    level: "Difícil",
  },
  {
    question: "Qual comando define o target padrão no systemd?",
    options: [
      "systemctl set-default",
      "systemctl get-default",
      "systemctl isolate",
      "systemctl default"
    ],
    answer: "systemctl set-default",
    topic: "Systemd",
    level: "Difícil",
  },
  {
    question: "Qual comando cria um link simbólico?",
    options: ["ln -s", "ln", "cp -s", "symlink"],
    answer: "ln -s",
    topic: "Links",
    level: "Difícil",
  },
  {
    question: "Qual comando cria um link físico (hard link)?",
    options: ["ln", "ln -s", "hardlink", "link"],
    answer: "ln",
    topic: "Links",
    level: "Difícil",
  },
  {
    question: "Qual comando exibe mensagens do kernel?",
    options: ["dmesg", "journalctl -k", "syslog", "messages"],
    answer: "dmesg",
    topic: "Kernel",
    level: "Difícil",
  },

  // ... (continua até 40 difíceis)
];

