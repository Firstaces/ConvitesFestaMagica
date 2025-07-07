import React from "react";

export default function Home() {
  return (
    <div className="p-8 bg-pink-50 text-gray-800 font-sans">
      <header className="flex flex-col md:flex-row justify-between items-center bg-pink-100 p-4 rounded-lg border-b-2 border-pink-400">
        <h1 className="text-2xl text-pink-500 font-bold">
          Convites Festa Mágica
        </h1>
        <img
          src="/logo.png"
          alt="Logo Convites Festa Mágica"
          className="max-h-24 mt-4 md:mt-0"
        />
      </header>

      <nav className="bg-pink-200 mt-4 py-3 px-6 rounded-xl flex flex-wrap justify-center gap-4 font-semibold text-pink-600">
        <a href="/">🏠 Início</a>
        <a href="/blog">📝 Blog</a>
        <a href="/enviar-dados">📩 Enviar Dados</a>
        <a href="/indicacoes">💡 Informações</a>
        <a href="/brindes">🎁 Brindes</a>
        <a href="/planner">📅 Planner</a>
      </nav>

      <section className="text-center mt-10">
        <h1 className="text-3xl font-bold text-pink-600 mb-2">
          🎉 Bem-vindo à Festa Mágica!
        </h1>
        <p className="mb-6 text-lg">
          Convites animados e personalizados para encantar desde o primeiro
          momento!
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-center text-2xl font-semibold text-pink-500 mb-4">
          ✨ Exemplos de convites animados
        </h2>
        <div className="flex flex-wrap justify-center gap-8">
          <div className="text-center">
            <h3 className="font-bold mb-2">Convite Safari do Davi</h3>
            <a href="/Convite_Safari.html" target="_blank">
              <img
                src="https://img.youtube.com/vi/UvkhTBMd0G0/hqdefault.jpg"
                alt="Convite Safari do Davi"
                className="w-[300px] rounded shadow-md"
              />
            </a>
          </div>
          <div className="text-center">
            <h3 className="font-bold mb-2">Convite Unicórnio da Laís</h3>
            <a href="/Convite_Unicornio.html" target="_blank">
              <img
                src="https://img.youtube.com/vi/mmcrj1ADYxM/hqdefault.jpg"
                alt="Convite Unicórnio da Laís"
                className="w-[300px] rounded shadow-md"
              />
            </a>
          </div>
        </div>
      </section>

      <section className="text-center mb-10">
        <h2 className="text-2xl font-semibold text-pink-500 mb-6">
          ✨ Tendências e Toques Especiais
        </h2>
        <div className="flex flex-wrap justify-center gap-6">
          <div className="bg-white p-6 rounded-xl shadow-md w-72">
            <h3 className="text-pink-500 font-bold text-lg mb-2">
              🔮 Cápsula do Tempo
            </h3>
            <p className="text-sm">
              Grave uma mensagem especial para a criança assistir no futuro.
              Emoção garantida! 🥹
              <br />
              <strong className="text-pink-500">+ R$ 19,90</strong>
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md w-72">
            <h3 className="text-pink-500 font-bold text-lg mb-2">
              🧸 Brinquedo Favorito
            </h3>
            <p className="text-sm">
              O convite pode incluir o brinquedo mais amado da criança! Um toque
              divertido e pessoal.
              <br />
              <strong className="text-pink-500">+ R$ 9,90</strong>
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md w-72">
            <h3 className="text-pink-500 font-bold text-lg mb-2">
              🎀 Tendência da Moda
            </h3>
            <p className="text-sm">
              Caixa de brinquedo? Bebê falante? Fazemos seu convite com a trend
              do momento! 🎉
              <br />
              <strong className="text-pink-500">+ R$ 14,90</strong>
            </p>
          </div>
        </div>
      </section>

      <section className="max-w-2xl mx-auto mb-10">
        <h2 className="text-2xl text-center font-semibold text-pink-500 mb-6">
          📝 Envie os dados da festa
        </h2>
        <form
          action="https://formsubmit.co/animacoeseducativas@gmail.com"
          method="POST"
          className="space-y-4 bg-white p-6 rounded-xl shadow-md"
        >
          <input type="hidden" name="_captcha" value="false" />
          <input
            type="hidden"
            name="_next"
            value="https://convites-festa-magica-8w2f.vercel.app/obrigado.html"
          />

          <input
            type="text"
            name="nome_crianca"
            placeholder="Nome da criança"
            required
            className="input"
          />
          <input
            type="number"
            name="idade"
            placeholder="Idade"
            required
            className="input"
          />
          <input
            type="text"
            name="tema"
            placeholder="Tema da festa"
            required
            className="input"
          />
          <input
            type="date"
            name="data"
            placeholder="Data do evento"
            required
            className="input"
          />
          <input
            type="time"
            name="horario"
            placeholder="Horário"
            required
            className="input"
          />
          <input
            type="text"
            name="local"
            placeholder="Local"
            required
            className="input"
          />
          <textarea
            name="mensagem"
            placeholder="Mensagem personalizada (opcional)"
            rows="4"
            className="input"
          ></textarea>

          <fieldset className="border border-gray-300 p-4 rounded">
            <legend className="font-bold text-pink-600">
              🎁 Adicionais Personalizados (opcional)
            </legend>
            <label className="block mt-2">
              <input
                type="checkbox"
                name="trend_moda"
                value="Sim"
                className="mr-2"
              />
              Incluir trend da moda na festa
            </label>
            <label className="block mt-2">
              <input
                type="checkbox"
                name="capsula_tempo"
                value="Sim"
                className="mr-2"
              />
              Incluir cápsula do tempo com momentos especiais
            </label>
            <label className="block mt-2">
              <input
                type="checkbox"
                name="brinquedo_personalizado"
                value="Sim"
                className="mr-2"
              />
              Incluir brinquedo ou mascote animado
            </label>
          </fieldset>

          <input
            type="text"
            name="contato"
            placeholder="Email ou WhatsApp para contato"
            required
            className="input"
          />

          <button
            type="submit"
            className="w-full bg-pink-500 text-white py-3 rounded-lg font-semibold text-lg hover:bg-pink-600 transition-colors"
          >
            Enviar informações ✨
          </button>
        </form>
      </section>

      <section className="bg-pink-100 py-10 px-6 rounded-xl max-w-3xl mx-auto mb-10 shadow">
        <h2 className="text-2xl font-bold text-center text-pink-600 mb-4">
          🎵 Como criamos músicas personalizadas?
        </h2>
        <p className="text-center text-gray-700 leading-relaxed">
          Aqui na <strong>Festa Mágica</strong>, utilizamos uma ferramenta
          profissional de inteligência artificial para compor músicas{" "}
          <strong>exclusivas</strong> com o nome da criança, o tema da festa e
          até detalhes especiais do evento. Esse cuidado transforma cada convite
          em uma experiência única, emocionante e inesquecível! 💖✨
        </p>
      </section>

      <section className="max-w-2xl mx-auto mb-16 text-center">
        <h2 className="text-2xl font-bold text-pink-600 mb-6">
          Escolha seu convite mágico ✨
        </h2>
        <div className="space-y-6">
          <a href="https://pay.kiwify.com.br/Kvx7kug" target="_blank">
            <button className="w-full bg-pink-400 text-white py-4 px-6 rounded-lg text-lg font-semibold hover:bg-pink-500">
              🎬 Convite Animado Padrão – R$ 39,90
            </button>
          </a>
          <p className="text-sm text-gray-600">
            Com nome, idade, data, horário, local e tema personalizado.
          </p>

          <a href="https://pay.kiwify.com.br/5BcxPVS" target="_blank">
            <button className="w-full bg-purple-500 text-white py-4 px-6 rounded-lg text-lg font-semibold hover:bg-purple-600">
              🧚 Convite com Música Personalizada – R$ 59,90
            </button>
          </a>
          <p className="text-sm text-gray-600">
            Música criada especialmente para a criança com o tema da festa.
          </p>

          <a href="https://pay.kiwify.com.br/oTVP979" target="_blank">
            <button className="w-full bg-indigo-600 text-white py-4 px-6 rounded-lg text-lg font-semibold hover:bg-indigo-700">
              🌟 Convite com Animação da Criança – R$ 79,90
            </button>
          </a>
          <p className="text-sm text-gray-600">
            Você envia a foto e a gente transforma em personagem animado no
            vídeo!
          </p>
        </div>
      </section>
    </div>
  );
}
