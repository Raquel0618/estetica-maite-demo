export interface Professional {
  id: string;
  name: string;
  role: string;
  specialty: 'peluqueria' | 'estetica' | 'unas';
  phone: string;
  formattedPhone: string;
  image: string;
  bio: string;
  highlights: string[];
  avatarBg: string;
}

export interface PricingCategory {
  id: string;
  title: string;
  subtitle?: string;
  badge?: string;
  featuredPacks?: {
    name: string;
    singlePrice: string;
    bonusPrice?: string;
    bonusSessions?: string;
    description: string;
    popular?: boolean;
  }[];
  items: {
    name: string;
    price: string;
    note?: string;
  }[];
}

export interface AppointmentData {
  professionalId: string;
  service: string;
  date: string;
  time: string;
  clientName: string;
  clientPhone: string;
  notes?: string;
}
