// Version 0.01
const numlibs = 6;
const namesinlib = 50;
/**
* function generate a baby name from two parents
 * @param {string} maleName - the male parent's name
 * @param {string} femaleName - the female parent's name
 * @param {string} gender - the desired gender
*/
function generateBabyName(maleName, femaleName, gender) {
    // console.log('generate '+gender+' baby for '+maleName+' & '+femaleName);
    // male first
    let nameLogic = 'random';
    let stop = false;
    let ethnic = null;
    let thisSeed = null;
    if (Math.random() < 0.45) {
      nameLogic = 'maleParent';
    } else if (Math.random() < 0.9) {
      nameLogic = 'femaleParent';
    }
    if (nameLogic == 'random') {
      if (gender == 'boy') {
        return getRandomMaleName(Math.round(Math.random()*((numlibs * namesinlib)-1)));
      } else {
        return getRandomFemaleName(Math.round(Math.random()*((numlibs * namesinlib)-1)));
      }
    } else if (nameLogic == 'maleParent') {
      for (let i = 0; !stop && i < namesinlib; i++) {
        // find the name first to determine which pool to draw from
        if (maleName == maleCeltic[i]) {
          stop = true;
          ethnic = 'celtic';
        }
      }
      for (let i = 0; !stop && i < namesinlib; i++) {
        // find the name first to determine which pool to draw from
        if (maleName == maleScandinavian[i]) {
          stop = true;
          ethnic = 'scandinavian';
        }
      }
      for (let i = 0; !stop && i < namesinlib; i++) {
        // find the name first to determine which pool to draw from
        if (maleName == maleAmerican[i]) {
          stop = true;
          ethnic = 'american';
        }
      }
      for (let i = 0; !stop && i < namesinlib; i++) {
        // find the name first to determine which pool to draw from
        if (maleName == maleJapanese[i]) {
          stop = true;
          ethnic = 'japanese';
        }
      }
      for (let i = 0; !stop && i < namesinlib; i++) {
        // find the name first to determine which pool to draw from
        if (maleName == maleIslander[i]) {
          stop = true;
          ethnic = 'islander';
        }
      }
      for (let i = 0; !stop && i < namesinlib; i++) {
        // find the name first to determine which pool to draw from
        if (maleName == maleAfrican[i]) {
          stop = true;
          ethnic = 'african';
        }
      }
    } else {
      // now female
      stop = false;
      target = null;
      for (let i = 0; !stop && i < namesinlib; i++) {
        // find the name first to determine which pool to draw from
        if (femaleName == femaleCeltic[i]) {
          stop = true;
          ethnic = 'celtic';
        }
      }
      for (let i = 0; !stop && i < namesinlib; i++) {
        // find the name first to determine which pool to draw from
        if (femaleName == femaleScandinavian[i]) {
          stop = true;
          ethnic = 'scandinavian';
        }
      }
      for (let i = 0; !stop && i < namesinlib; i++) {
        // find the name first to determine which pool to draw from
        if (femaleName == femaleAmerican[i]) {
          stop = true;
          ethnic = 'american';
        }
      }
      for (let i = 0; !stop && i < namesinlib; i++) {
        // find the name first to determine which pool to draw from
        if (femaleName == femaleJapanese[i]) {
          stop = true;
          ethnic = 'japanese';
        }
      }
      for (let i = 0; !stop && i < namesinlib; i++) {
        // find the name first to determine which pool to draw from
        if (femaleName == femaleIslander[i]) {
          stop = true;
          ethnic = 'islander';
        }
      }
      for (let i = 0; !stop && i < namesinlib; i++) {
        // find the name first to determine which pool to draw from
        if (femaleName == femaleAfrican[i]) {
          stop = true;
          ethnic = 'african';
        }
      }
      if (ethnic == null) {
        console.log('Error: Name not found in library '+ethnic);
      }
    }

      // now process it
      if (ethnic == 'celtic') {
        if (gender == 'boy') {
          thisSeed = Math.floor(Math.random()*namesinlib);
          return maleCeltic[thisSeed];
        } else {
          thisSeed = Math.floor(Math.random()*namesinlib);
          return femaleCeltic[thisSeed];
        }
      } else if (ethnic == 'scandinavian') {
        if (gender == 'boy') {
          thisSeed = Math.floor(Math.random()*namesinlib);
          return maleScandinavian[thisSeed];
        } else {
          thisSeed = Math.floor(Math.random()*namesinlib);
          return femaleScandinavian[thisSeed];
        }
      } else if (ethnic == 'japanese') {
        if (gender == 'boy') {
          thisSeed = Math.floor(Math.random()*namesinlib);
          return maleJapanese[thisSeed];
        } else {
          thisSeed = Math.floor(Math.random()*namesinlib);
          return femaleJapanese[thisSeed];
        }
      } else if (ethnic == 'american') {
        if (gender == 'boy') {
          thisSeed = Math.floor(Math.random()*namesinlib);
          return maleAmerican[thisSeed];
        } else {
          thisSeed = Math.floor(Math.random()*namesinlib);
          return femaleAmerican[thisSeed];
        }
      } else if (ethnic == 'islander') {
        if (gender == 'boy') {
          thisSeed = Math.floor(Math.random()*namesinlib);
          return maleIslander[thisSeed];
        } else {
          thisSeed = Math.floor(Math.random()*namesinlib);
          return femaleIslander[thisSeed];
        }
      } else if (ethnic == 'african') {
        if (gender == 'boy') {
          thisSeed = Math.floor(Math.random()*namesinlib);
          return maleAfrican[thisSeed];
        } else {
          thisSeed = Math.floor(Math.random()*namesinlib);
          return femaleAfrican[thisSeed];
        }
      }
    console.log('Stop is '+stop+' Ethnic was '+ethnic+' namelogic was '+nameLogic+' Parents were '+maleName+' & '+femaleName+' gender was '+gender+' seed was '+thisSeed);
  };
  function getRandomMaleName(seed) {
    let seedTrans = seed;
    if (!(seed >= 0) && !(seed <= (numlibs * namesinlib))) {
      seed = Math.floor(Math.random()*totalMaleNames);
    }
    if (seed < namesinlib) {
      return maleCeltic[seed];
    } else if (seed < (2 * namesinlib)) {
      seedTrans = (seed - namesinlib);
      return maleScandinavian[seedTrans];
    } else if (seed < (3 * namesinlib)) {
      seedTrans = (seed - (2 * namesinlib));
      return maleJapanese[seedTrans];
    } else if (seed < (4 * namesinlib)) {
      seedTrans = (seed - (3 * namesinlib));
      return maleAmerican[seedTrans];
    } else if (seed < (5 * namesinlib)) {
      seedTrans = (seed - (4 * namesinlib));
      return maleIslander[seedTrans];
    } else if (seed < (6 * namesinlib)) {
      seedTrans = (seed - (5 * namesinlib));
      return maleAfrican[seedTrans];
    }
    console.log('error m');
  };
  function getRandomFemaleName(seed) {
    if (!(seed >= 0) && !(seed <= (numlibs * namesinlib))) {
      seed = Math.floor(Math.random()*totalFemaleNames);
    }
    if (seed < namesinlib) {
      return femaleCeltic[seed];
    } else if (seed < (2 * namesinlib)) {
      seedTrans = (seed - namesinlib);
      return femaleScandinavian[seedTrans];
    } else if (seed < (3 * namesinlib)) {
      seedTrans = (seed - (2 * namesinlib));
      return femaleJapanese[seedTrans];
    } else if (seed < (4 * namesinlib)) {
      seedTrans = (seed - (3 * namesinlib));
      return femaleAmerican[seedTrans];
    } else if (seed < (5 * namesinlib)) {
      seedTrans = (seed - (4 * namesinlib));
      return femaleIslander[seedTrans];
    } else if (seed < (6 * namesinlib)) {
      seedTrans = (seed - (5 * namesinlib));
      return femaleAfrican[seedTrans];
    }
    console.log('error m');
  };
  function reportNames() {
    // STRESS TESTING
    console.log('Checking integrity of names database');
    // let stop = false;
    // let t = 0;
    // let gname = getRandomFemaleName(Math.round(Math.random()*totalFemaleNames));
    // let bname = getRandomMaleName(Math.round(Math.random()*totalMaleNames));
    // for (t = 0; t < 10000 && !stop; t++) {
    //   gname = generateBabyName(bname, gname, 'girl');
    //   bname = generateBabyName(bname, gname, 'boy');
    //   if (gname == null) {
    //     console.log('null name after '+t+' parents were '+myGuys[1].name+' and '+gname);
    //     stop = true;
    //   }
    //   if (bname == null) {
    //     console.log('null name after '+t+' parents were '+bname+' and '+myGuys[0].name);
    //     stop = true;
    //   }
    // }
    return totalMaleNames +' male and '+totalFemaleNames+' female names found in database.\n'+namesinlib+' '+namesinlib+' celtic\n'+namesinlib+' '+namesinlib+' americas\n'+namesinlib+' '+namesinlib+' japanese\n'+namesinlib+' '+namesinlib+' islander\n'+namesinlib+' '+namesinlib+' scandinavian\n'+namesinlib+' '+namesinlib+' african';
  };


const maleCeltic = [
  // celtic
  'Adair',
  'Aidan',
  'Aeron',
  'Ahearn',
  'Angus',
  'Bledig',
  'Brenin',
  'Brychan',
  'Cadoc',
  'Cian',
  'Diarmid',
  'Donnan',
  'Conor',
  'Dewi',
  'Dylan',
  'Eachann',
  'Elisud',
  'Ewan',
  'Fergus',
  'Finn',
  'Gar',
  'Glyn',
  'Griffin',
  'Gwalchgwyn',
  'Iestyn',
  'Ieuan',
  'Ioan',
  'Lachlan',
  'Logan',
  'Llew',
  'Macsen',
  'Manawydan',
  'Matholwch',
  'Niall',
  'Oenghus',
  'Oisin',
  'Peredyr',
  'Pryderi',
  'Pwyll',
  'Rory',
  'Sion',
  'Stefan',
  'Tegeirian',
  'Terryn',
  'Talog',
  'Tamhas',
  'Taron',
  'Tomos',
  'Trystan',
  'Tudor',
];

const femaleCeltic = [
  // celtic
  'Aeval',
  'Ailsa',
  'Aileen',
  'Aine',
  'Angharad',
  'Aoife',
  'Arabel',
  'Aranrhod',
  'Blodeuyn',
  'Branwen',
  'Caoimhe',
  'Catriona',
  'Cerian',
  'Ceridwen',
  'Cernunnos',
  'Conchenn',
  'Deoiridh',
  'Efa',
  'Elen',
  'Epona',
  'Eirian',
  'Fionnuala',
  'Goewyn',
  'Gwawr',
  'Greer',
  'Hedydd',
  'Isla',
  'Jura',
  'Lili',
  'Maebh',
  'Maeve',
  'Manannan',
  'Mererid',
  'Mhairi',
  'Morrigan',
  'Nesta',
  'Nia',
  'Niamh',
  'Olwen',
  'Rhiannon',
  'Seren',
  'Saoirse',
  'Siobhan',
  'Sinead',
  'Siriol',
  'Sorcha',
  'Swyn',
  'Tegan',
  'Taryn',
  'Una',
];


const maleScandinavian = [
  // scandinavian
  'Aaric',
  'Aksel',
  'Andhrimnir',
  'Alfadir',
  'Arvid',
  'Astrild',
  'Amhlaoibh',
  'Bragi',
  'Dag',
  'Ersbjorn',
  'Fandral',
  'Fell',
  'Folke',
  'Grim',
  'Gunnolf',
  'Gustav',
  'Heimdall',
  'Holgan',
  'Hjalmar',
  'Isak',
  'Jormingand',
  'Jorn',
  'Jutka',
  'Kjartan',
  'Loki',
  'Loui',
  'Ludvig',
  'Magni',
  'Malte',
  'Modi',
  'Melker',
  'Mimir',
  'Nils',
  'Njal',
  'Njord',
  'Odin',
  'Otto',
  'Radorm',
  'Sigge',
  'Sindri',
  'Sleipnir',
  'Tage',
  'Thorbiartl',
  'Thorne',
  'Troy',
  'Valmiki',
  'Vide',
  'Viggo',
  'Volstaff',
  'Yisreal',
];

const femaleScandinavian = [
  // scandinavian
  'Alma',
  'Astrid',
  'Atla',
  'Brynhild',
  'Bylgia',
  'Eir',
  'Freya',
  'Freyr',
  'Fulla',
  'Gale',
  'Gefion',
  'Greta',
  'Gunnhild',
  'Hedda',
  'Hedvig',
  'Hela',
  'Hilde',
  'Indunn',
  'Ines',
  'Ingrid',
  'Jord',
  'Lofn',
  'Lova',
  'Majken',
  'Maja',
  'Moa',
  'Noomi',
  'Nott',
  'Ostara',
  'Rae',
  'Ragnhild',
  'Ran',
  'Ranveig',
  'Saga',
  'Signe',
  'Sigrid',
  'Sigrunn',
  'Sif',
  'Skadi',
  'Sjofn',
  'Sjojn',
  'Solveig',
  'Svanhild',
  'Torhild',
  'Torunn',
  'Tyra',
  'Var',
  'Vigdis',
  'Voluspa',
  'Yngvild',
];

const maleAmerican = [
  // native American / mayan / incan / aztec
  'Ahuatzi',
  'Amaruq',
  'Aviaja',
  'Camaxtli',
  'Cinteotl',
  'Cipactonal',
  'Coatlicue',
  'Dahteste',
  'Ekchuah',
  'Eueucoyotl',
  'Hiawatha',
  'Hokaratcha',
  'Huacaltzintli',
  'Huehuecoyotl',
  'Huitzilin',
  'Itzcali',
  'Itzcoatl',
  'Ixchel',
  'Kaiah',
  'Kimimela',
  'Kumaglak',
  'Maconaquea',
  'Mixcoatl',
  'Mextli',
  'Nacon',
  'Nochehuatl',
  'Ocotlan',
  'Pakuna',
  'Panuk',
  'Papina',
  'Pebbles',
  'Pocahontas',
  'Sakakawea',
  'Shenandoah',
  'Tenoch',
  'Tarĸik',
  'Toklo',
  'Tayatina',
  'Teanawesia',
  'Teotihuacan',
  'Tlanextic',
  'Tupelo',
  'Tupoc',
  'Ujurak',
  'Xochipilli',
  'Yoskolo',
  'Yotimo',
  'Yutu',
  'Xicotencatl',
  'Zitkala',
];

const femaleAmerican = [
  // native American / mayan / incan / aztec
  'Acolmiztli',
  'Adlartok',
  'Ahanu',
  'Aqakuktuqa',
  'Anacaona',
  'Apozanolotl',
  'Atiqtalaaq',
  'Axayacatl',
  'Byue',
  'Cherokee',
  'Chicomecoatl',
  'Chipahua',
  'Coaxoch',
  'Copacati',
  'Cuauhtemoc',
  'Cuicatl',
  'Goyahkla',
  'Ichipuchtli',
  'Ixcuiname',
  'Ixtli',
  'Ikiaq',
  'Kanaaq',
  'Kireama',
  'Kirima',
  'Kohana',
  'Lalawethika',
  'Mariana',
  'Nanouk',
  'Nenetl',
  'Nuvua',
  'Oello',
  'Pachamama',
  'Pahkakino',
  'Pontiac',
  'Quetzalcoatl',
  'Quetzalli',
  'Sequoiah',
  'Shilah',
  'Squanto',
  'Taregan',
  'Tatanka',
  'Tayanna',
  'Tecumseh',
  'Teyemthohisa',
  'Tezcatlipoca',
  'Tlazolteotl',
  'Tukkuttok',
  'Xipetotec',
  'Xochiqutzal',
  'Yactecuhtli',
];

const maleJapanese = [
  // Japanese
  'Aizen',
  'Ashitaka',
  'Asahi',
  'Amatsu',
  'Bishamon',
  'Daibosatsu',
  'Daiki',
  'Daikoku',
  'Eita',
  'Ekibiogami',
  'Funaki',
  'Fujiwara',
  'Fujukin',
  'Fukurokuju',
  'Gekka',
  'Haru',
  'Haruto',
  'Hinata',
  'Itsuki',
  'Jijii',
  'Jiro',
  'Jinushigami',
  'Kaneko',
  'Kakihara',
  'Katsushiro',
  'Koki',
  'Kukunochi',
  'Kota',
  'Nkaazawa',
  'Minato',
  'Ohkami',
  'Ohonamochi',
  'Oyamatsumi',
  'Reo',
  'Rikuto',
  'Ryu',
  'Saburo',
  'Shoma',
  'Sosuki',
  'Sota',
  'Suijin',
  'Taisei',
  'Takumi',
  'Takayama',
  'Tatsuki',
  'Tenjin',
  'Touma',
  'Yabune',
  'Yamato',
  'Yuuto',
];

const femaleJapanese = [
  // Japanese
  'Akari',
  'Aoi',
  'Ayaka',
  'Chibiusa',
  'Haniyasu',
  'Hina',
  'Himari',
  'Hime',
  'Ichika',
  'Izanami',
  'Kaminari',
  'Kamui',
  'Kanayama',
  'Kanna',
  'Koharu',
  'Kojin',
  'Kokona',
  'Kishi',
  'Makoto',
  'Mamoru',
  'Mei',
  'Michiru',
  'Minako',
  'Misaki',
  'Miyazu',
  'Miyu',
  'Momoka',
  'Nanami',
  'Natsuki',
  'Niko',
  'Ria',
  'Rio',
  'Ruka',
  'Sakura',
  'San',
  'Sana',
  'Sara',
  'Sayori',
  'Shiori',
  'Tanabata',
  'Tatsuta',
  'Toyouke',
  'Ukemochi',
  'Usagi',
  'Wakahiru',
  'Yui',
  'Yuki',
  'Yume',
  'Yuna',
  'Yuri',
];


const maleIslander = [
  // islander
  'Aleki',
  'Aheahe',
  'Afa',
  'Akamai',
  'Akamu',
  'Akea',
  'Ainalani',
  'Akeakamai',
  'Ao',
  'Apukohai',
  'Aputi',
  'Atea',
  'Atutahi',
  'Auraka',
  'Fetu',
  'Hawea',
  'Kahale',
  'Kahikilani',
  'Kaiholo',
  'Kahuna',
  'Kaikani',
  'Kaleo',
  'Kanaloa',
  'Kamapua\'a',
  'Keala',
  'Koa',
  'Kuahana',
  'Kulani',
  'Kukailimoku',
  'Lahahana',
  'Lagi',
  'Loto',
  'Iosefa',
  'Ku',
  'Manaia',
  'Manuia',
  'Maru',
  'Makaio',
  'Makoa',
  'Moaalii',
  'Mokualii',
  'Ne\'igalomeatiga',
  'Noelani',
  'Rangi',
  'Tamati',
  'Tamatoa',
  'Tui',
  'Ulaulekeahi',
  'Ukanipo',
  'Vaea',
];

const femaleIslander = [
  // islander
  'Alalahe',
  'Alani',
  'Arihi',
  'Anuhea',
  'Asoese',
  'Elei',
  'Elikapeka',
  'Emere',
  'Faumea',
  'Fetuilelagi',
  'Haukea',
  'Hinakuluiau',
  'Hokulani',
  'Iekikia',
  'Iolana',
  'Iwalani',
  'Kakalina',
  'Kala',
  'Kalea',
  'Kapo',
  'Kiha',
  'La\'akea',
  'La\'ei',
  'Lahela',
  'Leilani',
  'Leimomi',
  'Lalago',
  'Laka',
  'Lanuola',
  'Lakakane',
  'Lie',
  'Luana',
  'Mahealani',
  'Masina',
  'Moana',
  'Natia',
  'Penina',
  'Poliahu',
  'Samaria',
  'Sefina',
  'Sina',
  'Tala',
  'Taka',
  'Tama',
  'Talia',
  'Tamah',
  'Tausa\'afia',
  'Teuila',
  'Ululani',
  'Waiola',
];

const maleAfrican = [
  'Adebi',
  'Akida',
  'Asani',
  'Barke',
  'Barongo',
  'Biko',
  'Bobo',
  'Bokamoso',
  'Chandu',
  'Djimon',
  'Haji',
  'Hami',
  'Issa',
  'Fela',
  'Femi',
  'Jel',
  'Jabali',
  'Jabori',
  'Jomo',
  'Inanna',
  'Kellan',
  'Kenyada',
  'Kolo',
  'Kimani',
  'Kito',
  'Kobe',
  'Kondo',
  'Kwame',
  'Lubanzi',
  'Maleek',
  'Morongo',
  'Mosi',
  'M\'Baku',
  'N\'Jobu',
  'Obi',
  'Omari',
  'Samora',
  'Sefu',
  'Shaka',
  'Simba',
  'Sulley',
  'Tau',
  'T\'Chaka',
  'T\'Challah',
  'Thimba',
  'W\'Kabi',
  'Yaya',
  'Zain',
  'Zababa',
  'Zuberi',
];
const femaleAfrican = [
  'Adea',
  'Adiah',
  'Aja',
  'Aiysha',
  'Akila',
  'Akina',
  'Ama',
  'Amani',
  'Amare',
  'Amina',
  'Amne',
  'Atiena',
  'Ayo',
  'Behati',
  'Bishara',
  'Chiku',
  'Hediye',
  'Imani',
  'Jamila',
  'Johari',
  'Joice',
  'Kichaka',
  'Luamerava',
  'Mosiya',
  'Maha',
  'Mbali',
  'Mbwana',
  'Mukondi',
  'Naja',
  'Nalah',
  'Nakia',
  'Nea',
  'Nya',
  'Nyasha',
  'Nyimbo',
  'Nyokabi',
  'Ode',
  'Okoye',
  'Oni',
  'Oya',
  'Ramonda',
  'Sabra',
  'Shuri',
  'Sikudhani',
  'Thabiti',
  'Thandiwe',
  'Uma',
  'Wanja',
  'Zoya',
  'Zola',
];


const totalMaleNames = (numlibs * namesinlib);
const totalFemaleNames = (numlibs * namesinlib);