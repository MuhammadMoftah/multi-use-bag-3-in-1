/**
 * Eloura — تيشيرت أوفر سايز أسود (Summer Melton)
 * Single source of truth for this product's customer-facing copy, product
 * facts, commerce configuration and SEO metadata. Store links and analytics
 * IDs are site-wide (`src/data/site.ts`).
 *
 * Product facts come from the store owner's brief. Do not add prices,
 * discounts, ratings, reviews, stock levels, sales numbers or delivery
 * promises that are not verified. Values that are still unknown are `null`
 * and the UI hides or adapts whatever depends on them.
 */

/**
 * Purchase configuration. Every purchase CTA links to `checkoutUrl` (the live
 * EasyOrders product page); EasyOrders handles cart, checkout and payment.
 */
export const commerce = {
  platform: 'EasyOrders',
  /** Live EasyOrders product page for this T-shirt. */
  checkoutUrl: 'https://elouravtx.myeasyorders.com/products/xl2tyshrt-aswd-smr-myltwn',
  /** Selling price in EGP (number). Leave null until confirmed. */
  price: null,
  /** Only set when a genuine previous price exists. */
  compareAtPrice: null,
  currency: 'EGP',
};

export const product = {
  name: 'تيشيرت أوفر سايز أسود',
  fullName: 'تيشيرت أوفر سايز أسود – أناقة بسيطة وراحة طول اليوم 🖤',
  nameEn: "Men's Black Oversized T-Shirt — Summer Melton",
  slug: 'mens-black-oversized-t-shirt',
  type: 'تيشيرت رجالي بيزك أوفر سايز',
  typeEn: "Men's Basic Oversized T-Shirt",
  category: 'ملابس رجالي / تيشيرتات أوفر سايز',
  categoryEn: "Men's Fashion / Oversized T-Shirts",
  /** Eloura is the store; the garment itself is unbranded. */
  manufacturerBrand: 'Generic',
  material: 'سمر ميلتون',
  materialEn: 'Summer Melton',
  color: 'أسود',
  colorEn: 'Black',
  fit: 'أوفر سايز',
  fitEn: 'Oversized',
  featuredSize: '2XL',
  audience: 'رجالي / شباب',
};

/** Colours the T-shirt comes in. Availability depends on current stock. */
export const colors = [
  { id: 'black', name: 'أسود', nameEn: 'Black', hex: '#0d0d0d' },
  { id: 'white', name: 'أبيض', nameEn: 'White', hex: '#f3f2ee' },
  { id: 'brown', name: 'بني', nameEn: 'Brown', hex: '#5b3e2b' },
  { id: 'navy', name: 'كحلي', nameEn: 'Navy', hex: '#1d2742' },
  { id: 'burgundy', name: 'برجندي', nameEn: 'Burgundy', hex: '#6b1f2d' },
];

export const packageContents = ['تيشيرت واحد'];

export const care = [
  'اغسله بمية باردة أو فاترة.',
  'اغسله مع الألوان المشابهة.',
  'ابعد عنه الكلور والمبيّضات.',
  'اكويه على درجة حرارة مناسبة للقماش.',
];

export const stylingPairs = ['الجينز', 'الشورت', 'البنطلون الكاجوال'];

/** Product-page section navigation (in page order). `id` is the section's element id. */
export const sections = [
  { id: 'product', label: 'التفاصيل' },
  { id: 'features', label: 'المميزات' },
  { id: 'gallery', label: 'الصور' },
  { id: 'material', label: 'الخامة' },
  { id: 'styling', label: 'التنسيق' },
  { id: 'specs', label: 'المقاسات' },
  { id: 'faq', label: 'الأسئلة' },
];

/** Homepage product card. */
export const showcase = {
  name: 'تيشيرت أوفر سايز أسود رجالي',
  category: 'ملابس رجالي',
  shortDescription: 'خامة سمر ميلتون ناعمة ومريحة، قصة أوفر سايز عصرية، ولون أسود كلاسيكي سهل التنسيق مع كل لبسك.',
  features: ['سمر ميلتون', 'أوفر سايز', 'المقاس المعروض 2XL'],
};

export const ctas = {
  primary: 'اطلب دلوقتي',
  explore: 'اكتشف التفاصيل',
  header: 'اطلب دلوقتي',
  order: 'اطلب التيشيرت دلوقتي',
};

export const hero = {
  eyebrow: 'Eloura | Menswear',
  heading: 'تيشيرت أوفر سايز أسود',
  subheading: 'ستايل عصري، راحة طول اليوم، وشياكة في كل خروجة.',
  description: 'خامة سمر ميلتون مريحة، قصة أوفر سايز عصرية، ولون أسود يناسب كل ستايل.',
  highlights: [
    { label: 'الخامة', value: 'سمر ميلتون' },
    { label: 'القصة', value: 'أوفر سايز' },
    { label: 'المقاس المعروض', value: '2XL' },
  ],
};

export const intro = {
  eyebrow: 'المنتج',
  heading: 'أناقة بسيطة… وراحة طول اليوم',
  accent: 'ستايل عصري، راحة في كل حركة، وإطلالة تليق بيك في أي وقت',
  paragraphs: [
    'لو بتدور على تيشيرت يجمع بين الشياكة والراحة، تيشيرت الأوفر سايز الأسود بخامة سمر ميلتون اختيار مثالي لإطلالتك اليومية.',
    'بتصميمه الواسع والمريح ولونه الأسود الكلاسيكي، هتقدر تنسقه بسهولة مع الجينز أو الشورت أو البنطلون الكاجوال، سواء رايح الجامعة، الشغل، خارج مع أصحابك أو مسافر.',
  ],
  figures: [
    { value: 'Oversized', lang: 'en', detail: 'قصة واسعة ومريحة' },
    { value: '2XL', lang: 'en', detail: 'المقاس المعروض' },
    { value: '5', unit: 'ألوان', detail: 'حسب المتاح في المخزون', starred: true },
  ],
  footnote: 'توفر الألوان والمقاسات بيكون حسب المخزون وقت الطلب.',
};

export const features = {
  eyebrow: 'ليه تختاره؟',
  heading: 'قطعة أساسية في دولابك',
  description: 'تفاصيل بسيطة بتفرق في شكلك وراحتك طول اليوم.',
  items: [
    { title: 'خامة سمر ميلتون ناعمة ومريحة', description: 'مناسبة للاستخدام اليومي والأجواء الصيفية.' },
    { title: 'قصة أوفر سايز عصرية', description: 'حرية حركة وإطلالة كاجوال مميزة.' },
    { title: 'لون أسود كلاسيكي', description: 'سهل التنسيق مع مختلف الألوان.' },
    { title: 'تصميم عملي ومتعدد الاستخدامات', description: 'مناسب للخروجات والجامعة والشغل والسفر.' },
    { title: 'سهولة العناية', description: 'يتغسل مع الألوان المشابهة.' },
  ],
};

export const gallery = {
  eyebrow: 'الصور',
  heading: 'التيشيرت من كل زاوية',
  description: 'من القدام ومن ورا، على الموديل وتفاصيل الياقة والخامة. الصور للعرض، والمتاح حسب المخزون.',
  label: 'صور تيشيرت أوفر سايز أسود',
};

export const material = {
  eyebrow: 'الخامة والراحة',
  heading: 'خامة سمر ميلتون',
  accent: 'ناعمة ومريحة… من أول اليوم لآخره',
  description:
    'سمر ميلتون خامة ناعمة ومريحة، مناسبة للاستخدام اليومي والأجواء الصيفية، عشان تفضل مرتاح في كل حركة.',
  points: [
    { title: 'ملمس ناعم', description: 'خامة مريحة على الجسم للبس اليومي.' },
    { title: 'مناسبة للصيف', description: 'اختيار عملي للأجواء الصيفية.' },
    { title: 'عناية سهلة', description: 'يتغسل مع الألوان المشابهة بمية باردة أو فاترة.' },
  ],
};

export const styling = {
  eyebrow: 'القصة والتنسيق',
  heading: 'قصة أوفر سايز',
  accent: 'وتنسيق سهل مع كل لبسك',
  description:
    'تصميم واسع ومريح بيديك حرية حركة وإطلالة كاجوال مميزة، ولونه الأسود الكلاسيكي بيخليه سهل التنسيق مع مختلف الألوان.',
  pairsTitle: 'نسّقه مع',
  occasionsTitle: 'مناسب لـ',
  occasions: [
    { title: 'الجامعة', detail: 'إطلالة كاجوال مريحة لليوم الطويل' },
    { title: 'الشغل', detail: 'مع بنطلون كاجوال لستايل بسيط ومرتب' },
    { title: 'الخروجات مع أصحابك', detail: 'مع جينز أو شورت لإطلالة عصرية' },
    { title: 'السفر', detail: 'قطعة عملية تتنسق مع أكتر من لبس' },
  ],
};

export const specs = {
  eyebrow: 'المواصفات',
  title: 'المواصفات والتفاصيل',
  accent: 'كل اللي محتاج تعرفه قبل ما تطلب',
  bar: [
    { label: 'الخامة', value: 'سمر ميلتون' },
    { label: 'القصة', value: 'Oversized', lang: 'en' },
    { label: 'المقاس المعروض', value: '2XL', lang: 'en' },
  ],
  colorsTitle: 'الألوان',
  colorsNote: 'الألوان المتاحة بتتحدد حسب المخزون وقت الطلب.',
  sizeTitle: 'المقاس',
  sizeText: 'المقاس المعروض: 2XL بقصة أوفر سايز. توفر باقي المقاسات بيكون حسب المخزون وقت الطلب.',
  contentsTitle: 'في العلبة',
  careTitle: 'طريقة العناية',
  tableTitle: 'جدول المواصفات الكامل',
  table: [
    { label: 'نوع المنتج', value: product.type },
    { label: 'الاسم بالإنجليزي', value: product.typeEn, lang: 'en' },
    { label: 'الخامة', value: `${product.material} (Summer Melton)` },
    { label: 'اللون الأساسي', value: product.color },
    { label: 'المقاس المعروض', value: product.featuredSize, lang: 'en' },
    { label: 'القصة', value: product.fit },
    { label: 'البراند المصنّع', value: product.manufacturerBrand, lang: 'en' },
    { label: 'مناسب لـ', value: product.audience },
    { label: 'في العلبة', value: packageContents.join('، ') },
  ],
  disclaimer: 'درجة اللون في الصور ممكن تختلف بفرق بسيط حسب إضاءة الشاشة.',
};

export const faq = {
  eyebrow: 'الأسئلة',
  heading: 'أسئلة',
  accent: 'وإجابات',
  items: [
    {
      question: 'التيشيرت معمول من إيه؟',
      answer: 'من خامة سمر ميلتون، وهي خامة ناعمة ومريحة مناسبة للاستخدام اليومي والأجواء الصيفية.',
    },
    {
      question: 'يعني إيه قصة أوفر سايز؟',
      answer: 'قصة واسعة ومريحة بتديك حرية حركة وإطلالة كاجوال عصرية.',
    },
    {
      question: 'إيه المقاسات المتاحة؟',
      answer: 'المقاس المعروض هو 2XL. توفر باقي المقاسات بيكون حسب المخزون وقت الطلب.',
    },
    {
      question: 'إيه الألوان المتاحة؟',
      answer: 'التيشيرت بييجي بالأسود والأبيض والبني والكحلي والبرجندي، والمتاح منهم بيكون حسب المخزون وقت الطلب.',
    },
    {
      question: 'أنسّقه مع إيه؟',
      answer: 'لونه الأسود الكلاسيكي سهل التنسيق: البسه مع جينز أو شورت أو بنطلون كاجوال، للجامعة أو الشغل أو الخروجات أو السفر.',
    },
    {
      question: 'أغسله إزاي؟',
      answer: 'اغسله بمية باردة أو فاترة مع الألوان المشابهة، وابعد عنه الكلور، واكويه على درجة حرارة مناسبة للقماش.',
    },
    {
      question: 'إيه اللي في العلبة؟',
      answer: 'تيشيرت واحد.',
    },
  ],
};

export const order = {
  eyebrow: 'اطلب دلوقتي',
  heading: 'جدّد ستايلك مع Eloura',
  description: 'تيشيرت أوفر سايز أسود بخامة سمر ميلتون. قطعة أساسية بسيطة وشيك، تلبسها في كل مكان وانت مرتاح.',
  contentsTitle: 'في العلبة',
  colorsTitle: 'الألوان',
  priceLabel: 'السعر',
  checkoutNote: 'هتكمّل الطلب على متجر Eloura، وهتشوف السعر والشحن والمقاسات والألوان المتاحة قبل التأكيد.',
};

export const footer = {
  note: 'صور المنتج للعرض. الألوان والمقاسات المتاحة حسب المخزون وقت الطلب.',
};

export const seo = {
  title: 'تيشيرت أوفر سايز أسود رجالي 2XL | Eloura Egypt',
  description:
    'اكتشف تيشيرت أوفر سايز أسود رجالي بخامة سمر ميلتون المريحة وقصة عصرية تناسب خروجاتك اليومية. جدّد ستايلك مع Eloura.',
  keywords: [
    'تيشيرت أوفر سايز',
    'تيشيرت أوفر سايز أسود',
    'تيشيرت أوفر سايز رجالي',
    'تيشيرت رجالي أسود',
    'تيشيرت سمر ميلتون',
    'تيشيرت 2XL',
    'oversized t-shirt egypt',
    'black oversized t-shirt',
  ],
  locale: 'ar_EG',
};
