import { PackagePlan, WhyUsItem, HowToSubscribeStep, Testimonial, FaqItem, CoverageArea } from '../types';

export const REGISTRATION_URL = 'https://acesse.one/pendaftaranraziqnetcikampek';
export const WHATSAPP_NUMBER = '081318766270';
export const WHATSAPP_FULL = '6281318766270';
export const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_FULL}?text=${encodeURIComponent('Halo Raziqnet, saya berminat mendaftar pasang baru internet fiber. Mohon informasi selengkapnya.')}`;

export const SLOGANS = [
  "Internet Cepat, Hidup Lebih Dekat.",
  "Koneksi Stabil Tanpa Kompromi.",
  "Streaming Lancar, Gaming Anti Lag.",
  "Kerja, Belajar, dan Hiburan Tanpa Batas.",
  "Solusi Internet Fiber Andal untuk Semua.",
  "Cepat Hari Ini, Cepat Setiap Hari.",
  "WiFi Kencang, Aktivitas Makin Tenang.",
  "Internet Berkualitas dengan Harga Bersahabat."
];

export const REGULAR_PACKAGES: PackagePlan[] = [
  {
    id: 'biasa',
    name: 'BIASA',
    speed: '15 Mbps',
    price: 'Rp120.000',
    priceNumber: 120000,
    period: '/bulan',
    features: [
      '100% Fiber Optic FTTH',
      'Kuota Tanpa Batas (Tanpa FUP)',
      'Ideal untuk 1-3 Perangkat',
      'Gratis Sewa Modem Wi-Fi Router',
      'Layanan Pelanggan 24/7'
    ],
    recommendedFor: 'Browsing, Media Sosial, & Streaming HD 1-2 layar',
    idealDevices: '1 - 3 Perangkat'
  },
  {
    id: 'sederhana',
    name: 'SEDERHANA',
    speed: '20 Mbps',
    price: 'Rp135.000',
    priceNumber: 135000,
    period: '/bulan',
    features: [
      '100% Fiber Optic FTTH',
      'Kuota Tanpa Batas (Tanpa FUP)',
      'Ideal untuk 3-5 Perangkat',
      'Gratis Sewa Modem Wi-Fi Router',
      'Latency Rendah & Koneksi Stabil',
      'Layanan Pelanggan 24/7'
    ],
    recommendedFor: 'Keluarga Kecil, Belajar Online & Kerja dari Rumah',
    idealDevices: '3 - 5 Perangkat'
  },
  {
    id: 'premium',
    name: 'PREMIUM',
    speed: '30 Mbps + 30 Mbps',
    price: 'Rp175.000',
    priceNumber: 175000,
    period: '/bulan',
    badge: 'Paling Populer',
    badgeColor: 'popular',
    features: [
      'Double Speed Boost (30 Mbps + 30 Mbps)',
      '100% Fiber Optic FTTH Dedicated',
      'Kuota Tanpa Batas (Tanpa FUP)',
      'Ideal untuk 5-8 Perangkat',
      'Gaming Anti-Lag & Streaming Full HD/4K',
      'Gratis Sewa Router Dual Band',
      'Prioritas Dukungan Teknis'
    ],
    recommendedFor: 'Keluarga Sedang, WFH, Mobile Gaming, & Smart TV 4K',
    idealDevices: '5 - 8 Perangkat'
  },
  {
    id: 'luxury',
    name: 'LUXURY',
    speed: '50 Mbps + 50 Mbps',
    price: 'Rp205.000',
    priceNumber: 205000,
    period: '/bulan',
    badge: 'Kecepatan Maksimal',
    badgeColor: 'luxury',
    features: [
      'Maximum Dual Boost (50 Mbps + 50 Mbps)',
      '100% Fiber Optic High-Speed',
      'Kuota Tanpa Batas (Tanpa FUP)',
      'Ideal untuk 8-12+ Perangkat',
      'Sangat Cocok untuk Streamer & Heavy Gamer',
      'Gratis Sewa High Power Wi-Fi Router',
      'Prioritas Layanan Teknisi VIP'
    ],
    recommendedFor: 'Keluarga Besar, Content Creator, Gaming House & Smart Home',
    idealDevices: '8 - 12+ Perangkat'
  }
];

export const HEBOH_PACKAGES: PackagePlan[] = [
  {
    id: 'ekonomis',
    name: 'EKONOMIS',
    speed: '5 Mbps',
    price: 'Rp100.000',
    priceNumber: 100000,
    period: '/bulan',
    isHeboh: true,
    features: [
      '100% Fiber Optic FTTH',
      'Kuota Tanpa Batas (Tanpa FUP)',
      'Ideal untuk 1-2 Perangkat',
      'Harga Super Hemat',
      'Gratis Sewa Router Wi-Fi',
      'Layanan Pelanggan Responsif'
    ],
    recommendedFor: 'Penggunaan Hemat, WhatsApp, Sosial Media & Zoom Ringan',
    idealDevices: '1 - 2 Perangkat'
  },
  {
    id: 'medium',
    name: 'MEDIUM',
    speed: '20 Mbps + 30 Mbps',
    price: 'Rp150.000',
    priceNumber: 150000,
    period: '/bulan',
    badge: 'Best Value',
    badgeColor: 'value',
    isHeboh: true,
    features: [
      'Super Bandwidth (20 Mbps + Extra 30 Mbps)',
      '100% Fiber Optic FTTH',
      'Kuota Tanpa Batas (Tanpa FUP)',
      'Ideal untuk 4-6 Perangkat',
      'Koneksi Lancar Bebas Buffering',
      'Gratis Sewa Router Wi-Fi',
      'Dukungan Teknis Cepat'
    ],
    recommendedFor: 'Keluarga Muda, Hiburan Rumah, TikTok, YouTube & Game',
    idealDevices: '4 - 6 Perangkat'
  },
  {
    id: 'bisnis',
    name: 'BISNIS',
    speed: '50 Mbps',
    price: 'Rp180.000',
    priceNumber: 180000,
    period: '/bulan',
    isHeboh: true,
    features: [
      'Kecepatan Khusus Usaha 50 Mbps',
      'Upload & Download Simetris Stabil',
      'Tanpa FUP (Bisa untuk Banyak Transaksi)',
      'Ideal untuk Cafe, Kantor, Toko & Kos-kosan',
      'Mendukung Banyak Perangkat Kasir/POS & CCTV',
      'Dukungan Layanan Bisnis 24 Jam'
    ],
    recommendedFor: 'Toko Online, Minimarket, Cafe, Warkop, Kantor & Kos',
    idealDevices: 'Usaha & Bisnis'
  }
];

export const WHY_CHOOSE_US: WhyUsItem[] = [
  {
    id: 'fiber',
    title: 'Jaringan Fiber Optic',
    description: 'Menggunakan teknologi kabel serat optik mutakhir yang tahan cuaca dan mentransfer data dengan kecepatan cahaya.',
    iconName: 'Zap',
    highlight: '100% Serat Optik Purba'
  },
  {
    id: 'stabil',
    title: 'Internet Stabil',
    description: 'Ping rendah dengan koneksi yang sangat konsisten, bebas dari masalah mati-nyalakan modem setiap jam.',
    iconName: 'Activity',
    highlight: 'Uptime 99.9%'
  },
  {
    id: 'real-speed',
    title: 'Kecepatan Sesuai Paket',
    description: 'Apa yang Anda bayar adalah apa yang Anda dapatkan. Tanpa pembatasan tersembunyi (No FUP/Tanpa FUP).',
    iconName: 'Gauge',
    highlight: 'Pure Real Speed'
  },
  {
    id: 'affordable',
    title: 'Harga Terjangkau',
    description: 'Tarif bulanan mulai Rp100 ribuan yang sangat hemat tanpa biaya kejutan di tagihan mingguan/bulanan.',
    iconName: 'Tag',
    highlight: 'Mulai Rp100rb/bln'
  },
  {
    id: 'versatile',
    title: 'Cocok untuk Rumah & Bisnis',
    description: 'Dari kebutuhan belajar anak, streaming keluarga, hingga operasional kasir toko & usaha cafe Anda.',
    iconName: 'Home',
    highlight: 'Multi-Perangkat'
  },
  {
    id: 'support',
    title: 'Customer Support Responsif',
    description: 'Tim teknisi lokal di Cikampek & sekitarnya yang siap membantu penanganan cepat via WhatsApp setiap hari.',
    iconName: 'Headphones',
    highlight: 'Respon Cepat Teknisi'
  }
];

export const HOW_TO_SUBSCRIBE: HowToSubscribeStep[] = [
  {
    step: 1,
    title: 'Pilih Paket',
    description: 'Tentukan paket internet Raziqnet yang paling sesuai dengan kebutuhan rumah atau usaha Anda.',
    iconName: 'CheckSquare'
  },
  {
    step: 2,
    title: 'Isi Formulir Pendaftaran',
    description: 'Klik tombol daftar dan isi data alamat pemasangan serta nomor kontak WhatsApp yang dapat dihubungi.',
    iconName: 'FileText'
  },
  {
    step: 3,
    title: 'Tim Kami Menghubungi Anda',
    description: 'Customer service Raziqnet akan mengonfirmasi lokasi Anda dan ketersediaan tiang fiber terdekat.',
    iconName: 'PhoneCall'
  },
  {
    step: 4,
    title: 'Jadwalkan Pemasangan',
    description: 'Teknisi profesional kami datang ke tempat Anda membawa modem dan melakukan penarikan kabel fiber optic.',
    iconName: 'Calendar'
  },
  {
    step: 5,
    title: 'Internet Aktif & Siap Digunakan',
    description: 'Proses aktivasi selesai dalam waktu singkat. Anda siap menikmati internet cepat, stabil, dan lancar!',
    iconName: 'Wifi'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Bapak Hermawan',
    role: 'Kepala Keluarga',
    location: 'Cikampek Barat',
    comment: 'Sejak pakai Raziqnet paket Premium 30+30 Mbps, anak-anak belajar online lancar dan istri saya bisa streaming TV tanpa putus. Harganya bersahabat banget dibanding provider lain.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=250&auto=format&fit=crop',
    planUsed: 'PREMIUM (30+30 Mbps)'
  },
  {
    id: '2',
    name: 'Rian Febrian',
    role: 'Gamer & Content Creator',
    location: 'Dawuan, Cikampek',
    comment: 'Sangat recommended buat yang suka main Mobile Legends / Valorant. Ping stabil di bawah 15ms terus, gak pernah ping merah tiba-tiba. Teknisi juga cepat tanggap.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=250&auto=format&fit=crop',
    planUsed: 'LUXURY (50+50 Mbps)'
  },
  {
    id: '3',
    name: 'Ibu Nurbaiti',
    role: 'Pemilik Toko & Online Shop',
    location: 'Kota Baru, Cikampek',
    comment: 'Pake paket Bisnis buat toko dan kasir online. Sinyal kuat dan cepat, live TikTok jualan lancar jaya tanpa patah-patah. Mantap Raziqnet!',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=250&auto=format&fit=crop',
    planUsed: 'BISNIS (50 Mbps)'
  },
  {
    id: '4',
    name: 'Dede Kusnadi',
    role: 'Karyawan WFH',
    location: 'Purwasari',
    comment: 'Dulu sering kesel kalau lagi meeting Zoom suka freeze. Pas ganti ke Raziqnet Sederhana 20 Mbps langsung adem. Pemasangan rapi dan cepat.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=250&auto=format&fit=crop',
    planUsed: 'SEDERHANA (20 Mbps)'
  }
];

export const FAQS: FaqItem[] = [
  {
    id: '1',
    question: 'Apakah ada batasan kuota (FUP) pada paket Raziqnet?',
    answer: 'Tidak ada! Semua paket internet Raziqnet bersifat Unlimited (Tanpa FUP). Anda bebas menggunakan internet sepuasnya tanpa takut kecepatan diturunkan di tengah bulan.',
    category: 'Paket & Kuota'
  },
  {
    id: '2',
    question: 'Berapa biaya pemasangan awal internet Raziqnet?',
    answer: 'Biaya pemasangan sangat terjangkau dan sering ada promo GRATIS pemasangan untuk area tertentu di Cikampek & sekitarnya. Silakan hubungi kami via WhatsApp untuk mendapatkan promo pemasangan bulan ini.',
    category: 'Pemasangan'
  },
  {
    id: '3',
    question: 'Apakah modem / router Wi-Fi sudah disediakan?',
    answer: 'Ya! Setiap pendaftaran paket Raziqnet sudah termasuk gratis sewa perangkat Wi-Fi Router siap pakai selama berlangganan.',
    category: 'Perangkat'
  },
  {
    id: '4',
    question: 'Berapa lama proses pemasangan dari setelah daftar?',
    answer: 'Proses pemasangan umumnya diselesaikan dalam kurun waktu 1x24 jam hingga maksimal 2 hari kerja tergantung ketersediaan slot jaringan di area lokasi Anda.',
    category: 'Pemasangan'
  },
  {
    id: '5',
    question: 'Wilayah mana saja yang sudah terjangkau jaringan Raziqnet?',
    answer: 'Saat ini Raziqnet melayani wilayah Cikampek Kota, Cikampek Barat, Cikampek Timur, Dawuan, Kotabaru, Purwasari, Tirtamulya, Jatisari, dan area sekitarnya.',
    category: 'Cakupan Area'
  },
  {
    id: '6',
    question: 'Bagaimana cara melakukan pembayaran bulanan?',
    answer: 'Pembayaran tagihan sangat mudah, bisa dilakukan melalui Transfer Bank, E-Wallet (Dana, OVO, GoPay, ShopeePay), Alfamart/Indomaret, atau kasir agen resmi Raziqnet.',
    category: 'Pembayaran'
  }
];

export const COVERAGE_AREAS: CoverageArea[] = [
  {
    id: 'cikampek-kota',
    district: 'Cikampek',
    villages: ['Cikampek Kota', 'Cikampek Barat', 'Cikampek Timur', 'Cikampek Selatan', 'Dawuan Tengah', 'Dawuan Barat'],
    status: 'Ready 100% Fiber',
    tech: 'Fiber Optic FTTH'
  },
  {
    id: 'kotabaru',
    district: 'Kota Baru',
    villages: ['Pangulah Utara', 'Pangulah Selatan', 'Pangulah Barat', 'Sarimulya', 'Walahar', 'Cikopo'],
    status: 'Ready 100% Fiber',
    tech: 'Fiber Optic FTTH'
  },
  {
    id: 'purwasari',
    district: 'Purwasari',
    villages: ['Purwasari', 'Sukasari', 'Darawolong', 'Tamelang', 'Tegalsari'],
    status: 'Ready 100% Fiber',
    tech: 'Fiber Optic FTTH'
  },
  {
    id: 'tirtamulya',
    district: 'Tirtamulya & Jatisari',
    villages: ['Cipondoh', 'Citarik', 'Kertawaluya', 'Mekarwangi', 'Jatisari'],
    status: 'Ready 100% Fiber',
    tech: 'Fiber Optic FTTH'
  }
];
