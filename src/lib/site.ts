export const site = {
  name: "Nomad",
  city: "Petrolina · PE",
  hours: "Ter a Dom · 18h às 23h",
  whatsapp: "5587988310109",
  instagram: "https://www.instagram.com/restaurantenomad/",
  endereco: {
    rua: "Rua João Alfredo, 2078",
    bairro: "Centro, Petrolina - PE",
    cep: "56302-080",
  },
};

const enderecoCompleto = `Nomad Restaurante, ${site.endereco.rua}, ${site.endereco.bairro}, ${site.endereco.cep}`;
export const mapa = {
  embed: `https://www.google.com/maps?q=${encodeURIComponent(enderecoCompleto)}&z=16&output=embed`,
  abrir: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(enderecoCompleto)}`,
  rota: `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(enderecoCompleto)}`,
};

export const whatsappLink = (message = "Olá! Gostaria de reservar uma mesa no Nomad.") =>
  `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}`;

export const highlights = [
  "Happy hour: chopp R$ 7,90, das 18h às 20h",
  "Coquetelaria autoral",
  "Eventos e comemorações",
  "Tour Nomad R$ 60,90",
];

export const navLinks = [
  { label: "Sobre", href: "#sobre" },
  { label: "Destino atual", href: "#destino" },
  { label: "Cardápio", href: "#cardapio" },
  { label: "Eventos", href: "#eventos" },
  { label: "Visite", href: "#visite" },
];
