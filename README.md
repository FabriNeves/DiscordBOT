<h1>DiscordbotGPT</h1>
<p>Este é um projeto de um bot para o Discord que utiliza a API de
    linguagem natural do OpenAI, o GPT-3, para responder perguntas e interagir com os usuários.</p>
<h2>📺Preview</h2>
<img src="./img/2023-02-28-13-16-03.gif">
<h2>📚Bibliotecas</h2>
<p>As seguintes bibliotecas foram utilizadas neste projeto:</p>
<ul>
    <li><a href="https://discord.js.org/" target="_new">discord.js</a> - biblioteca para desenvolvimento de bots para o
        Discord;</li>
    <li><a href="https://www.npmjs.com/package/dotenv" target="_new">dotenv</a> - biblioteca para carregar variáveis de
        ambiente a partir de um arquivo <code>.env</code>;</li>
    <li><a href="https://github.com/transitive-bullshit/chatgpt-api" target="_new">chatgpt</a> - biblioteca para utilizar a API do GPT-3
        da OpenAI.</li>
</ul>
</div>
<h2>🤖Configurar Bot </h2>
<p>Para utilizar o código presente neste repositório, é necessário configurar algumas variáveis de ambiente e obter as
    informações de autenticação do seu Bot no Discord Developer, assim como tambem é necessario uma chave para utilizar a API do chatGPT.</p>
<h3>⚙Variáveis de ambiente</h3>
<p>As seguintes variáveis de ambiente são utilizadas neste código e devem ser configuradas:</p>
<ul>
    <li><code>TOKEN</code>: Token de autenticação do seu Bot no Discord.</li>
    <li><code>CLIENT_ID</code>: ID do cliente do seu Bot no Discord Developer.</li>
    <li><code>GUILD_ID</code>: ID do servidor em que seu Bot está sendo utilizado.</li>
    <li><code>OPENAI_API_KEY</code>: Chave de autenticação da API ChatGPT.</li>
</ul>
<h3>🗝Obtendo informações de autenticação do Bot</h3>
<h4>Discord</h4>
<p>Para obter as informações necessárias para as variáveis de ambiente mencionadas acima, siga os seguintes passos:</p>
<ol>
    <li>Acesse o site do <a href="https://discord.com/developers/applications" target="_new">Discord Developer</a>.</li>
    <li>Crie uma nova aplicação e dê um nome para o seu Bot.</li>
    <li>Acesse a seção "Bot" e crie um novo Bot.</li>
    <li>Copie o Token do seu Bot.</li>
    <li>Acesse a seção "OAuth2" e selecione as permissões necessárias para o seu Bot.</li>
    <li>Copie o Client_id gerado.</li>
    <li>Para obter a Guild_id, entre no servidor em que seu Bot será utilizado, clique com o botão direito e selecione a
        opção "Copiar ID". Se essa opção não aparecer, habilite o modo desenvolvedor no Discord.</li>
</ol>
<h4>OpenAI</h4>
<li> Para gerar uma "Key" do ChatGPT acesse <a href="https://platform.openai.com/account/api-keys">OpenAI-Key</a></li>
<h2>🛠Utilização</h2>
<p>Para utilizar o Bot, execute o comando <code>npm install</code> para instalar as dependências. Em seguida, execute o
    comando <code>node deploy-commands.js</code> para registrar os comandos no Discord. Por fim, execute o comando
    <code>node index.js</code> para iniciar o Bot.
</p>
<p>O Bot está configurado com dois comandos: <code>/ping</code> e <code>/responde</code>. O comando <code>/ping</code>
    retorna "pong!" como resposta e o comando <code>/responde</code> utiliza a API ChatGPT para gerar uma resposta a
    partir de uma pergunta inserida pelo usuário.</p>
