import type { StaticImageData } from "next/image";
import caponata from "../../public/images/pratos/caponata.jpg";
import pappardelle from "../../public/images/pratos/pappardelle.jpg";
import pannaCotta from "../../public/images/pratos/panna-cotta.jpg";

export type Prato = {
  nome: string;
  descricao?: string;
  /** Deixe sem preço enquanto não estiver confirmado — o valor simplesmente não aparece. */
  preco?: string;
  foto?: StaticImageData;
};

export type Destino = {
  code: string;
  nome: string;
  resumo: string;
  /** Cor do país, usada na faixa do card. */
  accent: string;
  /** Cores da bandeira, da esquerda para a direita (faixa e anel do carimbo no cartão de embarque). */
  flag: string[];
  /** Cor da bandeira usada no texto do carimbo (a mais legível sobre o bege). */
  stamp: string;
  pratos: Prato[];
  /** Frase típica do país que fecha o menu no Instagram. */
  frase: { texto: string; significado: string };
};

export const destinos: Destino[] = [
  {
    code: "IT",
    nome: "Itália",
    resumo: "Pappardelle artesanal, ragù de ossobuco e sabores que atravessam fronteiras.",
    accent: "#0b8a43",
    flag: ["#009246", "#ffffff", "#ce2b37"],
    stamp: "#009246",
    pratos: [
      {
        nome: "Caponata",
        descricao:
          "Berinjelas assadas com pimentões, alho e cebola roxa, acompanha fatias de baguete tostadas com manteiga de manjericão.",
        foto: caponata,
      },
      {
        nome: "Pappardelle al Ragù",
        descricao: "Massa artesanal estilo pappardelle produzida na casa, com ragù de ossobuco e vinho tinto.",
        foto: pappardelle,
      },
      {
        nome: "Panna Cotta d’Itália",
        descricao: "Flan de baunilha com coulis de morango e amora e manjericão.",
        foto: pannaCotta,
      },
    ],
    frase: { texto: "Mangia che ti fa bene", significado: "Come, que te faz bem" },
  },
  {
    code: "BR",
    nome: "Brasil",
    resumo: "Peixe, moqueca e o sabor de casa servido com outro olhar.",
    accent: "#e3b100",
    flag: ["#009c3b", "#ffdf00", "#002776"],
    stamp: "#009c3b",
    pratos: [
      { nome: "Blini de tapioca com mariscos", descricao: "Mini discos de tapioca com mariscos salteados e maionese de coentro." },
      { nome: "Pochê de peixe com molho de moqueca", descricao: "Tilápia ou surubim escalfado no capim-santo, arroz de coco, molho de moqueca e crispy de couve." },
      { nome: "Pudim de tapioca com cocada queimada", descricao: "Pudim gelado de tapioca, com cocada queimada." },
    ],
    frase: { texto: "A comida é um momento de felicidade que deve ser compartilhado", significado: "Chef Helena Rizzo" },
  },
  {
    code: "JP",
    nome: "Japão",
    resumo: "Precisão, textura e sabores que começam pequenos.",
    accent: "#bc002d",
    flag: ["#ffffff", "#bc002d", "#ffffff"],
    stamp: "#bc002d",
    pratos: [
      { nome: "Gyoza", descricao: "Massa recheada com carne suína, repolho e cenoura, grelhada e no vapor." },
      { nome: "Tonkotsu Noodle", descricao: "Noodle produzido na casa, com tonkotsu cozido por 6 horas, lombo, ovo, cebolinha e folhas em chiffonade." },
      { nome: "Mil-folhas de Sakura", descricao: "Massa folhada com chantilly e morangos, polvilhada com açúcar rosa." },
    ],
    frase: { texto: "Itadakimasu", significado: "Eu recebo humildemente — dito antes das refeições" },
  },
  {
    code: "MA",
    nome: "Marrocos",
    resumo: "Especiarias, calor e mesa para compartilhar.",
    accent: "#b5643c",
    flag: ["#c1272d", "#006233", "#c1272d"],
    stamp: "#c1272d",
    pratos: [
      { nome: "Briouat de Magrebe", descricao: "Frango temperado com especiarias, envolto em massa crocante, servido com molho de iogurte e hortelã." },
      { nome: "Carneiro com cuscuz marroquino", descricao: "Carneiro grelhado com cuscuz marroquino (tomate, salsa, cebola e castanhas), molho de hortelã e chips de macaxeira." },
      { nome: "Oásis de Marrakech", descricao: "Pudim de cardamomo com caramelo de café e flor de sal." },
    ],
    frase: { texto: "Bssaha", significado: "À sua saúde, bom proveito" },
  },
  {
    code: "US",
    nome: "Estados Unidos",
    resumo: "Crocância, defumado e conforto em grande estilo.",
    accent: "#3c3b6e",
    flag: ["#b22234", "#ffffff", "#3c3b6e"],
    stamp: "#3c3b6e",
    pratos: [
      { nome: "Holly Pulled Beef", descricao: "Mini discos de pão sem fermentação, com cupim desfiado e coleslaw (molho barbecue)." },
      { nome: "Chicken Crispy", descricao: "Frango empanado, batatas fritas, salada de alface e avocado com molho ranch." },
      { nome: "Apple Pie", descricao: "Mini torta de maçã polvilhada com açúcar e canela, e sorvete de creme." },
    ],
    frase: { texto: "Good food, good mood", significado: "Comer bem melhora o humor" },
  },
];
