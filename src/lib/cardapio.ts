// Transcrito do destaque "Cardápio" do Instagram (@restaurantenomad).
// Os pratos de cada país ficam em destinos.ts.

export type Item = {
  nome: string;
  detalhe?: string;
  preco?: string;
};

export type Categoria = {
  id: string;
  nome: string;
  /** Preço único da categoria (ex.: menu infantil). */
  preco?: string;
  nota?: string;
  itens: Item[];
};

export const boasVindas = {
  titulo: "Cada prato é um destino.",
  texto: "Cada ingrediente conta uma história. Permita-se viajar nos sabores.",
  etapas: ["Escolha sua experiência", "Embarque no sabor", "Curta a viagem", "Colecione memórias"],
  citacao: {
    texto:
      "Não são apenas grandes obras da humanidade que definem a cultura, mas também coisas do dia a dia, como o que as pessoas comem e a forma como os pratos são servidos.",
    autor: "Mina Holland",
  },
};

export const categorias: Categoria[] = [
  {
    id: "entradas",
    nome: "Entradas",
    itens: [
      { nome: "Croquete de carneiro ao vinho", detalhe: "6 unidades", preco: "32,90" },
      { nome: "Croquete de cupim com queijo", detalhe: "6 unidades", preco: "32,90" },
      { nome: "Tulipas defumadas e chips de macaxeira", detalhe: "6 unidades", preco: "34,90" },
      { nome: "Batata frita", preco: "24,90" },
      { nome: "Macaxeira frita", preco: "24,90" },
      { nome: "Pastel carne e queijo", detalhe: "6 unidades", preco: "24,90" },
      {
        nome: "Salada fresca Nomad",
        detalhe: "Mix de folhas, tomate-cereja, pepino, manga e nuts (acompanha molho cítrico)",
        preco: "29,90",
      },
      {
        nome: "Salada morna do chef",
        detalhe: "Abóbora, batata-doce, vagem, cebola roxa e croutons (acompanha molho de mostarda)",
        preco: "29,90",
      },
      { nome: "Mini tábua aperitivo", detalhe: "Azeitonas, nuts variados e queijo temperado", preco: "29,90" },
      { nome: "Caldinho de feijão", detalhe: "Bacon crocante e cebolinha", preco: "19,90" },
    ],
  },
  {
    id: "pequenos-exploradores",
    nome: "Pequenos exploradores",
    preco: "29,90",
    nota: "Menu infantil · todos os pratos por 29,90",
    itens: [
      {
        nome: "Frango grelhado",
        detalhe: "Cubos de frango grelhado, massa fresca artesanal e molho de tomate, acompanha batatas fritas",
      },
      {
        nome: "Hambúrguer Jovem Nomad",
        detalhe: "Blend da casa (120 g), cheeseburger, salada (opcional), acompanha batatas fritas",
      },
      { nome: "Executivo Jr", detalhe: "Carne, arroz, feijão e batatas fritas" },
    ],
  },
  {
    id: "drinks",
    nome: "Drinks",
    itens: [
      { nome: "Monte Fuji", detalhe: "Saquê, licor de pêssego, sumo de limão", preco: "26,90" },
      { nome: "Berry Gin", detalhe: "Gin, morango macerado, limão, xarope e água tônica", preco: "26,90" },
      { nome: "Gin Tropical", detalhe: "Gin, sumo de frutas amarelas, xarope e água tônica", preco: "26,90" },
      { nome: "Whisky Sour", detalhe: "Whisky, limão, borda de açúcar e gelo", preco: "26,90" },
      { nome: "Bloody Mary", detalhe: "Vodka, limão, suco de tomate e especiarias", preco: "24,90" },
      { nome: "Caipirinha", detalhe: "Cachaça, limão e açúcar", preco: "21,90" },
      { nome: "Cajupirinha com rapadura", detalhe: "Cachaça, caju, rapadura e limão", preco: "24,90" },
      { nome: "Caipirinha de morango", detalhe: "Cachaça, morango, limão e açúcar", preco: "24,90" },
      { nome: "Caipiroska", detalhe: "Vodka, limão e açúcar", preco: "21,90" },
      { nome: "Negroni", detalhe: "Campari, gin, vermute, gelo e laranja", preco: "24,90" },
    ],
  },
  {
    id: "cervejas",
    nome: "Cervejas",
    nota: "Happy hour: chopp 7,90 das 18h às 20h",
    itens: [
      { nome: "Chopp 300 ml", preco: "10,90" },
      { nome: "Cozumel", detalhe: "Chopp com sumo de limão e borda de sal", preco: "12,90" },
      { nome: "Fada Verde", detalhe: "Chopp com licor de menta", preco: "12,90" },
      { nome: "Submarino Amarelo", detalhe: "Chopp com uma dose de cachaça no fundo da caneca", preco: "12,90" },
      { nome: "Corona", detalhe: "Long neck", preco: "14,90" },
      { nome: "Budweiser", detalhe: "Long neck", preco: "12,90" },
      { nome: "Heineken", detalhe: "Long neck", preco: "14,90" },
      { nome: "Eisenbahn", detalhe: "Long neck", preco: "12,90" },
      { nome: "Spaten", detalhe: "Long neck", preco: "12,90" },
      { nome: "Stella Artois", detalhe: "Long neck", preco: "12,90" },
    ],
  },
  {
    id: "doses",
    nome: "Doses",
    nota: "Garrafa sob consulta",
    itens: [
      { nome: "Whisky", detalhe: "Old Parr, Black Label, Jack Daniel's", preco: "18,90" },
      { nome: "Vodka", detalhe: "Absolut, Ketel One, Cîroc", preco: "16,90" },
      { nome: "Gin", detalhe: "Tanqueray, Gordon's, Beefeater", preco: "16,90" },
      { nome: "Saquê", preco: "18,90" },
      { nome: "Tequila", detalhe: "Jimador, José Cuervo, Tequilero", preco: "16,90" },
      { nome: "Cachaça", detalhe: "Sagatiba Ouro, Jambu, Seleta", preco: "13,90" },
      { nome: "Cointreau", preco: "16,90" },
      { nome: "Aperol", preco: "11,90" },
      { nome: "Licor", preco: "14,90" },
      { nome: "Campari", preco: "14,90" },
    ],
  },
  {
    id: "sucos",
    nome: "Sucos",
    nota: "Sucos no copo com 300 ml",
    itens: [
      { nome: "Pink lemonade", preco: "10,90" },
      { nome: "Melancia com gengibre", preco: "10,90" },
      { nome: "Abacaxi com hortelã", preco: "10,90" },
      { nome: "Laranja", preco: "10,90" },
      { nome: "Limonada suíça", preco: "10,90" },
      { nome: "Cajá", preco: "10,90" },
      { nome: "Acerola", preco: "10,90" },
      { nome: "Manga", preco: "10,90" },
      { nome: "Jarra (750 ml)", preco: "24,90" },
    ],
  },
  {
    id: "bebidas",
    nome: "Bebidas",
    itens: [
      { nome: "Refrigerante", preco: "7,90" },
      { nome: "Soda italiana", preco: "14,90" },
      { nome: "Água com gás", preco: "6,90" },
      { nome: "Água sem gás", preco: "5,90" },
      { nome: "Água tônica", preco: "7,90" },
      { nome: "Schweppes", preco: "7,90" },
      { nome: "H2O", preco: "8,90" },
      { nome: "Energético", preco: "16,90" },
    ],
  },
];
