import { Professional, PricingCategory } from '../types';
import peluqueriaImg from '../assets/images/peluqueria_rocio_1785492545175.jpg';
import esteticaImg from '../assets/images/estetica_maribel_1785492558457.jpg';
import unasImg from '../assets/images/unas_arantxa_1785492573683.jpg';

export const SALON_INFO = {
  name: "Salón de Belleza Maite",
  slogan: "Tu espacio de belleza y cuidado personal en Fuengirola",
  address: "C/ Pérez de Ayala nº 6, 29640 Fuengirola, Málaga",
  addressShort: "C/ Pérez de Ayala nº 6, Fuengirola",
  googleMapsUrl: "https://maps.google.com/?q=Calle+Perez+de+Ayala+6+29640+Fuengirola",
  instagram: {
    handle: "@Salonbellezamaite",
    url: "https://www.instagram.com/salonbellezamaite",
  },
  facebook: {
    handle: "Salón belleza Maite",
    url: "https://www.facebook.com/salonbellezamaite",
  },
  hours: [
    { days: "Lunes a Viernes", time: "10:00 - 19:30" },
    { days: "Sábados", time: "10:00 - 14:00" },
    { days: "Domingos", time: "Cerrado" },
  ]
};

export const PROFESSIONALS: Professional[] = [
  {
    id: "rocio",
    name: "Rocío",
    role: "Peluquería & Estilismo",
    specialty: "peluqueria",
    phone: "649097297",
    formattedPhone: "649 097 297",
    image: peluqueriaImg,
    avatarBg: "bg-pink-100 border-pink-200 text-pink-700",
    bio: "Especialista en mechas balayage, colorimetría avanzada, cortes tendencia, recogidos de fiesta y alisados nutritivos de keratina.",
    highlights: ["Corte y Peinado", "Balayage y Babylights", "Alisado Orgánico", "Tintes Nutritivos", "Tratamientos Capilares"]
  },
  {
    id: "maribel",
    name: "Maribel",
    role: "Estética & Depilación Láser SHR",
    specialty: "estetica",
    phone: "692346234",
    formattedPhone: "692 346 234",
    image: esteticaImg,
    avatarBg: "bg-rose-100 border-rose-200 text-rose-700",
    bio: "Experta en tecnología de depilación láser SHR indolora de última generación, tratamientos faciales avanzados, higiene profunda y cuidado corporal.",
    highlights: ["Láser SHR Indoloro", "Limpieza Facial Profunda", "Radiofrecuencia Antiaging", "Corporal & Masajes", "Cuidado Facial Célular"]
  },
  {
    id: "arantxa",
    name: "Arantxa",
    role: "Uñas & Pedicura Spa",
    specialty: "unas",
    phone: "697965629",
    formattedPhone: "697 965 629",
    image: unasImg,
    avatarBg: "bg-fuchsia-100 border-fuchsia-200 text-fuchsia-700",
    bio: "Especialista en manicura rusa, construcción de uñas en gel y acrílico, esmaltado semipermanente de alta duración, nail art y pedicura spa.",
    highlights: ["Uñas de Gel y Acrílico", "Esmaltado Semipermanente", "Manicura Rusa", "Pedicura Spa Completa", "Diseños Nail Art"]
  }
];

export const PRICING_CATEGORIES: PricingCategory[] = [
  {
    id: "laser-shr",
    title: "Depilación Láser SHR",
    subtitle: "Tecnología de depilación indolora, rápida y efectiva para mujer y hombre",
    badge: "Especialidad Estética (Maribel)",
    featuredPacks: [
      {
        name: "Completo Mujer",
        singlePrice: "75 €",
        bonusPrice: "300 €",
        bonusSessions: "Bono 5 sesiones (¡Te sale a 60€/sesión!)",
        description: "Incluye: Piernas Completas, Pubis, Axilas, Glúteos y Brazos.",
        popular: true
      },
      {
        name: "Completo Hombre",
        singlePrice: "95 €",
        bonusPrice: "400 €",
        bonusSessions: "Bono 5 sesiones (¡Te sale a 80€/sesión!)",
        description: "Incluye: Piernas Completas, Pecho, Espalda, Brazos y Axilas.",
        popular: false
      }
    ],
    items: [
      { name: "Axilas o Ingles", price: "20 €" },
      { name: "1/2 Pierna", price: "30 €" },
      { name: "Piernas Completas + Ingles", price: "50 €" },
      { name: "Pubis", price: "20 €" },
      { name: "Pubis + Glúteos", price: "30 €" },
      { name: "Brazos + Axilas", price: "40 €" },
      { name: "Glúteos", price: "20 €" },
      { name: "Espalda", price: "50 €" },
      { name: "Pecho", price: "50 €" },
      { name: "Facial: Labio Superior", price: "10 €" },
      { name: "Facial: Patillas", price: "15 €" },
      { name: "Facial: Cara Completa", price: "20 €" }
    ]
  },
  {
    id: "peluqueria",
    title: "Tarifas de Peluquería",
    subtitle: "Atención personalizada por Rocío • Incluye tratamientos de hidratación específicos",
    badge: "A cargo de Rocío",
    items: [
      { name: "Lavar + Peinar + Acondicionador (Corto)", price: "10 €" },
      { name: "Lavar + Peinar + Acondicionador (Medio)", price: "12 €" },
      { name: "Lavar + Peinar + Acondicionador (Largo)", price: "14 €" },
      { name: "Lavar + Peinar + Acondicionador (XL)", price: "16 €" },
      { name: "Lavar + Corte", price: "10 €" },
      { name: "Corte Flequillo", price: "4 €" },
      { name: "Tinte Raíz", price: "15 €" },
      { name: "Tinte Entero Medio", price: "17 €" },
      { name: "Tinte Entero Largo", price: "19 €" },
      { name: "Tinte Entero XL", price: "21 €" },
      { name: "Baño de Luz / Matizador", price: "desde 10 €" },
      { name: "Mechas Parciales", price: "desde 10 €" },
      { name: "Mechas Media Cabeza", price: "desde 20 €" },
      { name: "Mechas Completas, 3D, Balayage", price: "desde 35 €" },
      { name: "Moldeador (Corto 25€ / Medio 30€ / Largo 40€)", price: "25 € - 40 €" },
      { name: "Semi Recogido / Ondas", price: "desde 20 €" },
      { name: "Recogidos", price: "desde 30 €" },
      { name: "Novias / Madrinas / Comuniones", price: "Consultar" },
      { name: "Tratamiento Alisado Queratina (Corto)", price: "100 €" },
      { name: "Tratamiento Alisado Queratina (Medio)", price: "140 €" },
      { name: "Tratamiento Alisado Queratina (Largo)", price: "170 €" },
      { name: "Hidratación Profunda Ácido Hialurónico (Corto 12€ / Medio 14€ / Largo 16€)", price: "12 € - 16 €" }
    ]
  },
  {
    id: "estetica",
    title: "Tarifas de Estética & Faciales",
    subtitle: "Cuidado facial, masajes, maderoterapia y depilación cera a cargo de Maribel",
    badge: "A cargo de Maribel",
    items: [
      { name: "Limpieza Facial Básica", price: "30 €" },
      { name: "Limpieza Facial Completa (Punta Diamante + Mesoterapia Virtual)", price: "35 €" },
      { name: "Peelings Triácidos", price: "35 €" },
      { name: "Maderoterapia Facial", price: "35 €" },
      { name: "Tratamientos Dermapen o Mesoterapia Virtual", price: "40 € - 60 € / ses." },
      { name: "Masaje Relajante Cuerpo Completo (1 Hora)", price: "40 €" },
      { name: "Masaje Relajante Espalda + Piernas (40 min)", price: "30 €" },
      { name: "Masaje Relajante Espalda (30 min)", price: "20 €" },
      { name: "Masaje Geotermal Piedras Calientes Cuerpo Completo (1 Hora)", price: "60 €" },
      { name: "Masaje Geotermal Espalda (30 min)", price: "30 €" },
      { name: "Meso Skin Dual Corporal (1 Sesión 40€ / 5 Sesiones 175€)", price: "40 € / 175 €" },
      { name: "Maderoterapia Corporal (1 Sesión 40€ / 5 Sesiones 150€)", price: "40 € / 150 €" },
      { name: "Masaje Reductor / Anticelulítico / Reafirmante (1 Sesión 30€ / 5 Sesiones 100€)", price: "30 € / 100 €" },
      { name: "Diseño Mirada: Depilación Cejas", price: "5 €" },
      { name: "Diseño Mirada: Tinte en Cejas", price: "10 €" },
      { name: "Diseño Mirada: Tinte Híbrido con Henna", price: "15 €" },
      { name: "Diseño Mirada: Tinte de Pestañas", price: "9 €" },
      { name: "Diseño Mirada: Lifting de Pestañas", price: "25 €" },
      { name: "Diseño Mirada: Laminado de Cejas", price: "35 €" },
      { name: "Depilación Cera: Labio Superior", price: "4 €" },
      { name: "Depilación Cera: Combo Cejas + Labio Superior", price: "7 €" },
      { name: "Depilación Cera: Patillas / Barbilla", price: "3 €" },
      { name: "Depilación Cera: Axilas o Ingles", price: "6 €" },
      { name: "Depilación Cera: 1/2 Piernas", price: "10 €" },
      { name: "Depilación Cera: Piernas Completas (Incluye Ingles)", price: "20 €" },
      { name: "Depilación Cera: Piernas + Pubis", price: "30 €" },
      { name: "Depilación Cera: Pubis Completo", price: "12 €" },
      { name: "Depilación Cera: Antebrazos 8€ / Brazos 10€", price: "8 € - 10 €" },
      { name: "Depilación Cera: Glúteos 10€ / Interglúteos 6€", price: "6 € - 10 €" },
      { name: "Depilación Cera: Pecho / Espalda", price: "15 €" }
    ]
  },
  {
    id: "unas",
    title: "Tarifas de Uñas y Pedicura",
    subtitle: "Cuidado de manos y pies por Arantxa",
    badge: "A cargo de Arantxa",
    items: [
      { name: "Pedicura Básica (Solo cortar y limar)", price: "10 €" },
      { name: "Pedicura Completa", price: "15 €" },
      { name: "Hidratación con Parafina", price: "10 €" },
      { name: "Manicura Rusa + Esmaltado Semipermanente", price: "20 €" },
      { name: "Construcción Uñas de Gel / Acrílico", price: "38 €" },
      { name: "Relleno Uñas de Gel / Acrílico", price: "28 €" },
      { name: "Esmaltado Semipermanente Manos o Pies", price: "15 €" },
      { name: "Pedicura Spa Completa + Semipermanente", price: "30 €" },
      { name: "Retirada Gel / Acrílico + Manicura Express", price: "15 €" },
      { name: "Nail Art / Decoración", price: "desde 1 €" }
    ]
  }
];
