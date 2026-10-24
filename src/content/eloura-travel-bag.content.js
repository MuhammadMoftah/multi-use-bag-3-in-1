/**
 * Eloura — شنطة السفر الترند 3 في 1
 * Single source of truth for all customer-facing copy, product facts,
 * commerce/analytics configuration and SEO metadata.
 *
 * Product facts come from the store owner's brief
 * (docs/Eloura_Travel_Bag_AI_Agent_Master_Prompt.md). Do not add specs,
 * prices, colours, ratings or delivery promises that are not verified.
 * Values that are still unknown are `null` and the UI hides or disables
 * whatever depends on them.
 */

/** Store-level links. Fill in only with verified URLs. */
export const store = {
  name: 'Eloura',
  tagline: 'Travel Essentials',
  /** Public storefront home (EasyOrders). */
  url: 'https://elouravtx.myeasyorders.com',
  /** Customer support channel, e.g. a WhatsApp or contact page URL. */
  contactUrl: null,
  shippingPolicyUrl: null,
  returnsPolicyUrl: null,
  privacyPolicyUrl: null,
  termsUrl: null,
};

/**
 * Purchase configuration. Every purchase CTA links to `checkoutUrl` (the live
 * EasyOrders product page); EasyOrders handles cart, checkout and payment.
 */
export const commerce = {
  platform: 'EasyOrders',
  /** Live EasyOrders product page. */
  checkoutUrl: 'https://elouravtx.myeasyorders.com/products/shnth-alsfr-altrnd',
  /** Selling price in EGP (number). Leave null until confirmed. */
  price: null,
  /** Only set when a genuine previous price exists. */
  compareAtPrice: null,
  currency: 'EGP',
};

/** Tracking IDs. Nothing is loaded or fired while these are null. */
export const analytics = {
  metaPixelId: null,
  ga4MeasurementId: null,
};

export const product = {
  name: 'شنطة السفر الترند 3 في 1',
  nameEn: '3-in-1 Convertible Travel Garment Duffel Bag',
  slug: '3-in-1-travel-garment-duffel-bag',
  brand: 'Eloura',
  audience: 'للرجالة والستات',
  material: 'جلد صناعي PU',
  materialEn: 'PU synthetic leather',
  waterResistance: 'مقاومة للمية (مش waterproof بالكامل)',
  dimensions: { cm: '52 × 25 × 32', in: '20.5 × 10 × 12.5' },
  shoeBagDimensions: { cm: '29 × 23 × 13', in: '11.5 × 9 × 5' },
  capacity: '2–3 أيام تقريبًا حسب طريقة التعبئة',
  carryOptions: ['في الإيد', 'على الكتف', 'كروس'],
  strap: 'حزام كتف بيتفك وطوله بيتظبط',
  pockets: { internal: 'جيبين داخليين بسوستة', external: 'جيب خارجي واحد' },
  color: 'حسب المتاح في المخزون',
};

export const packageContents = [
  'شنطة سفر 3 في 1 قابلة للتحويل',
  'شنطة أحذية منفصلة',
  'حزام كتف قابل للفك والتعديل',
];

export const care = [
  'نضفيها بقماشة ناعمة مبلولة خفيف.',
  'ابعدي عنها المنظفات القوية والكلور.',
  'سيبيها تنشف في مكان متهوّي بعيد عن الشمس المباشرة.',
  'خزّنيها في مكان ناشف.',
  'ماتحمّليهاش أكتر من طاقتها.',
];

export const useCases = [
  'رحلات الويك إند',
  'الإجازات القصيرة',
  'سفريات الشغل',
  'الأفراح والمناسبات',
  'الجيم والرياضة',
  'هدية لحد بيحب السفر',
];

/** Site navigation (in page order). */
export const nav = [
  { href: '#product', label: 'المنتج' },
  { href: '#how-it-works', label: '3 في 1' },
  { href: '#details', label: 'التفاصيل' },
  { href: '#features', label: 'المميزات' },
  { href: '#gallery', label: 'الصور' },
  { href: '#specs', label: 'المواصفات' },
  { href: '#faq', label: 'الأسئلة' },
];

export const ctas = {
  primary: 'اطلبي شنطتك دلوقتي',
  explore: 'اكتشفي المميزات',
  header: 'اطلبي دلوقتي',
  order: 'اطلبي شنطة السفر الترند دلوقتي',
};

export const hero = {
  eyebrow: 'Eloura | Travel Essentials',
  heading: 'سافري بشياكة… ومن غير كركبة!',
  accent: 'شنطة السفر الترند 3 في 1',
  description: 'شنطة واحدة لكل احتياجاتك… تنظيم أذكى، مساحة أكبر، وهدوم مرتبة طول الرحلة!',
  highlights: ['بتتحول لـ Garment Bag لتعليق هدومك', 'معاها شنطة أحذية منفصلة', 'تتشال في الإيد، على الكتف أو كروس'],
};

export const intro = {
  eyebrow: 'المنتج',
  heading: 'شنطة واحدة… لكل تفاصيل رحلتك',
  accent: 'شنطة سفر وشنطة ملابس في تصميم واحد',
  paragraphs: [
    'سواء رايحة سفريّة، ويك إند، رحلة عمل أو مناسبة خاصة، شنطة السفر الترند 3 في 1 من Eloura هتغير طريقتك في تجهيز شنطتك!',
    'بتصميمها الذكي اللي بيجمع بين شنطة السفر التقليدية وشنطة حفظ الملابس (Garment Bag)، هتقدري ترتبي هدومك وإكسسواراتك وأحذيتك في مكان واحد، وتقللي الكرمشة والفوضى أثناء التنقل.',
  ],
  closing: 'ودّعي كركبة الشنط… واستمتعي بسفر أسهل وإطلالة مرتبة!',
  figures: [
    { value: '2–3', unit: 'أيام', detail: 'سعة تقريبية لرحلة قصيرة', starred: true },
    { value: '3', unit: 'طرق', detail: 'إيد · كتف · كروس' },
    { value: '2 + 1', unit: 'جيوب', detail: 'جيبين داخليين وجيب خارجي' },
  ],
  footnote: 'السعة الفعلية بتختلف حسب الحاجات وطريقة التعبئة.',
};

export const howItWorks = {
  eyebrow: 'تصميم ذكي يجمع الأناقة والعملية',
  title: 'تصميم 3 في 1',
  accent: 'من شنطة سفر إلى Garment Bag',
  description:
    'مقفولة هي شنطة سفر أنيقة، وبمجرد فردها بتتحول لشنطة مخصصة لترتيب الملابس وتعليقها، عشان الفساتين والبدل يفضلوا مرتبين أكتر طول الطريق.',
  steps: [
    {
      id: 'unfold',
      title: 'افتحي وافردي',
      description: 'افتحي السوستة وافردي الشنطة، هتلاقيها اتحولت لشنطة حفظ ملابس (Garment Bag).',
    },
    {
      id: 'hang',
      title: 'علّقي هدومك',
      description: 'رتّبي الفساتين والبدل وهي متعلقة ومفرودة، وده بيساعد يقلل الكرمشة أثناء السفر.',
    },
    {
      id: 'shoes',
      title: 'الأحذية في شنطتها',
      description: 'حطي الجزم في شنطة الأحذية المنفصلة، بعيد عن الهدوم وباقي حاجتك.',
    },
    {
      id: 'carry',
      title: 'اقفلي واتحركي',
      description: 'اقفلي السحّابات واختاري: في إيدك، على كتفك أو كروس بالحزام القابل للتعديل.',
    },
  ],
  video: {
    label: 'شوفيها وهي بتتحول',
    caption: 'من شنطة ملابس مفرودة لشنطة سفر مقفولة وجاهزة للحركة.',
  },
  note: 'الصور والفيديو من صور المنتج للتوضيح، واللون المتاح بيكون حسب المخزون.',
};

export const details = {
  eyebrow: 'تفاصيل الشنطة',
  heading: 'تفاصيل الشنطة ومميزاتها',
  description: 'كل اللي هتلاقيه في العلبة: الشنطة الأساسية، شنطة أحذية منفصلة، وحزام كتف بيتفك ويتظبط.',
  note: 'المقاسات تقريبية. اللون حسب المتاح في المخزون وقت الطلب.',
  moreLabel: 'تفاصيل أكتر',
  items: [
    {
      id: 'bag',
      name: 'الشنطة الأساسية',
      rows: [
        { label: 'المقاس', value: `${product.dimensions.cm} سم` },
        { label: 'الخامة', value: 'جلد صناعي PU' },
        { label: 'السعة', value: '2–3 أيام تقريبًا' },
      ],
      more: ['المقاس بالبوصة: 20.5 × 10 × 12.5', 'جيبين داخليين بسوستة', 'جيب خارجي للحاجات السريعة زي الموبايل والباسبور'],
    },
    {
      id: 'garment',
      name: 'وضع الـ Garment Bag',
      rows: [
        { label: 'بتتحول', value: 'بمجرد فرد الشنطة' },
        { label: 'مناسبة لـ', value: 'الفساتين والبدل' },
        { label: 'الفايدة', value: 'كرمشة أقل' },
      ],
      more: ['مساحة مخصصة لتعليق الهدوم وترتيبها', 'بتساعد تحافظ على ترتيب الهدوم أثناء التنقل'],
    },
    {
      id: 'shoes',
      name: 'شنطة الأحذية',
      rows: [
        { label: 'المقاس', value: `${product.shoeBagDimensions.cm} سم` },
        { label: 'في العلبة', value: 'أيوه، منفصلة' },
        { label: 'الفايدة', value: 'تفصل الجزم عن الهدوم' },
      ],
      more: ['المقاس بالبوصة: 11.5 × 9 × 5', 'بتحافظ على نضافة باقي حاجتك'],
    },
    {
      id: 'strap',
      name: 'الحزام وطرق الحمل',
      rows: [
        { label: 'الحزام', value: 'بيتفك ويتظبط' },
        { label: 'طرق الحمل', value: 'إيد · كتف · كروس' },
        { label: 'التصميم', value: 'للرجالة والستات' },
      ],
      more: ['مقابض للحمل في الإيد', 'حزام كتف للحمل على الكتف أو كروس'],
    },
  ],
};

export const features = {
  eyebrow: 'المميزات',
  heading: 'ليه شنطة السفر الترند اختيارك المثالي؟',
  description: 'تفاصيل عملية بتفرق معاكي من أول تجهيز الشنطة لحد ما توصلي.',
  items: [
    { title: 'مساحة واسعة', description: 'تكفي احتياجات سفر 2–3 أيام: هدوم، فساتين، أحذية وأدوات عناية.' },
    { title: 'بتتحول لـ Garment Bag', description: 'بمجرد فردها بتبقى مخصصة لترتيب الهدوم وتعليقها.' },
    { title: 'شنطة أحذية منفصلة', description: 'تفصل الجزم عن الهدوم وتحافظ على نضافة حاجتك.' },
    { title: 'خامة جلد PU أنيقة', description: 'جلد صناعي بمظهر عصري، ومقاومة للمية.' },
    { title: 'سحّابات قوية وعملية', description: 'إغلاق محكم وفتح وقفل سهل أثناء التنقل.' },
    { title: '3 طرق للحمل', description: 'في الإيد، على الكتف أو كروس بحزام بيتفك ويتظبط.' },
    { title: 'للسفر والويك إند', description: 'للرحلات القصيرة وسفريات الشغل والجيم والمناسبات.' },
    { title: 'خفيفة وسهلة الحمل', description: 'تصميم عملي ومريح بيسهّل عليكي التنقل.' },
    { title: 'تنظيم داخلي ذكي', description: 'جيبين داخليين بسوستة وجيب خارجي للموبايل والباسبور.' },
    { title: 'تصميم Unisex', description: 'ستايل أنيق يناسب الرجالة والستات.' },
  ],
  useCasesTitle: 'تنفعك في',
  useCasesNote: 'شنطة واحدة لأكتر من مشوار.',
  lifestyle: {
    eyebrow: 'Lifestyle',
    heading: 'سافري براحة وأناقة',
    description:
      'شكل أنيق يليق بإطلالتك، وتنظيم عملي يوفر عليكي وقت التجهيز. من المطار للفندق للمناسبة، كل حاجة في مكانها.',
    highlights: ['ستايل أنيق', 'هدوم مرتبة', 'شنطة واحدة بدل كذا شنطة'],
  },
};

export const gallery = {
  eyebrow: 'الصور',
  heading: 'الشنطة من كل زاوية',
  description: 'مقفولة، مفرودة كـ Garment Bag، ومعاكي في الطريق. الألوان في الصور للعرض، والمتاح حسب المخزون.',
};

export const occasions = {
  eyebrow: 'لكل مشوار',
  heading: 'جاهزة لكل رحلة',
  accent: 'من الويك إند لسفريات الشغل',
  description: 'مقاس عملي للرحلات القصيرة، وتصميم 3 في 1 بيخليكي تختاري طريقة الحمل اللي تناسب يومك.',
  carryTitle: 'طرق الحمل',
  carry: ['في الإيد من المقابض', 'على الكتف بالحزام', 'كروس بعد ظبط طول الحزام'],
  items: [
    { title: 'الويك إند والإجازات القصيرة', detail: 'سعة تكفي حوالي 2–3 أيام حسب التعبئة' },
    { title: 'سفريات الشغل', detail: 'البدلة تفضل متعلقة ومرتبة لحد الاجتماع' },
    { title: 'الأفراح والمناسبات', detail: 'الفستان والجزمة والإكسسوارات في شنطة واحدة' },
    { title: 'الجيم والرياضة', detail: 'شنطة الأحذية بتفصل الكوتشي عن باقي الحاجات' },
    { title: 'هدية عملية', detail: 'لأي حد بيحب السفر والتنظيم' },
  ],
  note:
    'السعة الفعلية بتختلف حسب الحاجات وطريقة التعبئة. لو هتستخدميها كشنطة يد في الطيارة، راجعي مقاسات شركة الطيران قبل السفر.',
};

export const specs = {
  eyebrow: 'المواصفات',
  title: 'المقاسات والمواصفات',
  accent: 'كل التفاصيل قبل ما تطلبي',
  description: 'المقاسات تقريبية بالسنتيمتر والبوصة، ومعاها الخامة ومحتويات العلبة وطريقة العناية.',
  bar: [
    { label: 'مقاس الشنطة', value: product.dimensions.cm, unit: 'سم' },
    { label: 'شنطة الأحذية', value: product.shoeBagDimensions.cm, unit: 'سم' },
    { label: 'السعة', value: '2–3', unit: 'أيام' },
  ],
  materialTitle: 'الخامة',
  material:
    'جلد صناعي PU بمظهر أنيق، والخامة مقاومة للمية. مش waterproof بالكامل، فابعديها عن الغمر في المية.',
  contentsTitle: 'في العلبة',
  careTitle: 'العناية',
  tableTitle: 'جدول المواصفات الكامل',
  table: [
    { label: 'المنتج', value: product.name },
    { label: 'الاسم بالإنجليزي', value: product.nameEn, lang: 'en' },
    { label: 'البراند', value: 'Eloura', lang: 'en' },
    { label: 'الخامة', value: 'جلد صناعي PU' },
    { label: 'مقاومة المية', value: 'مقاومة للمية' },
    { label: 'المقاس', value: '52 × 25 × 32 سم (20.5 × 10 × 12.5 بوصة)' },
    { label: 'شنطة الأحذية', value: '29 × 23 × 13 سم (11.5 × 9 × 5 بوصة)' },
    { label: 'السعة', value: 'حوالي 2–3 أيام حسب التعبئة' },
    { label: 'طرق الحمل', value: 'إيد / كتف / كروس' },
    { label: 'حزام الكتف', value: 'بيتفك وطوله بيتظبط' },
    { label: 'الجيوب الداخلية', value: 'جيبين بسوستة' },
    { label: 'الجيوب الخارجية', value: 'جيب واحد' },
    { label: 'اللون', value: 'حسب المتاح في المخزون' },
    { label: 'مناسبة لـ', value: 'الرجالة والستات' },
  ],
  disclaimer: 'كل المقاسات تقريبية وممكن تختلف بفرق بسيط.',
};

export const brand = {
  eyebrow: 'البراند',
  heading: 'تجربة سفر أكثر تنظيمًا مع Eloura',
  accent: 'أناقة وعملية في كل رحلة',
  description:
    'في Eloura بنختار منتجات سفر بتجمع بين الشكل الأنيق والاستخدام العملي، عشان تجهيز الشنطة يبقى أسهل والرحلة تبقى أهدى.',
};

export const faq = {
  eyebrow: 'الأسئلة',
  heading: 'أسئلة',
  accent: 'وإجابات',
  items: [
    {
      question: 'الشنطة بتكفي لكام يوم؟',
      answer: 'مصممة للرحلات القصيرة، وبتكفي حوالي 2–3 أيام. السعة الفعلية بتختلف حسب حاجتك وطريقة التعبئة.',
    },
    {
      question: 'إزاي بتتحول لـ Garment Bag؟',
      answer:
        'بتفتحي السوستة وتفردي الشنطة، فتلاقي مساحة مخصصة لترتيب الهدوم وتعليقها زي الفساتين والبدل. ده بيساعد يقلل الكرمشة أثناء السفر، لكن النتيجة بتختلف حسب نوع القماش وطريقة الترتيب.',
    },
    {
      question: 'هل الشنطة ضد المية؟',
      answer: 'الخامة جلد صناعي PU مقاوم للمية، يعني بيستحمل الرذاذ الخفيف، لكن الشنطة مش waterproof بالكامل ومينفعش تتغمر في المية.',
    },
    {
      question: 'ينفع أدخل بيها الطيارة كشنطة يد؟',
      answer:
        'مقاسها تقريبًا 52 × 25 × 32 سم. قواعد شنط اليد بتختلف من شركة طيران للتانية، فالأفضل تراجعي مقاسات شركة الطيران قبل السفر.',
    },
    {
      question: 'إيه اللي بييجي مع الشنطة؟',
      answer: 'شنطة السفر 3 في 1، وشنطة أحذية منفصلة، وحزام كتف قابل للفك والتعديل.',
    },
    {
      question: 'الشنطة مناسبة للرجالة؟',
      answer: 'أيوه، تصميمها Unisex ويناسب الرجالة والستات، سواء للسفر الشخصي أو رحلات الشغل.',
    },
    {
      question: 'إيه الألوان المتاحة؟',
      answer: 'الألوان بتكون حسب المتاح في المخزون وقت الطلب.',
    },
    {
      question: 'أنضفها إزاي؟',
      answer:
        'بقماشة ناعمة مبلولة خفيف، من غير منظفات قوية أو كلور. سيبيها تنشف في مكان متهوّي بعيد عن الشمس المباشرة، وخزّنيها في مكان ناشف.',
    },
    {
      question: 'أطلب إزاي؟',
      answer: 'اضغطي على «اطلبي شنطتك دلوقتي» وكمّلي طلبك من صفحة المنتج في متجر Eloura. السعر والشحن والألوان المتاحة بتظهر هناك قبل تأكيد الطلب.',
    },
  ],
};

export const order = {
  eyebrow: 'اطلبي دلوقتي',
  heading: 'جاهزة لرحلتك الجاية؟',
  description: 'مش مجرد شنطة سفر… دي طريقة أذكى لتنظيم رحلتك. من أول تجهيز هدومك لحد الوصول، خلي كل حاجة منظمة وسهلة الوصول.',
  contentsTitle: 'في العلبة',
  priceLabel: 'السعر',
  checkoutNote: 'هتكملي الطلب في صفحة المنتج على متجر Eloura، وهتشوفي السعر والشحن والألوان المتاحة قبل التأكيد.',
};

export const footer = {
  note: 'صور المنتج للعرض، واللون حسب المتاح في المخزون. كل المقاسات تقريبية.',
  links: [
    { key: 'shippingPolicyUrl', label: 'الشحن' },
    { key: 'returnsPolicyUrl', label: 'الاسترجاع' },
    { key: 'privacyPolicyUrl', label: 'الخصوصية' },
    { key: 'termsUrl', label: 'الشروط والأحكام' },
    { key: 'contactUrl', label: 'تواصلي معانا' },
  ],
};

export const seo = {
  title: 'شنطة السفر الترند 3 في 1 للملابس والأحذية | Eloura',
  description:
    'اكتشفي شنطة السفر الترند 3 في 1 من Eloura! تصميم قابل للفرد لحفظ الملابس وتقليل الكرمشة، مع شنطة أحذية منفصلة وخامة PU مقاومة للماء. اطلبيها الآن.',
  keywords: [
    'شنطة السفر الترند',
    'شنطة سفر 3 في 1',
    'شنطة سفر نسائي',
    'شنطة سفر رجالي',
    'شنطة ملابس للسفر',
    'شنطة سفر قابلة للطي',
    'شنطة حفظ الملابس',
    'شنطة ويك اند',
    'شنطة سفر جلد صناعي',
    'garment duffel bag egypt',
    'convertible garment bag',
    'travel bag egypt',
  ],
  locale: 'ar_EG',
};
