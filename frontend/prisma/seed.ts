import { PrismaClient } from "@prisma/client";

const items = [
  {
    _id: {
      $oid: "638c20ede045526f5ebc0a3b",
    },
    imgs: [
      "https://assets.adidas.com/images/w_600,f_auto,q_auto/dee464faf8db400e9980ae92003f95dc_9366/4CMTE_Track_Top_Black_HM6235_21_model.jpg",
      "https://assets.adidas.com/images/w_600,f_auto,q_auto/c28171aa8ff446abb6b0ae92003f9d74_9366/4CMTE_Track_Top_Black_HM6235_23_hover_model.jpg",
      "https://assets.adidas.com/images/w_600,f_auto,q_auto/809f331a6f504ccd834eae92003fa617_9366/4CMTE_Track_Top_Black_HM6235_25_model.jpg",
      "https://assets.adidas.com/images/w_600,f_auto,q_auto/ad4c99bd9b0e4dc2a3e8ae8b0115b413_9366/4CMTE_Track_Top_Black_HM6235_01_laydown.jpg",
      "https://assets.adidas.com/images/w_600,f_auto,q_auto/6215ccfc691544b5bb9cae92003fb0b1_9366/4CMTE_Track_Top_Black_HM6235_41_detail.jpg",
      "https://assets.adidas.com/images/w_600,f_auto,q_auto/c19f1d9e15a149a58b24ae92003fbb69_9366/4CMTE_Track_Top_Black_HM6235_42_detail.jpg",
    ],
    name: "4CMTE Track Top",
    price: "$120",
    sizes: ["XS", "S", "M", "L", "XL", "2XL"],
    colors: [
      {
        alt: "Product color: Shadow Green / Pulse Olive",
        img: "https://assets.adidas.com/images/w_320,f_auto,q_auto,fl_lossy,c_fill,g_auto/71d9ec41eba24c2883bdae92003f49f9_9366/4CMTE_Track_Top_Green_HM6234_21_model.jpg",
        url: "https://www.adidas.com/us/4cmte-track-top/HM6234.html",
      },
      {
        alt: "Product color: Black / Carbon",
        img: "https://assets.adidas.com/images/w_320,f_auto,q_auto,fl_lossy,c_fill,g_auto/dee464faf8db400e9980ae92003f95dc_9366/4CMTE_Track_Top_Black_HM6235_21_model.jpg",
        url: "https://www.adidas.com/us/4cmte-track-top/HM6235.html",
      },
    ],
    description:
      "A warm track top that is made with nature.Comfy as a hoodie and cozy as a winter jacket. This adidas track top is robust on the outside, fleecy on the inside and lightly padded for extra warmth. It has a distinctive funnel neckline that also helps keep out the chill. And with a choice of zip pockets at the sides and chest, there's plenty of places to store those cold-weather essentials.\n\nThis 4CMTE Track Top is made with natural and renewable materials as part of our journey to design out finite resources and help end plastic waste.",
  },
  {
    _id: {
      $oid: "638c20ede045526f5ebc0a3c",
    },
    imgs: [
      "https://assets.adidas.com/images/w_600,f_auto,q_auto/1cca19d1f73345dc8825ae9800be6ee1_9366/Puffer_Jacket_Black_HG2065_21_model.jpg",
      "https://assets.adidas.com/images/w_600,f_auto,q_auto/cd5d3293d1fa4fb9ad8eae9800be7613_9366/Puffer_Jacket_Black_HG2065_22_model.jpg",
      "https://assets.adidas.com/images/w_600,f_auto,q_auto/bf78764185bb4967b2e8ae9800be7f0b_9366/Puffer_Jacket_Black_HG2065_23_hover_model.jpg",
      "https://assets.adidas.com/images/w_600,f_auto,q_auto/eb81f2496df54160acadae9800be8757_9366/Puffer_Jacket_Black_HG2065_25_model.jpg",
      "https://assets.adidas.com/images/w_600,f_auto,q_auto/88a243f5b9bb4e7aafeaae8501309c21_9366/Puffer_Jacket_Black_HG2065_01_laydown.jpg",
      "https://assets.adidas.com/images/w_600,f_auto,q_auto/1661f612a43b4e9db533ae9800be9190_9366/Puffer_Jacket_Black_HG2065_41_detail.jpg",
      "https://assets.adidas.com/images/w_600,f_auto,q_auto/4be3852a57d3442cb200ae9800be9b53_9366/Puffer_Jacket_Black_HG2065_42_detail.jpg",
      "https://assets.adidas.com/images/w_600,f_auto,q_auto/d6da4d46f3804deead4bae9800bea48e_9366/Puffer_Jacket_Black_HG2065_43_detail.jpg",
    ],
    name: "Puffer Jacket",
    price: "$300",
    sizes: ["XS", "S", "M", "L", "XL", "2XL"],
    colors: [
      {
        alt: "Product color: Black",
        img: "https://assets.adidas.com/images/w_320,f_auto,q_auto,fl_lossy,c_fill,g_auto/1cca19d1f73345dc8825ae9800be6ee1_9366/Puffer_Jacket_Black_HG2065_21_model.jpg",
        url: "https://www.adidas.com/us/puffer-jacket/HG2065.html",
      },
      {
        alt: "Product color: Silver Dawn",
        img: "https://assets.adidas.com/images/w_320,f_auto,q_auto,fl_lossy,c_fill,g_auto/b1ee2b9254474369a3c0ae8d00c3147a_9366/Puffer_Jacket_Purple_HN1940_21_model.jpg",
        url: "https://www.adidas.com/us/puffer-jacket/HN1940.html",
      },
    ],
    description:
      "An insulated down jacket made with recycled materials.We're used to unpredictability. You never know what's going to happen, and that can be part of the fun. This adidas down jacket lets you embrace that mentality all while keeping you comfortable when the weather shifts. The insulated build makes sure you stay warm, with a full zip and high neck to really make sure the cold stays out. Layer it on — it's loose, which makes that easy — and head out.\n\nMade with 100% recycled materials, this product represents just one of our solutions to help end plastic waste.",
  },
  {
    _id: {
      $oid: "638c20ede045526f5ebc0a3d",
    },
    imgs: [
      "https://assets.adidas.com/images/w_600,f_auto,q_auto/611af1f580be4628bdfaaef200a6758f_9366/Big_Baffle_Down_Jacket_Black_HN9930_21_model.jpg",
      "https://assets.adidas.com/images/w_600,f_auto,q_auto/9f228a58905b49968e98aef200a67ecb_9366/Big_Baffle_Down_Jacket_Black_HN9930_23_hover_model.jpg",
      "https://assets.adidas.com/images/w_600,f_auto,q_auto/083a445649c248ecade2aef200a68774_9366/Big_Baffle_Down_Jacket_Black_HN9930_25_model.jpg",
      "https://assets.adidas.com/images/w_600,f_auto,q_auto/f36b8fcd835b440ea1fbaed900c83e85_9366/Big_Baffle_Down_Jacket_Black_HN9930_01_laydown.jpg",
      "https://assets.adidas.com/images/w_600,f_auto,q_auto/d34cd78af70340ed8581aef200a68e85_9366/Big_Baffle_Down_Jacket_Black_HN9930_25_outfit.jpg",
      "https://assets.adidas.com/images/w_600,f_auto,q_auto/5ee32014884f44feb1e7aef200a69a20_9366/Big_Baffle_Down_Jacket_Black_HN9930_41_detail.jpg",
      "https://assets.adidas.com/images/w_600,f_auto,q_auto/7583b6513ccb48c2b88faef200a6a4e1_9366/Big_Baffle_Down_Jacket_Black_HN9930_42_detail.jpg",
      "https://assets.adidas.com/images/w_600,f_auto,q_auto/85a682e2a1194b0791ddaef200a6af9d_9366/Big_Baffle_Down_Jacket_Black_HN9930_43_detail.jpg",
    ],
    name: "Big Baffle Down Jacket",
    price: "$230",
    sizes: ["S", "M", "L", "XL", "2XL", "3XL"],
    colors: [
      {
        alt: "Product color: Black",
        img: "https://assets.adidas.com/images/w_320,f_auto,q_auto,fl_lossy,c_fill,g_auto/611af1f580be4628bdfaaef200a6758f_9366/Big_Baffle_Down_Jacket_Black_HN9930_21_model.jpg",
        url: "https://www.adidas.com/us/big-baffle-down-jacket/HN9930.html",
      },
      {
        alt: "Product color: Mesa",
        img: "https://assets.adidas.com/images/w_320,f_auto,q_auto,fl_lossy,c_fill,g_auto/1b29aed0565d437c8db9aee50032800d_9366/Big_Baffle_Down_Jacket_Brown_HN9932_21_model.jpg",
        url: "https://www.adidas.com/us/big-baffle-down-jacket/HN9932.html",
      },
    ],
    description:
      "A cold-weather coat with dual-entry front pockets, made in part with recycled materials.Don't wear this adidas jacket if you hate options and being noticed. It elevates your style with wide baffles and oversized front pockets that draw the eye while giving you two ways to secure personal items. Lightweight, naturally insulating down delivers unbeatable warmth. The padded hood, inner elastic cuffs and adjustable hem keep you feeling warm without weighing you down. \n\nMade with a series of recycled materials, and at least 60% recycled content, this product represents just one of our solutions to help end plastic waste.",
  },
  {
    _id: {
      $oid: "638c20ede045526f5ebc0a3e",
    },
    imgs: [
      "https://assets.adidas.com/images/w_600,f_auto,q_auto/a74192ed425c44cbb245ae8600e7b95c_9366/Beckenbauer_Track_Jacket_Blue_HS8946_21_model.jpg",
      "https://assets.adidas.com/images/w_600,f_auto,q_auto/ee7c460ca2d14a01b6e4ae8600e7c217_9366/Beckenbauer_Track_Jacket_Blue_HS8946_23_hover_model.jpg",
      "https://assets.adidas.com/images/w_600,f_auto,q_auto/d1cddbfd92cf488aa7bbae8600e7cba2_9366/Beckenbauer_Track_Jacket_Blue_HS8946_25_model.jpg",
      "https://assets.adidas.com/images/w_600,f_auto,q_auto/1f77fbeba61b41b8bc81ae8600e7f7bc_9366/Beckenbauer_Track_Jacket_Blue_HS8946_01_laydown.jpg",
      "https://assets.adidas.com/images/w_600,f_auto,q_auto/bc26f6784470413c97d5ae8600e7d94d_9366/Beckenbauer_Track_Jacket_Blue_HS8946_41_detail.jpg",
      "https://assets.adidas.com/images/w_600,f_auto,q_auto/818a07af56a344299e1eae8600e7e575_9366/Beckenbauer_Track_Jacket_Blue_HS8946_42_detail.jpg",
    ],
    name: "Beckenbauer Track Jacket",
    price: "$85",
    sizes: ["XS", "S", "M", "L", "XL", "2XL"],
    colors: [
      {
        alt: "Product color: Royal Blue / Royal Blue / White / Team Power Red",
        img: "https://assets.adidas.com/images/w_320,f_auto,q_auto,fl_lossy,c_fill,g_auto/f98028dff7a2450998a7ae8600f39ad1_9366/Beckenbauer_Track_Jacket_Blue_HK7406_21_model.jpg",
        url: "https://www.adidas.com/us/beckenbauer-track-jacket/HK7406.html",
      },
      {
        alt: "Product color: Team Power Red / Team Power Red / Team Colleg Gold",
        img: "https://assets.adidas.com/images/w_320,f_auto,q_auto,fl_lossy,c_fill,g_auto/ea501ac293b54676a045ae8600f3f4d9_9366/Beckenbauer_Track_Jacket_Red_HK7407_21_model.jpg",
        url: "https://www.adidas.com/us/beckenbauer-track-jacket/HK7407.html",
      },
      {
        alt: "Product color: Black / White / Team Power Red / Team Colleg Gold",
        img: "https://assets.adidas.com/images/w_320,f_auto,q_auto,fl_lossy,c_fill,g_auto/957c65e614274652b67aae8600f44f22_9366/Beckenbauer_Track_Jacket_Black_HK7408_21_model.jpg",
        url: "https://www.adidas.com/us/beckenbauer-track-jacket/HK7408.html",
      },
      {
        alt: "Product color: Light Blue / White / Gold Metallic",
        img: "https://assets.adidas.com/images/w_320,f_auto,q_auto,fl_lossy,c_fill,g_auto/190df2daefcf434f94b6ae860107d649_9366/Beckenbauer_Track_Jacket_Blue_HK7409_21_model.jpg",
        url: "https://www.adidas.com/us/beckenbauer-track-jacket/HK7409.html",
      },
      {
        alt: "Product color: Team Yellow / Team Green / Bold Blue",
        img: "https://assets.adidas.com/images/w_320,f_auto,q_auto,fl_lossy,c_fill,g_auto/89b00a12542e439287f9ae8601082e34_9366/Beckenbauer_Track_Jacket_Yellow_HK7410_21_model.jpg",
        url: "https://www.adidas.com/us/beckenbauer-track-jacket/HK7410.html",
      },
      {
        alt: "Product color: Bright Royal / White / Red / Green",
        img: "https://assets.adidas.com/images/w_320,f_auto,q_auto,fl_lossy,c_fill,g_auto/991ec3ea62a247f597bdae8600e4ca9d_9366/Beckenbauer_Track_Jacket_Blue_HK7411_21_model.jpg",
        url: "https://www.adidas.com/us/beckenbauer-track-jacket/HK7411.html",
      },
      {
        alt: "Product color: Team Navy / Scarlet / White",
        img: "https://assets.adidas.com/images/w_320,f_auto,q_auto,fl_lossy,c_fill,g_auto/a74192ed425c44cbb245ae8600e7b95c_9366/Beckenbauer_Track_Jacket_Blue_HS8946_21_model.jpg",
        url: "https://www.adidas.com/us/beckenbauer-track-jacket/HS8946.html",
      },
    ],
    description:
      "An iconic track jacket made in part with Parley Ocean Plastic.These days, the adidas Beckenbauer track jacket is worn everywhere from sidewalks to clubs to cafés. But it will forever be rooted to the pitch. Celebrating a legacy that started in the '60s, this piece has all the classic details like the 3-Stripes and high neck, plus eye-catching colors that scream soccer. So zip in and celebrate the beautiful game. Wherever you are.\n\nThis garment is made with a yarn which contains 50% Parley Ocean Plastic — reimagined plastic waste, intercepted on remote islands, beaches, coastal communities and shorelines, preventing it from polluting our ocean. This garment contains at least 40% recycled content in total.",
  },
  {
    _id: {
      $oid: "638c20ede045526f5ebc0a3f",
    },
    imgs: [
      "https://assets.adidas.com/images/w_600,f_auto,q_auto/77e9d8d80120463bb3e3aed3012752d9_9366/Blue_Version_Chile_62_Wool_Coat_Black_HM6467_HM1.jpg",
      "https://assets.adidas.com/images/w_600,f_auto,q_auto/f7834075f341470a85beaed301275b6f_9366/Blue_Version_Chile_62_Wool_Coat_Black_HM6467_HM3_hover.jpg",
      "https://assets.adidas.com/images/w_600,f_auto,q_auto/06be893a6a984f8e8dfeaed3012764ec_9366/Blue_Version_Chile_62_Wool_Coat_Black_HM6467_HM4.jpg",
      "https://assets.adidas.com/images/w_600,f_auto,q_auto/26a82d42fa144a2ea42eaed30127967e_9366/Blue_Version_Chile_62_Wool_Coat_Black_HM6467_HM5.jpg",
      "https://assets.adidas.com/images/w_600,f_auto,q_auto/7ae594cac40945f9a9d7aed301279c81_9366/Blue_Version_Chile_62_Wool_Coat_Black_HM6467_HM6.jpg",
      "https://assets.adidas.com/images/w_600,f_auto,q_auto/64d29b48bb4a41979b6eaed30127a58c_9366/Blue_Version_Chile_62_Wool_Coat_Black_HM6467_HM7.jpg",
      "https://assets.adidas.com/images/w_600,f_auto,q_auto/3bf6704613cb49ea9a9daed30127ae1d_9366/Blue_Version_Chile_62_Wool_Coat_Black_HM6467_HM8.jpg",
      "https://assets.adidas.com/images/w_600,f_auto,q_auto/989310763a5e432c9c40aed30127b5e2_9366/Blue_Version_Chile_62_Wool_Coat_Black_HM6467_HM9.jpg",
      "https://assets.adidas.com/images/w_600,f_auto,q_auto/88cdc5916d6b440d916caed2012ceec1_9366/Blue_Version_Chile_62_Wool_Coat_Black_HM6467_HM30.jpg",
    ],
    name: "Blue Version Chile 62 Wool Coat",
    price: "$350",
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: [],
    description:
      "A classic wool coat revisited with a blend of luxurious textures.\"This drop of Blue Version goes 'into the night,' bringing a hard-edged attitude to sportswear. Iconic elements of adidas are revisited through sartorial evening tailoring and utility workwear, as we look to the future to tell stories of the past\" — Originals Senior Design Director, Stefano Pierre Beruschi. \n\nA wardrobe staple gains a fresh perspective in a luxurious contrast of wool and velvety fabric. The Blue Version Chile 62 Wool Coat brings all the hallmarks of elevated outerwear, with its double-breasted opening and classic pockets. The archival high-shine Chile 62 fabric lines the coat, bringing a terrace feel to a sophisticated look.",
  },
  {
    _id: {
      $oid: "638c20ede045526f5ebc0a40",
    },
    imgs: [
      "https://assets.adidas.com/images/w_600,f_auto,q_auto/70f7f17bba9a483894b2ae9400ec7a1e_9366/Utilitas_RAIN.RDY_Anorak_Blue_HG8579_21_model.jpg",
      "https://assets.adidas.com/images/w_600,f_auto,q_auto/de19396c8a424b99add9ae9400ec829d_9366/Utilitas_RAIN.RDY_Anorak_Blue_HG8579_22_model.jpg",
      "https://assets.adidas.com/images/w_600,f_auto,q_auto/3fc1451c39a3424eb6dcae9400ec8c6b_9366/Utilitas_RAIN.RDY_Anorak_Blue_HG8579_23_hover_model.jpg",
      "https://assets.adidas.com/images/w_600,f_auto,q_auto/a983913ec5184bbd8a83ae9400ec959d_9366/Utilitas_RAIN.RDY_Anorak_Blue_HG8579_25_model.jpg",
      "https://assets.adidas.com/images/w_600,f_auto,q_auto/76b0eb64c9fd4fc6a1a9ae92001bb5c3_9366/Utilitas_RAIN.RDY_Anorak_Blue_HG8579_01_laydown.jpg",
      "https://assets.adidas.com/images/w_600,f_auto,q_auto/60afd1b24bdc48459c21ae9400ec9d27_9366/Utilitas_RAIN.RDY_Anorak_Blue_HG8579_25_outfit.jpg",
      "https://assets.adidas.com/images/w_600,f_auto,q_auto/7dad5994e9c6468283ffae9400eca967_9366/Utilitas_RAIN.RDY_Anorak_Blue_HG8579_41_detail.jpg",
      "https://assets.adidas.com/images/w_600,f_auto,q_auto/ee66290a07ca4c78a3b7ae9400ecb37a_9366/Utilitas_RAIN.RDY_Anorak_Blue_HG8579_42_detail.jpg",
      "https://assets.adidas.com/images/w_600,f_auto,q_auto/e597f68953534bb08921ae9400ecc13a_9366/Utilitas_RAIN.RDY_Anorak_Blue_HG8579_43_detail.jpg",
    ],
    name: "Utilitas RAIN.RDY Anorak",
    price: "$170",
    sizes: ["S", "M", "L", "XL", "2XL", "3XL"],
    colors: [
      {
        alt: "Product color: Pulse Olive",
        img: "https://assets.adidas.com/images/w_320,f_auto,q_auto,fl_lossy,c_fill,g_auto/20f5fdbbd50e4c2d9e5daeb00015fd2d_9366/Utilitas_RAIN.RDY_Anorak_Green_HD8913_21_model.jpg",
        url: "https://www.adidas.com/us/utilitas-rain.rdy-anorak/HD8913.html",
      },
      {
        alt: "Product color: Wonder Steel",
        img: "https://assets.adidas.com/images/w_320,f_auto,q_auto,fl_lossy,c_fill,g_auto/70f7f17bba9a483894b2ae9400ec7a1e_9366/Utilitas_RAIN.RDY_Anorak_Blue_HG8579_21_model.jpg",
        url: "https://www.adidas.com/us/utilitas-rain.rdy-anorak/HG8579.html",
      },
    ],
    description:
      "A rain jacket made with recycled materials.Style matters, and this adidas rain jacket blends a modern design with practical function for adventurous days in the city. The multi-compartment kangaroo pocket offers plenty of storage to organize everyday carry items like your phone, keys, earbuds and more. RAIN.RDY seals out wet, windy weather while letting your body breathe to keep you dry and comfortable all day long.",
  },
  {
    _id: {
      $oid: "638c20ede045526f5ebc0a41",
    },
    imgs: [
      "https://assets.adidas.com/images/w_600,f_auto,q_auto/626d489c0f6b4465bf4aaed3011acc8d_9366/Blue_Version_Firebird_Track_Top_Black_HM2342_HM1.jpg",
      "https://assets.adidas.com/images/w_600,f_auto,q_auto/068b10859a1a4437a525aed3011ad3fe_9366/Blue_Version_Firebird_Track_Top_Black_HM2342_HM3_hover.jpg",
      "https://assets.adidas.com/images/w_600,f_auto,q_auto/cb4d804d8ab448adb5ebaed3011adc52_9366/Blue_Version_Firebird_Track_Top_Black_HM2342_HM4.jpg",
      "https://assets.adidas.com/images/w_600,f_auto,q_auto/3653c966871646c2a447aed3011b100d_9366/Blue_Version_Firebird_Track_Top_Black_HM2342_HM5.jpg",
      "https://assets.adidas.com/images/w_600,f_auto,q_auto/531130df7b1a47459a8aaed3011b17cc_9366/Blue_Version_Firebird_Track_Top_Black_HM2342_HM6.jpg",
      "https://assets.adidas.com/images/w_600,f_auto,q_auto/ed52e1e913774a26bc3eaed3011b1f90_9366/Blue_Version_Firebird_Track_Top_Black_HM2342_HM7.jpg",
      "https://assets.adidas.com/images/w_600,f_auto,q_auto/fc25516fc8d94ed08b88aed3011b26cc_9366/Blue_Version_Firebird_Track_Top_Black_HM2342_HM8.jpg",
      "https://assets.adidas.com/images/w_600,f_auto,q_auto/daba3043c3104d4191c8aed3011b2f1f_9366/Blue_Version_Firebird_Track_Top_Black_HM2342_HM9.jpg",
      "https://assets.adidas.com/images/w_600,f_auto,q_auto/39a737a45a584e3c9268aed300ae9e73_9366/Blue_Version_Firebird_Track_Top_Black_HM2342_HM30.jpg",
    ],
    name: "Blue Version Firebird Track Top",
    price: "$275",
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: [],
    description:
      "The iconic Firebird tracksuit recoded with a tailored eye in wool cotton.\"This drop of Blue Version goes 'into the night,' bringing a hard-edged attitude to sportswear. Iconic elements of adidas are revisited through sartorial evening tailoring and utility workwear, as we look to the future to tell stories of the past\" — Originals Senior Design Director, Stefano Pierre Beruschi. \n\nBlue Version continues to look to cultural movements from decades-gone-by to define a vision for the future. The Blue Version Firebird Track Top pays homage to the golden age of hip-hop and Brooklyn style, with a luxurious take on a nineties classic. Recoded in soft wool cotton mix, the top has a tailored feel for uptown, downtown, and anything in between.",
  },
  {
    _id: {
      $oid: "638c20ede045526f5ebc0a42",
    },
    imgs: [
      "https://assets.adidas.com/images/w_600,f_auto,q_auto/31f11932259e46c5b325ae710177d6d2_9366/RAIN.RDY_Full-Zip_Jacket_Black_HN4128_21_model.jpg",
      "https://assets.adidas.com/images/w_600,f_auto,q_auto/6dce58350bf64bd3bae2ae710179d10a_9366/RAIN.RDY_Full-Zip_Jacket_Black_HN4128_23_hover_model.jpg",
      "https://assets.adidas.com/images/w_600,f_auto,q_auto/e10213e4f03d454d8defae71017b3507_9366/RAIN.RDY_Full-Zip_Jacket_Black_HN4128_25_model.jpg",
      "https://assets.adidas.com/images/w_600,f_auto,q_auto/71b5cfe10c854a9c92fdae3401672418_9366/RAIN.RDY_Full-Zip_Jacket_Black_HN4128_01_laydown.jpg",
      "https://assets.adidas.com/images/w_600,f_auto,q_auto/3d73aeae606b48a288ddae71017a18ab_9366/RAIN.RDY_Full-Zip_Jacket_Black_HN4128_25_outfit.jpg",
      "https://assets.adidas.com/images/w_600,f_auto,q_auto/6deef9b66c6346afac58ae7101788576_9366/RAIN.RDY_Full-Zip_Jacket_Black_HN4128_41_detail.jpg",
      "https://assets.adidas.com/images/w_600,f_auto,q_auto/7a6bb67dd0c544719005ae71017ab699_9366/RAIN.RDY_Full-Zip_Jacket_Black_HN4128_42_detail.jpg",
    ],
    name: "RAIN.RDY Full-Zip Jacket",
    price: "$280",
    sizes: ["S", "M", "L", "XL", "2XL"],
    colors: [
      {
        alt: "Product color: Hemp",
        img: "https://assets.adidas.com/images/w_320,f_auto,q_auto,fl_lossy,c_fill,g_auto/42b685fb59e54eb39d75ae4a012ed148_9366/RAIN.RDY_Full-Zip_Jacket_Beige_HI3461_21_model.jpg",
        url: "https://www.adidas.com/us/rain.rdy-full-zip-jacket/HI3461.html",
      },
      {
        alt: "Product color: Black",
        img: "https://assets.adidas.com/images/w_320,f_auto,q_auto,fl_lossy,c_fill,g_auto/31f11932259e46c5b325ae710177d6d2_9366/RAIN.RDY_Full-Zip_Jacket_Black_HN4128_21_model.jpg",
        url: "https://www.adidas.com/us/rain.rdy-full-zip-jacket/HN4128.html",
      },
    ],
    description:
      "A waterproof golf rain jacket made with recycled materials.All weather is good weather for a round of golf when you're prepared to stay dry and warm. This waterproof, breathable adidas golf rain jacket sets you up to play through steady drizzle or a passing shower. RAIN.RDY seals out wet weather to keep you dry and comfortable. The ultralight, three-layer build features a soft, quiet material with plenty of stretch that doesn't distract as you move. Zip pockets add utility for storing tees, phone or balls.",
  },
  {
    _id: {
      $oid: "638c20ede045526f5ebc0a43",
    },
    imgs: [
      "https://assets.adidas.com/images/w_600,f_auto,q_auto/a56a53b84c5a44a5b1f1aeba00ab2e37_9366/Tiro_Long_Down_Coat_Black_HN5511_21_model.jpg",
      "https://assets.adidas.com/images/w_600,f_auto,q_auto/5a9101dcb3f54853af8aaeba00ab3557_9366/Tiro_Long_Down_Coat_Black_HN5511_23_hover_model.jpg",
      "https://assets.adidas.com/images/w_600,f_auto,q_auto/9911e448d15e4b049cd4aeba00ab3cec_9366/Tiro_Long_Down_Coat_Black_HN5511_25_model.jpg",
      "https://assets.adidas.com/images/w_600,f_auto,q_auto/d41cf6e47d9c45ca8984aeba00ab6e38_9366/Tiro_Long_Down_Coat_Black_HN5511_01_laydown.jpg",
      "https://assets.adidas.com/images/w_600,f_auto,q_auto/febb689d68464024b7e0aeba00ab438a_9366/Tiro_Long_Down_Coat_Black_HN5511_25_outfit.jpg",
      "https://assets.adidas.com/images/w_600,f_auto,q_auto/59f67cc5a72b4e54b3d7aeba00ab4e1e_9366/Tiro_Long_Down_Coat_Black_HN5511_41_detail.jpg",
      "https://assets.adidas.com/images/w_600,f_auto,q_auto/6bc8867b705d4def9e73aeba00ab57e6_9366/Tiro_Long_Down_Coat_Black_HN5511_42_detail.jpg",
      "https://assets.adidas.com/images/w_600,f_auto,q_auto/f34c27aee1d74368993daeba00ab6213_9366/Tiro_Long_Down_Coat_Black_HN5511_43_detail.jpg",
    ],
    name: "Tiro Long Down Coat",
    price: "$280",
    sizes: ["XS", "S", "M", "L", "XL", "2XL"],
    colors: [],
    description:
      "A wind- and water-repellent down coat made with recycled materials.This adidas down coat shows off tartan accents that nod to soccer supporter fashion. It has a slim fit that hugs the body and keeps you warm when the temperature drops. WIND.RDY shields you from the elements during those gusty days. The water-resistant coating ensures you stay dry when it rains, so you can keep supporting your team.\n\nMade with 100% recycled materials, this product represents just one of our solutions to help end plastic waste.",
  },
  {
    _id: {
      $oid: "638c20ede045526f5ebc0a44",
    },
    imgs: [
      "https://assets.adidas.com/images/w_600,f_auto,q_auto/4a7ec1dbe4784147981faec80105676c_9366/Varsity_Jacket_Red_HY6037_21_model.jpg",
      "https://assets.adidas.com/images/w_600,f_auto,q_auto/aa3166f0130a401a8f63aec801056fbb_9366/Varsity_Jacket_Red_HY6037_23_hover_model.jpg",
      "https://assets.adidas.com/images/w_600,f_auto,q_auto/7977c026f69b4eec8a6baec80105776a_9366/Varsity_Jacket_Red_HY6037_25_model.jpg",
      "https://assets.adidas.com/images/w_600,f_auto,q_auto/3ca9f57c1922476c9714aed20102d4b4_9366/Varsity_Jacket_Red_HY6037_01_laydown.jpg",
      "https://assets.adidas.com/images/w_600,f_auto,q_auto/3f68b622483d469d9ea6aec80105824c_9366/Varsity_Jacket_Red_HY6037_41_detail.jpg",
      "https://assets.adidas.com/images/w_600,f_auto,q_auto/f91d32643b4249be9b2baec801058d8a_9366/Varsity_Jacket_Red_HY6037_42_detail.jpg",
    ],
    name: "Varsity Jacket",
    price: "$110",
    sizes: ["XS", "S", "M", "L", "XL", "2XL"],
    colors: [],
    description:
      'A soft teddy fleece jacket lined with smooth taffeta.A tried-and-true classic, this adidas jacket embraces a collegiate aesthetic with contrast details and a chenille "A" patch on the chest. It switches up the expected materials, though, and gets done up in plush teddy fleece fabric for added warmth and comfort.',
  },
  {
    _id: {
      $oid: "638c20ede045526f5ebc0a45",
    },
    imgs: [
      "https://assets.adidas.com/images/w_600,f_auto,q_auto/25160a6345544128a61baeb500e29f6f_9366/Terrex_CT_MYSHELTER_GORE-TEX_Jacket_(Gender_Neutral)_Black_HG6033_21_model.jpg",
      "https://assets.adidas.com/images/w_600,f_auto,q_auto/e0549e15619443808e0eaeaf00c5af87_9366/Terrex_CT_MYSHELTER_GORE-TEX_Jacket_(Gender_Neutral)_Black_HG6033_22_model.jpg",
      "https://assets.adidas.com/images/w_600,f_auto,q_auto/e3d7b7a469fb44bf8ecbaeb500e2a75e_9366/Terrex_CT_MYSHELTER_GORE-TEX_Jacket_(Gender_Neutral)_Black_HG6033_23_hover_model.jpg",
      "https://assets.adidas.com/images/w_600,f_auto,q_auto/75055336b9554dc2933caeaf00c60ced_9366/Terrex_CT_MYSHELTER_GORE-TEX_Jacket_(Gender_Neutral)_Black_HG6033_25_model.jpg",
      "https://assets.adidas.com/images/w_600,f_auto,q_auto/e9d809db5bc4404e974caeb500e2b5a6_9366/Terrex_CT_MYSHELTER_GORE-TEX_Jacket_(Gender_Neutral)_Black_HG6033_01_laydown.jpg",
      "https://assets.adidas.com/images/w_600,f_auto,q_auto/9c516250e6374b7c9712aeaf00c62f84_9366/Terrex_CT_MYSHELTER_GORE-TEX_Jacket_(Gender_Neutral)_Black_HG6033_25_outfit.jpg",
      "https://assets.adidas.com/images/w_600,f_auto,q_auto/512bf9eb7c9b461f9c95aeaf00c689d5_9366/Terrex_CT_MYSHELTER_GORE-TEX_Jacket_(Gender_Neutral)_Black_HG6033_41_detail.jpg",
      "https://assets.adidas.com/images/w_600,f_auto,q_auto/c945419279b146b3b98caeaf00c6cf32_9366/Terrex_CT_MYSHELTER_GORE-TEX_Jacket_(Gender_Neutral)_Black_HG6033_42_detail.jpg",
      "https://assets.adidas.com/images/w_600,f_auto,q_auto/34301fd0906f406da29aaeaf00c73057_9366/Terrex_CT_MYSHELTER_GORE-TEX_Jacket_(Gender_Neutral)_Black_HG6033_43_detail.jpg",
    ],
    name: "Terrex CT MYSHELTER GORE-TEX Jacket (Gender Neutral)",
    price: "$380",
    sizes: ["S", "M", "L", "XL", "2XL"],
    colors: [],
    description:
      "A GORE-TEX rain jacket made in part with recycled materials.City life keeps you on the go. This adidas Terrex rain jacket lets you keep moving, no matter the weather. Styled for the city and designed for layering, it seals out wet, windy weather while letting your body breathe, so you arrive at your destination dry and comfortable. Offset front zips let you adjust coverage to match the conditions, and multiple pockets keep everyday carry stuff secure and within reach. Stow away the hood when the sun shines, and adjust the hem and cuffs to complement your layers.",
  },
  {
    _id: {
      $oid: "638c20ede045526f5ebc0a46",
    },
    imgs: [
      "https://assets.adidas.com/images/w_600,f_auto,q_auto/0f5f1ce5763d42918eb4ae9f00946451_9366/Blue_Version_Challenger_Track_Top_Grey_HM2336_HM1.jpg",
      "https://assets.adidas.com/images/w_600,f_auto,q_auto/c15e1f51850b4efe9ae8ae9f00946c6f_9366/Blue_Version_Challenger_Track_Top_Grey_HM2336_HM3_hover.jpg",
      "https://assets.adidas.com/images/w_600,f_auto,q_auto/ed07f88c8c034d9f9629ae9f0094760a_9366/Blue_Version_Challenger_Track_Top_Grey_HM2336_HM4.jpg",
      "https://assets.adidas.com/images/w_600,f_auto,q_auto/4e5bfca278cd40cc8cb3ae9f0094aaa5_9366/Blue_Version_Challenger_Track_Top_Grey_HM2336_HM5.jpg",
      "https://assets.adidas.com/images/w_600,f_auto,q_auto/bd15781136b34026bb0bae9f0094b3e9_9366/Blue_Version_Challenger_Track_Top_Grey_HM2336_HM6.jpg",
      "https://assets.adidas.com/images/w_600,f_auto,q_auto/5e5f1c2ff34844bcb850ae9f0094bcaf_9366/Blue_Version_Challenger_Track_Top_Grey_HM2336_HM7.jpg",
      "https://assets.adidas.com/images/w_600,f_auto,q_auto/33c6e1fd9ae64dec91fcae9f0094c3e1_9366/Blue_Version_Challenger_Track_Top_Grey_HM2336_HM8.jpg",
      "https://assets.adidas.com/images/w_600,f_auto,q_auto/075b396496c7425c8530ae9f0094cc7f_9366/Blue_Version_Challenger_Track_Top_Grey_HM2336_HM9.jpg",
      "https://assets.adidas.com/images/w_600,f_auto,q_auto/512c7d5d242e4a88b10aae9e01160411_9366/Blue_Version_Challenger_Track_Top_Grey_HM2336_HM30.jpg",
    ],
    name: "Blue Version Challenger Track Top",
    price: "$250",
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: [],
    description:
      "A velour track jacket based off an adidas icon.A play on the famed adidas Challenger silhouette, this adidas track top takes a more tailored, modern approach on the classic look. Premium velour adds an unexpected texture done up in an elegant gray hue for an effortless balance of sport and sophistication.\n\nOur cotton products support more sustainable cotton farming.",
  },
  {
    _id: {
      $oid: "638c20ede045526f5ebc0a47",
    },
    imgs: [
      "https://assets.adidas.com/images/w_600,f_auto,q_auto/0460b368d74b43a5af6dae8000897e32_9366/BSC_3-Stripes_RAIN.RDY_Jacket_Green_HG8769_21_model.jpg",
      "https://assets.adidas.com/images/w_600,f_auto,q_auto/98f0a3cb66b641d09792ae80008986ca_9366/BSC_3-Stripes_RAIN.RDY_Jacket_Green_HG8769_22_model.jpg",
      "https://assets.adidas.com/images/w_600,f_auto,q_auto/f2c7d881424b4751ade6ae8000898f6d_9366/BSC_3-Stripes_RAIN.RDY_Jacket_Green_HG8769_23_hover_model.jpg",
      "https://assets.adidas.com/images/w_600,f_auto,q_auto/b22abdf5d7c54aa68f3aae800089990c_9366/BSC_3-Stripes_RAIN.RDY_Jacket_Green_HG8769_25_model.jpg",
      "https://assets.adidas.com/images/w_600,f_auto,q_auto/6c4b04a8e708453085ddae8e00f48011_9366/BSC_3-Stripes_RAIN.RDY_Jacket_Green_HG8769_01_laydown.jpg",
      "https://assets.adidas.com/images/w_600,f_auto,q_auto/be4000e693164b0c99e5ae800089a198_9366/BSC_3-Stripes_RAIN.RDY_Jacket_Green_HG8769_25_outfit.jpg",
      "https://assets.adidas.com/images/w_600,f_auto,q_auto/7e2f51b2630d404bb4fdae800089b098_9366/BSC_3-Stripes_RAIN.RDY_Jacket_Green_HG8769_41_detail.jpg",
      "https://assets.adidas.com/images/w_600,f_auto,q_auto/76186f7792e547a588feae800089bcbd_9366/BSC_3-Stripes_RAIN.RDY_Jacket_Green_HG8769_42_detail.jpg",
      "https://assets.adidas.com/images/w_600,f_auto,q_auto/2dbe7e56aadb4acb97cdae800089c788_9366/BSC_3-Stripes_RAIN.RDY_Jacket_Green_HG8769_43_detail.jpg",
    ],
    name: "BSC 3-Stripes RAIN.RDY Jacket",
    price: "$100",
    sizes: ["M", "XS", "S", "M", "L", "XL", "2XL"],
    colors: [
      {
        alt: "Product color: Black",
        img: "https://assets.adidas.com/images/w_320,f_auto,q_auto,fl_lossy,c_fill,g_auto/6d4c7d117ae441aeba3bae0000c3e75f_9366/BSC_3-Stripes_RAIN.RDY_Jacket_Black_H65773_21_model.jpg",
        url: "https://www.adidas.com/us/bsc-3-stripes-rain.rdy-jacket/H65773.html",
      },
      {
        alt: "Product color: Semi Impact Orange",
        img: "https://assets.adidas.com/images/w_320,f_auto,q_auto,fl_lossy,c_fill,g_auto/63ae6f7adfca41788239ae8000a82078_9366/BSC_3-Stripes_RAIN.RDY_Jacket_Orange_HG8681_21_model.jpg",
        url: "https://www.adidas.com/us/bsc-3-stripes-rain.rdy-jacket/HG8681.html",
      },
      {
        alt: "Product color: Green Oxide",
        img: "https://assets.adidas.com/images/w_320,f_auto,q_auto,fl_lossy,c_fill,g_auto/0460b368d74b43a5af6dae8000897e32_9366/BSC_3-Stripes_RAIN.RDY_Jacket_Green_HG8769_21_model.jpg",
        url: "https://www.adidas.com/us/bsc-3-stripes-rain.rdy-jacket/HG8769.html",
      },
      {
        alt: "Product color: Focus Olive",
        img: "https://assets.adidas.com/images/w_320,f_auto,q_auto,fl_lossy,c_fill,g_auto/9b6d2d542fd4446381feae8000aa3740_9366/BSC_3-Stripes_RAIN.RDY_Jacket_Green_HG8772_21_model.jpg",
        url: "https://www.adidas.com/us/bsc-3-stripes-rain.rdy-jacket/HG8772.html",
      },
    ],
    description:
      "A waterproof jacket made with recycled materials.When the forecast calls for a chance of showers, go ahead and toss this adidas RAIN.RDY jacket in your day pack. It's lightweight insurance against uncertain weather. With fully sealed seams and storm flap zips, it helps protect you from wind and rain while keeping you comfortable on the inside too. Zip up, adjust the hood and hem and stay outdoors until the showers pass.",
  },
  {
    _id: {
      $oid: "638c20ede045526f5ebc0a48",
    },
    imgs: [
      "https://assets.adidas.com/images/w_600,f_auto,q_auto/07930e3cbde242b9a681ae5300d39520_9366/Helionic_Hooded_Down_Jacket_Green_HG8749_21_model.jpg",
      "https://assets.adidas.com/images/w_600,f_auto,q_auto/9acb6117849b42c090e0ae5300d39eae_9366/Helionic_Hooded_Down_Jacket_Green_HG8749_23_hover_model.jpg",
      "https://assets.adidas.com/images/w_600,f_auto,q_auto/d87ce4d349c649fcb3efae5300d3a786_9366/Helionic_Hooded_Down_Jacket_Green_HG8749_25_model.jpg",
      "https://assets.adidas.com/images/w_600,f_auto,q_auto/30de38ea90124e0581bbae5300d3ea82_9366/Helionic_Hooded_Down_Jacket_Green_HG8749_01_laydown.jpg",
      "https://assets.adidas.com/images/w_600,f_auto,q_auto/131d52257d8e4ce4b364ae5300d3afe1_9366/Helionic_Hooded_Down_Jacket_Green_HG8749_25_outfit.jpg",
      "https://assets.adidas.com/images/w_600,f_auto,q_auto/6903bee046c84f05b6fcae5300d3bd30_9366/Helionic_Hooded_Down_Jacket_Green_HG8749_41_detail.jpg",
      "https://assets.adidas.com/images/w_600,f_auto,q_auto/80a5c7ca8f0940ce975aae5300d3cb0c_9366/Helionic_Hooded_Down_Jacket_Green_HG8749_42_detail.jpg",
      "https://assets.adidas.com/images/w_600,f_auto,q_auto/7196a29dbf634fa7a63aae5300d3d822_9366/Helionic_Hooded_Down_Jacket_Green_HG8749_43_detail.jpg",
    ],
    name: "Helionic Hooded Down Jacket",
    price: "$160",
    sizes: ["S", "M", "L", "XL", "2XL"],
    colors: [
      {
        alt: "Product color: Green Oxide",
        img: "https://assets.adidas.com/images/w_320,f_auto,q_auto,fl_lossy,c_fill,g_auto/07930e3cbde242b9a681ae5300d39520_9366/Helionic_Hooded_Down_Jacket_Green_HG8749_21_model.jpg",
        url: "https://www.adidas.com/us/helionic-hooded-down-jacket/HG8749.html",
      },
      {
        alt: "Product color: Black",
        img: "https://assets.adidas.com/images/w_320,f_auto,q_auto,fl_lossy,c_fill,g_auto/d834da546212435b86c4ae8000a9cdb4_9366/Helionic_Hooded_Down_Jacket_Black_HG8751_21_model.jpg",
        url: "https://www.adidas.com/us/helionic-hooded-down-jacket/HG8751.html",
      },
    ],
    description:
      "A classic down jacket made in part with recycled materials.Ah, the timeless style and the unmatched comfort of down. For cold winter days, this adidas down jacket offers go-to warmth that you can feel as soon as you zip it up. Elastic cuffs and an adjustable hem seal in heat for the comfort to get you through winter. Pull up the hood for the ultimate in cozy coverage. Zip pockets keep hands warm and your keys or phone within easy reach.",
  },
  {
    _id: {
      $oid: "638c20ede045526f5ebc0a49",
    },
    imgs: [
      "https://assets.adidas.com/images/w_600,f_auto,q_auto/556bf3fa33dc42eb9498aed30127c91c_9366/Blue_Version_Chile_62_Tailored_Jacket_Black_HM6481_HM1.jpg",
      "https://assets.adidas.com/images/w_600,f_auto,q_auto/a11684c05fba4af5b924aed30127d05c_9366/Blue_Version_Chile_62_Tailored_Jacket_Black_HM6481_HM3_hover.jpg",
      "https://assets.adidas.com/images/w_600,f_auto,q_auto/e334e9ce506945fcb077aed30127d8ee_9366/Blue_Version_Chile_62_Tailored_Jacket_Black_HM6481_HM4.jpg",
      "https://assets.adidas.com/images/w_600,f_auto,q_auto/52c74a7a75d2429e9de8aed3012808b1_9366/Blue_Version_Chile_62_Tailored_Jacket_Black_HM6481_HM5.jpg",
      "https://assets.adidas.com/images/w_600,f_auto,q_auto/73a90bd4d6df4e609fa3aed301281027_9366/Blue_Version_Chile_62_Tailored_Jacket_Black_HM6481_HM6.jpg",
      "https://assets.adidas.com/images/w_600,f_auto,q_auto/bd0eaf8aee344b8eac79aed3012818b5_9366/Blue_Version_Chile_62_Tailored_Jacket_Black_HM6481_HM7.jpg",
      "https://assets.adidas.com/images/w_600,f_auto,q_auto/bc3fc5c058b342de90feaed301281f3b_9366/Blue_Version_Chile_62_Tailored_Jacket_Black_HM6481_HM8.jpg",
      "https://assets.adidas.com/images/w_600,f_auto,q_auto/900b5b8be4a349b48683aed3012826b1_9366/Blue_Version_Chile_62_Tailored_Jacket_Black_HM6481_HM9.jpg",
      "https://assets.adidas.com/images/w_600,f_auto,q_auto/5a48f8d6aad74b2b9fc2aed2012d03b4_9366/Blue_Version_Chile_62_Tailored_Jacket_Black_HM6481_HM30.jpg",
    ],
    name: "Blue Version Chile 62 Tailored Jacket",
    price: "$300",
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: [],
    description:
      "A tailored double-breasted jacket in high-shine Chile 62 fabric.\"This drop of Blue Version goes 'into the night,' bringing a hard-edged attitude to sportswear. Iconic elements of adidas are revisited through sartorial evening tailoring and utility workwear, as we look to the future to tell stories of the past\" — Originals Senior Design Director, Stefano Pierre Beruschi. \n\nBlue Version borrows from the past to create the future of tradition. The Blue Version Chile 62 Tailored Jacket is a beautiful fusion of tailoring and sports heritage. Crafted in a luxurious iteration of Chile 62 tricot fabric, this double-breasted suit is streamlined and cut to traditional menswear lines. A sleek statement for nights in the city.",
  },
  {
    _id: {
      $oid: "638c20ede045526f5ebc0a4a",
    },
    imgs: [
      "https://assets.adidas.com/images/w_600,f_auto,q_auto/e6fbcb4eba4d486aa247ae780186ccc2_9366/1-4-Zip_Fleece_Anorak_Green_HF6608_21_model.jpg",
      "https://assets.adidas.com/images/w_600,f_auto,q_auto/fbcb2f83630c46f189edae7801870f35_9366/1-4-Zip_Fleece_Anorak_Green_HF6608_23_hover_model.jpg",
      "https://assets.adidas.com/images/w_600,f_auto,q_auto/75b9c5f49f7f4f9e85a3ae780188064f_9366/1-4-Zip_Fleece_Anorak_Green_HF6608_25_model.jpg",
      "https://assets.adidas.com/images/w_600,f_auto,q_auto/b5f369948a6049e8afb1ae3d0173ae76_9366/1-4-Zip_Fleece_Anorak_Green_HF6608_01_laydown.jpg",
      "https://assets.adidas.com/images/w_600,f_auto,q_auto/2a7ad6c6a3324aff863bae7801874dc7_9366/1-4-Zip_Fleece_Anorak_Green_HF6608_41_detail.jpg",
      "https://assets.adidas.com/images/w_600,f_auto,q_auto/2a1e970dbbc34dac9be6ae780187a9f0_9366/1-4-Zip_Fleece_Anorak_Green_HF6608_42_detail.jpg",
    ],
    name: "1/4-Zip Fleece Anorak",
    price: "$110",
    sizes: ["S", "M", "L", "XL", "2XL"],
    colors: [
      {
        alt: "Product color: Linen Green",
        img: "https://assets.adidas.com/images/w_320,f_auto,q_auto,fl_lossy,c_fill,g_auto/e6fbcb4eba4d486aa247ae780186ccc2_9366/1-4-Zip_Fleece_Anorak_Green_HF6608_21_model.jpg",
        url: "https://www.adidas.com/us/1-4-zip-fleece-anorak/HF6608.html",
      },
      {
        alt: "Product color: Crew Navy",
        img: "https://assets.adidas.com/images/w_320,f_auto,q_auto,fl_lossy,c_fill,g_auto/31b352cf0bb34a30bf63ae79000c915c_9366/1-4-Zip_Fleece_Anorak_Blue_HM8284_21_model.jpg",
        url: "https://www.adidas.com/us/1-4-zip-fleece-anorak/HM8284.html",
      },
    ],
    description:
      "A versatile fleece golf jacket made in part with recycled materials.Welcome cool-weather rounds in a fleece jacket that's made for playing golf. This adidas anorak offers the warmth you need for chilly days and the range of motion to match your game. A hybrid woven knit adds a technical feel, while raglan sleeves and plenty of stretch ensure an unrestricted range of motion through your upper body.\n\nMade with a series of recycled materials, and at least 60% recycled content, this product represents just one of our solutions to help end plastic waste.",
  },
  {
    _id: {
      $oid: "638c20ede045526f5ebc0a4b",
    },
    imgs: [
      "https://assets.adidas.com/images/w_600,f_auto,q_auto/f98028dff7a2450998a7ae8600f39ad1_9366/Beckenbauer_Track_Jacket_Blue_HK7406_21_model.jpg",
      "https://assets.adidas.com/images/w_600,f_auto,q_auto/bc82c7fe66a44ad9a04eae8600f3a398_9366/Beckenbauer_Track_Jacket_Blue_HK7406_23_hover_model.jpg",
      "https://assets.adidas.com/images/w_600,f_auto,q_auto/928135d807ce4b7b809fae8600f3ae3e_9366/Beckenbauer_Track_Jacket_Blue_HK7406_25_model.jpg",
      "https://assets.adidas.com/images/w_600,f_auto,q_auto/ea95ef3def73439ea35dae8600f3d9fd_9366/Beckenbauer_Track_Jacket_Blue_HK7406_01_laydown.jpg",
      "https://assets.adidas.com/images/w_600,f_auto,q_auto/35643ef353564eb88de6ae8600f3bbbc_9366/Beckenbauer_Track_Jacket_Blue_HK7406_41_detail.jpg",
      "https://assets.adidas.com/images/w_600,f_auto,q_auto/d06544c06d7742a08793ae8600f3c870_9366/Beckenbauer_Track_Jacket_Blue_HK7406_42_detail.jpg",
    ],
    name: "Beckenbauer Track Jacket",
    price: "$85",
    sizes: ["XS", "S", "M", "L", "XL", "2XL"],
    colors: [
      {
        alt: "Product color: Royal Blue / Royal Blue / White / Team Power Red",
        img: "https://assets.adidas.com/images/w_320,f_auto,q_auto,fl_lossy,c_fill,g_auto/f98028dff7a2450998a7ae8600f39ad1_9366/Beckenbauer_Track_Jacket_Blue_HK7406_21_model.jpg",
        url: "https://www.adidas.com/us/beckenbauer-track-jacket/HK7406.html",
      },
      {
        alt: "Product color: Team Power Red / Team Power Red / Team Colleg Gold",
        img: "https://assets.adidas.com/images/w_320,f_auto,q_auto,fl_lossy,c_fill,g_auto/ea501ac293b54676a045ae8600f3f4d9_9366/Beckenbauer_Track_Jacket_Red_HK7407_21_model.jpg",
        url: "https://www.adidas.com/us/beckenbauer-track-jacket/HK7407.html",
      },
      {
        alt: "Product color: Black / White / Team Power Red / Team Colleg Gold",
        img: "https://assets.adidas.com/images/w_320,f_auto,q_auto,fl_lossy,c_fill,g_auto/957c65e614274652b67aae8600f44f22_9366/Beckenbauer_Track_Jacket_Black_HK7408_21_model.jpg",
        url: "https://www.adidas.com/us/beckenbauer-track-jacket/HK7408.html",
      },
      {
        alt: "Product color: Light Blue / White / Gold Metallic",
        img: "https://assets.adidas.com/images/w_320,f_auto,q_auto,fl_lossy,c_fill,g_auto/190df2daefcf434f94b6ae860107d649_9366/Beckenbauer_Track_Jacket_Blue_HK7409_21_model.jpg",
        url: "https://www.adidas.com/us/beckenbauer-track-jacket/HK7409.html",
      },
      {
        alt: "Product color: Team Yellow / Team Green / Bold Blue",
        img: "https://assets.adidas.com/images/w_320,f_auto,q_auto,fl_lossy,c_fill,g_auto/89b00a12542e439287f9ae8601082e34_9366/Beckenbauer_Track_Jacket_Yellow_HK7410_21_model.jpg",
        url: "https://www.adidas.com/us/beckenbauer-track-jacket/HK7410.html",
      },
      {
        alt: "Product color: Bright Royal / White / Red / Green",
        img: "https://assets.adidas.com/images/w_320,f_auto,q_auto,fl_lossy,c_fill,g_auto/991ec3ea62a247f597bdae8600e4ca9d_9366/Beckenbauer_Track_Jacket_Blue_HK7411_21_model.jpg",
        url: "https://www.adidas.com/us/beckenbauer-track-jacket/HK7411.html",
      },
      {
        alt: "Product color: Team Navy / Scarlet / White",
        img: "https://assets.adidas.com/images/w_320,f_auto,q_auto,fl_lossy,c_fill,g_auto/a74192ed425c44cbb245ae8600e7b95c_9366/Beckenbauer_Track_Jacket_Blue_HS8946_21_model.jpg",
        url: "https://www.adidas.com/us/beckenbauer-track-jacket/HS8946.html",
      },
    ],
    description:
      "An iconic track jacket made in part with Parley Ocean Plastic.These days, the adidas Beckenbauer track jacket is worn everywhere from sidewalks to clubs to cafés. But it will forever be rooted to the pitch. Celebrating a legacy that started in the '60s, this piece has all the classic details like the 3-Stripes and high neck, plus eye-catching colors that scream soccer. So zip in and celebrate the beautiful game. Wherever you are.\n\nThis garment is made with a yarn which contains 50% Parley Ocean Plastic — reimagined plastic waste, intercepted on remote islands, beaches, coastal communities and shorelines, preventing it from polluting our ocean. This garment contains at least 40% recycled content in total.",
  },
  {
    _id: {
      $oid: "638c20ede045526f5ebc0a4c",
    },
    imgs: [
      "https://assets.adidas.com/images/w_600,f_auto,q_auto/b1ee2b9254474369a3c0ae8d00c3147a_9366/Puffer_Jacket_Purple_HN1940_21_model.jpg",
      "https://assets.adidas.com/images/w_600,f_auto,q_auto/4485017deac445cb93baae8d00c31c93_9366/Puffer_Jacket_Purple_HN1940_22_model.jpg",
      "https://assets.adidas.com/images/w_600,f_auto,q_auto/b036d13705ca4112a734ae8d00c324af_9366/Puffer_Jacket_Purple_HN1940_23_hover_model.jpg",
      "https://assets.adidas.com/images/w_600,f_auto,q_auto/feca0a0bf0ff4531a010ae8d00c32e98_9366/Puffer_Jacket_Purple_HN1940_25_model.jpg",
      "https://assets.adidas.com/images/w_600,f_auto,q_auto/db378232101c4522bd6bae8900e3a603_9366/Puffer_Jacket_Purple_HN1940_01_laydown.jpg",
      "https://assets.adidas.com/images/w_600,f_auto,q_auto/2f43fa5d296548828473ae8d00c33961_9366/Puffer_Jacket_Purple_HN1940_41_detail.jpg",
      "https://assets.adidas.com/images/w_600,f_auto,q_auto/59cf23e47de84bd1818bae8d00c34420_9366/Puffer_Jacket_Purple_HN1940_42_detail.jpg",
      "https://assets.adidas.com/images/w_600,f_auto,q_auto/c3e7d0526b6743cead5eae8d00c34eec_9366/Puffer_Jacket_Purple_HN1940_43_detail.jpg",
    ],
    name: "Puffer Jacket",
    price: "$300",
    sizes: ["XS", "S", "M", "L", "XL", "2XL"],
    colors: [
      {
        alt: "Product color: Black",
        img: "https://assets.adidas.com/images/w_320,f_auto,q_auto,fl_lossy,c_fill,g_auto/1cca19d1f73345dc8825ae9800be6ee1_9366/Puffer_Jacket_Black_HG2065_21_model.jpg",
        url: "https://www.adidas.com/us/puffer-jacket/HG2065.html",
      },
      {
        alt: "Product color: Silver Dawn",
        img: "https://assets.adidas.com/images/w_320,f_auto,q_auto,fl_lossy,c_fill,g_auto/b1ee2b9254474369a3c0ae8d00c3147a_9366/Puffer_Jacket_Purple_HN1940_21_model.jpg",
        url: "https://www.adidas.com/us/puffer-jacket/HN1940.html",
      },
    ],
    description:
      "An insulated down jacket made with recycled materials.We're used to unpredictability. You never know what's going to happen, and that can be part of the fun. This adidas down jacket lets you embrace that mentality all while keeping you comfortable when the weather shifts. The insulated build makes sure you stay warm, with a full zip and high neck to really make sure the cold stays out. Layer it on — it's loose, which makes that easy — and head out.\n\nMade with 100% recycled materials, this product represents just one of our solutions to help end plastic waste.",
  },
  {
    _id: {
      $oid: "638c20ede045526f5ebc0a4d",
    },
    imgs: [
      "https://assets.adidas.com/images/w_600,f_auto,q_auto/8ae525931c6e40a78125ae61012812e3_9366/Essentials_Down_Jacket_Green_HK4648_21_model.jpg",
      "https://assets.adidas.com/images/w_600,f_auto,q_auto/227a1794b63d40709499ae6101281bd7_9366/Essentials_Down_Jacket_Green_HK4648_23_hover_model.jpg",
      "https://assets.adidas.com/images/w_600,f_auto,q_auto/f5b55ae304324e8fadd0ae6101282621_9366/Essentials_Down_Jacket_Green_HK4648_25_model.jpg",
      "https://assets.adidas.com/images/w_600,f_auto,q_auto/18cd14b058404aa29e29ae6101285b56_9366/Essentials_Down_Jacket_Green_HK4648_01_laydown.jpg",
      "https://assets.adidas.com/images/w_600,f_auto,q_auto/660c8044d748486c8d29ae6101282d91_9366/Essentials_Down_Jacket_Green_HK4648_25_outfit.jpg",
      "https://assets.adidas.com/images/w_600,f_auto,q_auto/49767321638e4a908c2dae6101283bd2_9366/Essentials_Down_Jacket_Green_HK4648_41_detail.jpg",
      "https://assets.adidas.com/images/w_600,f_auto,q_auto/9384d7192d8444988e89ae61012849b3_9366/Essentials_Down_Jacket_Green_HK4648_42_detail.jpg",
    ],
    name: "Essentials Down Jacket",
    price: "$100",
    sizes: ["S", "M", "L", "XL", "2XL", "3XL"],
    colors: [],
    description:
      "A warm down jacket with 3-Stripes style.Little compares to the lightweight warmth of down. Zip up the adidas Essentials Down Jacket and experience it for yourself. Down baffles seal in the heat, and classic 3-Stripes style keeps it street ready. It's made of recycled materials, one important step toward reducing environmental impact.",
  },
  {
    _id: {
      $oid: "638c20ede045526f5ebc0a4e",
    },
    imgs: [
      "https://assets.adidas.com/images/w_600,f_auto,q_auto/cc920e57c76146809c40af33010b2c3e_9366/ANNIVERSARY_TRACK_TOP_(GENDER_NEUTRAL)_Blue_IA8346_21_model.jpg",
      "https://assets.adidas.com/images/w_600,f_auto,q_auto/d0e34bc0f36c4e31b9aeaf4a0058ce61_9366/ANNIVERSARY_TRACK_TOP_(GENDER_NEUTRAL)_Blue_IA8346_23_hover_model.jpg",
      "https://assets.adidas.com/images/w_600,f_auto,q_auto/11c9b58800944a11b7f2af3200d8052b_9366/ANNIVERSARY_TRACK_TOP_(GENDER_NEUTRAL)_Blue_IA8346_25_model.jpg",
      "https://assets.adidas.com/images/w_600,f_auto,q_auto/709ae043a062452b89c0aed8008f847f_9366/ANNIVERSARY_TRACK_TOP_(GENDER_NEUTRAL)_Blue_IA8346_01_laydown.jpg",
      "https://assets.adidas.com/images/w_600,f_auto,q_auto/19a2883de91f4fe98dcbaf3200d8142a_9366/ANNIVERSARY_TRACK_TOP_(GENDER_NEUTRAL)_Blue_IA8346_41_detail.jpg",
      "https://assets.adidas.com/images/w_600,f_auto,q_auto/e9b391e6033e43a28d32af3200d81dc7_9366/ANNIVERSARY_TRACK_TOP_(GENDER_NEUTRAL)_Blue_IA8346_42_detail.jpg",
    ],
    name: "ANNIVERSARY TRACK TOP (GENDER NEUTRAL)",
    price: "$110",
    sizes: ["2XS", "XS", "S", "M", "L", "XL", "2XL"],
    colors: [
      {
        alt: "Product color: Legend Ink",
        img: "https://assets.adidas.com/images/w_320,f_auto,q_auto,fl_lossy,c_fill,g_auto/cc920e57c76146809c40af33010b2c3e_9366/ANNIVERSARY_TRACK_TOP_(GENDER_NEUTRAL)_Blue_IA8346_21_model.jpg",
        url: "https://www.adidas.com/us/anniversary-track-top-gender-neutral/IA8346.html",
      },
      {
        alt: "Product color: Beige Tone",
        img: "https://assets.adidas.com/images/w_320,f_auto,q_auto,fl_lossy,c_fill,g_auto/1c81275591ce454aabfdaf3200d86480_9366/ANNIVERSARY_TRACK_TOP_(GENDER_NEUTRAL)_Beige_IA8347_21_model.jpg",
        url: "https://www.adidas.com/us/anniversary-track-top-gender-neutral/IA8347.html",
      },
    ],
    description:
      "CHECKED TRACK TOP WITH COLLEGIATE-INSPIRED BACK BADGECarry the energy of community wherever you go in the new varsity-inspired collection. Pulling from the legacy of collegiate style, the lineup celebrates authentic connections, the team spirit in the heart of our cities — and the pride found in showing off your true stripes.\n\nGet your prep on with this oversized Anniversary Track Top, made to bring old-school cool to your everyday look. With its stylish class of '72 'A' badge – celebrating the year the Trefoil logo was born – this jacket brings all the vibes from way back when to the here and now. Throw it on over any outfit for instant varsity vibes or pair it with its matching trackpants for an elevated vintage aesthetic. It's prepped for the city – are you? Only at adidas.",
  },
  {
    _id: {
      $oid: "638c20ede045526f5ebc0a4f",
    },
    imgs: [
      "https://assets.adidas.com/images/w_600,f_auto,q_auto/91ff47c23abf4704830caeec0131a48a_9366/Tiro_23_Pro_Top_Black_IB5834_21_model.jpg",
      "https://assets.adidas.com/images/w_600,f_auto,q_auto/49fa7f1519dd4a7f9449aeec0131ae3e_9366/Tiro_23_Pro_Top_Black_IB5834_23_hover_model.jpg",
      "https://assets.adidas.com/images/w_600,f_auto,q_auto/024cc8227d484feb8e2daeec0131b800_9366/Tiro_23_Pro_Top_Black_IB5834_25_model.jpg",
      "https://assets.adidas.com/images/w_600,f_auto,q_auto/9cf82362f2e342ae89a4aeec0131e4a7_9366/Tiro_23_Pro_Top_Black_IB5834_01_laydown.jpg",
      "https://assets.adidas.com/images/w_600,f_auto,q_auto/401c556a36c64ab3aaf5aeec0131c420_9366/Tiro_23_Pro_Top_Black_IB5834_41_detail.jpg",
      "https://assets.adidas.com/images/w_600,f_auto,q_auto/c4b09150ca924fb588ffaeec0131d09e_9366/Tiro_23_Pro_Top_Black_IB5834_42_detail.jpg",
    ],
    name: "Tiro 23 Pro Top",
    price: "$120",
    sizes: ["XS", "S", "M", "L", "XL", "2XL", "3XL"],
    colors: [],
    description:
      "A fleece top for soccer's finest, made in part with recycled materials.This adidas soccer top celebrates the height of the sport at its grandest stage. It has a slim fit that hugs the body and keeps you covered when it's chilly outside. AEROREADY helps you stay dry while you show off your skills on the pitch.\n\nMade with a series of recycled materials, and at least 60% recycled content, this product represents just one of our solutions to help end plastic waste.",
  },
  {
    _id: {
      $oid: "638c20ede045526f5ebc0a50",
    },
    imgs: [
      "https://assets.adidas.com/images/w_600,f_auto,q_auto/9b6d2d542fd4446381feae8000aa3740_9366/BSC_3-Stripes_RAIN.RDY_Jacket_Green_HG8772_21_model.jpg",
      "https://assets.adidas.com/images/w_600,f_auto,q_auto/06ef789f9ecb4ddea7e2ae8000aa3f52_9366/BSC_3-Stripes_RAIN.RDY_Jacket_Green_HG8772_23_hover_model.jpg",
      "https://assets.adidas.com/images/w_600,f_auto,q_auto/5d63620ccfec4399a6c4ae8000aa4922_9366/BSC_3-Stripes_RAIN.RDY_Jacket_Green_HG8772_25_model.jpg",
      "https://assets.adidas.com/images/w_600,f_auto,q_auto/7d849a484bb7456a957fae8000aa8a77_9366/BSC_3-Stripes_RAIN.RDY_Jacket_Green_HG8772_01_laydown.jpg",
      "https://assets.adidas.com/images/w_600,f_auto,q_auto/6b433044105e443fb952ae8000aa5121_9366/BSC_3-Stripes_RAIN.RDY_Jacket_Green_HG8772_25_outfit.jpg",
      "https://assets.adidas.com/images/w_600,f_auto,q_auto/9cc57cc0fe074aa6b1feae8000aa5e94_9366/BSC_3-Stripes_RAIN.RDY_Jacket_Green_HG8772_41_detail.jpg",
      "https://assets.adidas.com/images/w_600,f_auto,q_auto/fe0f77408b5e4484b8f0ae8000aa6c62_9366/BSC_3-Stripes_RAIN.RDY_Jacket_Green_HG8772_42_detail.jpg",
      "https://assets.adidas.com/images/w_600,f_auto,q_auto/19f7f9fb51fb4ceaa183ae8000aa78c5_9366/BSC_3-Stripes_RAIN.RDY_Jacket_Green_HG8772_43_detail.jpg",
    ],
    name: "BSC 3-Stripes RAIN.RDY Jacket",
    price: "$100",
    sizes: ["S", "M", "L", "XL", "2XL", "3XL"],
    colors: [
      {
        alt: "Product color: Black",
        img: "https://assets.adidas.com/images/w_320,f_auto,q_auto,fl_lossy,c_fill,g_auto/6d4c7d117ae441aeba3bae0000c3e75f_9366/BSC_3-Stripes_RAIN.RDY_Jacket_Black_H65773_21_model.jpg",
        url: "https://www.adidas.com/us/bsc-3-stripes-rain.rdy-jacket/H65773.html",
      },
      {
        alt: "Product color: Semi Impact Orange",
        img: "https://assets.adidas.com/images/w_320,f_auto,q_auto,fl_lossy,c_fill,g_auto/63ae6f7adfca41788239ae8000a82078_9366/BSC_3-Stripes_RAIN.RDY_Jacket_Orange_HG8681_21_model.jpg",
        url: "https://www.adidas.com/us/bsc-3-stripes-rain.rdy-jacket/HG8681.html",
      },
      {
        alt: "Product color: Green Oxide",
        img: "https://assets.adidas.com/images/w_320,f_auto,q_auto,fl_lossy,c_fill,g_auto/0460b368d74b43a5af6dae8000897e32_9366/BSC_3-Stripes_RAIN.RDY_Jacket_Green_HG8769_21_model.jpg",
        url: "https://www.adidas.com/us/bsc-3-stripes-rain.rdy-jacket/HG8769.html",
      },
      {
        alt: "Product color: Focus Olive",
        img: "https://assets.adidas.com/images/w_320,f_auto,q_auto,fl_lossy,c_fill,g_auto/9b6d2d542fd4446381feae8000aa3740_9366/BSC_3-Stripes_RAIN.RDY_Jacket_Green_HG8772_21_model.jpg",
        url: "https://www.adidas.com/us/bsc-3-stripes-rain.rdy-jacket/HG8772.html",
      },
    ],
    description:
      "A waterproof jacket made with recycled materials.When the forecast calls for a chance of showers, go ahead and toss this adidas RAIN.RDY jacket in your day pack. It's lightweight insurance against uncertain weather. With fully sealed seams and storm flap zips, it helps protect you from wind and rain while keeping you comfortable on the inside too. Zip up, adjust the hood and hem and stay outdoors until the showers pass.",
  },
  {
    _id: {
      $oid: "638c20ede045526f5ebc0a51",
    },
    imgs: [
      "https://assets.adidas.com/images/w_600,f_auto,q_auto/42b685fb59e54eb39d75ae4a012ed148_9366/RAIN.RDY_Full-Zip_Jacket_Beige_HI3461_21_model.jpg",
      "https://assets.adidas.com/images/w_600,f_auto,q_auto/f3a8510f66004ae28723ae4a012af8f1_9366/RAIN.RDY_Full-Zip_Jacket_Beige_HI3461_23_hover_model.jpg",
      "https://assets.adidas.com/images/w_600,f_auto,q_auto/dd7dd5edce604344b591ae4a012f4557_9366/RAIN.RDY_Full-Zip_Jacket_Beige_HI3461_25_model.jpg",
      "https://assets.adidas.com/images/w_600,f_auto,q_auto/ff70585c1d6a4f63abe2ae3401406fd5_9366/RAIN.RDY_Full-Zip_Jacket_Beige_HI3461_01_laydown.jpg",
      "https://assets.adidas.com/images/w_600,f_auto,q_auto/a7717221374d42f988a6ae4a012f1de2_9366/RAIN.RDY_Full-Zip_Jacket_Beige_HI3461_25_outfit.jpg",
      "https://assets.adidas.com/images/w_600,f_auto,q_auto/510e5d19fb7b429481cdae4a012da8f5_9366/RAIN.RDY_Full-Zip_Jacket_Beige_HI3461_41_detail.jpg",
      "https://assets.adidas.com/images/w_600,f_auto,q_auto/d2092f540f974b6c85ebae4a012e15f5_9366/RAIN.RDY_Full-Zip_Jacket_Beige_HI3461_42_detail.jpg",
    ],
    name: "RAIN.RDY Full-Zip Jacket",
    price: "$280",
    sizes: ["S", "M", "L", "XL", "2XL"],
    colors: [
      {
        alt: "Product color: Hemp",
        img: "https://assets.adidas.com/images/w_320,f_auto,q_auto,fl_lossy,c_fill,g_auto/42b685fb59e54eb39d75ae4a012ed148_9366/RAIN.RDY_Full-Zip_Jacket_Beige_HI3461_21_model.jpg",
        url: "https://www.adidas.com/us/rain.rdy-full-zip-jacket/HI3461.html",
      },
      {
        alt: "Product color: Black",
        img: "https://assets.adidas.com/images/w_320,f_auto,q_auto,fl_lossy,c_fill,g_auto/31f11932259e46c5b325ae710177d6d2_9366/RAIN.RDY_Full-Zip_Jacket_Black_HN4128_21_model.jpg",
        url: "https://www.adidas.com/us/rain.rdy-full-zip-jacket/HN4128.html",
      },
    ],
    description:
      "A waterproof golf rain jacket made with recycled materials.All weather is good weather for a round of golf when you're prepared to stay dry and warm. This waterproof, breathable adidas golf rain jacket sets you up to play through steady drizzle or a passing shower. RAIN.RDY seals out wet weather to keep you dry and comfortable. The ultralight, three-layer build features a soft, quiet material with plenty of stretch that doesn't distract as you move. Zip pockets add utility for storing tees, phone or balls.",
  },
  {
    _id: {
      $oid: "638c20ede045526f5ebc0a52",
    },
    imgs: [
      "https://assets.adidas.com/images/w_600,f_auto,q_auto/ce1476c086e645fc8888aeca00ee079b_9366/adidas_Rekive_Down_Regen_Hooded_Puffer_Jacket_Black_HL9218_21_model.jpg",
      "https://assets.adidas.com/images/w_600,f_auto,q_auto/1f122750c43d4ed08d60aeca00ee0eee_9366/adidas_Rekive_Down_Regen_Hooded_Puffer_Jacket_Black_HL9218_22_model.jpg",
      "https://assets.adidas.com/images/w_600,f_auto,q_auto/3adcbe14d0954fc5967daeca00ee16e0_9366/adidas_Rekive_Down_Regen_Hooded_Puffer_Jacket_Black_HL9218_23_hover_model.jpg",
      "https://assets.adidas.com/images/w_600,f_auto,q_auto/fbcb76b23bc8412db97daeca00ee1fc1_9366/adidas_Rekive_Down_Regen_Hooded_Puffer_Jacket_Black_HL9218_25_model.jpg",
      "https://assets.adidas.com/images/w_600,f_auto,q_auto/c20c79d6e09e48dca981aeca00ee44db_9366/adidas_Rekive_Down_Regen_Hooded_Puffer_Jacket_Black_HL9218_01_laydown.jpg",
      "https://assets.adidas.com/images/w_600,f_auto,q_auto/3b383519a4214389a954aeca00ee29c6_9366/adidas_Rekive_Down_Regen_Hooded_Puffer_Jacket_Black_HL9218_41_detail.jpg",
      "https://assets.adidas.com/images/w_600,f_auto,q_auto/b3ac115cbfcd4610ba59aeca00ee348e_9366/adidas_Rekive_Down_Regen_Hooded_Puffer_Jacket_Black_HL9218_42_detail.jpg",
    ],
    name: "adidas Rekive Down Regen Hooded Puffer Jacket",
    price: "$250",
    sizes: ["XS", "S", "M", "L", "XL", "2XL"],
    colors: [],
    description:
      "A monogram down puffer jacket made in part with recycled content.The 3D-embossed monogrammed Trefoils on this adidas puffer jacket create a modern illusion of depth and texture. The perfect antidote to the cold, the down jacket has a snap-button detachable hood so you can change up the look and adjust according to the weather.",
  },
  {
    _id: {
      $oid: "638c20ede045526f5ebc0a53",
    },
    imgs: [
      "https://assets.adidas.com/images/w_600,f_auto,q_auto/1b29aed0565d437c8db9aee50032800d_9366/Big_Baffle_Down_Jacket_Brown_HN9932_21_model.jpg",
      "https://assets.adidas.com/images/w_600,f_auto,q_auto/74e0c287cbd14db19141aee500328c98_9366/Big_Baffle_Down_Jacket_Brown_HN9932_23_hover_model.jpg",
      "https://assets.adidas.com/images/w_600,f_auto,q_auto/cc339caff7464f8bb003aee50032971d_9366/Big_Baffle_Down_Jacket_Brown_HN9932_25_model.jpg",
      "https://assets.adidas.com/images/w_600,f_auto,q_auto/a877dae79d754885bfe7aeec011e761c_9366/Big_Baffle_Down_Jacket_Brown_HN9932_01_laydown.jpg",
      "https://assets.adidas.com/images/w_600,f_auto,q_auto/28121dde627e4f039330aee50032a63a_9366/Big_Baffle_Down_Jacket_Brown_HN9932_41_detail.jpg",
      "https://assets.adidas.com/images/w_600,f_auto,q_auto/676d070cb2034be5baa6aee50032b52e_9366/Big_Baffle_Down_Jacket_Brown_HN9932_42_detail.jpg",
      "https://assets.adidas.com/images/w_600,f_auto,q_auto/c0fa1f50975c4930837baee50032c471_9366/Big_Baffle_Down_Jacket_Brown_HN9932_43_detail.jpg",
    ],
    name: "Big Baffle Down Jacket",
    price: "$230",
    sizes: ["S", "M", "L", "XL", "2XL", "3XL"],
    colors: [
      {
        alt: "Product color: Black",
        img: "https://assets.adidas.com/images/w_320,f_auto,q_auto,fl_lossy,c_fill,g_auto/611af1f580be4628bdfaaef200a6758f_9366/Big_Baffle_Down_Jacket_Black_HN9930_21_model.jpg",
        url: "https://www.adidas.com/us/big-baffle-down-jacket/HN9930.html",
      },
      {
        alt: "Product color: Mesa",
        img: "https://assets.adidas.com/images/w_320,f_auto,q_auto,fl_lossy,c_fill,g_auto/1b29aed0565d437c8db9aee50032800d_9366/Big_Baffle_Down_Jacket_Brown_HN9932_21_model.jpg",
        url: "https://www.adidas.com/us/big-baffle-down-jacket/HN9932.html",
      },
    ],
    description:
      "A cold-weather coat with dual-entry front pockets, made in part with recycled materials.Don't wear this adidas jacket if you hate options and being noticed. It elevates your style with wide baffles and oversized front pockets that draw the eye while giving you two ways to secure personal items. Lightweight, naturally insulating down delivers unbeatable warmth. The padded hood, inner elastic cuffs and adjustable hem keep you feeling warm without weighing you down. \n\nMade with a series of recycled materials, and at least 60% recycled content, this product represents just one of our solutions to help end plastic waste.",
  },
  {
    _id: {
      $oid: "638c20ede045526f5ebc0a54",
    },
    imgs: [
      "https://assets.adidas.com/images/w_600,f_auto,q_auto/63ae6f7adfca41788239ae8000a82078_9366/BSC_3-Stripes_RAIN.RDY_Jacket_Orange_HG8681_21_model.jpg",
      "https://assets.adidas.com/images/w_600,f_auto,q_auto/b3501ee84870435bb067ae8000a82a78_9366/BSC_3-Stripes_RAIN.RDY_Jacket_Orange_HG8681_23_hover_model.jpg",
      "https://assets.adidas.com/images/w_600,f_auto,q_auto/39a19d9f04424568b235ae8000a83541_9366/BSC_3-Stripes_RAIN.RDY_Jacket_Orange_HG8681_25_model.jpg",
      "https://assets.adidas.com/images/w_600,f_auto,q_auto/32664db69f5d43b4ad8aae8000a865c8_9366/BSC_3-Stripes_RAIN.RDY_Jacket_Orange_HG8681_01_laydown.jpg",
      "https://assets.adidas.com/images/w_600,f_auto,q_auto/a054660bc38e435889c9ae8000a83c98_9366/BSC_3-Stripes_RAIN.RDY_Jacket_Orange_HG8681_25_outfit.jpg",
      "https://assets.adidas.com/images/w_600,f_auto,q_auto/ba025e862ed94b53bba6ae8000a847bf_9366/BSC_3-Stripes_RAIN.RDY_Jacket_Orange_HG8681_41_detail.jpg",
      "https://assets.adidas.com/images/w_600,f_auto,q_auto/79ad5fecb8a94d5fbf1bae8000a853be_9366/BSC_3-Stripes_RAIN.RDY_Jacket_Orange_HG8681_42_detail.jpg",
    ],
    name: "BSC 3-Stripes RAIN.RDY Jacket",
    price: "$100",
    sizes: ["S", "S", "M", "L", "XL", "2XL", "3XL"],
    colors: [
      {
        alt: "Product color: Black",
        img: "https://assets.adidas.com/images/w_320,f_auto,q_auto,fl_lossy,c_fill,g_auto/6d4c7d117ae441aeba3bae0000c3e75f_9366/BSC_3-Stripes_RAIN.RDY_Jacket_Black_H65773_21_model.jpg",
        url: "https://www.adidas.com/us/bsc-3-stripes-rain.rdy-jacket/H65773.html",
      },
      {
        alt: "Product color: Semi Impact Orange",
        img: "https://assets.adidas.com/images/w_320,f_auto,q_auto,fl_lossy,c_fill,g_auto/63ae6f7adfca41788239ae8000a82078_9366/BSC_3-Stripes_RAIN.RDY_Jacket_Orange_HG8681_21_model.jpg",
        url: "https://www.adidas.com/us/bsc-3-stripes-rain.rdy-jacket/HG8681.html",
      },
      {
        alt: "Product color: Green Oxide",
        img: "https://assets.adidas.com/images/w_320,f_auto,q_auto,fl_lossy,c_fill,g_auto/0460b368d74b43a5af6dae8000897e32_9366/BSC_3-Stripes_RAIN.RDY_Jacket_Green_HG8769_21_model.jpg",
        url: "https://www.adidas.com/us/bsc-3-stripes-rain.rdy-jacket/HG8769.html",
      },
      {
        alt: "Product color: Focus Olive",
        img: "https://assets.adidas.com/images/w_320,f_auto,q_auto,fl_lossy,c_fill,g_auto/9b6d2d542fd4446381feae8000aa3740_9366/BSC_3-Stripes_RAIN.RDY_Jacket_Green_HG8772_21_model.jpg",
        url: "https://www.adidas.com/us/bsc-3-stripes-rain.rdy-jacket/HG8772.html",
      },
    ],
    description:
      "A waterproof jacket made with recycled materials.When the forecast calls for a chance of showers, go ahead and toss this adidas RAIN.RDY jacket in your day pack. It's lightweight insurance against uncertain weather. With fully sealed seams and storm flap zips, it helps protect you from wind and rain while keeping you comfortable on the inside too. Zip up, adjust the hood and hem and stay outdoors until the showers pass.",
  },
  {
    _id: {
      $oid: "638c20ede045526f5ebc0a55",
    },
    imgs: [
      "https://assets.adidas.com/images/w_600,f_auto,q_auto/877a8445e2d14fb2a353ae670116dfaa_9366/Marathon_Jacket_Black_HK5637_21_model.jpg",
      "https://assets.adidas.com/images/w_600,f_auto,q_auto/5823e473ca4248e9a4a2ae670116e8d1_9366/Marathon_Jacket_Black_HK5637_23_hover_model.jpg",
      "https://assets.adidas.com/images/w_600,f_auto,q_auto/3cf3de48996049759b28ae670116f318_9366/Marathon_Jacket_Black_HK5637_25_model.jpg",
      "https://assets.adidas.com/images/w_600,f_auto,q_auto/350e1be0ad784fe09eb4ae6701171fb7_9366/Marathon_Jacket_Black_HK5637_01_laydown.jpg",
      "https://assets.adidas.com/images/w_600,f_auto,q_auto/a63963b6ef4e4c02b43dae670116fec0_9366/Marathon_Jacket_Black_HK5637_41_detail.jpg",
      "https://assets.adidas.com/images/w_600,f_auto,q_auto/ba5cca3f5bc24604b6d9ae6701170c12_9366/Marathon_Jacket_Black_HK5637_42_detail.jpg",
    ],
    name: "Marathon Jacket",
    price: "$130",
    sizes: ["S", "M", "L", "XL", "2XL"],
    colors: [
      {
        alt: "Product color: Black",
        img: "https://assets.adidas.com/images/w_320,f_auto,q_auto,fl_lossy,c_fill,g_auto/877a8445e2d14fb2a353ae670116dfaa_9366/Marathon_Jacket_Black_HK5637_21_model.jpg",
        url: "https://www.adidas.com/us/marathon-jacket/HK5637.html",
      },
      {
        alt: "Product color: Semi Impact Orange",
        img: "https://assets.adidas.com/images/w_320,f_auto,q_auto,fl_lossy,c_fill,g_auto/13df3e9d1571413aae48ae91010d031b_9366/Marathon_Jacket_Orange_HL6508_21_model.jpg",
        url: "https://www.adidas.com/us/marathon-jacket/HL6508.html",
      },
      {
        alt: "Product color: Legend Marine",
        img: "https://assets.adidas.com/images/w_320,f_auto,q_auto,fl_lossy,c_fill,g_auto/bc0d2746060c41c5929aaee500beffd7_9366/Marathon_Jacket_Blue_HN3032_21_model.jpg",
        url: "https://www.adidas.com/us/marathon-jacket/HN3032.html",
      },
    ],
    description:
      "A running jacket for wind and rain, made in part with recycled materials.When conditions look ominous, your resolve deepens. This adidas WIND.RDY jacket repels wind and rain so you can focus on the sheer joy of running. Full-zip styling and an adjustable hood and hem keep you comfortable as the weather changes.\n \nMade with a series of recycled materials, and at least 60% recycled content, this product represents just one of our solutions to help end plastic waste.",
  },
  {
    _id: {
      $oid: "638c20ede045526f5ebc0a56",
    },
    imgs: [
      "https://assets.adidas.com/images/w_600,f_auto,q_auto/a1cfc2c1bcf446478c54ae8800e4a5df_9366/Dust_Coat_(Gender_Neutral)_Black_HG2075_21_model.jpg",
      "https://assets.adidas.com/images/w_600,f_auto,q_auto/02c99caa45bb40f09d21ae8800e4ad12_9366/Dust_Coat_(Gender_Neutral)_Black_HG2075_22_model.jpg",
      "https://assets.adidas.com/images/w_600,f_auto,q_auto/d19b7c86d4344eb4bce6ae8800e4b5b0_9366/Dust_Coat_(Gender_Neutral)_Black_HG2075_23_hover_model.jpg",
      "https://assets.adidas.com/images/w_600,f_auto,q_auto/55327b8969264b71aa90ae8800e4bdc6_9366/Dust_Coat_(Gender_Neutral)_Black_HG2075_25_model.jpg",
      "https://assets.adidas.com/images/w_600,f_auto,q_auto/8b59bef8c5e9467b8fadae830093e779_9366/Dust_Coat_(Gender_Neutral)_Black_HG2075_01_laydown.jpg",
      "https://assets.adidas.com/images/w_600,f_auto,q_auto/6b4f3fff23c74d12b641ae8800e4c82d_9366/Dust_Coat_(Gender_Neutral)_Black_HG2075_41_detail.jpg",
      "https://assets.adidas.com/images/w_600,f_auto,q_auto/90d22978d96d47c9a2d7ae8800e4d206_9366/Dust_Coat_(Gender_Neutral)_Black_HG2075_42_detail.jpg",
      "https://assets.adidas.com/images/w_600,f_auto,q_auto/2f181d52d0604c508ec9ae8800e4dbbf_9366/Dust_Coat_(Gender_Neutral)_Black_HG2075_43_detail.jpg",
    ],
    name: "Dust Coat (Gender Neutral)",
    price: "$160",
    sizes: ["XS", "S", "M", "L", "XL", "2XL"],
    colors: [
      {
        alt: "Product color: Black",
        img: "https://assets.adidas.com/images/w_320,f_auto,q_auto,fl_lossy,c_fill,g_auto/a1cfc2c1bcf446478c54ae8800e4a5df_9366/Dust_Coat_(Gender_Neutral)_Black_HG2075_21_model.jpg",
        url: "https://www.adidas.com/us/dust-coat-gender-neutral/HG2075.html",
      },
      {
        alt: "Product color: Off White",
        img: "https://assets.adidas.com/images/w_320,f_auto,q_auto,fl_lossy,c_fill,g_auto/20d5814a05cf4d7ca5f6ae8900e3bef9_9366/Dust_Coat_(Gender_Neutral)_White_HN1943_21_model.jpg",
        url: "https://www.adidas.com/us/dust-coat-gender-neutral/HN1943.html",
      },
    ],
    description:
      "A relaxed, light jacket with pockets, made with recycled materials.Switch things up with this easy, flowy dust coat. For days when your bomber deserves a break. Whether you're standing on the sidelines or waiting for a cab, this adidas design has a hood and pockets to keep out the wind and rain. This coat is designed with UNITEFIT, adidas' technical fit system created with data from a range of bodies for a spectrum of sizes, genders and forms.\n\nMade with 100% recycled materials, this product represents just one of our solutions to help end plastic waste.",
  },
  {
    _id: {
      $oid: "638c20ede045526f5ebc0a57",
    },
    imgs: [
      "https://assets.adidas.com/images/w_600,f_auto,q_auto/71d9ec41eba24c2883bdae92003f49f9_9366/4CMTE_Track_Top_Green_HM6234_21_model.jpg",
      "https://assets.adidas.com/images/w_600,f_auto,q_auto/97f096ea98504c41a892ae92003f530a_9366/4CMTE_Track_Top_Green_HM6234_23_hover_model.jpg",
      "https://assets.adidas.com/images/w_600,f_auto,q_auto/53f223f0157d4974ba88ae92003f594e_9366/4CMTE_Track_Top_Green_HM6234_25_model.jpg",
      "https://assets.adidas.com/images/w_600,f_auto,q_auto/dcde487c6e7643ccaa10ae8c003fd03d_9366/4CMTE_Track_Top_Green_HM6234_01_laydown.jpg",
      "https://assets.adidas.com/images/w_600,f_auto,q_auto/26557458b6884fa8bfdcae92003f6347_9366/4CMTE_Track_Top_Green_HM6234_41_detail.jpg",
      "https://assets.adidas.com/images/w_600,f_auto,q_auto/f4f4269c32ee415e8f9dae92003f6e19_9366/4CMTE_Track_Top_Green_HM6234_42_detail.jpg",
      "https://assets.adidas.com/images/w_600,f_auto,q_auto/1759395a0e844c66aeecaeb0008da437_9366/4CMTE_Track_Top_Green_HM6234_HM1.jpg",
      "https://assets.adidas.com/images/w_600,f_auto,q_auto/60bb706d853b4aac9c59aeb0008fdb16_9366/4CMTE_Track_Top_Green_HM6234_HM2.jpg",
    ],
    name: "4CMTE Track Top",
    price: "$120",
    sizes: ["XS", "S", "M", "L", "XL", "2XL"],
    colors: [
      {
        alt: "Product color: Shadow Green / Pulse Olive",
        img: "https://assets.adidas.com/images/w_320,f_auto,q_auto,fl_lossy,c_fill,g_auto/71d9ec41eba24c2883bdae92003f49f9_9366/4CMTE_Track_Top_Green_HM6234_21_model.jpg",
        url: "https://www.adidas.com/us/4cmte-track-top/HM6234.html",
      },
      {
        alt: "Product color: Black / Carbon",
        img: "https://assets.adidas.com/images/w_320,f_auto,q_auto,fl_lossy,c_fill,g_auto/dee464faf8db400e9980ae92003f95dc_9366/4CMTE_Track_Top_Black_HM6235_21_model.jpg",
        url: "https://www.adidas.com/us/4cmte-track-top/HM6235.html",
      },
    ],
    description:
      "A warm track top that is made with nature.Comfy as a hoodie and cozy as a winter jacket. This adidas track top is robust on the outside, fleecy on the inside and lightly padded for extra warmth. It has a distinctive funnel neckline that also helps keep out the chill. And with a choice of zip pockets at the sides and chest, there's plenty of places to store those cold-weather essentials.\n\nThis 4CMTE Track Top is made with natural and renewable materials as part of our journey to design out finite resources and help end plastic waste.",
  },
  {
    _id: {
      $oid: "638c20ede045526f5ebc0a58",
    },
    imgs: [
      "https://assets.adidas.com/images/w_600,f_auto,q_auto/d65235259ff74ffaac5fae8000b7620c_9366/Essentials_Down_Parka_Green_HK4645_21_model.jpg",
      "https://assets.adidas.com/images/w_600,f_auto,q_auto/ada1763a1ee24e558f06ae8000b76a9b_9366/Essentials_Down_Parka_Green_HK4645_23_hover_model.jpg",
      "https://assets.adidas.com/images/w_600,f_auto,q_auto/5edbd1b292204ad8994dae8000b7739a_9366/Essentials_Down_Parka_Green_HK4645_25_model.jpg",
      "https://assets.adidas.com/images/w_600,f_auto,q_auto/aba45afb92b04825bae6ae8000b7b21c_9366/Essentials_Down_Parka_Green_HK4645_01_laydown.jpg",
      "https://assets.adidas.com/images/w_600,f_auto,q_auto/b6691b5564a340839d93ae8000b77b08_9366/Essentials_Down_Parka_Green_HK4645_25_outfit.jpg",
      "https://assets.adidas.com/images/w_600,f_auto,q_auto/d300b14033834d429bf6ae8000b78742_9366/Essentials_Down_Parka_Green_HK4645_41_detail.jpg",
      "https://assets.adidas.com/images/w_600,f_auto,q_auto/5fa84eea3e8542939e4cae8000b795d7_9366/Essentials_Down_Parka_Green_HK4645_42_detail.jpg",
      "https://assets.adidas.com/images/w_600,f_auto,q_auto/82f067966d0f46f3bd80ae8000b7a00b_9366/Essentials_Down_Parka_Green_HK4645_43_detail.jpg",
    ],
    name: "Essentials Down Parka",
    price: "$120",
    sizes: ["S", "M", "L", "XL", "2XL", "3XL"],
    colors: [
      {
        alt: "Product color: Black",
        img: "https://assets.adidas.com/images/w_320,f_auto,q_auto,fl_lossy,c_fill,g_auto/163eb154486d4d239887ab8b00ae28a7_9366/Essentials_Down_Parka_Black_GH4604_01_laydown.jpg",
        url: "https://www.adidas.com/us/essentials-down-parka/GH4604.html",
      },
      {
        alt: "Product color: Green Oxide",
        img: "https://assets.adidas.com/images/w_320,f_auto,q_auto,fl_lossy,c_fill,g_auto/d65235259ff74ffaac5fae8000b7620c_9366/Essentials_Down_Parka_Green_HK4645_21_model.jpg",
        url: "https://www.adidas.com/us/essentials-down-parka/HK4645.html",
      },
    ],
    description:
      "A long down jacket for full-body warmth on the coldest days.Full-body warmth for the sidelines or street. The adidas Essentials Down Parka blends style cues from the traditional coach jacket with the unbeatable warmth of down insulation. Made with recycled materials that you can feel good about.",
  },
  {
    _id: {
      $oid: "638c20ede045526f5ebc0a59",
    },
    imgs: [
      "https://assets.adidas.com/images/w_600,f_auto,q_auto/6d4c7d117ae441aeba3bae0000c3e75f_9366/BSC_3-Stripes_RAIN.RDY_Jacket_Black_H65773_21_model.jpg",
      "https://assets.adidas.com/images/w_600,f_auto,q_auto/338c8eb7b7ae4e8db6cdae0000c3f105_9366/BSC_3-Stripes_RAIN.RDY_Jacket_Black_H65773_22_model.jpg",
      "https://assets.adidas.com/images/w_600,f_auto,q_auto/1daada1867e94236adc9ae0000c3fa21_9366/BSC_3-Stripes_RAIN.RDY_Jacket_Black_H65773_23_hover_model.jpg",
      "https://assets.adidas.com/images/w_600,f_auto,q_auto/caf9407d97af4f3c9875ae0000c40401_9366/BSC_3-Stripes_RAIN.RDY_Jacket_Black_H65773_25_model.jpg",
      "https://assets.adidas.com/images/w_600,f_auto,q_auto/3244928e79bc4165ae12ae0000c44422_9366/BSC_3-Stripes_RAIN.RDY_Jacket_Black_H65773_01_laydown.jpg",
      "https://assets.adidas.com/images/w_600,f_auto,q_auto/ca67483ea27045a3ba83ae0000c40b44_9366/BSC_3-Stripes_RAIN.RDY_Jacket_Black_H65773_25_outfit.jpg",
      "https://assets.adidas.com/images/w_600,f_auto,q_auto/18386743a5da459892ceae0000c418d4_9366/BSC_3-Stripes_RAIN.RDY_Jacket_Black_H65773_41_detail.jpg",
      "https://assets.adidas.com/images/w_600,f_auto,q_auto/9958f27432e54912ade8ae0000c426e8_9366/BSC_3-Stripes_RAIN.RDY_Jacket_Black_H65773_42_detail.jpg",
      "https://assets.adidas.com/images/w_600,f_auto,q_auto/8cce1115c0f1442c821eae0000c4323b_9366/BSC_3-Stripes_RAIN.RDY_Jacket_Black_H65773_43_detail.jpg",
    ],
    name: "BSC 3-Stripes RAIN.RDY Jacket",
    price: "$100",
    sizes: ["S", "XS", "XL", "S", "M", "L", "XL", "2XL"],
    colors: [
      {
        alt: "Product color: Black",
        img: "https://assets.adidas.com/images/w_320,f_auto,q_auto,fl_lossy,c_fill,g_auto/6d4c7d117ae441aeba3bae0000c3e75f_9366/BSC_3-Stripes_RAIN.RDY_Jacket_Black_H65773_21_model.jpg",
        url: "https://www.adidas.com/us/bsc-3-stripes-rain.rdy-jacket/H65773.html",
      },
      {
        alt: "Product color: Semi Impact Orange",
        img: "https://assets.adidas.com/images/w_320,f_auto,q_auto,fl_lossy,c_fill,g_auto/63ae6f7adfca41788239ae8000a82078_9366/BSC_3-Stripes_RAIN.RDY_Jacket_Orange_HG8681_21_model.jpg",
        url: "https://www.adidas.com/us/bsc-3-stripes-rain.rdy-jacket/HG8681.html",
      },
      {
        alt: "Product color: Green Oxide",
        img: "https://assets.adidas.com/images/w_320,f_auto,q_auto,fl_lossy,c_fill,g_auto/0460b368d74b43a5af6dae8000897e32_9366/BSC_3-Stripes_RAIN.RDY_Jacket_Green_HG8769_21_model.jpg",
        url: "https://www.adidas.com/us/bsc-3-stripes-rain.rdy-jacket/HG8769.html",
      },
      {
        alt: "Product color: Focus Olive",
        img: "https://assets.adidas.com/images/w_320,f_auto,q_auto,fl_lossy,c_fill,g_auto/9b6d2d542fd4446381feae8000aa3740_9366/BSC_3-Stripes_RAIN.RDY_Jacket_Green_HG8772_21_model.jpg",
        url: "https://www.adidas.com/us/bsc-3-stripes-rain.rdy-jacket/HG8772.html",
      },
    ],
    description:
      "A waterproof jacket made with recycled materials.When the forecast calls for a chance of showers, go ahead and toss this adidas RAIN.RDY jacket in your day pack. It's lightweight insurance against uncertain weather. With fully sealed seams and storm flap zips, it helps protect you from wind and rain while keeping you comfortable on the inside too. Zip up, adjust the hood and hem and stay outdoors until the showers pass.",
  },
  {
    _id: {
      $oid: "638c20ede045526f5ebc0a5a",
    },
    imgs: [
      "https://assets.adidas.com/images/w_600,f_auto,q_auto/f064a0d8b8fc4441914faea200d247b2_9366/Adicolor_Contempo_Track_Jacket_(Gender_Neutral)_Black_HK2914_21_model.jpg",
      "https://assets.adidas.com/images/w_600,f_auto,q_auto/9b70812b53364d079234aea200d24ee8_9366/Adicolor_Contempo_Track_Jacket_(Gender_Neutral)_Black_HK2914_23_hover_model.jpg",
      "https://assets.adidas.com/images/w_600,f_auto,q_auto/e4f524316a50415ab65dae9100f0d6e0_9366/Adicolor_Contempo_Track_Jacket_(Gender_Neutral)_Black_HK2914_25_model.jpg",
      "https://assets.adidas.com/images/w_600,f_auto,q_auto/c412089eef9b4e3f9437ae8300afcd17_9366/Adicolor_Contempo_Track_Jacket_(Gender_Neutral)_Black_HK2914_01_laydown.jpg",
      "https://assets.adidas.com/images/w_600,f_auto,q_auto/b02390dce5cd423488e2ae9100f0e17a_9366/Adicolor_Contempo_Track_Jacket_(Gender_Neutral)_Black_HK2914_41_detail.jpg",
      "https://assets.adidas.com/images/w_600,f_auto,q_auto/8931e8470ef440aa8258ae9100f0ed2e_9366/Adicolor_Contempo_Track_Jacket_(Gender_Neutral)_Black_HK2914_42_detail.jpg",
    ],
    name: "Adicolor Contempo Track Jacket (Gender Neutral)",
    price: "$100",
    sizes: ["XS", "S", "M", "L", "XL", "2XL"],
    colors: [
      {
        alt: "Product color: Black",
        img: "https://assets.adidas.com/images/w_320,f_auto,q_auto,fl_lossy,c_fill,g_auto/f064a0d8b8fc4441914faea200d247b2_9366/Adicolor_Contempo_Track_Jacket_(Gender_Neutral)_Black_HK2914_21_model.jpg",
        url: "https://www.adidas.com/us/adicolor-contempo-track-jacket-gender-neutral/HK2914.html",
      },
      {
        alt: "Product color: Almost Blue",
        img: "https://assets.adidas.com/images/w_320,f_auto,q_auto,fl_lossy,c_fill,g_auto/e6fb57b1dbe94a529e63ae59002465f5_9366/Adicolor_Contempo_Track_Jacket_(Gender_Neutral)_Blue_HK2916_21_model.jpg",
        url: "https://www.adidas.com/us/adicolor-contempo-track-jacket-gender-neutral/HK2916.html",
      },
    ],
    description:
      "A tailored rework of the Firebird Track Jacket.This season, adicolor reimagines loungewear classics with a sartorial sensitivity. Tailored dressing collides with sportswear as icons from the archive are crafted in unblemished soft suiting twill.Minimal and understated, the 3-Stripes are refined in a chunky treatment for a subtle finish. ​ \n\nThe Firebird goes down as one of the blueprints for adidas track suits. It's been reworked through the decades, revitalized according to the zeitgeist of the years. This season, the adicolor Contempo Track Jacket is recreated through a sartorial lens, with a modern, minimalist look. Pair with adicolor Contempo Track Pants for drapey perfection.",
  },
  {
    _id: {
      $oid: "638c20ede045526f5ebc0a5b",
    },
    imgs: [
      "https://assets.adidas.com/images/w_600,f_auto,q_auto/190df2daefcf434f94b6ae860107d649_9366/Beckenbauer_Track_Jacket_Blue_HK7409_21_model.jpg",
      "https://assets.adidas.com/images/w_600,f_auto,q_auto/678a370dafad4495a780ae860107deb6_9366/Beckenbauer_Track_Jacket_Blue_HK7409_23_hover_model.jpg",
      "https://assets.adidas.com/images/w_600,f_auto,q_auto/8c36eb22c0a14153bebeae860107e783_9366/Beckenbauer_Track_Jacket_Blue_HK7409_25_model.jpg",
      "https://assets.adidas.com/images/w_600,f_auto,q_auto/e6e409d5be4b42198789ae860108155f_9366/Beckenbauer_Track_Jacket_Blue_HK7409_01_laydown.jpg",
      "https://assets.adidas.com/images/w_600,f_auto,q_auto/29d72010626949d2b422ae860107f4b2_9366/Beckenbauer_Track_Jacket_Blue_HK7409_41_detail.jpg",
      "https://assets.adidas.com/images/w_600,f_auto,q_auto/1b0f582743ed49c5a2faae86010801c5_9366/Beckenbauer_Track_Jacket_Blue_HK7409_42_detail.jpg",
    ],
    name: "Beckenbauer Track Jacket",
    price: "$85",
    sizes: ["XS", "S", "M", "L", "XL", "2XL"],
    colors: [
      {
        alt: "Product color: Royal Blue / Royal Blue / White / Team Power Red",
        img: "https://assets.adidas.com/images/w_320,f_auto,q_auto,fl_lossy,c_fill,g_auto/f98028dff7a2450998a7ae8600f39ad1_9366/Beckenbauer_Track_Jacket_Blue_HK7406_21_model.jpg",
        url: "https://www.adidas.com/us/beckenbauer-track-jacket/HK7406.html",
      },
      {
        alt: "Product color: Team Power Red / Team Power Red / Team Colleg Gold",
        img: "https://assets.adidas.com/images/w_320,f_auto,q_auto,fl_lossy,c_fill,g_auto/ea501ac293b54676a045ae8600f3f4d9_9366/Beckenbauer_Track_Jacket_Red_HK7407_21_model.jpg",
        url: "https://www.adidas.com/us/beckenbauer-track-jacket/HK7407.html",
      },
      {
        alt: "Product color: Black / White / Team Power Red / Team Colleg Gold",
        img: "https://assets.adidas.com/images/w_320,f_auto,q_auto,fl_lossy,c_fill,g_auto/957c65e614274652b67aae8600f44f22_9366/Beckenbauer_Track_Jacket_Black_HK7408_21_model.jpg",
        url: "https://www.adidas.com/us/beckenbauer-track-jacket/HK7408.html",
      },
      {
        alt: "Product color: Light Blue / White / Gold Metallic",
        img: "https://assets.adidas.com/images/w_320,f_auto,q_auto,fl_lossy,c_fill,g_auto/190df2daefcf434f94b6ae860107d649_9366/Beckenbauer_Track_Jacket_Blue_HK7409_21_model.jpg",
        url: "https://www.adidas.com/us/beckenbauer-track-jacket/HK7409.html",
      },
      {
        alt: "Product color: Team Yellow / Team Green / Bold Blue",
        img: "https://assets.adidas.com/images/w_320,f_auto,q_auto,fl_lossy,c_fill,g_auto/89b00a12542e439287f9ae8601082e34_9366/Beckenbauer_Track_Jacket_Yellow_HK7410_21_model.jpg",
        url: "https://www.adidas.com/us/beckenbauer-track-jacket/HK7410.html",
      },
      {
        alt: "Product color: Bright Royal / White / Red / Green",
        img: "https://assets.adidas.com/images/w_320,f_auto,q_auto,fl_lossy,c_fill,g_auto/991ec3ea62a247f597bdae8600e4ca9d_9366/Beckenbauer_Track_Jacket_Blue_HK7411_21_model.jpg",
        url: "https://www.adidas.com/us/beckenbauer-track-jacket/HK7411.html",
      },
      {
        alt: "Product color: Team Navy / Scarlet / White",
        img: "https://assets.adidas.com/images/w_320,f_auto,q_auto,fl_lossy,c_fill,g_auto/a74192ed425c44cbb245ae8600e7b95c_9366/Beckenbauer_Track_Jacket_Blue_HS8946_21_model.jpg",
        url: "https://www.adidas.com/us/beckenbauer-track-jacket/HS8946.html",
      },
    ],
    description:
      "An iconic track jacket made in part with Parley Ocean Plastic.These days, the adidas Beckenbauer track jacket is worn everywhere from sidewalks to clubs to cafés. But it will forever be rooted to the pitch. Celebrating a legacy that started in the '60s, this piece has all the classic details like the 3-Stripes and high neck, plus eye-catching colors that scream soccer. So zip in and celebrate the beautiful game. Wherever you are.\n\nThis garment is made with a yarn which contains 50% Parley Ocean Plastic — reimagined plastic waste, intercepted on remote islands, beaches, coastal communities and shorelines, preventing it from polluting our ocean. This garment contains at least 40% recycled content in total.",
  },
  {
    _id: {
      $oid: "638c20ede045526f5ebc0a5c",
    },
    imgs: [
      "https://assets.adidas.com/images/w_600,f_auto,q_auto/f8869f6654174e728fe2aecc00898e1f_9366/Printed_Bomber_Jacket_(Gender_Neutral)_Black_HY2712_HM1.jpg",
      "https://assets.adidas.com/images/w_600,f_auto,q_auto/43150d96784a4a6bbdf9aecc0089a3c7_9366/Printed_Bomber_Jacket_(Gender_Neutral)_Black_HY2712_HM3_hover.jpg",
      "https://assets.adidas.com/images/w_600,f_auto,q_auto/7a766350978c4d0cb846aecc0089ba67_9366/Printed_Bomber_Jacket_(Gender_Neutral)_Black_HY2712_HM4.jpg",
      "https://assets.adidas.com/images/w_600,f_auto,q_auto/01e1f6ed9c3b4e7d8523aecc0089f7cc_9366/Printed_Bomber_Jacket_(Gender_Neutral)_Black_HY2712_HM5.jpg",
      "https://assets.adidas.com/images/w_600,f_auto,q_auto/0cef5bf3ebf9434891abaecc008a022e_9366/Printed_Bomber_Jacket_(Gender_Neutral)_Black_HY2712_HM6.jpg",
      "https://assets.adidas.com/images/w_600,f_auto,q_auto/76d17c4f695f4a009068aecc008a0d0f_9366/Printed_Bomber_Jacket_(Gender_Neutral)_Black_HY2712_HM7.jpg",
      "https://assets.adidas.com/images/w_600,f_auto,q_auto/4f2984b631664687a3e3aecc008a165d_9366/Printed_Bomber_Jacket_(Gender_Neutral)_Black_HY2712_HM8.jpg",
      "https://assets.adidas.com/images/w_600,f_auto,q_auto/42ba911295de4e96867aaecc008a2443_9366/Printed_Bomber_Jacket_(Gender_Neutral)_Black_HY2712_HM9.jpg",
      "https://assets.adidas.com/images/w_600,f_auto,q_auto/6b0ed8683e274607b7a3aecc00899a41_9366/Printed_Bomber_Jacket_(Gender_Neutral)_Black_HY2712_HM10.jpg",
      "https://assets.adidas.com/images/w_600,f_auto,q_auto/4cfde562af6c466b8e5baeb40109a793_9366/Printed_Bomber_Jacket_(Gender_Neutral)_Black_HY2712_HM30.jpg",
    ],
    name: "Printed Bomber Jacket (Gender Neutral)",
    price: "$110",
    sizes: ["XS", "S", "M", "L", "XL", "2XL", "3XL", "4XL"],
    colors: [
      {
        alt: "Product color: Chalk White / Black",
        img: "https://assets.adidas.com/images/w_320,f_auto,q_auto,fl_lossy,c_fill,g_auto/8af412addcfc4f108e0eaecc0088ddeb_9366/Printed_Bomber_Jacket_(Gender_Neutral)_White_HY2711_HM1.jpg",
        url: "https://www.adidas.com/us/printed-bomber-jacket-gender-neutral/HY2711.html",
      },
      {
        alt: "Product color: Black",
        img: "https://assets.adidas.com/images/w_320,f_auto,q_auto,fl_lossy,c_fill,g_auto/f8869f6654174e728fe2aecc00898e1f_9366/Printed_Bomber_Jacket_(Gender_Neutral)_Black_HY2712_HM1.jpg",
        url: "https://www.adidas.com/us/printed-bomber-jacket-gender-neutral/HY2712.html",
      },
    ],
    description:
      "A loose-fitting, varsity-style jacket with embroidered and graphic details.Carry the energy of community wherever you go in the new 'OUR CITY. OUR SQUAD.' collection. Pulling from the legacy of collegiate style, the lineup celebrates authentic connections, the team spirit in the heart of our cities — and the pride found in showing off your true stripes.\n\nThe Printed Bomber Jacket (Gender Neutral) is a lesson in scholarly looks thanks to classic design details. Its ribbed cuffs and collar feature a varsity-style stripe in a contrasting color, alongside a loose fit for the perfect sporty layer. The embroidered wording on the back and sleeve brings in the collection's ethos, stating: \"Where we go, the world follows.\"",
  },
  {
    _id: {
      $oid: "638c20ede045526f5ebc0a5d",
    },
    imgs: [
      "https://assets.adidas.com/images/w_600,f_auto,q_auto/fd7e7895399e4c728696af5b00c11c9d_9366/Adicolor_Classics_Plush_Track_Jacket_Red_HL9455_21_model.jpg",
      "https://assets.adidas.com/images/w_600,f_auto,q_auto/27fd3ca37cb841599837af5b00c12628_9366/Adicolor_Classics_Plush_Track_Jacket_Red_HL9455_22_model.jpg",
      "https://assets.adidas.com/images/w_600,f_auto,q_auto/b7c1ea3ab2de49d1a3edaf5b00c12e99_9366/Adicolor_Classics_Plush_Track_Jacket_Red_HL9455_23_hover_model.jpg",
      "https://assets.adidas.com/images/w_600,f_auto,q_auto/7d24a70ebe3d42b9a7dcaf5b00c136b2_9366/Adicolor_Classics_Plush_Track_Jacket_Red_HL9455_25_model.jpg",
      "https://assets.adidas.com/images/w_600,f_auto,q_auto/147ed15079dc4f66b6d6af5200f71d7e_9366/Adicolor_Classics_Plush_Track_Jacket_Red_HL9455_01_laydown.jpg",
      "https://assets.adidas.com/images/w_600,f_auto,q_auto/4bcaa425453d4ca5aaccaf5b00c14b47_9366/Adicolor_Classics_Plush_Track_Jacket_Red_HL9455_41_detail.jpg",
      "https://assets.adidas.com/images/w_600,f_auto,q_auto/2a23554691b443369c07af5b00c15995_9366/Adicolor_Classics_Plush_Track_Jacket_Red_HL9455_42_detail.jpg",
      "https://assets.adidas.com/images/w_600,f_auto,q_auto/ce5cb0153acc475aa4eeaf5b00c16845_9366/Adicolor_Classics_Plush_Track_Jacket_Red_HL9455_43_detail.jpg",
    ],
    name: "Adicolor Classics Plush Track Jacket",
    price: "$90",
    sizes: ["XS", "S", "M", "L", "XL", "2XL"],
    colors: [
      {
        alt: "Product color: Shadow Maroon",
        img: "https://assets.adidas.com/images/w_320,f_auto,q_auto,fl_lossy,c_fill,g_auto/e1287fb85fc1434a9b48af4101147469_9366/Adicolor_Classics_Plush_Track_Jacket_Red_HL9447_21_model.jpg",
        url: "https://www.adidas.com/us/adicolor-classics-plush-track-jacket/HL9447.html",
      },
      {
        alt: "Product color: Vivid Red",
        img: "https://assets.adidas.com/images/w_320,f_auto,q_auto,fl_lossy,c_fill,g_auto/fd7e7895399e4c728696af5b00c11c9d_9366/Adicolor_Classics_Plush_Track_Jacket_Red_HL9455_21_model.jpg",
        url: "https://www.adidas.com/us/adicolor-classics-plush-track-jacket/HL9455.html",
      },
    ],
    description:
      "A faux suede track jacket made in part with recycled materials.If there's one thing you can always rely on, it's the comfort of a track jacket. And with this one from adidas, you don't just get comfort, you also get full-on unapologetic style. Faux suede takes responsibility for that. The smooth, premium fabric adds the perfect pop of luxury no matter what you're pairing it with. There's a slight stretch, so however you're moving (or not moving), you'll be feeling good.",
  },
  {
    _id: {
      $oid: "638c20ede045526f5ebc0a5e",
    },
    imgs: [
      "https://assets.adidas.com/images/w_600,f_auto,q_auto/871cfafe94944a5ba130ae5801498df0_9366/adidas_Rekive_Track_Jacket_Green_HK7321_21_model.jpg",
      "https://assets.adidas.com/images/w_600,f_auto,q_auto/847576170ee84f819bc9ae5801499983_9366/adidas_Rekive_Track_Jacket_Green_HK7321_23_hover_model.jpg",
      "https://assets.adidas.com/images/w_600,f_auto,q_auto/6c73d39f2a6f4cac9142ae580149a324_9366/adidas_Rekive_Track_Jacket_Green_HK7321_25_model.jpg",
      "https://assets.adidas.com/images/w_600,f_auto,q_auto/fd3905dfda10479dae35ae580149d3eb_9366/adidas_Rekive_Track_Jacket_Green_HK7321_01_laydown.jpg",
      "https://assets.adidas.com/images/w_600,f_auto,q_auto/1293f165bb2d4f9da020ae580149b0c6_9366/adidas_Rekive_Track_Jacket_Green_HK7321_41_detail.jpg",
      "https://assets.adidas.com/images/w_600,f_auto,q_auto/5b4ef2471148479fa070ae580149be76_9366/adidas_Rekive_Track_Jacket_Green_HK7321_42_detail.jpg",
    ],
    name: "adidas Rekive Track Jacket",
    price: "$90",
    sizes: ["XS", "S", "M", "L", "XL", "2XL"],
    colors: [
      {
        alt: "Product color: Mineral Green",
        img: "https://assets.adidas.com/images/w_320,f_auto,q_auto,fl_lossy,c_fill,g_auto/871cfafe94944a5ba130ae5801498df0_9366/adidas_Rekive_Track_Jacket_Green_HK7321_21_model.jpg",
        url: "https://www.adidas.com/us/adidas-rekive-track-jacket/HK7321.html",
      },
      {
        alt: "Product color: Black",
        img: "https://assets.adidas.com/images/w_320,f_auto,q_auto,fl_lossy,c_fill,g_auto/6801f1db3fe84d22a68faea900a0857c_9366/adidas_Rekive_Track_Jacket_Black_HK7322_21_model.jpg",
        url: "https://www.adidas.com/us/adidas-rekive-track-jacket/HK7322.html",
      },
    ],
    description:
      "A loose, archival-inspired jacket made with recycled content.A full salute to one of our most iconic silhouettes, this adidas track jacket is simultaneously rooted deeply in our heritage while evolving the look into new terrain. The reference to the past is clear with the diagonal cut lines played out on the smooth nylon build.",
  },
  {
    _id: {
      $oid: "638c20ede045526f5ebc0a5f",
    },
    imgs: [
      "https://assets.adidas.com/images/w_600,f_auto,q_auto/4ef2ea989c644ff5921aaec500a19172_9366/Adicolor_Contempo_Tailored_Jacket_(Gender_Neutral)_Black_HN3670_21_model.jpg",
      "https://assets.adidas.com/images/w_600,f_auto,q_auto/07051ef9dec54c3b99ecaec500a19906_9366/Adicolor_Contempo_Tailored_Jacket_(Gender_Neutral)_Black_HN3670_23_hover_model.jpg",
      "https://assets.adidas.com/images/w_600,f_auto,q_auto/e2189d8c8ac64105a578ae9b01139dea_9366/Adicolor_Contempo_Tailored_Jacket_(Gender_Neutral)_Black_HN3670_25_model.jpg",
      "https://assets.adidas.com/images/w_600,f_auto,q_auto/6f24330ad30c4bf685e7ae8300c903a8_9366/Adicolor_Contempo_Tailored_Jacket_(Gender_Neutral)_Black_HN3670_01_laydown.jpg",
      "https://assets.adidas.com/images/w_600,f_auto,q_auto/8ed84b263d7f4ed59f1eae9b0113aa42_9366/Adicolor_Contempo_Tailored_Jacket_(Gender_Neutral)_Black_HN3670_41_detail.jpg",
      "https://assets.adidas.com/images/w_600,f_auto,q_auto/106c2acbc50e4584bf3dae9b0113b687_9366/Adicolor_Contempo_Tailored_Jacket_(Gender_Neutral)_Black_HN3670_42_detail.jpg",
    ],
    name: "Adicolor Contempo Tailored Jacket (Gender Neutral)",
    price: "$120",
    sizes: ["3XS", "2XS", "XS", "S", "M", "L", "XL"],
    colors: [],
    description:
      "A sporty jacket gets a sophisticated twist with a formal rework.This season, adicolor reimagines loungewear classics with a sartorial sensitivity. Tailored dressing collides with sportswear as icons from the archive are crafted in unblemished soft suiting twill.Minimal and understated, the 3-Stripes are refined in a chunky treatment for a subtle finish. ​ \n\nClassic sports style meets sophistication with the adicolor Contempo Tailored Jacket. Equal parts athletic and formal, the iconic track jacket is elevated into a tailored silhouette. The essence of the iconic Firebird track suit is fine-tuned with an understated 3-Stripes down the jacket's sleeve and a tonal Trefoil on the chest.",
  },
  {
    _id: {
      $oid: "638c20ede045526f5ebc0a60",
    },
    imgs: [
      "https://assets.adidas.com/images/w_600,f_auto,q_auto/433293ce0b5940d991bdaeb301020ede_9366/Five_Ten_Wind_Jacket_Black_HG1297_21_model.jpg",
      "https://assets.adidas.com/images/w_600,f_auto,q_auto/68de557ea5e64e5c968daeb3010217b3_9366/Five_Ten_Wind_Jacket_Black_HG1297_23_hover_model.jpg",
      "https://assets.adidas.com/images/w_600,f_auto,q_auto/036ad30a21f845c19a97aeb3010220d1_9366/Five_Ten_Wind_Jacket_Black_HG1297_25_model.jpg",
      "https://assets.adidas.com/images/w_600,f_auto,q_auto/ce6de44064054771ac59aec2010bdcfb_9366/Five_Ten_Wind_Jacket_Black_HG1297_01_laydown.jpg",
      "https://assets.adidas.com/images/w_600,f_auto,q_auto/157ddba991a64c3aab1baeb301022c0d_9366/Five_Ten_Wind_Jacket_Black_HG1297_41_detail.jpg",
      "https://assets.adidas.com/images/w_600,f_auto,q_auto/40dbe784dfbe40ec94a9aeb3010236b0_9366/Five_Ten_Wind_Jacket_Black_HG1297_42_detail.jpg",
      "https://assets.adidas.com/images/w_600,f_auto,q_auto/6cbfd03fed8f43cdad58aeb3010240e3_9366/Five_Ten_Wind_Jacket_Black_HG1297_43_detail.jpg",
    ],
    name: "Five Ten Wind Jacket",
    price: "$100",
    sizes: ["S", "M", "L", "XL", "2XL"],
    colors: [],
    description:
      "A light, durable wind jacket for chilly rides, made with recycled materials.Early mornings and downhill rides can chill your bones. Which is why you want to take this adidas Five Ten Wind Jacket with you. There's no bad time to have it in tow, with its light and packable design that stows away on ascents and blocks out the breeze with WIND.RDY when you need it. Have a phone or park ticket to carry? There's a back pocket for that. \n\nMade with 100% recycled materials, this product represents just one of our solutions to help end plastic waste.",
  },
  {
    _id: {
      $oid: "638c20ede045526f5ebc0a61",
    },
    imgs: [
      "https://assets.adidas.com/images/w_600,f_auto,q_auto/57302733011545daabbdae8b01337338_9366/Helionic_Hooded_Down_Vest_Green_HG6274_21_model.jpg",
      "https://assets.adidas.com/images/w_600,f_auto,q_auto/52a96fddca78414ab0c4ae8b01337b68_9366/Helionic_Hooded_Down_Vest_Green_HG6274_23_hover_model.jpg",
      "https://assets.adidas.com/images/w_600,f_auto,q_auto/1e9798cad0ad4d44b82eae8b0133832c_9366/Helionic_Hooded_Down_Vest_Green_HG6274_25_model.jpg",
      "https://assets.adidas.com/images/w_600,f_auto,q_auto/d5a5235930c54f1f9a5aae8b0133bf41_9366/Helionic_Hooded_Down_Vest_Green_HG6274_01_laydown.jpg",
      "https://assets.adidas.com/images/w_600,f_auto,q_auto/0f6c2cd4830744369fdaae8b01338a18_9366/Helionic_Hooded_Down_Vest_Green_HG6274_25_outfit.jpg",
      "https://assets.adidas.com/images/w_600,f_auto,q_auto/135e9086592144009148ae8b013394dd_9366/Helionic_Hooded_Down_Vest_Green_HG6274_41_detail.jpg",
      "https://assets.adidas.com/images/w_600,f_auto,q_auto/da814e38d143454abda0ae8b0133a175_9366/Helionic_Hooded_Down_Vest_Green_HG6274_42_detail.jpg",
      "https://assets.adidas.com/images/w_600,f_auto,q_auto/2e49b46932414c7baa94ae8b0133ae84_9366/Helionic_Hooded_Down_Vest_Green_HG6274_43_detail.jpg",
    ],
    name: "Helionic Hooded Down Vest",
    price: "$130",
    sizes: ["S", "M", "L", "XL", "2XL"],
    colors: [],
    description:
      "A classic down vest made in part with recycled materials.Warm your core with the unmatched insulation and timeless style of down. For cool winter days, this adidas down vest offers go-to warmth that you can pull on over a sweater or light jacket. You get the extra arm mobility of a vest with the added cozy factor of 600-fill down. Pull up the hood for added coverage. Zip pockets keep hands warm and your keys or phone within easy reach.",
  },
  {
    _id: {
      $oid: "638c20ede045526f5ebc0a62",
    },
    imgs: [
      "https://assets.adidas.com/images/w_600,f_auto,q_auto/8af412addcfc4f108e0eaecc0088ddeb_9366/Printed_Bomber_Jacket_(Gender_Neutral)_White_HY2711_HM1.jpg",
      "https://assets.adidas.com/images/w_600,f_auto,q_auto/8675422b43574e4c9632aecc0088f5cb_9366/Printed_Bomber_Jacket_(Gender_Neutral)_White_HY2711_HM3_hover.jpg",
      "https://assets.adidas.com/images/w_600,f_auto,q_auto/1c21b2ba80e34264ab0aaeca01110c2d_9366/Printed_Bomber_Jacket_(Gender_Neutral)_White_HY2711_HM4.jpg",
      "https://assets.adidas.com/images/w_600,f_auto,q_auto/c4d8de3c7c584e30bfccaecc008949a5_9366/Printed_Bomber_Jacket_(Gender_Neutral)_White_HY2711_HM5.jpg",
      "https://assets.adidas.com/images/w_600,f_auto,q_auto/655b6495cffd4d2e9e68aecc008955b1_9366/Printed_Bomber_Jacket_(Gender_Neutral)_White_HY2711_HM6.jpg",
      "https://assets.adidas.com/images/w_600,f_auto,q_auto/75a5175df7174ed590c1aecc00896030_9366/Printed_Bomber_Jacket_(Gender_Neutral)_White_HY2711_HM7.jpg",
      "https://assets.adidas.com/images/w_600,f_auto,q_auto/ec9fefada8bf4a3aae00aecc00896b22_9366/Printed_Bomber_Jacket_(Gender_Neutral)_White_HY2711_HM8.jpg",
      "https://assets.adidas.com/images/w_600,f_auto,q_auto/ceeaf95913a14fd2b4e5aecc00897908_9366/Printed_Bomber_Jacket_(Gender_Neutral)_White_HY2711_HM9.jpg",
      "https://assets.adidas.com/images/w_600,f_auto,q_auto/ab7427f76bda45a095cfaecc0088e89e_9366/Printed_Bomber_Jacket_(Gender_Neutral)_White_HY2711_HM10.jpg",
      "https://assets.adidas.com/images/w_600,f_auto,q_auto/87b886dd36334a72bc6daeb40109bcbc_9366/Printed_Bomber_Jacket_(Gender_Neutral)_White_HY2711_HM30.jpg",
    ],
    name: "Printed Bomber Jacket (Gender Neutral)",
    price: "$110",
    sizes: ["XS", "S", "M", "L", "XL", "2XL", "3XL", "4XL"],
    colors: [
      {
        alt: "Product color: Chalk White / Black",
        img: "https://assets.adidas.com/images/w_320,f_auto,q_auto,fl_lossy,c_fill,g_auto/8af412addcfc4f108e0eaecc0088ddeb_9366/Printed_Bomber_Jacket_(Gender_Neutral)_White_HY2711_HM1.jpg",
        url: "https://www.adidas.com/us/printed-bomber-jacket-gender-neutral/HY2711.html",
      },
      {
        alt: "Product color: Black",
        img: "https://assets.adidas.com/images/w_320,f_auto,q_auto,fl_lossy,c_fill,g_auto/f8869f6654174e728fe2aecc00898e1f_9366/Printed_Bomber_Jacket_(Gender_Neutral)_Black_HY2712_HM1.jpg",
        url: "https://www.adidas.com/us/printed-bomber-jacket-gender-neutral/HY2712.html",
      },
    ],
    description:
      "A loose-fitting, varsity-style jacket with embroidered and graphic details.Carry the energy of community wherever you go in the new 'OUR CITY. OUR SQUAD.' collection. Pulling from the legacy of collegiate style, the lineup celebrates authentic connections, the team spirit in the heart of our cities — and the pride found in showing off your true stripes.\n\nThe Printed Bomber Jacket (Gender Neutral) is a lesson in scholarly looks thanks to classic design details. Its ribbed cuffs and collar feature a varsity-style stripe in a contrasting color, alongside a loose fit for the perfect sporty layer. The embroidered wording on the back and sleeve brings in the collection's ethos, stating: \"Where we go, the world follows.\"",
  },
  {
    _id: {
      $oid: "638c20ede045526f5ebc0a63",
    },
    imgs: [
      "https://assets.adidas.com/images/w_600,f_auto,q_auto/ea501ac293b54676a045ae8600f3f4d9_9366/Beckenbauer_Track_Jacket_Red_HK7407_21_model.jpg",
      "https://assets.adidas.com/images/w_600,f_auto,q_auto/3697d34dac8e4223aad3ae8600f3fc29_9366/Beckenbauer_Track_Jacket_Red_HK7407_23_hover_model.jpg",
      "https://assets.adidas.com/images/w_600,f_auto,q_auto/34edd50e991443bc8c15ae8600f4073e_9366/Beckenbauer_Track_Jacket_Red_HK7407_25_model.jpg",
      "https://assets.adidas.com/images/w_600,f_auto,q_auto/79d7b7f8abbd44cebe78ae8600f434ee_9366/Beckenbauer_Track_Jacket_Red_HK7407_01_laydown.jpg",
      "https://assets.adidas.com/images/w_600,f_auto,q_auto/7674646dd90045f58e00ae8600f4141c_9366/Beckenbauer_Track_Jacket_Red_HK7407_41_detail.jpg",
      "https://assets.adidas.com/images/w_600,f_auto,q_auto/ef55ed345f1c4800ad64ae8600f421e3_9366/Beckenbauer_Track_Jacket_Red_HK7407_42_detail.jpg",
    ],
    name: "Beckenbauer Track Jacket",
    price: "$85",
    sizes: ["XS", "S", "M", "L", "XL", "2XL"],
    colors: [
      {
        alt: "Product color: Royal Blue / Royal Blue / White / Team Power Red",
        img: "https://assets.adidas.com/images/w_320,f_auto,q_auto,fl_lossy,c_fill,g_auto/f98028dff7a2450998a7ae8600f39ad1_9366/Beckenbauer_Track_Jacket_Blue_HK7406_21_model.jpg",
        url: "https://www.adidas.com/us/beckenbauer-track-jacket/HK7406.html",
      },
      {
        alt: "Product color: Team Power Red / Team Power Red / Team Colleg Gold",
        img: "https://assets.adidas.com/images/w_320,f_auto,q_auto,fl_lossy,c_fill,g_auto/ea501ac293b54676a045ae8600f3f4d9_9366/Beckenbauer_Track_Jacket_Red_HK7407_21_model.jpg",
        url: "https://www.adidas.com/us/beckenbauer-track-jacket/HK7407.html",
      },
      {
        alt: "Product color: Black / White / Team Power Red / Team Colleg Gold",
        img: "https://assets.adidas.com/images/w_320,f_auto,q_auto,fl_lossy,c_fill,g_auto/957c65e614274652b67aae8600f44f22_9366/Beckenbauer_Track_Jacket_Black_HK7408_21_model.jpg",
        url: "https://www.adidas.com/us/beckenbauer-track-jacket/HK7408.html",
      },
      {
        alt: "Product color: Light Blue / White / Gold Metallic",
        img: "https://assets.adidas.com/images/w_320,f_auto,q_auto,fl_lossy,c_fill,g_auto/190df2daefcf434f94b6ae860107d649_9366/Beckenbauer_Track_Jacket_Blue_HK7409_21_model.jpg",
        url: "https://www.adidas.com/us/beckenbauer-track-jacket/HK7409.html",
      },
      {
        alt: "Product color: Team Yellow / Team Green / Bold Blue",
        img: "https://assets.adidas.com/images/w_320,f_auto,q_auto,fl_lossy,c_fill,g_auto/89b00a12542e439287f9ae8601082e34_9366/Beckenbauer_Track_Jacket_Yellow_HK7410_21_model.jpg",
        url: "https://www.adidas.com/us/beckenbauer-track-jacket/HK7410.html",
      },
      {
        alt: "Product color: Bright Royal / White / Red / Green",
        img: "https://assets.adidas.com/images/w_320,f_auto,q_auto,fl_lossy,c_fill,g_auto/991ec3ea62a247f597bdae8600e4ca9d_9366/Beckenbauer_Track_Jacket_Blue_HK7411_21_model.jpg",
        url: "https://www.adidas.com/us/beckenbauer-track-jacket/HK7411.html",
      },
      {
        alt: "Product color: Team Navy / Scarlet / White",
        img: "https://assets.adidas.com/images/w_320,f_auto,q_auto,fl_lossy,c_fill,g_auto/a74192ed425c44cbb245ae8600e7b95c_9366/Beckenbauer_Track_Jacket_Blue_HS8946_21_model.jpg",
        url: "https://www.adidas.com/us/beckenbauer-track-jacket/HS8946.html",
      },
    ],
    description:
      "An iconic track jacket made in part with Parley Ocean Plastic.These days, the adidas Beckenbauer track jacket is worn everywhere from sidewalks to clubs to cafés. But it will forever be rooted to the pitch. Celebrating a legacy that started in the '60s, this piece has all the classic details like the 3-Stripes and high neck, plus eye-catching colors that scream soccer. So zip in and celebrate the beautiful game. Wherever you are.\n\nThis garment is made with a yarn which contains 50% Parley Ocean Plastic — reimagined plastic waste, intercepted on remote islands, beaches, coastal communities and shorelines, preventing it from polluting our ocean. This garment contains at least 40% recycled content in total.",
  },
  {
    _id: {
      $oid: "638c20ede045526f5ebc0a64",
    },
    imgs: [
      "https://assets.adidas.com/images/w_600,f_auto,q_auto/fe5d3d48ebc74114876faeca00e7eb32_9366/Germany_Anthem_Jacket_Black_HF4058_21_model.jpg",
      "https://assets.adidas.com/images/w_600,f_auto,q_auto/333effa44a544dd28affaeca00e7f372_9366/Germany_Anthem_Jacket_Black_HF4058_22_model.jpg",
      "https://assets.adidas.com/images/w_600,f_auto,q_auto/232bd976bdf742d4987baeca00e80556_9366/Germany_Anthem_Jacket_Black_HF4058_23_hover_model.jpg",
      "https://assets.adidas.com/images/w_600,f_auto,q_auto/d6e0422aada84d8e9134aeca00e80d46_9366/Germany_Anthem_Jacket_Black_HF4058_25_model.jpg",
      "https://assets.adidas.com/images/w_600,f_auto,q_auto/567bef3cfdd345f6a8cdaeca00e7fcbc_9366/Germany_Anthem_Jacket_Black_HF4058_27_model.jpg",
      "https://assets.adidas.com/images/w_600,f_auto,q_auto/39774ebf718b49769051ae9700bf09e9_9366/Germany_Anthem_Jacket_Black_HF4058_01_laydown.jpg",
      "https://assets.adidas.com/images/w_600,f_auto,q_auto/0b7d1c9bd24542e891e5ae9700bf11ae_9366/Germany_Anthem_Jacket_Black_HF4058_08_laydown.jpg",
      "https://assets.adidas.com/images/w_600,f_auto,q_auto/fb26bce8e18c48e8979caed6011e1edb_9366/Germany_Anthem_Jacket_Black_HF4058_25_outfit.jpg",
      "https://assets.adidas.com/images/w_600,f_auto,q_auto/ce1b90182f5947958f85aeca00e817ff_9366/Germany_Anthem_Jacket_Black_HF4058_41_detail.jpg",
      "https://assets.adidas.com/images/w_600,f_auto,q_auto/f4f4651a53de43dd9703aeca00e824c8_9366/Germany_Anthem_Jacket_Black_HF4058_42_detail.jpg",
      "https://assets.adidas.com/images/w_600,f_auto,q_auto/87f66f95381145a887dfaeca00e82fdc_9366/Germany_Anthem_Jacket_Black_HF4058_43_detail.jpg",
    ],
    name: "Germany Anthem Jacket",
    price: "$110",
    sizes: ["XS", "S", "M", "L", "XL", "2XL", "3XL"],
    colors: [],
    description:
      "A Germany jacket for the big occasion, made with recycled materials.Whichever way you look at it, Germany are a team for the big occasion. Their players will wear this adidas soccer jacket as they stand shoulder-to-shoulder before matches. Its reversible design means it complements both their home and away kits. Zip it up to the top of its high stand-up collar to show you back your team.",
  },
  {
    _id: {
      $oid: "638c20ede045526f5ebc0a65",
    },
    imgs: [
      "https://assets.adidas.com/images/w_600,f_auto,q_auto/fa4630f728b74f599ff6ae70017ce38e_9366/Adicross_Elements_Full-Zip_Jacket_Grey_HF9117_21_model.jpg",
      "https://assets.adidas.com/images/w_600,f_auto,q_auto/1353644c6e744c6285e0ae70017d2df1_9366/Adicross_Elements_Full-Zip_Jacket_Grey_HF9117_23_hover_model.jpg",
      "https://assets.adidas.com/images/w_600,f_auto,q_auto/6467f384f450489d960bae70017e7b8b_9366/Adicross_Elements_Full-Zip_Jacket_Grey_HF9117_25_model.jpg",
      "https://assets.adidas.com/images/w_600,f_auto,q_auto/4a91f5fc3953427e9766ae34013be6bf_9366/Adicross_Elements_Full-Zip_Jacket_Grey_HF9117_01_laydown.jpg",
      "https://assets.adidas.com/images/w_600,f_auto,q_auto/9c182fc44dea4f169864ae70017d874f_9366/Adicross_Elements_Full-Zip_Jacket_Grey_HF9117_41_detail.jpg",
      "https://assets.adidas.com/images/w_600,f_auto,q_auto/d66406f75fd049d7844aae70017df981_9366/Adicross_Elements_Full-Zip_Jacket_Grey_HF9117_42_detail.jpg",
    ],
    name: "Adicross Elements Full-Zip Jacket",
    price: "$330",
    sizes: ["S", "M", "L", "XL", "2XL"],
    colors: [],
    description:
      "A versatile golf jacket made in part with recycled content.When we say this adidas golf jacket does it all, we mean it. It protects you from damp conditions with a lightweight outer shell. The detachable inner vest adds warmth when you need it and clips out easily when you don't. When the sun breaks through on the back nine, take off the removable hood and stash it in your bag. Handy flap pockets hold extra balls and tees.",
  },
  {
    _id: {
      $oid: "638c20ede045526f5ebc0a66",
    },
    imgs: [
      "https://assets.adidas.com/images/w_600,f_auto,q_auto/bc0d2746060c41c5929aaee500beffd7_9366/Marathon_Jacket_Blue_HN3032_21_model.jpg",
      "https://assets.adidas.com/images/w_600,f_auto,q_auto/7cbd417d33b04dd5a2e2aee500bf08f0_9366/Marathon_Jacket_Blue_HN3032_23_hover_model.jpg",
      "https://assets.adidas.com/images/w_600,f_auto,q_auto/b58e47796d244bcf9b35aee500bf131e_9366/Marathon_Jacket_Blue_HN3032_25_model.jpg",
      "https://assets.adidas.com/images/w_600,f_auto,q_auto/96e705d212ca4f2a95f4aee500bf4e1c_9366/Marathon_Jacket_Blue_HN3032_01_laydown.jpg",
      "https://assets.adidas.com/images/w_600,f_auto,q_auto/3cb4ed31274241edacd3aee500bf20e3_9366/Marathon_Jacket_Blue_HN3032_41_detail.jpg",
      "https://assets.adidas.com/images/w_600,f_auto,q_auto/5774c362b9d344e99a40aee500bf2d24_9366/Marathon_Jacket_Blue_HN3032_42_detail.jpg",
      "https://assets.adidas.com/images/w_600,f_auto,q_auto/67750d8150954b18a8c8aee500bf3a6b_9366/Marathon_Jacket_Blue_HN3032_43_detail.jpg",
    ],
    name: "Marathon Jacket",
    price: "$130",
    sizes: ["S", "M", "L", "XL", "2XL"],
    colors: [
      {
        alt: "Product color: Black",
        img: "https://assets.adidas.com/images/w_320,f_auto,q_auto,fl_lossy,c_fill,g_auto/877a8445e2d14fb2a353ae670116dfaa_9366/Marathon_Jacket_Black_HK5637_21_model.jpg",
        url: "https://www.adidas.com/us/marathon-jacket/HK5637.html",
      },
      {
        alt: "Product color: Semi Impact Orange",
        img: "https://assets.adidas.com/images/w_320,f_auto,q_auto,fl_lossy,c_fill,g_auto/13df3e9d1571413aae48ae91010d031b_9366/Marathon_Jacket_Orange_HL6508_21_model.jpg",
        url: "https://www.adidas.com/us/marathon-jacket/HL6508.html",
      },
      {
        alt: "Product color: Legend Marine",
        img: "https://assets.adidas.com/images/w_320,f_auto,q_auto,fl_lossy,c_fill,g_auto/bc0d2746060c41c5929aaee500beffd7_9366/Marathon_Jacket_Blue_HN3032_21_model.jpg",
        url: "https://www.adidas.com/us/marathon-jacket/HN3032.html",
      },
    ],
    description:
      "A running jacket for wind and rain, made in part with recycled materials.When conditions look ominous, your resolve deepens. This adidas WIND.RDY jacket repels wind and rain so you can focus on the sheer joy of running. Full-zip styling and an adjustable hood and hem keep you comfortable as the weather changes.\n \nMade with a series of recycled materials, and at least 60% recycled content, this product represents just one of our solutions to help end plastic waste.",
  },
  {
    _id: {
      $oid: "638c20ede045526f5ebc0a67",
    },
    imgs: [
      "https://assets.adidas.com/images/w_600,f_auto,q_auto/e6fb57b1dbe94a529e63ae59002465f5_9366/Adicolor_Contempo_Track_Jacket_(Gender_Neutral)_Blue_HK2916_21_model.jpg",
      "https://assets.adidas.com/images/w_600,f_auto,q_auto/86db682313d4433e9efeae5900246e49_9366/Adicolor_Contempo_Track_Jacket_(Gender_Neutral)_Blue_HK2916_23_hover_model.jpg",
      "https://assets.adidas.com/images/w_600,f_auto,q_auto/18cc0a4bb5eb4112b617ae59002477b4_9366/Adicolor_Contempo_Track_Jacket_(Gender_Neutral)_Blue_HK2916_25_model.jpg",
      "https://assets.adidas.com/images/w_600,f_auto,q_auto/7c1d936d1c49462a9cccae590024ab8c_9366/Adicolor_Contempo_Track_Jacket_(Gender_Neutral)_Blue_HK2916_01_laydown.jpg",
      "https://assets.adidas.com/images/w_600,f_auto,q_auto/cb96bde893dd44c8b575ae5900247dc7_9366/Adicolor_Contempo_Track_Jacket_(Gender_Neutral)_Blue_HK2916_25_outfit.jpg",
      "https://assets.adidas.com/images/w_600,f_auto,q_auto/9a6e651cd95144649290ae5900248afb_9366/Adicolor_Contempo_Track_Jacket_(Gender_Neutral)_Blue_HK2916_41_detail.jpg",
      "https://assets.adidas.com/images/w_600,f_auto,q_auto/7a2d88c2f90d426492eeae5900249918_9366/Adicolor_Contempo_Track_Jacket_(Gender_Neutral)_Blue_HK2916_42_detail.jpg",
      "https://assets.adidas.com/images/w_600,f_auto,q_auto/1e940e34859b445bb0cdaee700c02b01_9366/Adicolor_Contempo_Track_Jacket_(Gender_Neutral)_Blue_HK2916_HM2.jpg",
    ],
    name: "Adicolor Contempo Track Jacket (Gender Neutral)",
    price: "$100",
    sizes: ["XS", "S", "M", "L", "XL", "2XL"],
    colors: [
      {
        alt: "Product color: Black",
        img: "https://assets.adidas.com/images/w_320,f_auto,q_auto,fl_lossy,c_fill,g_auto/f064a0d8b8fc4441914faea200d247b2_9366/Adicolor_Contempo_Track_Jacket_(Gender_Neutral)_Black_HK2914_21_model.jpg",
        url: "https://www.adidas.com/us/adicolor-contempo-track-jacket-gender-neutral/HK2914.html",
      },
      {
        alt: "Product color: Almost Blue",
        img: "https://assets.adidas.com/images/w_320,f_auto,q_auto,fl_lossy,c_fill,g_auto/e6fb57b1dbe94a529e63ae59002465f5_9366/Adicolor_Contempo_Track_Jacket_(Gender_Neutral)_Blue_HK2916_21_model.jpg",
        url: "https://www.adidas.com/us/adicolor-contempo-track-jacket-gender-neutral/HK2916.html",
      },
    ],
    description:
      "A tailored rework of the Firebird Track Jacket.This season, adicolor reimagines loungewear classics with a sartorial sensitivity. Tailored dressing collides with sportswear as icons from the archive are crafted in unblemished soft suiting twill.Minimal and understated, the 3-Stripes are refined in a chunky treatment for a subtle finish. ​ \n\nThe Firebird goes down as one of the blueprints for adidas track suits. It's been reworked through the decades, revitalized according to the zeitgeist of the years. This season, the adicolor Contempo Track Jacket is recreated through a sartorial lens, with a modern, minimalist look. Pair with adicolor Contempo Track Pants for drapey perfection.",
  },
  {
    _id: {
      $oid: "638c20ede045526f5ebc0a68",
    },
    imgs: [
      "https://assets.adidas.com/images/w_600,f_auto,q_auto/a6f82e427a614cfb8d6caed9010f3adc_9366/Down_Regen_Hooded_Puffer_Jacket_Black_HL9181_21_model.jpg",
      "https://assets.adidas.com/images/w_600,f_auto,q_auto/52930df8b4324db28261aed9010f4339_9366/Down_Regen_Hooded_Puffer_Jacket_Black_HL9181_22_model.jpg",
      "https://assets.adidas.com/images/w_600,f_auto,q_auto/45dc8cc6f72f42fcbd98aed9010f4bbd_9366/Down_Regen_Hooded_Puffer_Jacket_Black_HL9181_23_hover_model.jpg",
      "https://assets.adidas.com/images/w_600,f_auto,q_auto/91319d3c3a5a4573b64aaed9010f54a1_9366/Down_Regen_Hooded_Puffer_Jacket_Black_HL9181_25_model.jpg",
      "https://assets.adidas.com/images/w_600,f_auto,q_auto/56c9ae324d3a4f778f0caec300ee650b_9366/Down_Regen_Hooded_Puffer_Jacket_Black_HL9181_01_laydown.jpg",
      "https://assets.adidas.com/images/w_600,f_auto,q_auto/66a3f30aafe5460b9b65aed9010f5bd7_9366/Down_Regen_Hooded_Puffer_Jacket_Black_HL9181_25_outfit.jpg",
      "https://assets.adidas.com/images/w_600,f_auto,q_auto/3dec5c4e71e045f1a871aed9010f66d9_9366/Down_Regen_Hooded_Puffer_Jacket_Black_HL9181_41_detail.jpg",
      "https://assets.adidas.com/images/w_600,f_auto,q_auto/ec141add80224268abf7aed9010f71ba_9366/Down_Regen_Hooded_Puffer_Jacket_Black_HL9181_42_detail.jpg",
      "https://assets.adidas.com/images/w_600,f_auto,q_auto/821e79368423455d9bb4aed9010f7bf6_9366/Down_Regen_Hooded_Puffer_Jacket_Black_HL9181_43_detail.jpg",
    ],
    name: "Down Regen Hooded Puffer Jacket",
    price: "$220",
    sizes: ["XS", "S", "M", "L", "XL", "2XL"],
    colors: [],
    description:
      "An insulated down puffer jacket made in part with recycled content.The weather changes. Your plans don't need to. Not with this adidas puffer jacket. The perfect antidote to the cold, the insulated down jacket has a snap-button detachable hood that lets you change up your look and adjust according to the weather. The top half and bottom half show off different sheens in a subtle material play.",
  },
  {
    _id: {
      $oid: "638c20ede045526f5ebc0a69",
    },
    imgs: [
      "https://assets.adidas.com/images/w_600,f_auto,q_auto/d834da546212435b86c4ae8000a9cdb4_9366/Helionic_Hooded_Down_Jacket_Black_HG8751_21_model.jpg",
      "https://assets.adidas.com/images/w_600,f_auto,q_auto/af9bc0a4ba764b8a96b4ae8000a9d682_9366/Helionic_Hooded_Down_Jacket_Black_HG8751_22_model.jpg",
      "https://assets.adidas.com/images/w_600,f_auto,q_auto/d26bac85bdee4bf987f4ae8000a9df80_9366/Helionic_Hooded_Down_Jacket_Black_HG8751_23_hover_model.jpg",
      "https://assets.adidas.com/images/w_600,f_auto,q_auto/73f61735db234caebac0ae8000a9e94e_9366/Helionic_Hooded_Down_Jacket_Black_HG8751_25_model.jpg",
      "https://assets.adidas.com/images/w_600,f_auto,q_auto/0a5da2df3fad4a83a273ae8e010ea5a6_9366/Helionic_Hooded_Down_Jacket_Black_HG8751_01_laydown.jpg",
      "https://assets.adidas.com/images/w_600,f_auto,q_auto/95928b6669f1436c85e5ae8000a9f089_9366/Helionic_Hooded_Down_Jacket_Black_HG8751_25_outfit.jpg",
      "https://assets.adidas.com/images/w_600,f_auto,q_auto/af424e9fc4994f028c36ae8000a9fdcc_9366/Helionic_Hooded_Down_Jacket_Black_HG8751_41_detail.jpg",
      "https://assets.adidas.com/images/w_600,f_auto,q_auto/120ee2464a2649739129ae8000aa0b57_9366/Helionic_Hooded_Down_Jacket_Black_HG8751_42_detail.jpg",
      "https://assets.adidas.com/images/w_600,f_auto,q_auto/ba9a732cba6f4cadb718ae8000aa1664_9366/Helionic_Hooded_Down_Jacket_Black_HG8751_43_detail.jpg",
    ],
    name: "Helionic Hooded Down Jacket",
    price: "$160",
    sizes: ["S", "M", "L", "XL", "2XL", "3XL"],
    colors: [
      {
        alt: "Product color: Green Oxide",
        img: "https://assets.adidas.com/images/w_320,f_auto,q_auto,fl_lossy,c_fill,g_auto/07930e3cbde242b9a681ae5300d39520_9366/Helionic_Hooded_Down_Jacket_Green_HG8749_21_model.jpg",
        url: "https://www.adidas.com/us/helionic-hooded-down-jacket/HG8749.html",
      },
      {
        alt: "Product color: Black",
        img: "https://assets.adidas.com/images/w_320,f_auto,q_auto,fl_lossy,c_fill,g_auto/d834da546212435b86c4ae8000a9cdb4_9366/Helionic_Hooded_Down_Jacket_Black_HG8751_21_model.jpg",
        url: "https://www.adidas.com/us/helionic-hooded-down-jacket/HG8751.html",
      },
    ],
    description:
      "A classic down jacket made in part with recycled materials.Ah, the timeless style and the unmatched comfort of down. For cold winter days, this adidas down jacket offers go-to warmth that you can feel as soon as you zip it up. Elastic cuffs and an adjustable hem seal in heat for the comfort to get you through winter. Pull up the hood for the ultimate in cozy coverage. Zip pockets keep hands warm and your keys or phone within easy reach.",
  },
  {
    _id: {
      $oid: "638c20ede045526f5ebc0a6a",
    },
    imgs: [
      "https://assets.adidas.com/images/w_600,f_auto,q_auto/4a710df072214432b6d5ae80007d573f_9366/THE_TS_JACKET_M_Black_HF9018_21_model.jpg",
      "https://assets.adidas.com/images/w_600,f_auto,q_auto/1dff7d44cdcc4acaa8aeae80007d62f2_9366/THE_TS_JACKET_M_Black_HF9018_22_model.jpg",
      "https://assets.adidas.com/images/w_600,f_auto,q_auto/8dbc26e42ab044d586cbae80007d6c57_9366/THE_TS_JACKET_M_Black_HF9018_23_hover_model.jpg",
      "https://assets.adidas.com/images/w_600,f_auto,q_auto/97fbbe0529834b10a789ae80007d767f_9366/THE_TS_JACKET_M_Black_HF9018_25_model.jpg",
      "https://assets.adidas.com/images/w_600,f_auto,q_auto/47691598acaa44929b76ae80007db091_9366/THE_TS_JACKET_M_Black_HF9018_01_laydown.jpg",
      "https://assets.adidas.com/images/w_600,f_auto,q_auto/c205ab183559464bb179ae80007d82ed_9366/THE_TS_JACKET_M_Black_HF9018_41_detail.jpg",
      "https://assets.adidas.com/images/w_600,f_auto,q_auto/8e8c6f2a671a49a29f84ae80007d8f3c_9366/THE_TS_JACKET_M_Black_HF9018_42_detail.jpg",
      "https://assets.adidas.com/images/w_600,f_auto,q_auto/eb4c7f2a0e7743d3aa45ae80007d9bc2_9366/THE_TS_JACKET_M_Black_HF9018_43_detail.jpg",
    ],
    name: "THE TS JACKET M",
    price: "$140",
    sizes: ["XS", "S", "M", "L", "XL", "2XL"],
    colors: [],
    description:
      "A versatile cycling jacket made in part with recycled materials.Zip up for the daily commute with 3-Stripes style and dedicated cycling features. The adidas Trackstand Cycling Jacket brings a cycling-specific design to the classic track jacket. Three pockets across the back let you keep essentials handy while on the bike, and regular hand pockets add utility for off-bike wear. Splash-proof fabric plus an extended droptail design shed road spray in damp conditions. There's plenty of stretch for a comfortable feel, whether you're on the bike or walking across town.\n\nMade with a series of recycled materials, and at least 60% recycled content, this product represents just one of our solutions to help end plastic waste.",
  },
];
const prisma = new PrismaClient();
async function main() {
  items.map(async (item) => {
    const { _id, ...rest } = item;
    await prisma.products.create({
      data:{
        ...rest
      }
    });
  });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });