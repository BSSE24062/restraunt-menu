/* ==========================================================================
   SUBHAN ALLAH RESTAURANT - CORE JAVASCRIPT
   Interactive Menu, Language Toggles, Dynamic Pricing & Hero Banner Slider
   ========================================================================== */

// 1. MENU DATABASE - Professional Content Writer Descriptions & Servings
const MENU_DATA = {
  // Category 1: STARTERS
  "starters": {
    nameEn: "Starters",
    nameUr: "سٹارٹر",
    image: "asset/chicken dhaka.jpg",
    items: [
      {
        id: "starter_dhaka",
        nameEn: "Chicken Dhaka",
        nameUr: "چکن ڈھاکہ",
        descEn: "Succulent, crispy golden-fried chicken strips coated in sesame seeds and seasoned with aromatic signature spices.",
        descUr: "تلوں کی کوٹنگ اور روایتی چٹپٹے مصالحوں میں تیار کردہ خستہ سنہری فرائیڈ چکن سٹرپس۔",
        price: 1280,
        image: "asset/chicken dhaka.jpg",
        servings: [
          { labelEn: "Regular (6 Pcs)", labelUr: "رِیگولر (6 عدد)", factor: 1.0 },
          { labelEn: "Large (12 Pcs)", labelUr: "لارج (12 عدد)", factor: 1.8 }
        ]
      },
      {
        id: "starter_finger",
        nameEn: "Chicken Finger",
        nameUr: "چکن فنگر",
        descEn: "Crisp, golden chicken fingers breaded in house herbs, served with a tangy honey-mustard dipping sauce.",
        descUr: "تازہ چکن بریسٹ سے تیار کردہ فنگر سٹرپس، جو ہرب بریڈنگ کے بعد سنہری فرائی کی جاتی ہیں۔",
        price: 1150,
        image: "asset/chicken dhaka.jpg",
        servings: [
          { labelEn: "Regular Serving", labelUr: "ریگولر سرونگ", factor: 1.0 },
          { labelEn: "Family Serving", labelUr: "فیملی سرونگ", factor: 1.8 }
        ]
      },
      {
        id: "starter_adabou",
        nameEn: "Chicken Adabou",
        nameUr: "چکن ادابو",
        descEn: "Traditional Filipino-style chicken wings glazed with a savory soy-garlic glaze and roasted sesame seeds.",
        descUr: "سویا گارلک ساس اور بھنے ہوئے تلوں میں لپٹے ہوئے شاندار پکے ہوئے چکن ونگز۔",
        price: 1225,
        image: "asset/chicken dhaka.jpg",
        servings: [
          { labelEn: "Regular Portion", labelUr: "ریگولر پورشن", factor: 1.0 },
          { labelEn: "Large Portion", labelUr: "لارج پورشن", factor: 1.8 }
        ]
      },
      {
        id: "starter_drum",
        nameEn: "Chicken Drum Stick",
        nameUr: "چکن ڈرم سٹک",
        descEn: "Tender minced chicken lollipops combined with fresh green herbs, breaded and fried to supreme crispiness.",
        descUr: "قیمہ شدہ چکن کے مزیدار ڈرم سٹکس جو ہربز اور کرسپی بریڈنگ کے ساتھ فرائی کیے جاتے ہیں۔",
        price: 1150,
        image: "asset/chicken-roast.jpg",
        servings: [
          { labelEn: "Standard (4 Pcs)", labelUr: "اسٹینڈرڈ (4 عدد)", factor: 1.0 },
          { labelEn: "Jumbo (8 Pcs)", labelUr: "جمبو (8 عدد)", factor: 1.8 }
        ]
      },
      {
        id: "starter_fried",
        nameEn: "Chicken Fried",
        nameUr: "چکن فرائیڈ",
        descEn: "Classic crispy southern-style deep fried chicken pieces, boasting a crunchy crust and juicy, seasoned meat.",
        descUr: "خاص کرسپی مصالحہ دار تہہ کے ساتھ تیار کردہ لاجواب کلاسک چکن فرائیڈ چکن۔",
        price: 1200,
        image: "asset/chicken-roast.jpg",
        servings: [
          { labelEn: "Half Portion", labelUr: "ہاف پورشن", factor: 1.0 },
          { labelEn: "Full Portion", labelUr: "فل پورشن", factor: 1.8 }
        ]
      },
      {
        id: "starter_irani",
        nameEn: "Chicken Irani",
        nameUr: "چکن ایرانی",
        descEn: "Delicate chicken medallions marinated in a rich saffron-yogurt blend and flame-grilled to perfection.",
        descUr: "زعفران اور دہی کے پیسٹ میں میرینیٹڈ چکن بوٹی، جو کوئلوں پر تیار کی جاتی ہے۔",
        price: 450,
        image: "asset/malai-boti.jpg",
        servings: [
          { labelEn: "Single Skewer (4 Pcs)", labelUr: "سنگل سیخ (4 عدد)", factor: 1.0 },
          { labelEn: "Double Skewer (8 Pcs)", labelUr: "ڈبل سیخ (8 عدد)", factor: 1.8 }
        ]
      },
      {
        id: "starter_finger_fish",
        nameEn: "Finger Fish",
        nameUr: "فنگر فش",
        descEn: "Succulent strips of premium freshwater fish coated in a light seasoned batter, fried crunchy, served with tartar sauce.",
        descUr: "بغیر کانٹے والی مچھلی کی باریک سٹرپس، جو مصالحہ دار بیٹر میں کوٹ کر سنہری فرائی کی جاتی ہیں۔",
        price: 2100,
        image: "asset/finger fish.jpg",
        servings: [
          { labelEn: "Regular (250g)", labelUr: "ریگولر (250 گرام)", factor: 1.0 },
          { labelEn: "Large (500g)", labelUr: "لارج (500 گرام)", factor: 1.8 }
        ]
      },
      {
        id: "starter_dhaka_fish",
        nameEn: "Dhaka Fish",
        nameUr: "ڈھاکہ فش",
        descEn: "Dhaka-style spiced fish fillets tossed with sesame seeds and deep-fried for an exquisite traditional crunch.",
        descUr: "ڈھاکہ کے روایتی چٹپٹے انداز میں تیار کردہ فش فلیٹس، تلوں کے ساتھ فرائی کی ہوئی۔",
        price: 2100,
        image: "asset/finger fish.jpg",
        servings: [
          { labelEn: "Regular Portion", labelUr: "ریگولر پورشن", factor: 1.0 },
          { labelEn: "Large Portion", labelUr: "لارج پورشن", factor: 1.8 }
        ]
      },
      {
        id: "starter_fried_fish",
        nameEn: "Fried Fish",
        nameUr: "فرائیڈ فش",
        descEn: "Traditional Rahu/Sole fish marinated in garlic, vinegar, and ground Lahori spices, deep-fried to a rich crust.",
        descUr: "لہسن، سرکہ اور لاہوری مصالحوں کی خاص میرینیشن میں فرائی کی گئی لذیذ مچھلی۔",
        price: 2100,
        image: "asset/finger fish.jpg",
        servings: [
          { labelEn: "Single Portion", labelUr: "سنگل پورشن", factor: 1.0 },
          { labelEn: "Double Portion", labelUr: "ڈبل پورشن", factor: 1.8 }
        ]
      }
    ]
  },
  // Category 2: SOUP
  "soup": {
    nameEn: "Soup",
    nameUr: "سوپ",
    image: "asset/soup2.jpg",
    items: [
      {
        id: "soup_special",
        nameEn: "Subhan Allah Special Soup",
        nameUr: "اسپیشل سوپ",
        descEn: "Our chef's pride. A rich, thick broth brimming with shredded chicken, shrimp, seasonal vegetables, and delicate egg drops.",
        descUr: "ہمارا خاص دستخطی سوپ جو چکن ریشہ، جھینگا، تازہ سبزیوں اور انڈے کی آمیزش سے تیار کیا جاتا ہے۔",
        price: 1250,
        image: "asset/soup2.jpg",
        servings: [
          { labelEn: "Single Bowl", labelUr: "سنگل پیالہ", factor: 1.0 },
          { labelEn: "Family Bowl (Serves 4-5)", labelUr: "فیملی بول (4-5 افراد)", factor: 2.2 }
        ]
      },
      {
        id: "soup_corn",
        nameEn: "Chicken Corn Soup",
        nameUr: "چکن کارن سوپ",
        descEn: "Comforting classic soup prepared with slow-simmered chicken stock, shredded chicken breasts, and sweet sweetcorn kernels.",
        descUr: "سست پکائے گئے چکن اسٹاک، ریشہ دار چکن اور میٹھے مکئی کے دانوں سے تیار کردہ سدابہار کلاسک سوپ۔",
        price: 1150,
        image: "asset/soup2.jpg",
        servings: [
          { labelEn: "Single Bowl", labelUr: "سنگل پیالہ", factor: 1.0 },
          { labelEn: "Family Bowl", labelUr: "فیملی بول", factor: 2.2 }
        ]
      },
      {
        id: "soup_hot_sour",
        nameEn: "Hot & Sour Soup",
        nameUr: "ہاٹ اینڈ ساور سوپ",
        descEn: "A spicy, tangy Szechuan style soup packed with chicken strips, black mushrooms, tofu, and vinegar kicks.",
        descUr: "چائنیز انداز میں تیار کردہ تیکھا اور کھٹا سوپ، چکن، مشرومز اور انڈے کی گارنش کے ساتھ۔",
        price: 1100,
        image: "asset/soup2.jpg",
        servings: [
          { labelEn: "Single Bowl", labelUr: "سنگل پیالہ", factor: 1.0 },
          { labelEn: "Family Bowl", labelUr: "فیملی بول", factor: 2.2 }
        ]
      },
      {
        id: "soup_thai",
        nameEn: "Thai Soup",
        nameUr: "تھائی سوپ",
        descEn: "A clear aromatic Thai soup infused with lemongrass, kaffir lime leaves, green chillies, tender chicken, and prawns.",
        descUr: "لیمن گراس، ادرک، ہری مرچ، چکن اور جھینگوں سے تیار کردہ خوشبودار اور تیکھا تھائی سوپ۔",
        price: 1000,
        image: "asset/soup2.jpg",
        servings: [
          { labelEn: "Single Bowl", labelUr: "سنگل پیالہ", factor: 1.0 },
          { labelEn: "Family Bowl", labelUr: "فیملی بول", factor: 2.2 }
        ]
      },
      {
        id: "soup_veg",
        nameEn: "Chicken Vegetable Soup",
        nameUr: "چکن ویجیٹیبل سوپ",
        descEn: "Light and healthy clear soup containing hand-shredded chicken and a colorful array of crisp garden vegetables.",
        descUr: "چکن اور تازہ سبزیوں کے ٹکڑوں سے تیار کردہ ہلکا اور صحت بخش صاف سوپ۔",
        price: 1000,
        image: "asset/soup2.jpg",
        servings: [
          { labelEn: "Single Bowl", labelUr: "سنگل پیالہ", factor: 1.0 },
          { labelEn: "Family Bowl", labelUr: "فیملی بول", factor: 2.2 }
        ]
      }
    ]
  },
  // Category 3: TAWA (Coming Soon)
  "tawa": {
    nameEn: "Tawa Items",
    nameUr: "توا اسپیشل",
    image: "asset/chanp.jpg",
    comingSoon: true,
    items: []
  },
  // Category 4: CHINESE RICE
  "chinese_rice": {
    nameEn: "Chinese Rice",
    nameUr: "چائنیز رائس",
    image: "asset/chinese rice.jpg",
    items: [
      {
        id: "ch_rice_special",
        nameEn: "Subhan Allah (Special Rice)",
        nameUr: "اسپیشل رائس",
        descEn: "Our chef's masterpiece. Wok-fried basmati rice tossed with shredded chicken, prawns, roasted almonds, and select herbs.",
        descUr: "ہمارے شیف کے خاص چاول، جن میں چکن، جھینگے، فرائیڈ بادام اور خفیہ خوشبودار مصالحے شامل ہیں۔",
        price: 850,
        image: "asset/chinese rice.jpg",
        servings: [
          { labelEn: "Single Platter", labelUr: "سنگل پلیٹر", factor: 1.0 },
          { labelEn: "Double Platter", labelUr: "ڈبل پلیٹر", factor: 1.8 },
          { labelEn: "Family Platter", labelUr: "فیملی پلیٹر", factor: 2.5 }
        ]
      },
      {
        id: "ch_rice_fried",
        nameEn: "Chicken Fried Rice",
        nameUr: "چکن فرائیڈ رائس",
        descEn: "Stir-fried basmati rice with diced chicken, eggs, green onions, and carrots, seasoned with authentic light soy sauce.",
        descUr: "فرائیڈ چکن پیسز، انڈے، اور چائنیز سبزیوں کے ساتھ ہائی فلیم پر بنے ہوئے مزیدار چاول۔",
        price: 720,
        image: "asset/chinese rice.jpg",
        servings: [
          { labelEn: "Single Platter", labelUr: "سنگل پلیٹر", factor: 1.0 },
          { labelEn: "Double Platter", labelUr: "ڈبل پلیٹر", factor: 1.8 }
        ]
      },
      {
        id: "ch_rice_masala",
        nameEn: "Chicken Masala Rice",
        nameUr: "چکن مصالحہ رائس",
        descEn: "Spicy Indo-Chinese style fried rice cooked with green chillies, chicken, and a robust blend of red Szechuan masala.",
        descUr: "چٹپٹے مصالحے دار ساس، چکن اور شملہ مرچ کے ساتھ تیار کردہ تیکھے چائنیز چاول۔",
        price: 750,
        image: "asset/chinese rice.jpg",
        servings: [
          { labelEn: "Single Platter", labelUr: "سنگل پلیٹر", factor: 1.0 },
          { labelEn: "Double Platter", labelUr: "ڈبل پلیٹر", factor: 1.8 }
        ]
      },
      {
        id: "ch_rice_almond",
        nameEn: "Chicken Almond Rice",
        nameUr: "چکن آلمنڈ رائس",
        descEn: "A subtle and nutty creation. Fragrant fried rice containing chicken pieces, green peas, finished with a generous topping of toasted sliced almonds.",
        descUr: "بادام کے ٹکڑوں، مٹر، اور ہلکے فرائیڈ چکن کے ساتھ تیار کردہ لذیذ خوشبودار چاول۔",
        price: 800,
        image: "asset/chinese rice.jpg",
        servings: [
          { labelEn: "Single Platter", labelUr: "سنگل پلیٹر", factor: 1.0 },
          { labelEn: "Double Platter", labelUr: "ڈبل پلیٹر", factor: 1.8 }
        ]
      },
      {
        id: "ch_rice_egg",
        nameEn: "Egg Fried Rice",
        nameUr: "ایگ فرائیڈ رائس",
        descEn: "Perfect fluffy rice stir-fried in a seasoned wok with eggs, spring onions, cabbage, and soy seasoning.",
        descUr: "انڈے کی گارنش اور ہری پیاز کے ساتھ فرائی کیے گئے سادہ اور لذیذ کلاسک چاول۔",
        price: 670,
        image: "asset/chinese rice.jpg",
        servings: [
          { labelEn: "Single Platter", labelUr: "سنگل پلیٹر", factor: 1.0 },
          { labelEn: "Double Platter", labelUr: "ڈبل پلیٹر", factor: 1.8 }
        ]
      },
      {
        id: "ch_rice_veg",
        nameEn: "Vegetable Rice",
        nameUr: "ویجیٹیبل رائس",
        descEn: "Healthy and vibrant fried rice loaded with freshly cut cabbage, carrots, bell peppers, and peas.",
        descUr: "شملہ مرچ، گاجر اور بند گوبھی جیسی تازہ سبزیوں کے ساتھ فرائی کیے گئے چاول۔",
        price: 670,
        image: "asset/chinese rice.jpg",
        servings: [
          { labelEn: "Single Platter", labelUr: "سنگل پلیٹر", factor: 1.0 },
          { labelEn: "Double Platter", labelUr: "ڈبل پلیٹر", factor: 1.8 }
        ]
      }
    ]
  },
  // Category 5: CHINESE CHOWMEIN
  "chinese_chowmein": {
    nameEn: "Chinese Chowmein",
    nameUr: "چائنیز چومین",
    image: "asset/chicken-chaomein.jpg",
    items: [
      {
        id: "ch_chowmein_chicken",
        nameEn: "Chicken Chowmain",
        nameUr: "چکن چومین",
        descEn: "Stir-fried noodles loaded with tender chicken breast pieces, shredded cabbage, carrots, bell peppers, and a rich savory soy-garlic sauce.",
        descUr: "چکن کیوبز، شملہ مرچ، گاجر اور چائنیز ساس کے ساتھ تیار کردہ لذیذ نوڈلز۔",
        price: 1000,
        image: "asset/chicken-chaomein.jpg",
        servings: [
          { labelEn: "Single Serving", labelUr: "سنگل سرونگ", factor: 1.0 },
          { labelEn: "Double Serving", labelUr: "ڈبل سرونگ", factor: 1.8 }
        ]
      },
      {
        id: "ch_chowmein_veg",
        nameEn: "Vegetable Chowmain",
        nameUr: "ویجیٹیبل چومین",
        descEn: "Healthy stir-fried egg noodles containing a colorful mix of garden vegetables, wok-tossed in a light savory sauce.",
        descUr: "تازہ سبزیوں کے ریشوں اور شاندار سویا ساس کے امتزاج سے بنی خالص سبزیوں والی چومین۔",
        price: 900,
        image: "asset/chicken-chaomein.jpg",
        servings: [
          { labelEn: "Single Serving", labelUr: "سنگل سرونگ", factor: 1.0 },
          { labelEn: "Double Serving", labelUr: "ڈبل سرونگ", factor: 1.8 }
        ]
      }
    ]
  },
  // Category 6: NOODLES (Uses chowmein array but distinct category in sequence)
  "noodles": {
    nameEn: "Noodles",
    nameUr: "نوڈلز",
    image: "asset/chicken-chaomein.jpg",
    items: [
      {
        id: "noodle_chicken",
        nameEn: "Chicken Chowmain",
        nameUr: "چکن چومین",
        descEn: "Delectable wok-tossed noodles cooked with julienned chicken, colorful vegetables, and aromatic seasoning.",
        descUr: "چکن کے ٹکڑوں اور سبزیوں کے ساتھ بنے ہوئے خوش ذائقہ روایتی نوڈلز۔",
        price: 1000,
        image: "asset/chicken-chaomein.jpg",
        servings: [
          { labelEn: "Single Serving", labelUr: "سنگل سرونگ", factor: 1.0 },
          { labelEn: "Double Serving", labelUr: "ڈبل سرونگ", factor: 1.8 }
        ]
      },
      {
        id: "noodle_veg",
        nameEn: "Vegetable Chowmain",
        nameUr: "ویجیٹیبل چومین",
        descEn: "A vegetarian delight. Fluffy stir-fried noodles seasoned with Chinese herbs, sesame oil, and crunchy vegetables.",
        descUr: "بند گوبھی، گاجر اور مٹر کے ساتھ دھیمی آنچ پر تیا کردہ لذید نوڈلز۔",
        price: 900,
        image: "asset/chicken-chaomein.jpg",
        servings: [
          { labelEn: "Single Serving", labelUr: "سنگل سرونگ", factor: 1.0 },
          { labelEn: "Double Serving", labelUr: "ڈبل سرونگ", factor: 1.8 }
        ]
      }
    ]
  },
  // Category 7: PAKISTANI DRY ITEMS
  "pakistani_dry": {
    nameEn: "Pakistani Dry Items",
    nameUr: "پاکستانی ڈرائی",
    image: "asset/chicken-roast.jpg",
    items: [
      {
        id: "dry_steam_roast",
        nameEn: "Chicken Steam Roast",
        nameUr: "چکن اسٹیم روسٹ",
        descEn: "Whole or half chicken tenderized in a rich marinade of ginger, lemon juice, and red hot spices, steamed and lightly seared.",
        descUr: "ادرک، لیموں کے رس اور گرم مصالحہ جات میں میرینیٹڈ چکن، جو بھاپ میں تیار کر کے روسٹ کیا جاتا ہے۔",
        price: 1800,
        image: "asset/chicken-roast.jpg",
        servings: [
          { labelEn: "Full Chicken", labelUr: "فل چکن", factor: 1.0 },
          { labelEn: "Half Chicken", labelUr: "ہاف چکن", factor: 0.55 }
        ]
      },
      {
        id: "dry_broast",
        nameEn: "Chicken Broast",
        nameUr: "چکن بروسٹ",
        descEn: "Crispy, pressure-fried chicken pieces infused with garlic-pepper seasoning, presenting a satisfying crunch.",
        descUr: "لہسن اور کالی مرچ کی میرینیشن کے ساتھ پریشر فرائیڈ خستہ کرسپی چکن بروسٹ۔",
        price: 1800,
        image: "asset/chicken-roast.jpg",
        servings: [
          { labelEn: "Full Chicken", labelUr: "فل چکن", factor: 1.0 },
          { labelEn: "Half Chicken", labelUr: "ہاف چکن", factor: 0.55 }
        ]
      },
      {
        id: "dry_daigi_roast",
        nameEn: "Chicken Daigi Roast",
        nameUr: "چکن دیگی روسٹ",
        descEn: "Traditional copper pot (deeg) roast. Chicken pieces slow-roasted in yogurt and local whole spices for a deeply rich, smoky flavor.",
        descUr: "دیگ کے روایتی انداز میں دہی اور مصالحوں کے ساتھ کوئلے کے دم پر پکا ہوا لذید چکن روسٹ۔",
        price: 1800,
        image: "asset/chicken-roast.jpg",
        servings: [
          { labelEn: "Full Roast", labelUr: "فل روسٹ", factor: 1.0 },
          { labelEn: "Half Roast", labelUr: "ہاف روسٹ", factor: 0.55 }
        ]
      },
      {
        id: "dry_leg_roast",
        nameEn: "Mutton Leg Roast",
        nameUr: "مٹن لیگ روسٹ",
        descEn: "Magnificent prime mutton leg (Raan) tenderized with raw papaya and baked in spices until the meat falls off the bone.",
        descUr: "مٹن کی پوری ران، جو کچے پپیتے اور مصالحہ جات میں میرینیٹ کر کے تندوری اسٹائل میں بیک کی جاتی ہے۔",
        price: 4300,
        image: "asset/Mutton Raan.jpg",
        servings: [
          { labelEn: "Full Raan (Approx. 1.5kg)", labelUr: "پوری ران (تقریباً 1.5 کلو)", factor: 1.0 }
        ]
      },
      {
        id: "dry_stuff_lamb",
        nameEn: "Mutton Stuff Lamb",
        nameUr: "مٹن سٹف لیمب (ایڈوانس آرڈر پر)",
        descEn: "Elite whole roasted lamb stuffed with fragrant rice, raisins, and nuts. Prepared exclusively on advance order.",
        descUr: "خوشبودار چاولوں، کشمش اور میوہ جات سے بھرا ہوا پورا بکرا، جو آرڈر پر تیار کیا جاتا ہے۔",
        price: 4300,
        image: "asset/Mutton Raan.jpg",
        servings: [
          { labelEn: "Per Head Portion (Standard)", labelUr: "فی کس حصہ (اسٹینڈرڈ)", factor: 1.0 }
        ]
      }
    ]
  },
  // Category 8: MUTTON GRAVIES
  "mutton_gravies": {
    nameEn: "Mutton Gravies",
    nameUr: "مٹن گریوی",
    image: "asset/mutton karahi.jpg",
    items: [
      {
        id: "mutton_special",
        nameEn: "Subhan Allah (special Mutton Karahi)",
        nameUr: "اسپیشل مٹن کڑاہی",
        descEn: "The jewel of our menu. Elite mutton pieces slow-cooked in rich butter, fresh local tomatoes, ginger, and green chillies in a iron wok.",
        descUr: "ہماری سب سے مشہور کڑاہی۔ مکھن، ادرک، ٹماٹر اور ہری مرچوں کی گاڑھی گریوی میں تیار مٹن۔",
        price: 4150,
        image: "asset/mutton karahi.jpg",
        servings: [
          { labelEn: "Full (1 kg)", labelUr: "فل (1 کلو)", factor: 1.0 },
          { labelEn: "Half (1/2 kg)", labelUr: "ہاف (1/2 کلو)", factor: 0.53 }
        ]
      },
      {
        id: "mutton_green",
        nameEn: "Mutton Green Karahi",
        nameUr: "مٹن گرین کڑاہی",
        descEn: "Spiced mutton cuts cooked in a vibrant green herbal paste of mint, coriander, yogurt, and green chillies.",
        descUr: "ہرے دھنیے، پودینے، دہی اور ہری مرچوں کی چٹنی میں پکا ہوا مکھنی مٹن کڑاہی۔",
        price: 4100,
        image: "asset/mutton-karahi.jpg",
        servings: [
          { labelEn: "Full (1 kg)", labelUr: "فل (1 کلو)", factor: 1.0 },
          { labelEn: "Half (1/2 kg)", labelUr: "ہاف (1/2 کلو)", factor: 0.53 }
        ]
      },
      {
        id: "mutton_zeera",
        nameEn: "Mutton Zeera Karahi",
        nameUr: "مٹن زیرہ کڑاہی",
        descEn: "Aromatic mutton gravy cooked primarily with dry-roasted cumin seeds, tomatoes, and minimal spices.",
        descUr: "بھنے ہوئے کلاسک سفید زیرے اور خوشبودار مصالحوں میں پکی ہوئی لذیذ مٹن کڑاہی۔",
        price: 4100,
        image: "asset/mutton karahi.jpg",
        servings: [
          { labelEn: "Full (1 kg)", labelUr: "فل (1 کلو)", factor: 1.0 },
          { labelEn: "Half (1/2 kg)", labelUr: "ہاف (1/2 کلو)", factor: 0.53 }
        ]
      },
      {
        id: "mutton_karahi_normal",
        nameEn: "Mutton Karahi",
        nameUr: "مٹن کڑاہی",
        descEn: "Classic Pakistani style mutton karahi cooked in garlic, ginger, fresh tomatoes, and crushed black pepper.",
        descUr: "ٹماٹر کی بھرپور گریوی، ادرک، لہسن اور کالی مرچ میں کوک کی گئی روایتی مٹن کڑاہی۔",
        price: 4100,
        image: "asset/mutton-karahi.jpg",
        servings: [
          { labelEn: "Full (1 kg)", labelUr: "فل (1 کلو)", factor: 1.0 },
          { labelEn: "Half (1/2 kg)", labelUr: "ہاف (1/2 کلو)", factor: 0.53 }
        ]
      },
      {
        id: "mutton_namkeen",
        nameEn: "Mutton Namkeen Karahi",
        nameUr: "مٹن نمکین کڑاہی",
        descEn: "Authentic Peshawari style. Tender mutton pieces cooked only in its own fat, salt, tomatoes, and green chillies.",
        descUr: "شنواری انداز کی سادہ اور ہلکی نمکین کڑاہی، جو گوشت کی اپنی چربی اور نمک میں بنتی ہے۔",
        price: 4100,
        image: "asset/white mutton.jpg",
        servings: [
          { labelEn: "Full (1 kg)", labelUr: "فل (1 کلو)", factor: 1.0 },
          { labelEn: "Half (1/2 kg)", labelUr: "ہاف (1/2 کلو)", factor: 0.53 }
        ]
      },
      {
        id: "mutton_handi",
        nameEn: "Mutton Handi (B.L)",
        nameUr: "مٹن ہانڈی (B.L)",
        descEn: "Boneless mutton chunks simmered in a cream and tomato gravy in a traditional clay handi.",
        descUr: "بغیر ہڈی کا مٹن، جو دہی، بالائی اور ٹماٹر کے ساس میں مٹی کی ہانڈی میں پکایا جاتا ہے۔",
        price: 4100,
        image: "asset/white mutton.jpg",
        servings: [
          { labelEn: "Full (1 kg)", labelUr: "فل (1 کلو)", factor: 1.0 },
          { labelEn: "Half (1/2 kg)", labelUr: "ہاف (1/2 کلو)", factor: 0.53 }
        ]
      },
      {
        id: "mutton_achari_handi",
        nameEn: "Mutton Achari Handi (B.L)",
        nameUr: "مٹن اچاری ہانڈی (BL)",
        descEn: "Boneless mutton cooked in pickling spices (Kalvanji, fennel seeds, mustard) and rich yogurt gravy.",
        descUr: "کلونجی، سونف، اور رائی دانے کے اچاری مصالحوں اور دہی کے پیسٹ میں تیار مٹن ہانڈی۔",
        price: 4100,
        image: "asset/white mutton.jpg",
        servings: [
          { labelEn: "Full (1 kg)", labelUr: "فل (1 کلو)", factor: 1.0 },
          { labelEn: "Half (1/2 kg)", labelUr: "ہاف (1/2 کلو)", factor: 0.53 }
        ]
      },
      {
        id: "mutton_badami",
        nameEn: "Muttion Badami Handi (B.L)",
        nameUr: "مٹن بادامی (BL)",
        descEn: "Mild and royal. Boneless mutton cooked in an almond-paste enriched creamy gravy, garnished with whole almonds.",
        descUr: "بادام کے پیسٹ اور بالائی میں پکی ہوئی ہلکی اور میٹھی شاہی مٹن ہانڈی۔",
        price: 4100,
        image: "asset/white mutton.jpg",
        servings: [
          { labelEn: "Full (1 kg)", labelUr: "فل (1 کلو)", factor: 1.0 },
          { labelEn: "Half (1/2 kg)", labelUr: "ہاف (1/2 کلو)", factor: 0.53 }
        ]
      },
      {
        id: "mutton_ginger",
        nameEn: "Mutton Ginjer",
        nameUr: "مٹن جنجر",
        descEn: "Stir-fried mutton slices cooked in a rich ginger-infused tomato base, garnished with fresh julienne ginger.",
        descUr: "ادرک کے تیکھے ذائقے اور ٹماٹر کے گاڑھے مصالحے میں تیار مٹن جنجر۔",
        price: 2150,
        image: "asset/mutton karahi.jpg",
        servings: [
          { labelEn: "Standard Portion", labelUr: "اسٹینڈرڈ پورشن", factor: 1.0 },
          { labelEn: "Large Portion", labelUr: "لارج پورشن", factor: 1.8 }
        ]
      },
      {
        id: "mutton_jalfrezi",
        nameEn: "Mutton Jalfrazi",
        nameUr: "مٹن جلفریزی",
        descEn: "Stir-fried boneless mutton cooked with capsicums, onions, and tomatoes in a tangy, thick sweet-spicy gravy.",
        descUr: "شملہ مرچ، پیاز اور ٹماٹر کے ٹکڑوں کے ساتھ سٹر فرائی مٹن جلفریزی۔",
        price: 2150,
        image: "asset/mutton karahi.jpg",
        servings: [
          { labelEn: "Standard Portion", labelUr: "اسٹینڈرڈ پورشن", factor: 1.0 },
          { labelEn: "Large Portion", labelUr: "لارج پورشن", factor: 1.8 }
        ]
      },
      {
        id: "mutton_kharra_masala",
        nameEn: "Mutton Kharra Masala",
        nameUr: "مٹن کھڑا مصالحہ",
        descEn: "A traditional dish cooked with whole whole spices (cinnamon, cardamom, cloves, black pepper) and sliced onions.",
        descUr: "ثابت گرم مصالحوں اور پیاز کی باریک سلائسز کے ساتھ تیا کردہ مٹن کھڑا مصالحہ۔",
        price: 2150,
        image: "asset/mutton karahi.jpg",
        servings: [
          { labelEn: "Standard Portion", labelUr: "اسٹینڈرڈ پورشن", factor: 1.0 },
          { labelEn: "Large Portion", labelUr: "لارج پورشن", factor: 1.8 }
        ]
      },
      {
        id: "mutton_qeema",
        nameEn: "Mutton Qeema",
        nameUr: "مٹن قیمہ",
        descEn: "Fine minced mutton cooked with fresh peas, onions, ginger, and aromatic ground spices until dry and fragrant.",
        descUr: "مٹن کا باریک قیمہ، جو ہرے مٹر، پیاز اور مکھنی مصالحوں کے ساتھ بھونا جاتا ہے۔",
        price: 2150,
        image: "asset/white mutton.jpg",
        servings: [
          { labelEn: "Standard Portion", labelUr: "اسٹینڈرڈ پورشن", factor: 1.0 },
          { labelEn: "Large Portion", labelUr: "لارج پورشن", factor: 1.8 }
        ]
      }
    ]
  },
  // Category 9: CHINESE GRAVY WITH RICE
  "chinese_with_rice": {
    nameEn: "Chinese Gravy With Rice",
    nameUr: "چائنیز گریوی چاول کے ساتھ",
    image: "asset/Chicken Manchurian.jpg",
    items: [
      {
        id: "ch_rice_shashlik",
        nameEn: "Chines Shashlik (with rice)",
        nameUr: "چکن شاشلک",
        descEn: "Skewered chicken cubes, capsicum, and onions cooked in a sweet red sweet-sour sauce, served with egg fried rice.",
        descUr: "شملہ مرچ اور پیاز کی کیوبز کے ساتھ کھٹے میٹھے لال ساس میں لپٹا چکن، انڈے والے چاولوں کے ساتھ۔",
        price: 1000,
        image: "asset/chilli chicken.jpg",
        servings: [
          { labelEn: "Single Plate with Rice", labelUr: "سنگل پلیٹ چاول کے ساتھ", factor: 1.0 },
          { labelEn: "Double Plate with Rice", labelUr: "ڈبل پلیٹ چاول کے ساتھ", factor: 1.8 }
        ]
      },
      {
        id: "ch_rice_manchurian",
        nameEn: "Chicken Manchorian (with rice)",
        nameUr: "چکن منچورین",
        descEn: "The ultimate classic. Fried chicken chunks tossed in garlic, ginger, and red Manchurian gravy, served with egg fried rice.",
        descUr: "لہسن اور ٹماٹر کی چائنیز گریوی میں فرائیڈ چکن، انڈے کے فرائیڈ رائس کے ساتھ کلاسک کمبو۔",
        price: 1000,
        image: "asset/Chicken Manchurian.jpg",
        servings: [
          { labelEn: "Single Plate with Rice", labelUr: "سنگل پلیٹ چاول کے ساتھ", factor: 1.0 },
          { labelEn: "Double Plate with Rice", labelUr: "ڈبل پلیٹ چاول کے ساتھ", factor: 1.8 }
        ]
      }
    ]
  },
  // Category 10: PAKISTANI RICE
  "pakistani_rice": {
    nameEn: "Pakistani Rice",
    nameUr: "پاکستانی رائس",
    image: "asset/Mutton biriyani.jpg",
    items: [
      {
        id: "pak_rice_pulao",
        nameEn: "Chicken Pulao",
        nameUr: "چکن پلاؤ",
        descEn: "Delicately spiced basmati rice cooked in chicken yakhni broth, served with raita and salad.",
        descUr: "چکن کی یخنی اور ہول گرم مصالحوں میں پکائے گئے انتہائی خوشبودار روایتی چاول۔",
        price: 750,
        image: "asset/Mutton biriyani.jpg",
        servings: [
          { labelEn: "Single Plate", labelUr: "سنگل پلیٹ", factor: 1.0 },
          { labelEn: "Double Plate", labelUr: "ڈبل پلیٹ", factor: 1.8 }
        ]
      },
      {
        id: "pak_rice_biryani",
        nameEn: "Chicken Biryani",
        nameUr: "چکن بریانی",
        descEn: "Karachi style spicy layered rice with succulent chicken cooked in plum and saffron-infused masala gravy.",
        descUr: "آلو بخارے اور زعفران کے مصالحے دار ساس میں پکے چکن کے ساتھ تہوں والی چٹپٹی بریانی۔",
        price: 750,
        image: "asset/Spicy dum biryani.jpg",
        servings: [
          { labelEn: "Single Plate", labelUr: "سنگل پلیٹ", factor: 1.0 },
          { labelEn: "Double Plate", labelUr: "ڈبل پلیٹ", factor: 1.8 }
        ]
      },
      {
        id: "pak_rice_mutton_biryani",
        nameEn: "Mutton Biryani",
        nameUr: "مٹن بریانی",
        descEn: "Luxury layered basmati rice with tender spiced mutton pieces, steam-cooked (dum) to lock in rich flavors.",
        descUr: "بہترین بھیگے چاول اور دھیمی آنچ پر دم کیے گئے مسالہ دار مٹن کے تہوں والے لذیذ چاول۔",
        price: 1150,
        image: "asset/Mutton biriyani.jpg",
        servings: [
          { labelEn: "Single Plate", labelUr: "سنگل پلیٹ", factor: 1.0 },
          { labelEn: "Double Plate", labelUr: "ڈبل پلیٹ", factor: 1.8 }
        ]
      }
    ]
  },
  // Category 11: CHICKEN GRAVIES (Chi Gravies - Has Pakistani & Chinese Subsections)
  "chicken_gravies": {
    nameEn: "Chicken & Chinese Gravies",
    nameUr: "چکن گریوی",
    image: "asset/chicken karahi.jpg",
    subCategories: ["Pakistani Chicken Gravies", "Chinese Chicken Gravies (No Rice)"],
    items: [
      // Pakistani Subcategory
      {
        id: "chi_pak_special",
        subIndex: 0,
        nameEn: "Subhan Allah (Special Chicken Karahi)",
        nameUr: "اسپیشل چکن کڑاہی",
        descEn: "Our legendary recipe. Chicken cooked in pure butter, fresh vine tomatoes, ginger, and green chillies, prepared in an iron wok.",
        descUr: "ہماری خاص کڑاہی جو مکھن، تازہ ٹماٹروں اور ہری مرچ کی چٹنی میں تیز آنچ پر لوہے کی کڑاہی میں بنتی ہے۔",
        price: 1800,
        image: "asset/chicken karahi.jpg",
        servings: [
          { labelEn: "Full (1 kg)", labelUr: "فل (1 کلو)", factor: 1.0 },
          { labelEn: "Half (1/2 kg)", labelUr: "ہاف (1/2 کلو)", factor: 0.55 }
        ]
      },
      {
        id: "chi_pak_green",
        subIndex: 0,
        nameEn: "Chicken Green Karahi",
        nameUr: "چکن گرین کڑاہی",
        descEn: "Rich chicken cuts cooked in a green paste of fresh coriander, mint, yogurt, and green chillies.",
        descUr: "تازہ ہرے دھنیے، پودینے اور ہری مرچوں کی خاص گرین چٹنی اور دہی میں بنی چکن کڑاہی۔",
        price: 1740,
        image: "asset/chicken karahi.jpg",
        servings: [
          { labelEn: "Full (1 kg)", labelUr: "فل (1 کلو)", factor: 1.0 },
          { labelEn: "Half (1/2 kg)", labelUr: "ہاف (1/2 کلو)", factor: 0.55 }
        ]
      },
      {
        id: "chi_pak_achari",
        subIndex: 0,
        nameEn: "Chicken Achari Karahi",
        nameUr: "چکن اچاری کڑاہی",
        descEn: "Zesty chicken karahi flavored with traditional mix pickling spices (kalvanji, mustard seeds, fenugreek).",
        descUr: "رائے دانہ، کلونجی اور سونف کے تیکھے اچاری مصالحوں اور املی کے ٹچ کے ساتھ تیار کڑاہی۔",
        price: 1740,
        image: "asset/chicken karahi.jpg",
        servings: [
          { labelEn: "Full (1 kg)", labelUr: "فل (1 کلو)", factor: 1.0 },
          { labelEn: "Half (1/2 kg)", labelUr: "ہاف (1/2 کلو)", factor: 0.55 }
        ]
      },
      {
        id: "chi_pak_zeera",
        subIndex: 0,
        nameEn: "Chicken Zeera Karahi",
        nameUr: "چکن زیرہ کڑاہی",
        descEn: "Fragrant chicken curry cooked with dry roasted cumin, fresh ginger, and green chillies.",
        descUr: "بھنے ہوئے کڑاکے دار سفید زیرے اور خوشبو دار مصالحوں میں پکی ہلکی چکن کڑاہی۔",
        price: 1740,
        image: "asset/chicken karahi.jpg",
        servings: [
          { labelEn: "Full (1 kg)", labelUr: "فل (1 کلو)", factor: 1.0 },
          { labelEn: "Half (1/2 kg)", labelUr: "ہاف (1/2 کلو)", factor: 0.55 }
        ]
      },
      {
        id: "chi_pak_handi",
        subIndex: 0,
        nameEn: "Chicken Handi (B.L)",
        nameUr: "چکن ہانڈی (B.L)",
        descEn: "Boneless chicken cubes slow-cooked in a creamy butter and tomato-yogurt sauce inside a clay handi.",
        descUr: "بغیر ہڈی کا چکن، جو دہی، بالائی اور مکھن کے ساس میں مٹی کی ہانڈی میں پکایا جاتا ہے۔",
        price: 1740,
        image: "asset/White Handi.jpg",
        servings: [
          { labelEn: "Full (1 kg)", labelUr: "فل (1 کلو)", factor: 1.0 },
          { labelEn: "Half (1/2 kg)", labelUr: "ہاف (1/2 کلو)", factor: 0.55 }
        ]
      },
      {
        id: "chi_pak_achari_handi",
        subIndex: 0,
        nameEn: "Chiciken Achari Handi (B.L)",
        nameUr: "چکن اچاری ہانڈی (B.L)",
        descEn: "Pickle-flavored boneless chicken pieces simmered in a tangy yogurt gravy in a clay pot.",
        descUr: "اچاری مصالحوں اور تیکھی دہی والی گریوی میں پکی ہوئی بون لیس چکن ہانڈی۔",
        price: 1740,
        image: "asset/White Handi.jpg",
        servings: [
          { labelEn: "Full (1 kg)", labelUr: "فل (1 کلو)", factor: 1.0 },
          { labelEn: "Half (1/2 kg)", labelUr: "ہاف (1/2 کلو)", factor: 0.55 }
        ]
      },
      {
        id: "chi_pak_hari_mirch",
        subIndex: 0,
        nameEn: "Chicken Hari Mirch Handi",
        nameUr: "چکن ہری مرچ ہانڈی",
        descEn: "Fiery boneless chicken handi seasoned heavily with hand-crushed green chillies and black pepper.",
        descUr: "کٹی ہوئی ہری مرچوں، ادرک اور کالی مرچ کے تیکھے پن سے بھرپور چکن ہانڈی۔",
        price: 1740,
        image: "asset/White Handi.jpg",
        servings: [
          { labelEn: "Full (1 kg)", labelUr: "فل (1 کلو)", factor: 1.0 },
          { labelEn: "Half (1/2 kg)", labelUr: "ہاف (1/2 کلو)", factor: 0.55 }
        ]
      },
      {
        id: "chi_pak_badami",
        subIndex: 0,
        nameEn: "Chicken Badami Handi (B.L)",
        nameUr: "چکن بادامی ہانڈی (B.L)",
        descEn: "Luxurious boneless chicken cooked in a rich, creamy sauce made of ground almonds and fresh cream.",
        descUr: "بادام کے پیسٹ، بالائی اور شاہی مصالحوں میں بنے بون لیس چکن کی خاص ہانڈی۔",
        price: 1740,
        image: "asset/White Handi.jpg",
        servings: [
          { labelEn: "Full (1 kg)", labelUr: "فل (1 کلو)", factor: 1.0 },
          { labelEn: "Half (1/2 kg)", labelUr: "ہاف (1/2 کلو)", factor: 0.55 }
        ]
      },
      {
        id: "chi_pak_rajshani",
        subIndex: 0,
        nameEn: "Chicken Rajshtani Handi (B.L)",
        nameUr: "چکن راجستھانی ہانڈی (B.L)",
        descEn: "Traditional Rajasthani style boneless chicken cooked with green chillies, yogurt, and crushed coriander seeds.",
        descUr: "راجستھانی ذائقے میں پکی ہوئی ہانڈی، دھنیے اور لال مرچ کے خاص تڑکے کے ساتھ۔",
        price: 1740,
        image: "asset/White Handi.jpg",
        servings: [
          { labelEn: "Full (1 kg)", labelUr: "فل (1 کلو)", factor: 1.0 },
          { labelEn: "Half (1/2 kg)", labelUr: "ہاف (1/2 کلو)", factor: 0.55 }
        ]
      },
      {
        id: "chi_pak_mughlai",
        subIndex: 0,
        nameEn: "Chicken Mughlai Handi",
        nameUr: "چکن مغلائی ہانڈی",
        descEn: "Creamy imperial gravy containing boneless chicken, enriched with egg yolks, butter, and mild spices.",
        descUr: "مغلئی انداز کی شاہی چکن ہانڈی، جس میں بالائی، مکھن اور انڈے کا امیزہ شامل ہے۔",
        price: 1740,
        image: "asset/White Handi.jpg",
        servings: [
          { labelEn: "Full (1 kg)", labelUr: "فل (1 کلو)", factor: 1.0 },
          { labelEn: "Half (1/2 kg)", labelUr: "ہاف (1/2 کلو)", factor: 0.55 }
        ]
      },
      {
        id: "chi_pak_haiderabadi",
        subIndex: 0,
        nameEn: "Chicken Haiderabadi Handi",
        nameUr: "چکن حیدرآبادی ہانڈی",
        descEn: "Flavorful Hyderabadi recipe containing chicken simmered in coconut, sesame, and peanut-infused yogurt gravy.",
        descUr: "حیدرآبادی مصالحوں، کڑھی پتے اور املی کے تیکھے ذائقے والی بون لیس چکن ہانڈی۔",
        price: 1740,
        image: "asset/White Handi.jpg",
        servings: [
          { labelEn: "Full (1 kg)", labelUr: "فل (1 کلو)", factor: 1.0 },
          { labelEn: "Half (1/2 kg)", labelUr: "ہاف (1/2 کلو)", factor: 0.55 }
        ]
      },
      {
        id: "chi_pak_patyala",
        subIndex: 0,
        nameEn: "Chicken Patyala Handi",
        nameUr: "چکن پٹیالہ ہانڈی",
        descEn: "Rich Patiala-style chicken cooked with capsicums, onions, tomatoes, and finished with fresh heavy cream.",
        descUr: "پٹیالہ کے روایتی انداز کی مسالہ دار ہانڈی، شملہ مرچ اور کریم کی گارنش کے ساتھ۔",
        price: 1740,
        image: "asset/White Handi.jpg",
        servings: [
          { labelEn: "Full (1 kg)", labelUr: "فل (1 کلو)", factor: 1.0 },
          { labelEn: "Half (1/2 kg)", labelUr: "ہاف (1/2 کلو)", factor: 0.55 }
        ]
      },
      {
        id: "chi_pak_madrasi",
        subIndex: 0,
        nameEn: "Chicken Madrasi Handi",
        nameUr: "چکن مدراسی ہانڈی",
        descEn: "Spicy South-Indian style chicken cooked with mustard seeds, curry leaves, and dried red chillies.",
        descUr: "رائے دانہ، کڑھی پتے اور گول لال مرچوں کے ساتھ مدراسی تیکھے ذائقے کی ہانڈی۔",
        price: 1740,
        image: "asset/White Handi.jpg",
        servings: [
          { labelEn: "Full (1 kg)", labelUr: "فل (1 کلو)", factor: 1.0 },
          { labelEn: "Half (1/2 kg)", labelUr: "ہاف (1/2 کلو)", factor: 0.55 }
        ]
      },
      {
        id: "chi_pak_makhni",
        subIndex: 0,
        nameEn: "Chicken Makhni Handi",
        nameUr: "چکن مکھنی ہانڈی",
        descEn: "Velvety butter gravy with tender boneless chicken cuts, cream, and dry fenugreek leaves.",
        descUr: "مکھن، بالائی اور قصوری میتھی کی مہکتی ہوئی ملائم مکھنی چکن ہانڈی۔",
        price: 1740,
        image: "asset/White Handi.jpg",
        servings: [
          { labelEn: "Full (1 kg)", labelUr: "فل (1 کلو)", factor: 1.0 },
          { labelEn: "Half (1/2 kg)", labelUr: "ہاف (1/2 کلو)", factor: 0.55 }
        ]
      },
      {
        id: "chi_pak_ginger",
        subIndex: 0,
        nameEn: "Chicken Ginger",
        nameUr: "چکن جنجر",
        descEn: "Julienned chicken stir-fried with green chillies, coriander, and dominant fresh ginger strips.",
        descUr: "ادرک کے باریک ٹکڑوں اور ہری مرچ کے ساتھ سٹر فرائی کیا ہوا جنجر چکن۔",
        price: 1150,
        image: "asset/chicken karahi.jpg",
        servings: [
          { labelEn: "Standard Portion", labelUr: "اسٹینڈرڈ پورشن", factor: 1.0 },
          { labelEn: "Large Portion", labelUr: "لارج پورشن", factor: 1.8 }
        ]
      },
      {
        id: "chi_pak_jalfrezi",
        subIndex: 0,
        nameEn: "Chicken Jalfrezi",
        nameUr: "چکن جلفریزی",
        descEn: "Stir-fried boneless chicken strips cooked with capsicums, tomatoes, onions, in a sweet-spicy thick sauce.",
        descUr: "شملہ مرچ، پیاز اور ٹماٹر کی سلائسز کے ساتھ سٹر فرائی بون لیس چکن۔",
        price: 1150,
        image: "asset/chicken karahi.jpg",
        servings: [
          { labelEn: "Standard Portion", labelUr: "اسٹینڈرڈ پورشن", factor: 1.0 },
          { labelEn: "Large Portion", labelUr: "لارج پورشن", factor: 1.8 }
        ]
      },
      {
        id: "chi_pak_masala",
        subIndex: 0,
        nameEn: "Chicken Masala",
        nameUr: "چکن مصالحہ",
        descEn: "Spicy and thick chicken curry cooked with dry roasted spices, tomatoes, onion paste, and yogurt.",
        descUr: "پیاز، دہی اور لال مرچ کے گاڑھے مصالحے دار ساس میں تیار کردہ چکن مصالحہ۔",
        price: 1100,
        image: "asset/chicken karahi.jpg",
        servings: [
          { labelEn: "Standard Portion", labelUr: "اسٹینڈرڈ پورشن", factor: 1.0 },
          { labelEn: "Large Portion", labelUr: "لارج پورشن", factor: 1.8 }
        ]
      },
      {
        id: "chi_pak_kabab_masala",
        subIndex: 0,
        nameEn: "Chicken Kabab Masala",
        nameUr: "چکن کباب مصالحہ",
        descEn: "Bite-sized grilled chicken kabab pieces simmered in a spiced tomato, butter, and cream masala.",
        descUr: "کوئلوں پر بنے چکن کبابوں کی گریوی، جو مکھن اور دہی کے مصالحے میں پکائی جاتی ہے۔",
        price: 1100,
        image: "asset/kabab bbq.jpg",
        servings: [
          { labelEn: "Standard Portion", labelUr: "اسٹینڈرڈ پورشن", factor: 1.0 },
          { labelEn: "Large Portion", labelUr: "لارج پورشن", factor: 1.8 }
        ]
      },
      {
        id: "chi_pak_shahi_dall",
        subIndex: 0,
        nameEn: "Shahi Dall",
        nameUr: "شاہی دال",
        descEn: "Mixed lentils slow-cooked with pure ghee, garlic, cumin, and dried red chilli tempering (tadka).",
        descUr: "دیسی گھی، لہسن اور سفید زیرے کے روایتی تڑکے کے ساتھ تیار کردہ لذیذ شاہی دال۔",
        price: 650,
        image: "asset/salad.jpg",
        servings: [
          { labelEn: "Standard Plate", labelUr: "اسٹینڈرڈ پلیٹ", factor: 1.0 },
          { labelEn: "Large Plate", labelUr: "لارج پلیٹ", factor: 1.8 }
        ]
      },
      {
        id: "chi_pak_mix_veg",
        subIndex: 0,
        nameEn: "Mix Vegetable",
        nameUr: "مکس ویجیٹیبل",
        descEn: "Fresh seasonal vegetables cooked in a light, spiced tomato-onion gravy, finished with coriander.",
        descUr: "مٹر، گاجر، آلو اور گوبھی کو ملا کر تیار کی گئی خوش ذائقہ مکس سبزیاں۔",
        price: 600,
        image: "asset/salad.jpg",
        servings: [
          { labelEn: "Standard Plate", labelUr: "اسٹینڈرڈ پلیٹ", factor: 1.0 },
          { labelEn: "Large Plate", labelUr: "لارج پلیٹ", factor: 1.8 }
        ]
      },
      {
        id: "chi_pak_dal_mash",
        subIndex: 0,
        nameEn: "Dal Mash",
        nameUr: "دال ماش",
        descEn: "Mash lentils cooked dry (khari dal) with garlic, ginger, green chillies, and butter tempering.",
        descUr: "مکھن، ادرک اور ہری مرچوں کی خوشبو کے ساتھ فرائی کی گئی کھڑی دال ماش۔",
        price: 500,
        image: "asset/salad.jpg",
        servings: [
          { labelEn: "Standard Plate", labelUr: "اسٹینڈرڈ پلیٹ", factor: 1.0 },
          { labelEn: "Large Plate", labelUr: "لارج پلیٹ", factor: 1.8 }
        ]
      },
      {
        id: "chi_pak_qeema",
        subIndex: 0,
        nameEn: "Chicken Qeema",
        nameUr: "چکن قیمہ",
        descEn: "Minced chicken breast cooked with peas, ginger, garlic, and fresh green spices until aromatic and dry.",
        descUr: "چکن کا باریک کٹا قیمہ، جو مٹر، پیاز اور گرم مصالحے کے ساتھ بھونا گیا ہے۔",
        price: 1100,
        image: "asset/White Handi.jpg",
        servings: [
          { labelEn: "Standard Portion", labelUr: "اسٹینڈرڈ پورشن", factor: 1.0 },
          { labelEn: "Large Portion", labelUr: "لارج پورشن", factor: 1.8 }
        ]
      },

      // Chinese Subcategory (Gravy only - 950 each)
      {
        id: "chi_ch_special",
        subIndex: 1,
        nameEn: "Subhan Allah Special Chicken",
        nameUr: "اسپیشل چکن",
        descEn: "Signature Chinese gravy with diced chicken, mushrooms, and bamboo shoots in a rich, dark soy-garlic glaze.",
        descUr: "خاص چائنیز گریوی، بون لیس چکن اور مشرومز کے ساتھ ڈارک سویا گارلک ساس میں تیار کردہ۔",
        price: 950,
        image: "asset/chilli chicken.jpg",
        servings: [
          { labelEn: "Single Serving (Gravy Only)", labelUr: "سنگل سرونگ (صرف گریوی)", factor: 1.0 },
          { labelEn: "Double Serving (Gravy Only)", labelUr: "ڈبل سرونگ (صرف گریوی)", factor: 1.8 }
        ]
      },
      {
        id: "chi_ch_manchurian",
        subIndex: 1,
        nameEn: "Chicken Manchorien",
        nameUr: "چکن منچورین",
        descEn: "Deep-fried chicken chunks coated in a sweet, sour, and savory red tomato-chilli Manchurian gravy.",
        descUr: "کھٹے میٹھے لال منچورین ساس میں تیار کردہ بون لیس فرائیڈ چکن گریوی۔",
        price: 950,
        image: "asset/Chicken Manchurian.jpg",
        servings: [
          { labelEn: "Single Serving (Gravy Only)", labelUr: "سنگل سرونگ (صرف گریوی)", factor: 1.0 },
          { labelEn: "Double Serving (Gravy Only)", labelUr: "ڈبل سرونگ (صرف گریوی)", factor: 1.8 }
        ]
      },
      {
        id: "chi_ch_garlic",
        subIndex: 1,
        nameEn: "Chicken Garlic Sauce",
        nameUr: "چکن گارلک ساس",
        descEn: "Diced chicken wok-tossed in a robust fresh garlic, white pepper, and light soy sauce gravy.",
        descUr: "لہسن کے تیز ذائقے اور سفید کالی مرچ کے ساتھ پکا ہوا چکن گارلک ساس گریوی۔",
        price: 950,
        image: "asset/chilli chicken.jpg",
        servings: [
          { labelEn: "Single Serving (Gravy Only)", labelUr: "سنگل سرونگ (صرف گریوی)", factor: 1.0 },
          { labelEn: "Double Serving (Gravy Only)", labelUr: "ڈبل سرونگ (صرف گریوی)", factor: 1.8 }
        ]
      },
      {
        id: "chi_ch_mangolin",
        subIndex: 1,
        nameEn: "Chicken Mangolin",
        nameUr: "چکن منگولین",
        descEn: "Mongolian-style chicken strips cooked with onions, scallions, carrots, in a sweet and salty brown sauce.",
        descUr: "منگولین انداز کی بون لیس چکن سٹرپس، پیاز اور گاجر کے ساتھ میٹھے براؤن ساس میں۔",
        price: 950,
        image: "asset/chilli chicken.jpg",
        servings: [
          { labelEn: "Single Serving (Gravy Only)", labelUr: "سنگل سرونگ (صرف گریوی)", factor: 1.0 },
          { labelEn: "Double Serving (Gravy Only)", labelUr: "ڈبل سرونگ (صرف گریوی)", factor: 1.8 }
        ]
      },
      {
        id: "chi_ch_almond",
        subIndex: 1,
        nameEn: "Chicken Almond",
        nameUr: "چکن آلمنڈ",
        descEn: "Stir-fried chicken breast cubes combined with green peas, onions, and finished with a load of roasted almond nuts.",
        descUr: "نرم چکن کیوبز، سبزیوں اور فرائیڈ شاہی بادام کے امتزاج والا چائنیز گریوی۔",
        price: 950,
        image: "asset/chilli chicken.jpg",
        servings: [
          { labelEn: "Single Serving (Gravy Only)", labelUr: "سنگل سرونگ (صرف گریوی)", factor: 1.0 },
          { labelEn: "Double Serving (Gravy Only)", labelUr: "ڈبل سرونگ (صرف گریوی)", factor: 1.8 }
        ]
      },
      {
        id: "chi_ch_sweet_sour",
        subIndex: 1,
        nameEn: "Chicken Sweet & Sour",
        nameUr: "چکن سویٹ اینڈ ساور",
        descEn: "Crispy chicken bits cooked with pineapple chunks, bell peppers, and onions in a classic pineapple vinegar glaze.",
        descUr: "انناس کے ٹکڑوں اور شملہ مرچ کے ساتھ بنے ہوئے کھٹے میٹھے چکن سویٹ اینڈ ساور۔",
        price: 950,
        image: "asset/Chicken-Manchurian.jpg",
        servings: [
          { labelEn: "Single Serving (Gravy Only)", labelUr: "سنگل سرونگ (صرف گریوی)", factor: 1.0 },
          { labelEn: "Double Serving (Gravy Only)", labelUr: "ڈبل سرونگ (صرف گریوی)", factor: 1.8 }
        ]
      },
      {
        id: "chi_ch_chilli_onion",
        subIndex: 1,
        nameEn: "Chicken Chilli with Onion",
        nameUr: "چکن چلی ود اونین",
        descEn: "Spicy wok-fried chicken strips tossed with green chillies, onions, and dark oyster soy sauce.",
        descUr: "ہری مرچوں اور پیاز کے ساتھ ڈارک سویا ساس میں تیار کردہ چکن چلی گریوی۔",
        price: 950,
        image: "asset/chilli chicken.jpg",
        servings: [
          { labelEn: "Single Serving (Gravy Only)", labelUr: "سنگل سرونگ (صرف گریوی)", factor: 1.0 },
          { labelEn: "Double Serving (Gravy Only)", labelUr: "ڈبل سرونگ (صرف گریوی)", factor: 1.8 }
        ]
      },
      {
        id: "chi_ch_veg",
        subIndex: 1,
        nameEn: "Chicken Vegetable",
        nameUr: "چکن ویجیٹیبل",
        descEn: "Stir-fried chicken slices cooked with broccoli, carrots, cabbage, and peas in a delicate garlic stock sauce.",
        descUr: "تازہ سبزیوں اور بون لیس چکن کو ملا کر تیار کیا گیا ہلکا چائنیز ساس۔",
        price: 950,
        image: "asset/chinese rice.jpg",
        servings: [
          { labelEn: "Single Serving (Gravy Only)", labelUr: "سنگل سرونگ (صرف گریوی)", factor: 1.0 },
          { labelEn: "Double Serving (Gravy Only)", labelUr: "ڈبل سرونگ (صرف گریوی)", factor: 1.8 }
        ]
      },
      {
        id: "chi_ch_pineapple",
        subIndex: 1,
        nameEn: "Chicken Pine Apple",
        nameUr: "چکن پائن ایپل",
        descEn: "Stir-fried chicken pieces cooked in a mild sweet gravy infused with sweet pineapple syrup and capsicums.",
        descUr: "شملہ مرچ اور رسیلے انناس کے ٹکڑوں کے ساتھ تیار مٹھاس بھرا چکن پائن ایپل۔",
        price: 950,
        image: "asset/Chicken-Manchurian.jpg",
        servings: [
          { labelEn: "Single Serving (Gravy Only)", labelUr: "سنگل سرونگ (صرف گریوی)", factor: 1.0 },
          { labelEn: "Double Serving (Gravy Only)", labelUr: "ڈبل سرونگ (صرف گریوی)", factor: 1.8 }
        ]
      }
    ]
  },
  // Category 12: BAR-B-Q
  "barbq": {
    nameEn: "Bar-B-Q",
    nameUr: "باربی کیو",
    image: "asset/kabab bbq.jpg",
    items: [
      {
        id: "bbq_chanp",
        nameEn: "Mutton Chanp (10 Pieces)",
        nameUr: "مٹن چانپ",
        descEn: "Premium mutton chops marinated in a secret yogurt and spices mix, charred to smoky perfection over open charcoal.",
        descUr: "مٹن کی چانپیں جو دہی اور گرم مصالحوں کی خاص میرینیشن کے ساتھ کوئلوں پر سینکی جاتی ہیں۔",
        price: 4200,
        image: "asset/chanp.jpg",
        servings: [
          { labelEn: "Full Platter (10 Pcs)", labelUr: "فل پلیٹر (10 عدد)", factor: 1.0 },
          { labelEn: "Half Platter (5 Pcs)", labelUr: "ہاف پلیٹر (5 عدد)", factor: 0.55 }
        ]
      },
      {
        id: "bbq_tikka_achari",
        nameEn: "Chicken Tikka Boti (Achari)",
        nameUr: "چکن تکہ بوٹی اچاری",
        descEn: "Juicy chicken cubes marinated in pickling mustard oils and ground spices, charcoal-grilled.",
        descUr: "اچاری مصالحوں اور سرسوں کے تیل کی میرینیشن کے ساتھ گرل کی گئی مزیدار چکن بوٹی۔",
        price: 1200,
        image: "asset/malai-boti.jpg",
        servings: [
          { labelEn: "Plate (8 Pcs)", labelUr: "پلیٹ (8 عدد)", factor: 1.0 },
          { labelEn: "Double Plate (16 Pcs)", labelUr: "ڈبل پلیٹ (16 عدد)", factor: 1.8 }
        ]
      },
      {
        id: "bbq_malai",
        nameEn: "Chicken Malai Boti",
        nameUr: "چکن ملائی بوٹی",
        descEn: "Mouth-melting boneless chicken pieces marinated in heavy cream, green chillies, white pepper, and butter.",
        descUr: "کریم، مکھن اور سفید مرچ کی میرینیشن میں تیار انتہائی نرم اور ملائم چکن بوٹی۔",
        price: 1350,
        image: "asset/malai-boti.jpg",
        servings: [
          { labelEn: "Plate (8 Pcs)", labelUr: "پلیٹ (8 عدد)", factor: 1.0 },
          { labelEn: "Double Plate (16 Pcs)", labelUr: "ڈبل پلیٹ (16 عدد)", factor: 1.8 }
        ]
      },
      {
        id: "bbq_sheshtu",
        nameEn: "Chicken Sheshtu Boti",
        nameUr: "چکن شیشتو بوٹی",
        descEn: "Turkish-style chicken skewers marinated in garlic, red pepper paste, and olive oil, grilled over red-hot coal.",
        descUr: "ترک ذائقے، زیتون کے تیل اور لہسن میں میرینیٹڈ چکن بوٹی جو کوئلوں پر گرل ہوتی ہے۔",
        price: 1350,
        image: "asset/malai-boti.jpg",
        servings: [
          { labelEn: "Plate (8 Pcs)", labelUr: "پلیٹ (8 عدد)", factor: 1.0 },
          { labelEn: "Double Plate (16 Pcs)", labelUr: "ڈبل پلیٹ (16 عدد)", factor: 1.8 }
        ]
      },
      {
        id: "bbq_green",
        nameEn: "Chicken Green Boti",
        nameUr: "چکن گرین بوٹی",
        descEn: "Chicken chunks marinated in a puree of coriander, mint, green chillies, and lemon, cooked over charcoal.",
        descUr: "ہرے دھنیے، پودینے اور لیموں کے رس میں میرینیٹڈ ہرے مصالحے کی چکن بوٹی۔",
        price: 1350,
        image: "asset/malai-boti.jpg",
        servings: [
          { labelEn: "Plate (8 Pcs)", labelUr: "پلیٹ (8 عدد)", factor: 1.0 },
          { labelEn: "Double Plate (16 Pcs)", labelUr: "ڈبل پلیٹ (16 عدد)", factor: 1.8 }
        ]
      },
      {
        id: "bbq_piece",
        nameEn: "Chicken Tikka Piece",
        nameUr: "چکن تکہ پیس",
        descEn: "Traditional quarter chicken leg or breast, heavily marinated in red spices and yogurt, grilled over live flame.",
        descUr: "چکن کا چوتھائی حصہ (لیگ یا بریسٹ)، جو تیکھے مصالحوں کے ساتھ کوئلوں پر گرل کیا جاتا ہے۔",
        price: 420,
        image: "asset/chicken-roast.jpg",
        servings: [
          { labelEn: "Single Piece (Leg/Breast)", labelUr: "سنگل پیس (لیگ یا بریسٹ)", factor: 1.0 },
          { labelEn: "Double Pieces (Leg & Breast)", labelUr: "ڈبل پیس (لیگ اور بریسٹ)", factor: 1.9 }
        ]
      },
      {
        id: "bbq_kabab",
        nameEn: "Chicken Kabab",
        nameUr: "چکن کباب",
        descEn: "Fine minced chicken mixed with onions, coriander, and local dry spices, skewed and cooked on coals.",
        descUr: "پیاز، دھنیے اور روایتی باربی کیو مصالحوں سے تیار کردہ چکن کے سیخ کباب۔",
        price: 1100,
        image: "asset/kabab bbq.jpg",
        servings: [
          { labelEn: "Plate (4 Pcs)", labelUr: "پلیٹ (4 عدد)", factor: 1.0 },
          { labelEn: "Double Plate (8 Pcs)", labelUr: "ڈبل پلیٹ (8 عدد)", factor: 1.8 }
        ]
      },
      {
        id: "bbq_rashmi",
        nameEn: "Rashmi Kabab",
        nameUr: "ریشمی کباب",
        descEn: "Silky texture chicken seekh kababs prepared with fine minced chicken, butter, and cream, grilled to a soft bite.",
        descUr: "بالائی، مکھن اور انڈے کی میرینیشن کے ساتھ تیار انتہائی ریشمی اور نرم کباب۔",
        price: 1250,
        image: "asset/kabab bbq.jpg",
        servings: [
          { labelEn: "Plate (4 Pcs)", labelUr: "پلیٹ (4 عدد)", factor: 1.0 },
          { labelEn: "Double Plate (8 Pcs)", labelUr: "ڈبل پلیٹ (8 عدد)", factor: 1.8 }
        ]
      },
      {
        id: "bbq_kalmi",
        nameEn: "Kalmi Tikka",
        nameUr: "قلمی تکہ",
        descEn: "Rich chicken drumsticks/leg cuts coated in cashew nut paste, yogurt, white pepper, and slow-grilled.",
        descUr: "کاجو کے پیسٹ، دہی اور سفید مرچ کی کوٹنگ کے ساتھ گرل کیے گئے لذیذ قلمی تکے۔",
        price: 1250,
        image: "asset/chicken-roast.jpg",
        servings: [
          { labelEn: "Plate (4 Pcs)", labelUr: "پلیٹ (4 عدد)", factor: 1.0 },
          { labelEn: "Double Plate (8 Pcs)", labelUr: "ڈبل پلیٹ (8 عدد)", factor: 1.8 }
        ]
      },
      {
        id: "bbq_achari_kabab",
        nameEn: "Chicken Achari Kabab",
        nameUr: "چکن اچاری کباب",
        descEn: "Seekh kababs prepared with minced chicken blended with pickling spices and mustard seeds.",
        descUr: "اچاری مصالحوں اور چٹپٹے ذائقے کے ساتھ تیار چکن سیخ کباب۔",
        price: 1100,
        image: "asset/kabab bbq.jpg",
        servings: [
          { labelEn: "Plate (4 Pcs)", labelUr: "پلیٹ (4 عدد)", factor: 1.0 },
          { labelEn: "Double Plate (8 Pcs)", labelUr: "ڈبل پلیٹ (8 عدد)", factor: 1.8 }
        ]
      },
      {
        id: "bbq_tikka_boti_normal",
        nameEn: "Chicken Tikka Boti",
        nameUr: "چکن تکہ بوٹی",
        descEn: "Classic fire-grilled chicken pieces marinated in yogurt, vinegar, and hot red Lahori tandoori spices.",
        descUr: "دہی، سرکہ اور روایتی لاہوری سرخ تندوری مصالحوں میں تیار کلاسک تکہ بوٹی۔",
        price: 1150,
        image: "asset/malai-boti.jpg",
        servings: [
          { labelEn: "Plate (8 Pcs)", labelUr: "پلیٹ (8 عدد)", factor: 1.0 },
          { labelEn: "Double Plate (16 Pcs)", labelUr: "ڈبل پلیٹ (16 عدد)", factor: 1.8 }
        ]
      },
      {
        id: "bbq_fish_tikka",
        nameEn: "Fish Tikka",
        nameUr: "فش تکہ",
        descEn: "Boneless fish cubes marinated in lemon juice, carom seeds (ajwain), and tandoori spices, grilled gently over hot coals.",
        descUr: "اجوائن، لیموں کے رس اور تندوری گرم مصالحوں میں پکی ہوئی بغیر کانٹے والی فش تکہ۔",
        price: 2100,
        image: "asset/finger fish.jpg",
        servings: [
          { labelEn: "Plate (8 Pcs)", labelUr: "پلیٹ (8 عدد)", factor: 1.0 },
          { labelEn: "Double Plate (16 Pcs)", labelUr: "ڈبل پلیٹ (16 عدد)", factor: 1.8 }
        ]
      },
      {
        id: "bbq_afghani",
        nameEn: "Afghani Boti",
        nameUr: "افغانی بوٹی",
        descEn: "Peshawari style mild chicken cuts marinated only in yogurt, salt, black pepper, and animal fat, charcoal charred.",
        descUr: "دہی، نمک اور کالی مرچ کی میرینیشن کے ساتھ تیار پشاور کی مشہور ہلکی افغانی بوٹی۔",
        price: 1350,
        image: "asset/malai-boti.jpg",
        servings: [
          { labelEn: "Plate (8 Pcs)", labelUr: "پلیٹ (8 عدد)", factor: 1.0 },
          { labelEn: "Double Plate (16 Pcs)", labelUr: "ڈبل پلیٹ (16 عدد)", factor: 1.8 }
        ]
      }
    ]
  },
  // Category 13: SALAD BAR
  "salad_bar": {
    nameEn: "Salad Bar",
    nameUr: "سلاد بار",
    image: "asset/salad.jpg",
    items: [
      {
        id: "salad_special",
        nameEn: "Subhan Allah (Special Salad)",
        nameUr: "اسپیشل سلاد",
        descEn: "A premium signature salad containing crisp iceberg lettuce, apples, chicken chunks, pineapple slices, and roasted nuts in a honey glaze.",
        descUr: "خاص سلاد جس میں سیب، چکن، انناس اور مختلف فرائیڈ نٹس شامل ہیں۔",
        price: 750,
        image: "asset/salad.jpg",
        servings: [
          { labelEn: "Standard Bowl", labelUr: "اسٹینڈرڈ پیالہ", factor: 1.0 },
          { labelEn: "Family Bowl", labelUr: "فیملی بول", factor: 1.8 }
        ]
      },
      {
        id: "salad_pineapple",
        nameEn: "Chicken Pineapple Salad",
        nameUr: "چکن پائن ایپل سلاد",
        descEn: "Sweet and savory salad consisting of shredded chicken breasts, pineapples, sweetcorn, carrots, in a creamy mayonnaise dressing.",
        descUr: "چکن، انناس اور مکھنی میئونیز ڈریسنگ کے ساتھ بنا کھٹا میٹھا پائن ایپل سلاد۔",
        price: 700,
        image: "asset/Simple Creamy Russian Salad Perfect For Parties & Quick Meals.jpg",
        servings: [
          { labelEn: "Standard Bowl", labelUr: "اسٹینڈرڈ پیالہ", factor: 1.0 },
          { labelEn: "Family Bowl", labelUr: "فیملی بول", factor: 1.8 }
        ]
      },
      {
        id: "salad_russian",
        nameEn: "Rushian Salad",
        nameUr: "ریشین سلاد",
        descEn: "Classic Russian salad made of boiled potatoes, carrots, peas, apples, and pineapples in a rich creamy dressing.",
        descUr: "آلو، مٹر، گاجر اور سیب کے ٹکڑوں کے ساتھ بنا روایتی کریم سلاد۔",
        price: 550,
        image: "asset/Simple Creamy Russian Salad Perfect For Parties & Quick Meals.jpg",
        servings: [
          { labelEn: "Standard Bowl", labelUr: "اسٹینڈرڈ پیالہ", factor: 1.0 },
          { labelEn: "Family Bowl", labelUr: "فیملی بول", factor: 1.8 }
        ]
      },
      {
        id: "salad_kachumer",
        nameEn: "Kachumer Salad",
        nameUr: "کچومر سلاد",
        descEn: "Finely diced cucumbers, tomatoes, onions, green chillies, seasoned with lemon juice and black pepper.",
        descUr: "باریک کٹے کھیرا، ٹماٹر اور پیاز پر مشتمل لیموں کے رس والا روایتی کچومر سلاد۔",
        price: 280,
        image: "asset/salad.jpg",
        servings: [
          { labelEn: "Standard Plate", labelUr: "اسٹینڈرڈ پلیٹ", factor: 1.0 }
        ]
      },
      {
        id: "salad_green",
        nameEn: "Green Salad",
        nameUr: "گرین سلاد",
        descEn: "Fresh sliced seasonal cucumbers, onions, tomatoes, and lemon wedges, perfectly fresh.",
        descUr: "کھیرے، پیاز اور ٹماٹر کے تروتازہ گول کٹے ہوئے سلائسز۔",
        price: 130,
        image: "asset/salad.jpg",
        servings: [
          { labelEn: "Standard Plate", labelUr: "اسٹینڈرڈ پلیٹ", factor: 1.0 }
        ]
      },
      {
        id: "salad_raita",
        nameEn: "Zeera Raita",
        nameUr: "زیرہ رائتہ",
        descEn: "Cool and refreshing whipped yogurt flavored with roasted ground cumin seeds and mint oil.",
        descUr: "بھنے زیرے اور پودینے کی مہک والا تازہ گاڑھا دہی کا رائتہ۔",
        price: 130,
        image: "asset/salad.jpg",
        servings: [
          { labelEn: "Standard Cup", labelUr: "اسٹینڈرڈ پیالی", factor: 1.0 },
          { labelEn: "Large Cup", labelUr: "لارج پیالی", factor: 1.8 }
        ]
      }
    ]
  },
  // Category 14: COLD DRINKS (Cold Bar)
  "cold_drinks": {
    nameEn: "Cold Drinks",
    nameUr: "کولڈ ڈرنکس",
    image: "asset/cold-drink.jpg",
    items: [
      {
        id: "drink_soft",
        nameEn: "Regular Soft Drink",
        nameUr: "ریگولر ڈرنکس",
        descEn: "Your choice of chilled carbonated soft drink (Pepsi, Coca-Cola, Sprite, 7up, Fanta, Dew).",
        descUr: "ٹھنڈی اور فرحت بخش ریگولر سافٹ ڈرنک (کولا، اسپرائٹ، ڈیو وغیرہ)۔",
        price: 80,
        image: "asset/cold-drink.jpg",
        servings: [
          { labelEn: "Glass / Can (Standard)", labelUr: "گلاس یا کین (اسٹینڈرڈ)", factor: 1.0 }
        ]
      },
      {
        id: "drink_water",
        nameEn: "Mineral Water",
        nameUr: "منزل واٹر",
        descEn: "Chilled purified bottled water for standard hydration.",
        descUr: "صاف اور شفاف فلٹر شدہ بوتل کا پانی۔",
        price: 140,
        image: "asset/cold-drink.jpg",
        servings: [
          { labelEn: "Regular Bottle", labelUr: "ریگولر بوتل", factor: 1.0 },
          { labelEn: "Large Bottle (1.5L)", labelUr: "بڑی بوتل (1.5 لیٹر)", factor: 1.7 }
        ]
      },
      {
        id: "drink_lassi_namkeen",
        nameEn: "Namkeen Lassi",
        nameUr: "نمکین لسی",
        descEn: "Traditional Punjabi salty lassi prepared with rich churned yogurt, milk, water, and salt.",
        descUr: "دہی اور دودھ کے ساتھ تیار روایتی گاڑھی نمکین لسی۔",
        price: 225,
        image: "asset/Mint margarita splash.jpg",
        servings: [
          { labelEn: "Glass", labelUr: "گلاس", factor: 1.0 },
          { labelEn: "Jug (Serves 4-5)", labelUr: "جگ (4-5 افراد)", factor: 3.5 }
        ]
      },
      {
        id: "drink_lassi_sweet",
        nameEn: "Sweet Lassi",
        nameUr: "سویٹ لسی",
        descEn: "Rich sweet Punjabi lassi made by blending heavy sweet yogurt, sugar, milk, and cream.",
        descUr: "چینی اور دودھ کے ملاپ سے تیار کردہ مزیدار اور میٹھی لسی۔",
        price: 270,
        image: "asset/Mint margarita splash.jpg",
        servings: [
          { labelEn: "Glass", labelUr: "گلاس", factor: 1.0 },
          { labelEn: "Jug (Serves 4-5)", labelUr: "جگ (4-5 افراد)", factor: 3.5 }
        ]
      },
      {
        id: "drink_lime",
        nameEn: "Fresh Lime with 7up",
        nameUr: "فریش لائم ود سیون اپ",
        descEn: "Refreshing carbonated lime cooler consisting of fresh lemon juice, mint, black salt, and 7up/Sprite.",
        descUr: "لیموں کے رس، کالا نمک اور سیون اپ کا فرحت بخش ٹھنڈا امتزاج۔",
        price: 130,
        image: "asset/Mint margarita splash.jpg",
        servings: [
          { labelEn: "Glass", labelUr: "گلاس", factor: 1.0 },
          { labelEn: "Jug (Serves 4-5)", labelUr: "جگ (4-5 افراد)", factor: 3.5 }
        ]
      },
      {
        id: "drink_15L",
        nameEn: "Cold Drink 1.5 Ltr",
        nameUr: "کولڈ ڈرنک 1.5 لیٹر",
        descEn: "Shared family size 1.5 Liter carbonated soft drink bottle.",
        descUr: "پورے خاندان کے لیے 1.5 لیٹر کی بڑی بوتل۔",
        price: 240,
        image: "asset/cold-drink.jpg",
        servings: [
          { labelEn: "1.5 Liter Bottle", labelUr: "1.5 لیٹر کی بوتل", factor: 1.0 }
        ]
      }
    ]
  },
  // Category 15: TANDOOR
  "tandoor": {
    nameEn: "Tandoor",
    nameUr: "تندور",
    image: "asset/naan.jpg",
    items: [
      {
        id: "tandoor_special",
        nameEn: "Subhan Allah (Special nan)",
        nameUr: "اسپیشل نان",
        descEn: "Our signature luxury flatbread, tandoor baked, brushed with melted butter, sesame seeds, and kalonji.",
        descUr: "ہمارا خاص شاہی نان، تندور کا پکا ہوا، پگھلے مکھن، تلوں اور کلونجی کی سجاوٹ کے ساتھ۔",
        price: 300,
        image: "asset/naan.jpg",
        servings: [
          { labelEn: "Single Nan", labelUr: "سنگل نان", factor: 1.0 },
          { labelEn: "Basket of 5 Nans", labelUr: "پانچ نانوں کی ٹوکری", factor: 4.8 }
        ]
      },
      {
        id: "tandoor_kalvanji",
        nameEn: "Kalvanji Nan",
        nameUr: "کلونجی نان",
        descEn: "Soft leavened tandoori flatbread topped with black cumin (Kalonji) seeds, brushed with butter.",
        descUr: "شفا بخش کلونجی کے دانوں اور مکھن کے تڑکے والا تندوری نان۔",
        price: 160,
        image: "asset/naan.jpg",
        servings: [
          { labelEn: "Single Nan", labelUr: "سنگل نان", factor: 1.0 },
          { labelEn: "Basket of 5 Nans", labelUr: "پانچ نانوں کی ٹوکری", factor: 4.8 }
        ]
      },
      {
        id: "tandoor_ginger",
        nameEn: "Ginger Nan",
        nameUr: "جنجر نان",
        descEn: "Unique tandoori leavened flatbread brushed with ginger paste and butter.",
        descUr: "ادرک کی خوشبو اور مکھن کے لیپ والا تندوری جنجر نان۔",
        price: 160,
        image: "asset/naan.jpg",
        servings: [
          { labelEn: "Single Nan", labelUr: "سنگل نان", factor: 1.0 },
          { labelEn: "Basket of 5 Nans", labelUr: "پانچ نانوں کی ٹوکری", factor: 4.8 }
        ]
      },
      {
        id: "tandoor_roghni",
        nameEn: "Roghni Nan",
        nameUr: "روغنی نان",
        descEn: "Traditional Mughlai style rich tandoori flatbread containing milk and ghee in dough, topped with sesame.",
        descUr: "دودھ اور گھی کے آمیزے سے تیار روایتی مکھنی اور تِیل والا روغنی نان۔",
        price: 120,
        image: "asset/naan.jpg",
        servings: [
          { labelEn: "Single Nan", labelUr: "سنگل نان", factor: 1.0 },
          { labelEn: "Basket of 5 Nans", labelUr: "پانچ نانوں کی ٹوکری", factor: 4.8 }
        ]
      },
      {
        id: "tandoor_roti",
        nameEn: "Roti Per Head",
        nameUr: "روٹی پر ہیڈ",
        descEn: "Freshly-baked, whole-wheat thin flatbread (Roti) cooked in a traditional clay oven.",
        descUr: "گندم کے آٹے سے تندور میں بنی سادہ اور گرم خمیری روٹی۔",
        price: 110,
        image: "asset/naan.jpg",
        servings: [
          { labelEn: "Single Roti", labelUr: "سنگل روٹی", factor: 1.0 },
          { labelEn: "Unlimited (Per Head)", labelUr: "ان لمیٹڈ (فی کس)", factor: 1.0 }
        ]
      }
    ]
  },
  // Category 16: SWEET BAR
  "sweet_bar": {
    nameEn: "Sweet Bar",
    nameUr: "سویٹ بار",
    image: "asset/ice-cream.jpg",
    items: [
      {
        id: "sweet_special_ice",
        nameEn: "Subhan Allah (Special ice Cream)",
        nameUr: "اسپیشل آئس کریم",
        descEn: "Our special sundae. Three scoops of premium ice cream, fruits, jelly, wafer sticks, and chocolate syrup.",
        descUr: "خاص سنڈے جس میں آئس کریم کے تین اسکواپ، پھل، جیلی اور چاکلیٹ ساس شامل ہیں۔",
        price: 250,
        image: "asset/ice-cream.jpg",
        servings: [
          { labelEn: "Single Cup", labelUr: "سنگل کپ", factor: 1.0 },
          { labelEn: "Double Serving", labelUr: "ڈبل سرونگ", factor: 1.8 }
        ]
      },
      {
        id: "sweet_tutty_fruity",
        nameEn: "Tutty Fruity Ice Cream",
        nameUr: "ٹوٹی فروٹی آئس کریم",
        descEn: "Premium colorful ice cream packed with chopped candied fruits and nuts.",
        descUr: "رنگ برنگی ٹوٹی فروٹی کیوبز اور میوہ جات والی لذیذ آئس کریم۔",
        price: 210,
        image: "asset/ice-cream.jpg",
        servings: [
          { labelEn: "Single Scoop", labelUr: "سنگل سکوپ", factor: 1.0 },
          { labelEn: "Double Scoop", labelUr: "ڈبل سکوپ", factor: 1.8 }
        ]
      },
      {
        id: "sweet_plain_ice",
        nameEn: "Plain Ice Cream",
        nameUr: "پلین آئس کریم",
        descEn: "Creamy classic ice cream scoop (Vanilla, Chocolate, Mango, or Strawberry).",
        descUr: "گاڑھی کلاسک آئس کریم (ونیلا، چاکلیٹ، مینگو یا اسٹرابیری)۔",
        price: 210,
        image: "asset/ice-cream.jpg",
        servings: [
          { labelEn: "Single Scoop", labelUr: "سنگل سکوپ", factor: 1.0 },
          { labelEn: "Double Scoop", labelUr: "ڈبل سکوپ", factor: 1.8 }
        ]
      },
      {
        id: "sweet_kheer",
        nameEn: "Kheer Bowl",
        nameUr: "کھیر",
        descEn: "Traditional rice pudding slow-cooked in milk, cardamom, and saffron, served cold in a clay bowl with pistachios.",
        descUr: "مٹی کے برتن میں دھیمی آنچ پر دودھ، چاول اور الائچی کے ساتھ پکی روایتی ٹھنڈی کھیر۔",
        price: 1200,
        image: "asset/halwa.jpg",
        servings: [
          { labelEn: "Standard Bowl", labelUr: "اسٹینڈرڈ مٹی کا پیالہ", factor: 1.0 }
        ]
      },
      {
        id: "sweet_egg_halwa",
        nameEn: "Egg Halwa",
        nameUr: "ایگ حلوہ",
        descEn: "Rich royal halwa made with beaten eggs, milk solids (khoya), clarified butter (ghee), and cardamoms, served warm.",
        descUr: "انڈوں، کھویا اور دیسی گھی سے تیار کیا گیا شاہی اور لذیذ حلوہ۔",
        price: 1200,
        image: "asset/halwa.jpg",
        servings: [
          { labelEn: "Standard Bowl", labelUr: "اسٹینڈرڈ پیالہ", factor: 1.0 }
        ]
      }
    ]
  },
  // Category 17: FAST FOOD
  "fast_food": {
    nameEn: "Fast Food",
    nameUr: "فاسٹ فوڈ",
    image: "asset/sandwich.jpg",
    items: [
      {
        id: "ff_club",
        nameEn: "Chicken Club Sandwich",
        nameUr: "چکن کلب سینڈوچ",
        descEn: "Three layers of toasted bread stuffed with grilled chicken breast slices, egg omelette, cheese, cucumber, lettuce, and mayo.",
        descUr: "تین پرتوں والا ڈبل روٹی کا سینڈوچ، چکن، آملیٹ، پنیر اور میئونیز کے بھرپور جوڑ کے ساتھ۔",
        price: 450,
        image: "asset/sandwich.jpg",
        servings: [
          { labelEn: "Regular (4 Cut)", labelUr: "ریگولر (4 کٹ)", factor: 1.0 },
          { labelEn: "Meal Combo (With Fries & Drink)", labelUr: "میل کمبو (چپس اور بوتل کے ساتھ)", factor: 1.5 }
        ]
      },
      {
        id: "ff_egg",
        nameEn: "Egg Sandwich",
        nameUr: "ایگ سینڈوچ",
        descEn: "Classic toasted sandwiches filled with fluffy scrambled eggs, black pepper, and butter spread.",
        descUr: "انڈے، مکھن اور کالی مرچ سے تیار سادہ اور لاجواب کلاسک سینڈوچ۔",
        price: 400,
        image: "asset/sandwich.jpg",
        servings: [
          { labelEn: "Regular Portion", labelUr: "ریگولر پورشن", factor: 1.0 }
        ]
      },
      {
        id: "ff_breast",
        nameEn: "Chicken Breast Sandwich",
        nameUr: "چکن بریسٹ سینڈوچ",
        descEn: "Juicy pan-seared chicken breast fillet sandwich with melted cheddar, garlic mayo, and pickles.",
        descUr: "چکن بریسٹ کے ٹکڑے، پگھلے ہوئے چیددار پنیر اور گارلک میئونیز کا لاجواب سینڈوچ۔",
        price: 470,
        image: "asset/sandwich.jpg",
        servings: [
          { labelEn: "Regular Portion", labelUr: "ریگولر پورشن", factor: 1.0 },
          { labelEn: "Meal Combo", labelUr: "میل کمبو", factor: 1.4 }
        ]
      },
      {
        id: "ff_chips",
        nameEn: "Finger Chips",
        nameUr: "فنگر چپس",
        descEn: "Golden and crispy potato french fries seasoned with salt and a sprinkle of masala.",
        descUr: "گولڈن کرسپی فرینچ فرائز، نمک اور خاص چاٹ مصالحے کے ساتھ۔",
        price: 250,
        image: "asset/sandwich.jpg",
        servings: [
          { labelEn: "Standard Portion", labelUr: "اسٹینڈرڈ پورشن", factor: 1.0 },
          { labelEn: "Large Portion", labelUr: "لارج پورشن", factor: 1.8 }
        ]
      }
    ]
  },
  // Category 18: HOT BAR
  "hot_bar": {
    nameEn: "Hot Bar",
    nameUr: "ہاٹ بار",
    image: "asset/Tea & Coffee.jpg",
    items: [
      {
        id: "hot_special_coffee",
        nameEn: "Special Coffee",
        nameUr: "اسپیشل کافی",
        descEn: "Freshly brewed espresso whipped with steamed milk and cream, topped with cocoa powder.",
        descUr: "پگھلی کریم اور ایسپریسو سے تیار کردہ جھاگ والی اسپیشل کافی۔",
        price: 300,
        image: "asset/Tea & Coffee.jpg",
        servings: [
          { labelEn: "Standard Cup", labelUr: "اسٹینڈرڈ کپ", factor: 1.0 },
          { labelEn: "Double Shot Mug", labelUr: "ڈبل شاٹ مگ", factor: 1.6 }
        ]
      },
      {
        id: "hot_coffee",
        nameEn: "Hot Coffee",
        nameUr: "ہاٹ کافی",
        descEn: "Classic hot milk coffee brewed to standard strength.",
        descUr: "گرم دودھ اور کافی کا کلاسک مزیدار امتزاج۔",
        price: 250,
        image: "asset/Tea & Coffee.jpg",
        servings: [
          { labelEn: "Standard Cup", labelUr: "اسٹینڈرڈ کپ", factor: 1.0 }
        ]
      },
      {
        id: "hot_black_tea",
        nameEn: "Black Tea",
        nameUr: "بلیک ٹی",
        descEn: "Strong hot black tea brewed from selected local tea leaves, served with lemon slices.",
        descUr: "کڑک چائے کی پتی سے تیار کردہ جوش دار کالی چائے۔",
        price: 120,
        image: "asset/Tea & Coffee.jpg",
        servings: [
          { labelEn: "Standard Cup", labelUr: "اسٹینڈرڈ کپ", factor: 1.0 },
          { labelEn: "Teapot (Serves 3)", labelUr: "کیٹل (3 افراد)", factor: 2.5 }
        ]
      },
      {
        id: "hot_green_tea",
        nameEn: "Green Tea",
        nameUr: "گرین ٹی (قہوہ)",
        descEn: "Healthy hot green tea (Qahwa) brewed with cardamoms, mint leaves, served with sugar or lemon.",
        descUr: "الائچی اور پودینے کی مہک والا صحت بخش گرم سبز قہوہ۔",
        price: 80,
        image: "asset/Tea & Coffee.jpg",
        servings: [
          { labelEn: "Standard Cup", labelUr: "اسٹینڈرڈ کپ", factor: 1.0 },
          { labelEn: "Teapot (Serves 3)", labelUr: "کیٹل (3 افراد)", factor: 2.5 }
        ]
      }
    ]
  }
};

// 2. DYNAMIC HERO SLIDER WITH SYNCHRONIZED BILINGUAL TEXT & KEN BURNS EFFECT
const HERO_SLIDES = [
  {
    image: "asset/chicken karahi.jpg",
    badge: "✦ SIGNATURE SPECIAL • شاہی کڑاہی ✦",
    titleEn: "Authentic Desi Karahi",
    titleUr: "اصیل دیسی کڑاہی اور ہانڈی کے لذیذ ذائقے",
    subEn: "Cooked fresh in pure butter with rich aromatic Lahori & Shinwari spices",
    subUr: "تازہ مکھن اور خاص روایتی مصالحوں کے ساتھ تیار کردہ لاجواب کڑاہی"
  },
  {
    image: "asset/Mutton biriyani.jpg",
    badge: "✦ CHEF'S MASTERPIECE • شاہی دسترخوان ✦",
    titleEn: "Royal Mutton Biryani",
    titleUr: "خوشبودار شاہی مٹن دم بریانی",
    subEn: "Fragrant long-grain basmati infused with tender, juicy mutton & saffron",
    subUr: "زعفران اور اصلی مصالحوں میں دم کی گئی لاجواب اور لذیذ بریانی"
  },
  {
    image: "asset/grilled lamb chops.jpg",
    badge: "✦ LIVE CHARCOAL GRILL • تازہ باربی کیو ✦",
    titleEn: "Sizzling Charcoal BBQ",
    titleUr: "گرما گرم اور رسیلی باربی کیو ورائٹی",
    subEn: "Smoky tender Malai Boti, Seekh Kababs & Lamb Chops grilled to perfection",
    subUr: "دھیمی آنچ پر کوئلوں پر پکی ملائی بوٹی، سیخ کباب اور لذیذ چانپیں"
  },
  {
    image: "asset/chinese rice.jpg",
    badge: "✦ ORIENTAL DELIGHT • چائنیز اسپیشل ✦",
    titleEn: "Chinese Gravies & Chowmein",
    titleUr: "چائنیز گریوی، فرائیڈ رائس اور چومین",
    subEn: "Wok-tossed spicy Manchurian, crispy Sesame Chicken & egg fried rice",
    subUr: "تازہ سبزیوں، ساسز اور چکن کے ساتھ تیار کردہ لذیذ چائنیز پکوان"
  },
  {
    image: "asset/soup2.jpg",
    badge: "✦ FRESH STARTERS • گرم سوپ اور سٹارٹرز ✦",
    titleEn: "Subhan Allah Special Soup",
    titleUr: "گرما گرم شاہی سوپ اور سٹارٹرز",
    subEn: "Hearty, rich broth brimming with shredded chicken, shrimp & fresh herbs",
    subUr: "چکن ریشہ، جھینگوں اور کرسپی مصالحوں کے ساتھ تیار کردہ گرم سوپ"
  },
  {
    image: "asset/chanp.jpg",
    badge: "✦ COMING SOON • جلد آرہا ہے ✦",
    titleEn: "Tawa Grill & Karahi",
    titleUr: "توا کڑاہی اور توا پیسز کی شاندار ورائٹی",
    subEn: "Exciting live tawa delicacies arriving soon to elevate your dining",
    subUr: "توا چکن، توا قیمہ اور توا پیسز بہت جلد آپ کی خدمت میں"
  }
];

let currentSlideIndex = 0;
let slideIntervalId = null;

function initHeroSlider() {
  const sliderContainer = document.getElementById("banner-slider");
  const dotsContainer = document.getElementById("hero-slider-dots");
  if (!sliderContainer) return;

  sliderContainer.innerHTML = "";
  if (dotsContainer) dotsContainer.innerHTML = "";

  // Create slides and indicator dots
  HERO_SLIDES.forEach((slideData, idx) => {
    const slide = document.createElement("div");
    slide.className = `slide ${idx === 0 ? "active" : ""}`;
    slide.style.backgroundImage = `url('${slideData.image}')`;
    sliderContainer.appendChild(slide);

    if (dotsContainer) {
      const dot = document.createElement("button");
      dot.className = `hero-dot ${idx === 0 ? "active" : ""}`;
      dot.setAttribute("aria-label", `Slide ${idx + 1}`);
      dot.addEventListener("click", () => {
        goToSlide(idx);
        restartSlideTimer();
      });
      dotsContainer.appendChild(dot);
    }
  });

  // Apply initial slide content
  updateHeroText(0, false);

  // Auto transition loop (4.2 seconds interval)
  startSlideTimer();
}

function startSlideTimer() {
  if (slideIntervalId) clearInterval(slideIntervalId);
  slideIntervalId = setInterval(nextSlide, 4200);
}

function restartSlideTimer() {
  startSlideTimer();
}

function goToSlide(targetIndex) {
  const slides = document.querySelectorAll(".slide");
  const dots = document.querySelectorAll(".hero-dot");
  if (slides.length === 0 || targetIndex === currentSlideIndex) return;

  // Deactivate previous slide and dot
  if (slides[currentSlideIndex]) slides[currentSlideIndex].classList.remove("active");
  if (dots[currentSlideIndex]) dots[currentSlideIndex].classList.remove("active");

  currentSlideIndex = targetIndex;

  // Activate new slide and dot
  if (slides[currentSlideIndex]) slides[currentSlideIndex].classList.add("active");
  if (dots[currentSlideIndex]) dots[currentSlideIndex].classList.add("active");

  // Animate dynamic text
  updateHeroText(currentSlideIndex, true);
}

function nextSlide() {
  const total = HERO_SLIDES.length;
  const nextIndex = (currentSlideIndex + 1) % total;
  goToSlide(nextIndex);
}

function updateHeroText(slideIndex, animated = true) {
  const wrap = document.getElementById("hero-content-wrap");
  const badge = document.getElementById("hero-badge");
  const titleEn = document.getElementById("hero-title-en");
  const titleUr = document.getElementById("hero-title-ur");
  const subEn = document.getElementById("hero-subtitle-en");
  const subUr = document.getElementById("hero-subtitle-ur");

  const data = HERO_SLIDES[slideIndex];
  if (!data) return;

  if (!animated || !wrap) {
    if (badge) badge.textContent = data.badge;
    if (titleEn) titleEn.textContent = data.titleEn;
    if (titleUr) titleUr.textContent = data.titleUr;
    if (subEn) subEn.textContent = data.subEn;
    if (subUr) subUr.textContent = data.subUr;
    return;
  }

  // Smooth cinematic text exit
  wrap.classList.remove("slide-in");
  wrap.classList.add("slide-out");

  setTimeout(() => {
    if (badge) badge.textContent = data.badge;
    if (titleEn) titleEn.textContent = data.titleEn;
    if (titleUr) titleUr.textContent = data.titleUr;
    if (subEn) subEn.textContent = data.subEn;
    if (subUr) subUr.textContent = data.subUr;

    // Smooth staggered text entrance
    wrap.classList.remove("slide-out");
    wrap.classList.add("slide-in");
  }, 280);
}

// 3. CATEGORY SWITCHER & ACCORDION RENDERER
let activeCategoryId = null;

function renderCategoryItems(categoryId) {
  const submenuSection = document.getElementById("submenu-section");
  const itemsGrid = document.getElementById("menu-items-grid");
  const headerEn = document.getElementById("submenu-title-en");
  const headerUr = document.getElementById("submenu-title-ur");
  const tabsContainer = document.getElementById("inner-tabs-container");

  const categoryData = MENU_DATA[categoryId];
  if (!categoryData) return;

  // Populate headers
  headerEn.textContent = categoryData.nameEn;
  headerUr.textContent = categoryData.nameUr;

  // Clear tabs and grid
  tabsContainer.innerHTML = "";
  itemsGrid.innerHTML = "";

  if (categoryData.comingSoon) {
    itemsGrid.innerHTML = `
      <div style="grid-column: 1/-1; text-align: center; padding: 3rem 1rem;">
        <h4 class="royal-title" style="font-size: 2rem; animation: blink-fade 1.5s infinite;">COMING SOON / جلد آرہا ہے</h4>
        <p style="color: var(--color-text-muted); margin-top: 0.5rem; font-size: 0.95rem;">We are currently perfecting our tawa menu. Stay tuned for royal grills!</p>
        <p style="color: var(--color-gold-light); margin-top: 0.3rem; font-size: 1.05rem;" class="urdu-text">ہم توا کڑاہی اور توا پیسز کی ریسیپی کو فائنل کر رہے ہیں۔ بہت جلد آپ کی خدمت میں حاضر ہوں گے!</p>
      </div>
    `;
    return;
  }

  // Handle Inner Sub-Categories (e.g. Category 11: Chicken Gravies has Pakistani vs Chinese)
  if (categoryData.subCategories) {
    categoryData.subCategories.forEach((subName, subIdx) => {
      const btn = document.createElement("button");
      btn.className = `inner-tab-btn ${subIdx === 0 ? "active" : ""}`;
      btn.textContent = subName;
      btn.addEventListener("click", () => {
        document.querySelectorAll(".inner-tab-btn").forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        renderFilteredItems(categoryData.items, subIdx, categoryData.image);
      });
      tabsContainer.appendChild(btn);
    });
    // Initial load: first subcategory (Pakistani)
    renderFilteredItems(categoryData.items, 0, categoryData.image);
  } else {
    // Standard flat category list
    renderFilteredItems(categoryData.items, null, categoryData.image);
  }
}

function renderFilteredItems(items, subIndexFilter, fallbackImage) {
  const itemsGrid = document.getElementById("menu-items-grid");
  itemsGrid.innerHTML = "";

  const filtered = subIndexFilter !== null 
    ? items.filter(item => item.subIndex === subIndexFilter) 
    : items;

  filtered.forEach(item => {
    const card = document.createElement("div");
    card.className = "menu-item-card";
    card.addEventListener("click", () => openDishDetails(item, fallbackImage));

    // Show initial serving option label in both languages
    const initialServing = item.servings && item.servings.length > 0 ? item.servings[0] : null;
    const servingBadgeHtml = initialServing 
      ? `<span>${initialServing.labelEn}</span> • <span class="urdu-text">${initialServing.labelUr}</span>` 
      : `<span>Standard</span> • <span class="urdu-text">اسٹینڈرڈ</span>`;

    card.innerHTML = `
      <div class="menu-item-left">
        <div class="menu-item-header">
          <span class="item-title-en">${item.nameEn}</span>
          <span class="item-title-ur urdu-text">${item.nameUr}</span>
        </div>
        <p class="item-desc-en">${item.descEn}</p>
        <p class="item-desc-ur urdu-text">${item.descUr}</p>
      </div>
      <div class="menu-item-right">
        <span class="item-price">Rs. ${item.price}</span>
        <span class="item-servings-badge">${servingBadgeHtml}</span>
      </div>
    `;
    itemsGrid.appendChild(card);
  });
}

function handleCategoryClick(categoryId, element) {
  const submenuSection = document.getElementById("submenu-section");
  const allCards = document.querySelectorAll(".category-card");

  // If clicking already active category, close it
  if (activeCategoryId === categoryId) {
    submenuSection.style.display = "none";
    element.classList.remove("active");
    activeCategoryId = null;
    return;
  }

  // Deactivate all cards
  allCards.forEach(card => card.classList.remove("active"));
  
  // Activate clicked card
  element.classList.add("active");
  activeCategoryId = categoryId;

  // Render items
  renderCategoryItems(categoryId);

  // Smooth slide-down reveal
  submenuSection.style.display = "block";

  // Scroll smoothly to submenu section
  setTimeout(() => {
    submenuSection.scrollIntoView({ behavior: "smooth", block: "nearest" });
  }, 100);
}

// 4. DISH DETAILS POPUP & SERVING CALCULATOR
let activeDish = null;
let activeDishFallbackImg = "";

function openDishDetails(dish, fallbackImage) {
  activeDish = dish;
  activeDishFallbackImg = fallbackImage;

  const modal = document.getElementById("dish-modal");
  const mImg = document.getElementById("modal-dish-img");
  const mTitleEn = document.getElementById("modal-title-en");
  const mTitleUr = document.getElementById("modal-title-ur");
  const mDescEn = document.getElementById("modal-desc-en");
  const mDescUr = document.getElementById("modal-desc-ur");
  const mSelectorContainer = document.getElementById("modal-serving-selector-container");
  const mPriceVal = document.getElementById("modal-price-val");

  // Set image
  mImg.src = dish.image || fallbackImage;

  // Set titles and descriptions
  mTitleEn.textContent = dish.nameEn;
  mTitleUr.textContent = dish.nameUr;
  mDescEn.textContent = dish.descEn;
  mDescUr.textContent = dish.descUr;

  // Clear selector
  mSelectorContainer.innerHTML = "";

  // Render servings selector
  if (dish.servings && dish.servings.length > 0) {
    const label = document.createElement("div");
    label.className = "serving-selector-label";
    label.innerHTML = `<span>Select Serving</span> • <span class="urdu-text">سرونگ منتخب کریں</span>`;

    const select = document.createElement("select");
    select.className = "serving-select";
    select.id = "serving-dropdown";

    dish.servings.forEach((serv, idx) => {
      const opt = document.createElement("option");
      opt.value = idx;
      opt.textContent = `${serv.labelEn} (${serv.labelUr}) - Rs. ${Math.round(dish.price * serv.factor)}`;
      select.appendChild(opt);
    });

    select.addEventListener("change", (e) => {
      updatePriceDisplay(dish, e.target.value);
    });

    mSelectorContainer.appendChild(label);
    mSelectorContainer.appendChild(select);
  }

  // Set initial price display
  updatePriceDisplay(dish, 0);

  // Show modal with pop animation
  modal.classList.add("active");
  document.body.style.overflow = "hidden"; // Disable background scrolling
}

function updatePriceDisplay(dish, servingIndex) {
  const mPriceVal = document.getElementById("modal-price-val");
  const serving = dish.servings[servingIndex];
  if (!serving) return;

  const finalPrice = Math.round(dish.price * serving.factor);
  mPriceVal.textContent = `Rs. ${finalPrice}`;

  // Pop-style bounce animation on price change
  mPriceVal.classList.add("pop-effect");
  setTimeout(() => {
    mPriceVal.classList.remove("pop-effect");
  }, 200);
}

function closeDishDetails() {
  const modal = document.getElementById("dish-modal");
  modal.classList.remove("active");
  document.body.style.overflow = ""; // Re-enable scroll
  activeDish = null;
}

// 5. DOM INITIALIZATION
document.addEventListener("DOMContentLoaded", () => {
  // Initialize slider
  initHeroSlider();

  // Close modal button
  const closeModalBtn = document.getElementById("close-modal-btn");
  if (closeModalBtn) {
    closeModalBtn.addEventListener("click", closeDishDetails);
  }

  // Close modal on click outside content
  const modal = document.getElementById("dish-modal");
  if (modal) {
    modal.addEventListener("click", (e) => {
      if (e.target === modal) {
        closeDishDetails();
      }
    });
  }

  // Register click handlers for category cards dynamically
  const cards = document.querySelectorAll(".category-card");
  cards.forEach(card => {
    const categoryId = card.getAttribute("data-category");
    card.addEventListener("click", () => handleCategoryClick(categoryId, card));
  });
});
