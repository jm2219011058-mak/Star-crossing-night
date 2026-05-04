/* ===== Super Figure — i18n Engine =====
   Lightweight client-side translation with RTL support.
   Usage: add data-i18n="key" to any element.
   For innerHTML (e.g. with <br>), use data-i18n-html="key".
   Language stored in localStorage. */

const SF_I18N = {
  current: 'en',

  translations: {
    en: {
      // Nav
      'nav.work': 'Work',
      'nav.about': 'About',
      'nav.feed': 'Feed',
      'nav.contact': 'Contact',
      'nav.talk': "Let's Talk",
      'nav.lang': 'عربي',

      // Hero
      'hero.eyebrow': 'Voice of Vision',
      'hero.title': 'Call <span class="accent">for</span><br>Innovator',
      'hero.subtitle': 'نداء للمبتكرين',
      'hero.desc': "We amplify the stories that shape the Gulf's future — tech founders, racing teams, artists, and brands building what's next.",

      // Bento — glass card
      'bento.pills.media': 'Media',
      'bento.pills.gulf': 'Gulf',
      'bento.pills.tech': 'Tech',
      'bento.glass.label': 'Voice of Vision',
      'bento.glass.title': 'Episode 01',
      'bento.glass.sub': 'Weekly conversations with founders, racers, and investors — filmed in real places. A studio. A restaurant. On the road.',
      'bento.glass.cta': 'Explore',

      // Bento — image pills
      'bento.pill.noor': "Light Art : Noor Riyadh '26",
      'bento.pill.f1': 'Motorsport : Jeddah Corniche Circuit',
      'bento.pill.leap': 'AI & Tech : LEAP 2026',
      'bento.pill.diriyah': 'Art Club : Diriyah Biennale',

      // Bento — promo
      'bento.promo.label': 'Coming Soon',
      'bento.promo.title': 'The Creator Incubator',
      'bento.promo.sub': 'Apply to join the first cohort of Gulf-based storytellers.',

      // Bento — stat
      'bento.stat.number': '7',
      'bento.stat.label': 'Countries<br>covered',

      // Shows
      'shows.offgrid': 'Offgrid',
      'shows.offgrid.type': '(Podcast)',
      'shows.majlis': 'The Majlis',
      'shows.majlis.type': '(Live Show)',

      // X Feed
      'feed.label': 'Live',
      'feed.title': "What we're saying.",
      'feed.follow': 'Follow @SuperFigure',
      'feed.tweet1': 'Just wrapped filming Episode 01 of Voice of Vision. Three cameras. One table. A founder who built a $2B company from a dorm room. Dropping next week.',
      'feed.tweet2': "On the ground at LEAP 2026 in Riyadh. 172,000 attendees. We're here to cover what happens after the keynotes end.",
      'feed.tweet3': "Maffi Racing just signed their 21st driver. We've been documenting the journey since driver number 3. The long-form piece drops this Thursday.",
      'feed.tweet4': 'New essay on the platform: "Why the Gulf\'s esports scene will outpace Europe by 2028." Written by a creator in our incubator program. Read it free.',
      'feed.tweet5': 'Min-Liang Tan told us something off-camera that changed how we think about AI and creativity. More in Voice of Vision Ep. 02.',

      // Marquee
      'marquee.summits': 'Tech Summits',
      'marquee.motorsport': 'Motorsport',
      'marquee.collabs': 'Brand Collabs',
      'marquee.vov': 'Voice of Vision',
      'marquee.doc': 'Documentary',
      'marquee.platform': 'Creator Platform',
      'marquee.ai': 'AI Advisory',

      // Editorial
      'ed1.label': 'The Platform',
      'ed1.title': 'Write it. Film it.<br>Host it. Own it.',
      'ed1.body': "A UGC platform where creators publish long-form essays, cinematic documentaries, and podcast series. Think editorial depth meets social reach — focused on Gulf tech, racing, travel, and the people behind it all.",
      'ed1.ar': 'منصّة UGC للمبدعين: مقالات معمّقة، أفلام وثائقية، وبودكاست — تجمع العمق التحريري مع الوصول الاجتماعي.',

      'ed2.label': 'Voice of Vision',
      'ed2.title': 'The interview<br>that goes<br>somewhere.',
      'ed2.body': "Weekly conversations with tech founders, racing drivers, and investors — filmed in real places. A studio. A restaurant. On the road. Entertainment meets substance.",
      'ed2.ar': 'حوارات أسبوعية مع مؤسسي التقنية وسائقي السباقات والمستثمرين — تُصوَّر في أماكن حقيقية. ترفيه يلتقي بالجوهر.',

      'ed3.label': 'Amplification',
      'ed3.title': 'Summits. Events.<br>Brand collabs.',
      'ed3.body': "We partner with tech companies, sporting events, and cultural brands to co-create media that extends their reach. From Saudi tech summits to international racing circuits.",
      'ed3.ar': 'نشارك شركات التقنية والفعاليات الرياضية والعلامات الثقافية لإنتاج محتوى يوسّع تأثيرها — من قمم التقنية السعودية إلى حلبات السباق الدولية.',

      // People
      'people.title': "Conversations<br>we're starting.",
      'people.sub': 'Founders, racers, and chroniclers whose stories we want to tell.',
      'people.bio1': 'Built Razer from a single gaming mouse into a global technology company across 150+ countries. Believes AI should empower, not replace, human creativity.',
      'people.bio2': 'Motorsport operator at the intersection of sport, technology and investment. 10+ race victories, two runner-up titles, drivers from four continents.',
      'people.bio3': "30 years in automotive journalism. Co-founded the world's only ad-free online automotive magazine. Juror of the European Car of the Year.",

      // Fullbleed
      'fullbleed.title': 'Based in Saudi Arabia.',
      'fullbleed.ar': 'المملكة العربية السعودية',

      // Revenue
      'rev.label': 'How it works',
      'rev.title': 'Six ways we sustain the work.',
      'rev.h1': 'Subscriptions',
      'rev.p1': 'A paid community. Content co-creation. Private events.',
      'rev.h2': 'Research',
      'rev.p2': 'Commissioned analysis for tech companies and event organizers.',
      'rev.h3': 'Equity',
      'rev.p3': 'When our coverage builds a company, we participate.',
      'rev.h4': 'Partnerships',
      'rev.p4': 'Co-branded media at Gulf sporting events and tech summits.',
      'rev.h5': 'Referrals',
      'rev.p5': 'Connecting founders to institutional investors.',
      'rev.h6': 'Data',
      'rev.p6': 'Verified fact infrastructure for media and research.',
      'rev.planned': 'Planned',

      // CTA
      'cta.title': 'Interested?',
      'cta.btn': 'Get in touch',

      // Footer
      'footer.copy': '&copy; 2026 Super Figure',

      // ===== ABOUT PAGE =====
      'about.eyebrow': 'About Us',
      'about.title': 'The people behind',

      // Vision
      'about.vision.label': 'Our Vision',
      'about.vision.title': 'Building the media house<br>the Gulf <span class="v-accent">deserves</span>',
      'about.vision.body': "Super Figure exists at the intersection of culture, commerce, and creativity. We craft stories that move markets, shape narratives, and amplify the voices defining tomorrow's Gulf.",

      // Team
      'about.team.label': 'Leadership',
      'about.team.title': 'Meet the co-founders',

      'about.card1.name': 'Abdulaziz Al-Qahtani',
      'about.card1.role': 'Co-Founder & CFO',
      'about.card1.bio': 'Law background with deep expertise in Saudi regulatory frameworks. Established entrepreneur in the Saudi business sector, specializing in operations management and strategic capital allocation.',
      'about.card1.more': 'Learn more',

      'about.card2.name': 'Jacques Mak',
      'about.card2.role': 'Co-Founder & Creative Director',
      'about.card2.bio': 'Co-Founder of Unimine Tech (UE5 UGC platform). Dual degree in Synthetic Biology and Engineering Design from UC Davis. Builds global-scale architectures with long-horizon capital partners.',
      'about.card2.more': 'Learn more',

      'about.card3.name': 'Jamie Zhang',
      'about.card3.role': 'Co-Founder & CEO',
      'about.card3.bio': 'MIT graduate, former McKinsey Senior Engagement Manager. Co-founded Masdar Investment LLC with Oman Royal Families. Founded IRX Fin (RMB 10B angel funding).',
      'about.card3.more': 'Learn more',

      // Modals
      'modal.bg': 'Background',
      'modal.role': 'Role at Super Figure',

      'modal1.bg1': "Abdulaziz is a high-stakes strategic leader with a diverse background spanning operations management, legal frameworks, and local entrepreneurship. With an academic focus on Law, he specializes in navigating Saudi Arabia's complex regulatory landscape, ensuring institutional compliance and strategic growth.",
      'modal1.bg2': 'As an established entrepreneur in the Saudi business sector, he possesses deep insights into market dynamics, capital allocation, and operational excellence. His leadership style is forged through years of demanding operational roles — a philosophy of discipline, precision, and result-oriented management.',
      'modal1.role1': 'As CFO, Abdulaziz oversees the financial architecture that makes ambitious media projects viable. He ensures compliance across Saudi regulatory frameworks while structuring the capital strategy, revenue operations, and partnership agreements that underpin every Super Figure venture.',

      'modal2.bg1': 'Co-Founder of Unimine Tech — a UE5-based UGC platform and zero-code world editor. Jacques builds global-scale architectures with long-horizon capital partners, operating at the intersection of creative technology and venture building.',
      'modal2.bg2': 'He holds a dual degree in Synthetic Biology and Engineering Design from UC Davis, combining technical rigor with design thinking. This cross-disciplinary foundation shapes his approach to building systems — whether product platforms or media brands.',
      'modal2.role1': 'As Creative Director, Jacques sets the visual language, editorial tone, and experience design across every Super Figure touchpoint. From the identity system and brand architecture to content production and digital product, he owns the end-to-end creative standard.',

      'modal3.bg1': 'MIT graduate and former McKinsey Senior Engagement Manager, Jamie brings elite strategic consulting experience to Super Figure. Her career spans high-stakes advisory work across industries, sharpening her ability to architect scalable business models and drive organizational transformation at speed.',
      'modal3.bg2': 'Jamie co-founded Masdar Investment LLC in partnership with Oman Royal Families, navigating sovereign wealth and cross-border investment at the highest levels of Gulf finance. She also founded IRX Fin, a fintech venture that secured RMB 10 billion in angel funding — a testament to her capital-raising acumen and deep network across Chinese and Middle Eastern financial ecosystems.',
      'modal3.role1': "As CEO of Super Figure, Jamie orchestrates the company's commercial strategy, partnership architecture, and market expansion. Her rare ability to bridge East and West — connecting Chinese capital networks with Gulf market opportunity — gives Super Figure a decisive edge in building a truly global media house rooted in the region.",

      'about.cta.title': 'Work with us',
    },

    ar: {
      // Nav
      'nav.work': 'أعمالنا',
      'nav.about': 'من نحن',
      'nav.feed': 'آخر الأخبار',
      'nav.contact': 'تواصل',
      'nav.talk': 'تواصل معنا',
      'nav.lang': 'EN',

      // Hero
      'hero.eyebrow': 'Voice of Vision',
      'hero.title': 'نداء<br><span class="accent">للمبتكرين</span>',
      'hero.subtitle': 'Call for Innovator',
      'hero.desc': 'نُضخّم القصص التي تشكّل مستقبل الخليج — مؤسسو التقنية، فرق السباقات، الفنانون، والعلامات التجارية التي تبني ما هو قادم.',

      // Bento — glass card
      'bento.pills.media': 'إعلام',
      'bento.pills.gulf': 'الخليج',
      'bento.pills.tech': 'تقنية',
      'bento.glass.label': 'Voice of Vision',
      'bento.glass.title': 'الحلقة ٠١',
      'bento.glass.sub': 'حوارات أسبوعية مع المؤسسين والمتسابقين والمستثمرين — تُصوَّر في أماكن حقيقية. استوديو. مطعم. على الطريق.',
      'bento.glass.cta': 'استكشف',

      // Bento — image pills
      'bento.pill.noor': 'فنون ضوئية : نور الرياض ٢٦',
      'bento.pill.f1': 'رياضة المحركات : حلبة جدة كورنيش',
      'bento.pill.leap': 'ذكاء اصطناعي : ليب ٢٠٢٦',
      'bento.pill.diriyah': 'نادي الفنون : بينالي الدرعية',

      // Bento — promo
      'bento.promo.label': 'قريباً',
      'bento.promo.title': 'حاضنة المبدعين',
      'bento.promo.sub': 'قدّم الآن للانضمام إلى أول دفعة من صنّاع المحتوى في الخليج.',

      // Bento — stat
      'bento.stat.number': '٧',
      'bento.stat.label': 'دول<br>مغطّاة',

      // Shows
      'shows.offgrid': 'Offgrid',
      'shows.offgrid.type': '(بودكاست)',
      'shows.majlis': 'The Majlis',
      'shows.majlis.type': '(عرض مباشر)',

      // X Feed
      'feed.label': 'مباشر',
      'feed.title': 'ماذا نقول.',
      'feed.follow': 'تابع @SuperFigure',
      'feed.tweet1': 'انتهينا للتو من تصوير الحلقة الأولى من Voice of Vision. ثلاث كاميرات. طاولة واحدة. مؤسس بنى شركة بقيمة ملياري دولار من غرفة نوم. ستُطرح الأسبوع القادم.',
      'feed.tweet2': 'على أرض ليب ٢٠٢٦ في الرياض. ١٧٢,٠٠٠ زائر. نحن هنا لنغطي ما يحدث بعد انتهاء الخطابات.',
      'feed.tweet3': 'مافي ريسينغ وقّعت مع سائقها الـ٢١. نحن نوثّق الرحلة منذ السائق رقم ٣. المقال الطويل ينزل الخميس.',
      'feed.tweet4': 'مقال جديد على المنصة: "لماذا ستتفوّق ساحة الرياضات الإلكترونية الخليجية على أوروبا بحلول ٢٠٢٨." كتبه أحد مبدعي برنامج الحاضنة. اقرأه مجاناً.',
      'feed.tweet5': 'مين-ليانغ تان أخبرنا بشيء خارج الكاميرا غيّر طريقة تفكيرنا في الذكاء الاصطناعي والإبداع. المزيد في Voice of Vision الحلقة ٠٢.',

      // Marquee
      'marquee.summits': 'قمم تقنية',
      'marquee.motorsport': 'رياضة محركات',
      'marquee.collabs': 'شراكات العلامات',
      'marquee.vov': 'Voice of Vision',
      'marquee.doc': 'أفلام وثائقية',
      'marquee.platform': 'منصة المبدعين',
      'marquee.ai': 'استشارات ذكاء اصطناعي',

      // Editorial
      'ed1.label': 'المنصة',
      'ed1.title': 'اكتبها. صوّرها.<br>استضفها. امتلكها.',
      'ed1.body': 'منصّة UGC حيث ينشر المبدعون مقالات معمّقة وأفلاماً وثائقية سينمائية وسلسلات بودكاست. عمق تحريري يلتقي بالوصول الاجتماعي — مع التركيز على تقنية الخليج والسباقات والسفر والشخصيات وراءها.',
      'ed1.ar': 'A UGC platform for creators: essays, documentaries, and podcasts — editorial depth meets social reach.',

      'ed2.label': 'Voice of Vision',
      'ed2.title': 'المقابلة التي<br>تذهب إلى<br>مكان ما.',
      'ed2.body': 'حوارات أسبوعية مع مؤسسي التقنية وسائقي السباقات والمستثمرين — تُصوَّر في أماكن حقيقية. استوديو. مطعم. على الطريق. ترفيه يلتقي بالجوهر.',
      'ed2.ar': 'Weekly conversations with tech founders, racing drivers, and investors — filmed in real places. Entertainment meets substance.',

      'ed3.label': 'التوسّع',
      'ed3.title': 'قمم. فعاليات.<br>شراكات العلامات.',
      'ed3.body': 'نتشارك مع شركات التقنية والفعاليات الرياضية والعلامات الثقافية لإنتاج محتوى إعلامي يوسّع تأثيرها. من قمم التقنية السعودية إلى حلبات السباق الدولية.',
      'ed3.ar': 'We partner with tech companies, sporting events, and cultural brands to co-create media that extends their reach.',

      // People
      'people.title': 'حوارات<br>نبدأها.',
      'people.sub': 'مؤسسون ومتسابقون ومؤرخون نريد أن نروي قصصهم.',
      'people.bio1': 'بنى Razer من فأرة ألعاب واحدة إلى شركة تقنية عالمية في أكثر من ١٥٠ دولة. يؤمن أن الذكاء الاصطناعي يجب أن يمكّن الإبداع البشري لا أن يستبدله.',
      'people.bio2': 'مشغّل رياضة محركات عند تقاطع الرياضة والتقنية والاستثمار. أكثر من ١٠ انتصارات، لقبان وصيف، سائقون من أربع قارات.',
      'people.bio3': '٣٠ عاماً في صحافة السيارات. شارك في تأسيس المجلة الإلكترونية الوحيدة للسيارات بدون إعلانات. عضو لجنة تحكيم سيارة العام الأوروبية.',

      // Fullbleed
      'fullbleed.title': 'مقرّنا في المملكة العربية السعودية.',
      'fullbleed.ar': 'Based in Saudi Arabia',

      // Revenue
      'rev.label': 'كيف نعمل',
      'rev.title': 'ست طرق نستدام بها العمل.',
      'rev.h1': 'اشتراكات',
      'rev.p1': 'مجتمع مدفوع. إنتاج محتوى مشترك. فعاليات خاصة.',
      'rev.h2': 'أبحاث',
      'rev.p2': 'تحليلات مكلّفة لشركات التقنية ومنظمي الفعاليات.',
      'rev.h3': 'حصص ملكية',
      'rev.p3': 'عندما تبني تغطيتنا شركة، نشارك فيها.',
      'rev.h4': 'شراكات',
      'rev.p4': 'محتوى إعلامي مشترك في الفعاليات الرياضية والتقنية الخليجية.',
      'rev.h5': 'إحالات',
      'rev.p5': 'ربط المؤسسين بالمستثمرين المؤسسيين.',
      'rev.h6': 'بيانات',
      'rev.p6': 'بنية تحتية للحقائق الموثّقة للإعلام والأبحاث.',
      'rev.planned': 'مخطط',

      // CTA
      'cta.title': 'مهتم؟',
      'cta.btn': 'تواصل معنا',

      // Footer
      'footer.copy': '&copy; ٢٠٢٦ سوبر فيغر',

      // ===== ABOUT PAGE =====
      'about.eyebrow': 'من نحن',
      'about.title': 'الأشخاص وراء',

      // Vision
      'about.vision.label': 'رؤيتنا',
      'about.vision.title': 'بناء المؤسسة الإعلامية التي<br>يستحقها <span class="v-accent">الخليج</span>',
      'about.vision.body': 'سوبر فيغر تقف عند تقاطع الثقافة والتجارة والإبداع. نصنع قصصاً تحرّك الأسواق وتشكّل الروايات وتُضخّم أصوات من يرسمون مستقبل الخليج.',

      // Team
      'about.team.label': 'القيادة',
      'about.team.title': 'تعرّف على المؤسسين',

      'about.card1.name': 'عبدالعزيز القحطاني',
      'about.card1.role': 'شريك مؤسس ومدير مالي',
      'about.card1.bio': 'خلفية قانونية مع خبرة عميقة في الأطر التنظيمية السعودية. رائد أعمال راسخ في قطاع الأعمال السعودي، متخصص في إدارة العمليات وتخصيص رأس المال الاستراتيجي.',
      'about.card1.more': 'اقرأ المزيد',

      'about.card2.name': 'جاك ماك',
      'about.card2.role': 'شريك مؤسس ومدير إبداعي',
      'about.card2.bio': 'شريك مؤسس لـ Unimine Tech (منصة UGC على UE5). شهادتان في البيولوجيا الاصطناعية والتصميم الهندسي من UC Davis. يبني بنى عالمية مع شركاء رأس مال طويل المدى.',
      'about.card2.more': 'اقرأ المزيد',

      'about.card3.name': 'جيمي تشانغ',
      'about.card3.role': 'شريكة مؤسسة ورئيسة تنفيذية',
      'about.card3.bio': 'خريجة MIT، مديرة مشاركة أولى سابقة في McKinsey. شاركت في تأسيس Masdar Investment LLC مع العائلات الملكية العمانية. أسست IRX Fin (تمويل ملائكي ١٠ مليار يوان).',
      'about.card3.more': 'اقرأ المزيد',

      // Modals
      'modal.bg': 'الخلفية',
      'modal.role': 'الدور في سوبر فيغر',

      'modal1.bg1': 'عبدالعزيز قائد استراتيجي بخلفية متنوعة تشمل إدارة العمليات والأطر القانونية وريادة الأعمال المحلية. يتخصص في التعامل مع البيئة التنظيمية المعقدة في المملكة العربية السعودية، لضمان الامتثال المؤسسي والنمو الاستراتيجي.',
      'modal1.bg2': 'بصفته رائد أعمال راسخ في قطاع الأعمال السعودي، يمتلك رؤى عميقة في ديناميكيات السوق وتخصيص رأس المال والتميّز التشغيلي. أسلوبه القيادي تشكّل عبر سنوات من الأدوار التشغيلية المتطلبة — فلسفة الانضباط والدقة والإدارة الموجهة للنتائج.',
      'modal1.role1': 'بصفته المدير المالي، يشرف عبدالعزيز على البنية المالية التي تجعل المشاريع الإعلامية الطموحة ممكنة. يضمن الامتثال عبر الأطر التنظيمية السعودية مع هيكلة استراتيجية رأس المال وعمليات الإيرادات واتفاقيات الشراكة.',

      'modal2.bg1': 'شريك مؤسس لـ Unimine Tech — منصة UGC قائمة على UE5 ومحرر عوالم بدون كود. يبني جاك بنى عالمية النطاق مع شركاء رأس مال طويل المدى، عاملاً عند تقاطع التقنية الإبداعية وبناء المشاريع.',
      'modal2.bg2': 'يحمل شهادتين في البيولوجيا الاصطناعية والتصميم الهندسي من UC Davis، جامعاً بين الدقة التقنية والتفكير التصميمي. هذا الأساس متعدد التخصصات يشكّل منهجه في بناء الأنظمة — سواء منصات المنتجات أو العلامات الإعلامية.',
      'modal2.role1': 'بصفته المدير الإبداعي، يحدد جاك اللغة البصرية والنبرة التحريرية وتصميم التجربة عبر كل نقطة اتصال في سوبر فيغر. من نظام الهوية والبنية المعمارية للعلامة إلى إنتاج المحتوى والمنتج الرقمي.',

      'modal3.bg1': 'خريجة MIT ومديرة مشاركة أولى سابقة في McKinsey، تجلب جيمي خبرة استشارية استراتيجية نخبوية إلى سوبر فيغر. يمتد مسارها المهني عبر عمل استشاري عالي المخاطر في صناعات متعددة، مما صقل قدرتها على بناء نماذج أعمال قابلة للتوسع.',
      'modal3.bg2': 'شاركت جيمي في تأسيس Masdar Investment LLC بالشراكة مع العائلات الملكية العمانية. كما أسست IRX Fin، مشروع تقنية مالية حصل على تمويل ملائكي بقيمة ١٠ مليار يوان صيني — دليل على براعتها في جمع رأس المال وشبكتها العميقة.',
      'modal3.role1': 'بصفتها الرئيسة التنفيذية لسوبر فيغر، تقود جيمي الاستراتيجية التجارية للشركة وهيكلة الشراكات والتوسع في الأسواق. قدرتها النادرة على الربط بين الشرق والغرب تمنح سوبر فيغر ميزة حاسمة في بناء مؤسسة إعلامية عالمية متجذرة في المنطقة.',

      'about.cta.title': 'اعمل معنا',
    }
  },

  init() {
    const saved = localStorage.getItem('sf-lang');
    if (saved && this.translations[saved]) {
      this.current = saved;
    }
    this.apply();
    this.updateToggle();
  },

  toggle() {
    this.current = this.current === 'en' ? 'ar' : 'en';
    localStorage.setItem('sf-lang', this.current);
    this.apply();
    this.updateToggle();
  },

  apply() {
    const t = this.translations[this.current];
    const isRTL = this.current === 'ar';
    const html = document.documentElement;

    // Set direction and lang
    html.setAttribute('dir', isRTL ? 'rtl' : 'ltr');
    html.setAttribute('lang', this.current);

    // Toggle RTL class for CSS hooks
    document.body.classList.toggle('rtl', isRTL);

    // Translate text nodes
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (t[key] !== undefined) el.textContent = t[key];
    });

    // Translate innerHTML (for <br>, <span>, etc.)
    document.querySelectorAll('[data-i18n-html]').forEach(el => {
      const key = el.getAttribute('data-i18n-html');
      if (t[key] !== undefined) el.innerHTML = t[key];
    });
  },

  updateToggle() {
    document.querySelectorAll('[data-lang-toggle]').forEach(btn => {
      btn.textContent = this.current === 'en' ? 'عربي' : 'EN';
    });
  }
};

// Auto-init when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => SF_I18N.init());
} else {
  SF_I18N.init();
}
