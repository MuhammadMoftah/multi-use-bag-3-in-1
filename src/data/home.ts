/**
 * Eloura homepage copy (Egyptian Arabic). The homepage introduces Eloura as a
 * multi-category shopping brand; products come from the registry
 * (`src/products`) and nothing here describes a specific product.
 * Keep claims factual: no company history, figures, prices or promises.
 */

/** What Eloura offers, brand-level (not tied to the products published so far). */
export const brandCategories = [
  { name: 'الأزياء', nameEn: 'Fashion', description: 'قطع يومية بقصّات عصرية وخامات مريحة.' },
  { name: 'الشنط', nameEn: 'Bags', description: 'شنط عملية للشغل والسفر والخروج.' },
  { name: 'الإكسسوارات', nameEn: 'Accessories', description: 'تفاصيل صغيرة بتكمّل اللوك.' },
  { name: 'اللايف ستايل', nameEn: 'Lifestyle', description: 'منتجات بتسهّل يومك وتضيف لمسة لبيتك.' },
] as const;

export const home = {
  seo: {
    title: 'Eloura | اكتشف عالم Eloura — اختيارات تليق بذوقك',
    description:
      'Eloura براند تسوّق أونلاين مصري: أزياء وشنط وإكسسوارات ومنتجات لايف ستايل. اكتشف كل منتج في صفحة تفاعلية بصوره وتفاصيله، وكمّل طلبك من متجر Eloura الرسمي.',
    keywords: ['Eloura', 'إلورا', 'متجر Eloura', 'منتجات Eloura', 'تسوق أونلاين مصر', 'أزياء', 'شنط', 'إكسسوارات'],
    ogImageAlt: 'Eloura — اكتشف عالم Eloura',
  },
  hero: {
    eyebrow: 'Eloura — Curated Shopping Experience',
    titleLead: ['اكتشف', 'عالم'],
    brand: 'Eloura',
    supporting: 'اختيارات تليق بذوقك.',
    description:
      'من الأزياء والشنط للإكسسوارات ومنتجات اللايف ستايل، اكتشف اختيارات متنوعة وتجربة مختلفة للتعرف على كل منتج قبل الشراء.',
    primaryCta: 'اكتشف المنتجات',
    secondaryCta: 'تسوق من المتجر الرسمي',
    stepsLabel: 'إزاي تتسوّق',
    steps: ['اكتشف المنتج', 'اتعرّف على تفاصيله', 'اطلبه من المتجر الرسمي'],
    collectionLabel: 'من المجموعة',
    badge: 'Eloura · Curated Shopping Experience · ',
  },
  about: {
    eyebrow: 'عن Eloura',
    statement:
      'Eloura براند تسوّق أونلاين مصري حديث، بيختار منتجات شيك وعملية، وبيقدّم كل منتج فيها بعناية تليق بذوقك.',
    description:
      'كل منتج في Eloura ليه صفحة خاصة بيه، تتعرّف فيها عليه بالصور والتفاصيل قبل ما تقرر، وإتمام الطلب بيكون على متجر Eloura الرسمي.',
    categoriesTitle: 'اللي هتلاقيه في Eloura',
    categoriesNote: 'والمجموعة بتكبر باستمرار.',
    storeCta: 'زور المتجر الرسمي',
  },
  products: {
    eyebrow: 'المجموعة',
    title: 'اكتشف منتجات Eloura',
    description: 'كل منتج ليه صفحة خاصة بيه، فيها صوره ومميزاته وتفاصيله، وكل اللي محتاج تعرفه قبل ما تطلب.',
    cta: 'اكتشف المنتج',
    countLabel: 'منتجات في المعرض',
    storeNote: 'شوف كل المنتجات المتاحة دلوقتي على متجر Eloura الرسمي.',
    storeCta: 'تسوق من المتجر الرسمي',
  },
  journey: {
    eyebrow: 'إزاي تتسوّق من Eloura',
    title: 'من أول نظرة',
    accent: 'لحد ما تطلب',
    steps: [
      {
        labelEn: 'Discover',
        title: 'اكتشف',
        description: 'تصفّح منتجات Eloura واختار اللي يشدّك.',
      },
      {
        labelEn: 'Explore',
        title: 'اتعرّف على المنتج',
        description: 'كل منتج ليه صفحة تفاعلية بصوره ومميزاته وتفاصيله، عشان تقرر وانت مطمّن.',
      },
      {
        labelEn: 'Order',
        title: 'اطلب من المتجر الرسمي',
        description: 'لما تقرر، كمّل طلبك على متجر Eloura الرسمي على EasyOrders.',
      },
    ],
  },
  featured: {
    eyebrow: 'في الصدارة',
    eyebrowEn: 'Featured',
    description: 'صور من زوايا مختلفة، مميزات وتفاصيل، وكل اللي محتاج تعرفه قبل ما تطلب، في صفحة خاصة بالمنتج.',
    cta: 'اكتشف المنتج',
  },
  finalCta: {
    eyebrow: 'ابدأ من هنا',
    title: 'ابدأ رحلتك مع Eloura',
    accent: 'اكتشف المنتجات، اتعرّف على تفاصيلها، وكمّل طلبك من المتجر الرسمي.',
    cta: 'اكتشف المنتجات',
    storeCta: 'تسوق من المتجر الرسمي',
  },
} as const;

/** Footer copy shared by every page. */
export const footerCopy = {
  tagline: 'Eloura براند تسوّق أونلاين مصري. اكتشف كل منتج هنا، وكمّل طلبك على المتجر الرسمي.',
  productsTitle: 'المنتجات',
  siteTitle: 'Eloura Showcase',
  checkoutNote: 'الطلب والدفع بيتموا على متجر Eloura الرسمي.',
};
