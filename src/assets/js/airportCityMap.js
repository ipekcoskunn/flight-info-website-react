const airportCityMap = {
    AAC: "EL ARISH",
    AAE: "EL MELLAH",
    AAL: "ALBORG",
    AAR: "TIRSTRUP",
    AAS: "ARAXOS (AB)",
    AAY: "AL GAIDAH",
    ABA: "ALBANY",
    ABB: "ABINGDON (AB)",
    ABD: "ABADAN",
    ABE: "ALLENTOWN",
    ABH: "ABHA",
    ABJ: "PORT-BOUET",
    ABK: "KABREDARE",
    ABQ: "ALBUQUEROU",
    ABS: "ABU-SIMBEL",
    ABT: "AL BAHA",
    ABV: "ABUJA INTL",
    ABX: "ALBURY",
    ABZ: "DYCE",
    ACA: "GENERAL JUAN N.ALVAR",
    ACC: "KOTOKA INTL",
    ACH: "RORSCHACH",
    ACI: "ALDERNEY",
    ADA: "SAKIRPASA",
    ADB: "ADNAN MENDERES",
    ADD: "BOLE INTL",
    ADE: "ADEN INTL",
    ADF: "ADIYAMAN HAVALİMANI",
    ADJ: "MARKA INTL",
    ADL: "ADELAIDE",
    ADW: "ANDREWS AFB",
    ADZ: "SESQUICENTENARIO",
    AEO: "AIOUN-EL-ATROUSS",
    AEP: "AEROPARQUE JORGE NEW",
    AER: "SOCHI",
    AES: "VIGRA",
    AEY: "AKUREYRI",
    AFY: "AFYON_AB",
    AGA: "INEZGANE",
    AGF: "LA GARENNE",
    AGH: "ANGELHOLM (AB)",
    AGP: "MALAGA",
    AGR: "AGRA (AB)",
    AGZ: "AGGENYS",
    AHB: "ABHA",
    AHO: "FERTILIA",
    AHU: "COTE DU RIF",
    AJA: "CAMPO DELL'ORO",
    AJF: "AL JOUF",
    AJI: "AGRI",
    AJJ: "AKJOUJT",
    AJY: "SUD",
    AKD: "AKOLA",
    AKF: "KUFRA",
    AKL: "AUCKLAND INTL",
    AKR: "AKURE",
    AKT: "AKROTIRI(AB)",
    AKX: "AKTYUBINSK",
    ALA: "ALMA ATA",
    ALB: "ALBANY",
    ALC: "ALICANTE",
    ALF: "ALTA",
    ALG: "HOUARI BOUMEDIENE",
    ALJ: "BAAI",
    ALL: "ALBENGA",
    ALP: "NEIRAB",
    ALY: "ALEXANDRIA",
    AMA: "AMARILLO",
    AMD: "AHMADABAD",
    AMM: "QUEEN ALIA INTL",
    AMQ: "PATTIMURA",
    AMS: "SCHIPHOL",
    ANF: "CERRO MORENO",
    ANG: "BRIE CHAMPNIERS",
    ANK: "ETIMESGUT",
    ANO: "ANGOCHE",
    ANR: "DEURNE",
    ANU: "V.C. BIRD, ANTIGUA I",
    AOI: "FALCONARA",
    AOK: "KARPATHOS",
    AOR: "SULTAN ABDUL HALIM",
    APL: "NAMPULA",
    APW: "FALEOLO INTL",
    AQI: "HAFR AL-BATIN",
    AQJ: "AQABA_INT'L",
    AQP: "RODRIGUEZ BALLON INT",
    ARI: "CHACALLUTA",
    ARK: "ARUSHA",
    ARN: "ARLANDA",
    ARW: "ARAD",
    ARZ: "N ZETO",
    ASA: "ASSAB",
    ASB: "ASHKHABAD",
    ASM: "ASMARA INTL",
    ASP: "ALICE SPRINGS",
    ASR: "ERKILET_AB",
    ASU: "SILVIO PETTIROSSI",
    ASW: "ASWAN",
    ATA: "ATATURK",
    ATH: "ATHINAI",
    ATL: "WILLIAM B. HARTSFIEL",
    ATR: "ATAR",
    ATZ: "ASYUT",
    AUH: "ABU DHABI INTL",
    AUR: "AURILLAC",
    AUS: "AUSTIN",
    AVB: "AVIANO_(MIL)",
    AVV: "AVALON",
    AWZ: "AHWAZ",
    AXD: "DIMOKRITOS",
    AXK: "ATAQ",
    AXU: "AXUM",
    AYT: "ANTALYA",
    AZD: "YAZD",
    AZR: "TOUAT",
    BAH: "BAHRAIN INTL",
    BAK: "BINA",
    BAL: "BATMAN_AB",
    BAQ: "ERNESTO CORTISSOZ",
    BAY: "TAUTII-MAGHERAUS",
    BBB: "BAHRAIN INTL",
    BBO: "BERBERA",
    BBU: "BANEASA",
    BCN: "BARCELONA",
    BDA: "BERMUDA",
    BDH: "BANDAR LENGEH",
    BDL: "BRADLEY INTL",
    BDM: "BANDIRMA_AB",
    BDQ: "VADODARA",
    BDR: "BDR",
    BDS: "CASALE",
    BDU: "BARDUFOSS",
    BEG: "SURCIN",
    BEL: "VAL DE CAES",
    BEN: "BENINA",
    BES: "GUIPAVAS",
    BEV: "TEYMAN",
    BEW: "BEIRA",
    BEY: "BEIRUT INTL",
    BFI: "BOEING FIELD-KING CO",
    BFN: "J.B.M. HERTZOG",
    BFO: "BUFFALO RANGE",
    BFS: "ALDERGROVE",
    BFX: "BAFOUSSAM",
    BGC: "BRAGANCA",
    BGI: "GRANTLEY ADAMS INTL",
    BGN: "BRUGGEN (AB)",
    BGO: "FLESLAND",
    BGR: "BANGOR INTL",
    BGY: "ORIO AL SERIO",
    BGZ: "BRAGA",
    BHD: "BELFAST HARBOUR",
    BHH: "BISHA",
    BHJ: "BHUJ",
    BHK: "BUHARA",
    BHM: "BIRMINGHAM",
    BHN: "BEIHAN",
    BHO: "BHOPAL",
    BHQ: "BROKEN HILL",
    BHV: "BAHAWALPUR",
    BHW: "SARGODHA (AB)",
    BHX: "BIRMINGHAM",
    BIA: "PORETTA",
    BIK: "FRANS KAISIEPO",
    BIO: "BILBAO",
    BIQ: "ANGLET",
    BIR: "BIRADNAGAR",
    BJA: "SOUMMAM",
    BJL: "YUNDUM INTL",
    BJM: "BUJUMBURA",
    BJR: "BAHAR DAR",
    BJS: "BEIJING",
    BJV: "MILAS",
    BJZ: "TALAVERA LA REAL AB",
    BKI: "KOTA KINABALU",
    BKJ: "BARALANDE",
    BKK: "BANGKOK INTL",
    BKO: "SENOU",
    BKY: "KAVUMU",
    BLA: "GRAL.JOSE ANTONIO AN",
    BLE: "BORLANGE (AB)",
    BLK: "BLACKPOOL",
    BLL: "BILLUND",
    BLQ: "BORGO PANIGALI",
    BLR: "BANGALORE",
    BLZ: "CHILEKA",
    BMA: "BROMMA",
    BMO: "BHAMO",
    BNA: "NASHVILLE",
    BND: "BANDAR ABBAS INTL",
    BNE: "BRISBANE INTL",
    BNI: "BENIN",
    BNJ: "HANGELAR",
    BNP: "BANNU",
    BNX: "BANJA LUKA",
    BOD: "MERIGNAC",
    BOG: "ELDORADO",
    BOH: "HURN",
    BOI: "BOISE",
    BOJ: "SARAFOVO",
    BOM: "MUMBAI",
    BON: "FLAMINGO,BONAIRE I.",
    BOO: "BODO",
    BOR: "FONTAINE",
    BOS: "GEN. EDWARD L. LOGAN",
    BOY: "BOBO-DIOULASSO",
    BQN: "RAFAEL HERNANDEZ INT",
    BRC: "SAN CARLOS DE BARILO",
    BRE: "BREMEN",
    BRI: "PALESE MACCHIE",
    BRM: "BARQUISIMETO",
    BRN: "BERN-BELP",
    BRQ: "TURANY",
    BRR: "BARRA",
    BRS: "LULSGATE",
    BRU: "BRUXELLES NATIONAL",
    BSB: "BRASILIA INTL",
    BSL: "BASLE",
    BSR: "BASRAH INTL",
    BST: "BOST",
    BTA: "BERTOUA",
    BTJ: "BLANGBINTANG",
    BTK: "BRATSK",
    BTL: "BATTLE",
    BTR: "BATONROUG",
    BTS: "IVANKA",
    BTV: "BURLINGTON",
    BTZ: "BURSA",
    BUD: "FERIHEGY",
    BUE: "BUENOS AIRES",
    BUF: "BUFFALO",
    BUG: "BENGUELA",
    BUO: "BURAO",
    BUQ: "BULAWAYO",
    BUX: "BUNIA",
    BUZ: "BUSHEHR",
    BVB: "BOA VISTA INTL",
    BVE: "TILLE",
    BWA: "BHAIRAHAWA",
    BWE: "WAGGUM",
    BWF: "WALNEY ISLAND",
    BWI: "BALTIMORE-WASHINGTON",
    BWN: "BRUNEI INTL",
    BXE: "BAKEL",
    BXN: "BODRUM IMSIK",
    BXO: "OSVALDO VIEIRA",
    BYK: "BOUAKE",
    BZE: "PHILIP S W GOLDSON I",
    BZI: "BALIKESIR AB",
    BZR: "VIAS",
    BZU: "BUTA-ZEGA",
    BZV: "MAYA MAYA",
    CAB: "CABINDA",
    CAE: "COLOMBIA",
    CAG: "ELMAS",
    CAI: "CAIRO INTL",
    CAK: "AKRON",
    CAN: "BAIYUN",
    CAR: "CARNARVON",
    CAS: "ANFA",
    CAX: "CARLISLE",
    CAY: "ROCHAMBEAU",
    CBB: "JORGE WILSTERMAN",
    CBD: "CAR NICOBAR (AB)",
    CBG: "CAMBRIDGE",
    CBP: "COIMBRA",
    CBQ: "CALABAR",
    CBR: "CANBERRA",
    CCF: "SALVAZA",
    CCK: "COCOS I.",
    CCN: "CHAKHCHARAN",
    CCP: "CARRIEL SUR",
    CCS: "SIMON BOLIVAR INTL,M",
    CCU: "NETAJI SUBHAS CHANDR",
    CDG: "CHARLES DE GAULLE",
    CEO: "WAKO KUNGO",
    CEQ: "MANDELIEU",
    CER: "MAUPERTUS",
    CFE: "AULNAT",
    CFR: "CARPIQUET",
    CFS: "COFFS HARBOUR",
    CGK: "SOEKARNO-HATTO INTL",
    CGN: "BONN",
    CGP: "CHITTAGONG",
    CHC: "CHRISTCHURCH INTL",
    CHR: "DEOLS",
    CHS: "CHARLESTON",
    CHV: "CHAVES",
    CIA: "CIAMPINO",
    CIT: "CHIMKENT",
    CJL: "CHITRAL",
    CJS: "ABRAHAM GONZALEZ INT",
    CJU: "CHEJU INTL",
    CKS: "CKS",
    CKY: "GBESSIA",
    CKZ: "CANAKKALE AB",
    CLA: "COMILLA",
    CLE: "CLEVELAND-HOPKINS IN",
    CLJ: "SOMESENI",
    CLO: "ALFONSO BONILLA ARAG",
    CLT: "CHARLOTTE",
    CLY: "STE-CATHERINE",
    CMB: "KATUNAYAKE",
    CMF: "AIX-LES-BAINS",
    CMH: "COLUMBUS",
    CMN: "MOHAMED V",
    CMR: "HOUSSEN",
    CMW: "IGNACIO AGRAMONTE",
    CND: "M.KOGALNICEANU",
    CNL: "SINDAL",
    CNQ: "CORRIENTES",
    CNS: "CAIRNS",
    CNX: "CHIANG MAI INTL",
    COO: "CADJEHOUN",
    COS: "COLORADO",
    COV: "ÇUKUROVA",
    CPE: "ING. ALBERTO ACUNA O",
    CPH: "KASTRUP",
    CPT: "D.F.MALAN",
    CQF: "DUNKERQUE",
    CRL: "GOSSELIES",
    CRV: "CROTONE",
    CRW: "CHARLESTON",
    CSB: "CARANSEBES",
    CTA: "FONTANAROSSA",
    CTG: "RAFAEL NUNEZ",
    CTM: "CHETUMAL INTL",
    CTT: "LE CASTELLET",
    CTU: "CHENGDU",
    CUN: "CANCUN INTL",
    CUR: "HATO,CURACAO I.",
    CUU: "GRAL.ROBERTO FIERRO",
    CVG: "CINCINNATI",
    CVT: "COVENTRY",
    CWL: "CARDIFF",
    CXB: "COX S BAZAAR",
    CXI: "CASSIDY INTL",
    CYB: "GERRARD SMITH INTL",
    CZL: "AIN EL BEY",
    CZM: "COZUMEL INTL",
    DAC: "ZIA INTL",
    DAD: "DANANG",
    DAM: "DAMASCUS INTL",
    DAR: "DAR-ES-SALAAM",
    DAV: "ENRIQUE MALEK",
    DAY: "DAYTON",
    DBA: "DALBANDIN",
    DBJ: "BITBURG(AB)",
    DBO: "DUBBO",
    DBV: "CILIPI",
    DCI: "DECIMOMANNU (MIL)",
    DEL: "INDIRA GANDHI INTL",
    DEN: "STAPLETON INTL",
    DEZ: "DEIR ZZOR",
    DFW: "DALLAS-FORT WORTH IN",
    DHA: "DHAHRAN INTL",
    DHN: "DOTHAN",
    DIB: "DIBRUGARH",
    DIJ: "LONGVIC_AB",
    DIR: "A.T.D. YILMA INTL",
    DIS: "LOUBOMO",
    DIY: "DIYARBAKIR AB",
    DİĞER: "DİĞER",
    DJE: "ZARZIS",
    DJG: "TISKA",
    DJJ: "SENTANI",
    DJM: "DJAMBALA",
    DKR: "YOFF",
    DLA: "DOUALA",
    DLC: "ZHOUSHUIZI",
    DLD: "DAGALI",
    DLE: "TAVAUX",
    DLH: "DLH",
    DLM: "DALAMAN",
    DMI: "DHANGADHI",
    DND: "DUNDEE",
    DNK: "Dnepropetrovsk",
    DNR: "PLEURTUIT-ST.MALO",
    DNZ: "CARDAK_AB",
    DOD: "DODOMA",
    DOH: "DOHA INTL",
    DOL: "ST-GATIEN",
    DPO: "DEVONPORT",
    DPS: "BALI INTL (NGURAH RA",
    DRB: "DERBY",
    DRS: "DRESDEN",
    DRW: "DARWIN",
    DSK: "DERA ISMAIL KHAN",
    DSM: "DESMOINES",
    DTT: "DETROIT",
    DTW: "DETROIT METROPOLITAN",
    DUB: "DUBLIN",
    DUR: "LOUIS BOTHA",
    DUS: "DUSSELDORF",
    DVO: "FRANCISCO BANGOY INT",
    DWC: "Al Mektum Havalimanı",
    DXB: "DUBAI INTL",
    DYU: "DUSHANBE",
    EAB: "ABBS",
    EAM: "NEJRAN",
    EAS: "SAN SEBASTIAN",
    EBJ: "ESBJERG",
    EBU: "BOUTHEON",
    ECN: "ERCAN",
    EDI: "EDINBURGH",
    EDM: "LES AJONCS",
    EDN: "HAMBURG",
    EDO: "Balıkesir Kocaseyit Havalimanı",
    EFL: "KEFALLINIA",
    EGC: "ROUMANIERE",
    EIN: "EINDHOVEN(AB)",
    EJH: "WEJH",
    EKT: "ESKILSTUNA (AB)",
    ELG: "EL GOLEA",
    ELL: "MATIMBA",
    ELP: "EL PASO INTL",
    ELQ: "GASSIM",
    ELS: "BEN SCOEMAN",
    ELT: "EL TOR",
    ELU: "EL OUED(GUEMAR)",
    EMA: "EAST MIDLANDS INTL",
    EMN: "NEMA NEW",
    ENC: "ESSEY",
    ENS: "TWENTHE AB",
    ENU: "ENUGU",
    EOH: "OLAYA HERRERA",
    EPL: "MIRECOURT",
    ERC: "ERZINCAN",
    ERF: "ERFURT",
    ERH: "EERACHIDIA",
    ERZ: "ERZURUM",
    ESB: "ESENBOGA",
    ESK: "ESKISEHIR_AB",
    ESS: "MULHEIM",
    ESX: "ANADOLU",
    ETH: "ELAT",
    EVE: "EVENES",
    EVG: "SVEG",
    EVX: "FAUVILLE AB",
    EWB: "NEW BEDFOR",
    EWR: "NEWARK INTL",
    EXT: "EXETER",
    EYL: "YELIMANE",
    EZE: "ARPT INTL EZEIZA, MI",
    EZS: "ELAZIG",
    FAA: "BADALA",
    FAH: "FARA",
    FAN: "LISTA (AB)",
    FAO: "FARO",
    FBD: "_FAIZABAD",
    FBM: "LUANO",
    FBU: "FORNEBU",
    FCO: "FIUMICINO",
    FDF: "LE LAMENTIN,MARTINIQ",
    FDH: "FRIEDRICHSHAFEN-LOWE",
    FEL: "FURSTENFELDBRUCK AB",
    FEZ: "SAISS",
    FIH: "N'DJILI",
    FKI: "BANGOKA",
    FLL: "FORT LAUDERDALE-HOLL",
    FLR: "PERETOLA",
    FMA: "FORMOSA",
    FMI: "KALEMIE",
    FMO: "FMO",
    FMY: "FLORIDA",
    FNA: "LUNGI",
    FNC: "FUNCHAL,MADEIRA I.",
    FNI: "GARONS",
    FNJ: "SUNAN (CAPITAL)",
    FOG: "GINO LISA",
    FOM: "NKOUNJA",
    FOR: "PINTO MARTINS",
    FRA: "FRANKFURT MAIN",
    FRL: "FORLI",
    FRU: "MANAS",
    FRW: "FRANCISTOWN",
    FSC: "SUD CORSE",
    FTV: "MASVINGO",
    FTX: "OWANDO",
    FUK: "FUKUOKA",
    FUN: "FUNAFUTI INTL",
    FWA: "FT WAYNE",
    GAN: "GANISLAND",
    GAQ: "GAO",
    GAU: "GAUHATI",
    GBE: "SIR SERETSE KHAMA IN",
    GCI: "GUERNSEY",
    GCM: "OWEN ROBERTS INTL,GR",
    GDL: "MIGUEL HIDALGO Y COS",
    GDN: "REBIECHOWO",
    GDT: "GRAND TURK INTL",
    GEC: "GECITKALE",
    GEG: "SPOKANE INTL",
    GEN: "GARDERMOEN",
    GEO: "TIMEHRI INTL",
    GEV: "GALLIVARE",
    GFK: "GRAND FORK",
    GHA: "NOUMERATE",
    GHT: "GHAT",
    GIB: "NORTH FRONT",
    GIG: "RIO DE JANEIRO INTL-",
    GIL: "GILGIT",
    GIZ: "GIZAN",
    GJL: "JIJEL(TAHER)",
    GJT: "GRAND JCT",
    GKE: "GEILENKIRCHEN(AB)",
    GLA: "GLASGOW",
    GLH: "GREENVILLE",
    GLO: "GLOUCESTER AND_CHELT",
    GMA: "GEMENA",
    GMM: "GAMBOMA",
    GNB: "ST-GEOIRS",
    GND: "POINTE SALINES",
    GOA: "SESTRI",
    GOI: "DABOLIM NAVY",
    GOJ: "STRIGINO",
    GOM: "GOMA",
    GOP: "GORAKHPUR",
    GOT: "LANDVETTER",
    GOU: "GAROUA",
    GRO: "COSTA BRAVA",
    GRQ: "EELDE",
    GRR: "GRAND RAPIDS",
    GRU: "GUARULHOS INTL",
    GRX: "GRANADA",
    GRZ: "GRAZ",
    GSE: "SAVE",
    GSO: "GREENSBORO",
    GSP: "GREENVILLE",
    GSR: "GARDO",
    GTF: "GREAT FAL",
    GUA: "LA AURORA",
    GUM: "AGANA NAVAL AIR STAT",
    GUT: "GUTERSLOH (AB)",
    GUW: "GURYEV",
    GVA: "COINTRIN",
    GVX: "GAVLE-SANDVIKEN (AB)",
    GWD: "GWADAR",
    GWE: "THORNHILL AB",
    GWT: "SYLT",
    GWW: "GATOW AB",
    GXF: "SAYUN",
    GXX: "VILLE",
    GYE: "SIMON BOLIVAR",
    GYM: "GENERAL JOSE MARIA Y",
    GYN: "GOIANIA",
    GZT: "GAZIANTEP",
    HAD: "HALMSTAD",
    HAJ: "HANNOVER",
    HAM: "HAMBURG",
    HAN: "NOIBAI INTL",
    HAR: "HARRISBURG",
    HAS: "HAIL",
    HAU: "KARMOY",
    HAV: "JOSE MARTI",
    HAW: "HAVERFORDWEST",
    HBA: "HOBART",
    HDD: "HYDERABAD",
    HDM: "HAMADAN",
    HEA: "HERAT",
    HEH: "HEHO",
    HEL: "VANTAA",
    HEM: "MALMI",
    HER: "IRAKLION",
    HFA: "HAIFA U. MICHAELI",
    HFD: "HARTFORT",
    HFE: "LUOGANG",
    HGA: "HARGEISA",
    HGN: "MAEHONGSON",
    HHN: "HAHN (AB)",
    HIJ: "HIJ",
    HIR: "HENDERSON",
    HJR: "KHAJURAHO",
    HKD: "HAKODATE",
    HKG: "HONG KONG INTL",
    HKT: "PHUKET",
    HLF: "HULTSFRED",
    HLP: "HALIM PERDANAKUSUMA",
    HME: "OUED-IRARA",
    HMO: "GRAL.IGNACIO PESQUEI",
    HND: "TOKYO INTL",
    HOD: "HODEIDAH",
    HOG: "HOLGUIN",
    HOU: "HOUSTON",
    HOV: "HOVDEN",
    HRB: "YANJIAGANG",
    HRE: "HARARE",
    HRG: "HURGHADA",
    HRL: "RIO GRANDE VALLEY IN",
    HSV: "HUNSVILLE",
    HTA: "KADALA",
    HTI: "HAMILTON I",
    HTN: "HOTAN",
    HTY: "HATAY HAVAALANI",
    HUQ: "HOUN",
    HUV: "HUDIKSVALL",
    HUY: "HUMBERSIDE",
    HVN: "NEW HAVEN",
    HYD: "HYDERABAD",
    IAD: "DULLES INTL",
    IAH: "HOUSTON INTERCONTINE",
    IAS: "IASI",
    IBA: "IBADAN",
    IBZ: "IBIZA",
    ICT: "MID-CONTINENT",
    IDR: "INDORE",
    IDY: "LE GRAND PHARE",
    IEV: "ZHULYANY",
    IGL: "CIGLI AB",
    IHO: "IHOSY",
    IKA: "IMAM KHOEMANI",
    IKT: "IRKUTSK",
    ILG: "WILMINGTON",
    ILM: "WILMINGTON",
    ILR: "ILORIN",
    ILY: "PORT ELLEN",
    IMF: "TULIHAL",
    IND: "INDIANAPOLIS INTL",
    INF: "IN GUEZZAM",
    INI: "NIS",
    INN: "INNSBRUCK",
    INT: "WINSTON SALEM",
    INU: "NAURU INTL",
    INV: "DALCROSS",
    INZ: "IN SALAH",
    IOA: "IOANNINA",
    IOM: "RONALDSWAY",
    ION: "IMPFONDO",
    IPW: "IPSWICH",
    IQQ: "GRAL. DIEGO ARACENA",
    IQT: "COR.FAP FRANCISCO SE",
    IRI: "IRINGA",
    HV: "NETHERLANDS",
    KL: "NETHERLANDS",
    CD: "NETHERLANDS",
    OR: "NETHERLANDS",
    IRP: "ISIRO-MATARI",
    ISB: "CHAKLALA",
    ISE: "SULEYMAN DEMIREL",
    IST: "ATATURK",
    IUE: "NIUE INTL",
    IVL: "IVALO",
    IXA: "AGARTAVA",
    IXB: "BAGHDOGRA (AB)",
    IXC: "CHANDIGARH AB",
    IXE: "MANGALORE",
    IXG: "BELGAUM",
    IXJ: "JAMMU",
    IXM: "MADURAI",
    IXR: "RANCHI",
    IXS: "SILCHAR",
    IXU: "AURANGABAD",
    IXY: "GANDHIDHAM",
    IXZ: "PORT BLAIR",
    JAA: "JALALABAT",
    JAF: "KANKESANTURAI (AB)",
    JAG: "JACOBABAD (MIL)",
    JAI: "JAIPUR",
    JAN: "JACKSON",
    JAX: "JACKSONVIL",
    JDH: "JODHPUR",
    JED: "KING ABDULAZIZ INTL",
    JER: "JERSEY",
    JFK: "JOHN F. KENNEDY INTL",
    JGA: "JAMNAGAR",
    JHB: "SULTAN ISMAIL",
    JIB: "AMBOULI",
    JIM: "ABA SEGUD",
    JIW: "JIWANI",
    JKG: "JONKOPING",
    JKT: "JAKARTA",
    JNB: "JAN SMUTS",
    JOE: "JOENSUU",
    JOS: "JOS",
    JRH: "JORHAT (AB)",
    JRO: "KILIMANJARO INTL",
    JRS: "ATAROT",
    JSI: "SKIATOS",
    JSR: "JESSORE",
    JUB: "JUBA",
    JUJ: "JUJUY",
    JWA: "JWANENG",
    JXN: "JACKSON",
    JYV: "JYVASKYLA",
    KAB: "KARIBA",
    KAC: "KAMISHLY",
    KAD: "KADUNA",
    KAJ: "KAJAANI",
    KAN: "MALLAM AMINU KANO IN",
    KAO: "KUUSAMO",
    KAU: "KAUHAVA AB",
    KBG: "KABALEGA FALLS",
    KBI: "KRIBI",
    KBL: "KABUL",
    KBP: "BORISPOL",
    KCH: "KUCHING",
    KCM: "KAHRAMANMARAS",
    KCU: "MASINDI",
    KDC: "KANDI",
    KDH: "KANDAHAR INTL",
    KDU: "SKARDU",
    KED: "KAEDI",
    KEF: "KEFLAVIK",
    KEM: "TORNIO",
    KEP: "NEPALGUNJ",
    KER: "KERMAN",
    KEV: "HALLI AB",
    KFA: "KIFFA",
    KGA: "KANANGA",
    KGG: "KEDOUGOU",
    KGL: "KIGALI GREGOIRE KAYI",
    KGS: "KOS",
    KHH: "GAOXIONG",
    KHI: "QUAID-E-AZAM INTL",
    KHK: "KHARK ISLAND",
    KHS: "KHASAB",
    KHT: "KHOST",
    KHV: "NOVY",
    KID: "EVEROD (AB)",
    KIE: "AROPA",
    KIH: "KISH ISLAND (AB)",
    KIM: "B.J.VORSTER",
    KIN: "NORMAN MANLEY INTL",
    KIS: "KISUMU",
    KIV: "KISHINEV",
    KIW: "SOUTHDOWNS",
    KIX: "KANSAI",
    KKC: "KHON KAEN",
    KKN: "HOYBUKTMOEN",
    KKW: "KIKWIT",
    KLC: "KAOLACK",
    KLD: "MIGALOVO",
    KLE: "KAELE",
    KLR: "KALMAR",
    KLU: "KLAGENFURT",
    KLV: "KARLOVY VARY",
    KLX: "KALAMATA",
    KMG: "WUJIABA",
    KMH: "JOHAN PIENAAR",
    KMN: "KAMINA BASE (AB)",
    KMS: "KUMASI",
    KMU: "KISIMAYU",
    KMX: "KING KHALID AB",
    KND: "KINDU",
    KNN: "DIANKANA",
    KOI: "KIRKWALL",
    KOJ: "KAGOSHIMA",
    KOK: "KRUUNUPYY",
    KOO: "KONGOLO",
    KOP: "KAMPHAENG SAEN",
    KRF: "KRAMFORS_(AB)",
    KRK: "BALICE",
    KRN: "KIRUNA",
    KRP: "KARUP AB",
    KRS: "KJEVIK",
    KRT: "KHARTOUM",
    KSC: "KOSICE",
    KSD: "KARLSTAD",
    KSE: "KASESE",
    KSF: "CALDEN",
    KSH: "BAKHTARAN",
    KSI: "KISSIDOUGOU",
    KSK: "KARLSKOGA",
    KSO: "KASTORIA",
    KSU: "KVERNBERGET",
    KSY: "KARS",
    KTA: "KARRATHA_AERO",
    KTM: "TRIBHUVAN INTL",
    KTR: "KATHERINE",
    KTT: "KITTILA",
    KTW: "PYRZOWICE",
    KUF: "KURUMOCH",
    KUL: "KUALA LUMPUR INTL",
    KUN: "KAUNAS INTL",
    KUO: "KUOPIO",
    KVA: "MEGAS ALEXANDROS",
    KWI: "KUWAIT INTL",
    KWX: "KUWAIT INTL",
    KWZ: "KOLWEZI",
    KYA: "KONYA_AB",
    KYS: "KAYES",
    KZI: "KOZANI",
    KZN: "KAZAN",
    KZR: "ZAFER ULUSLARARASI HAVALİMANI",
    LAD: "QUATRO DE FEVEREIRO",
    LAI: "LANNION",
    LAO: "LAOAG INTL",
    LAP: "GRAL. MANUEL MARQUEZ",
    LAQ: "EL BEIDA(LABRAQ)",
    LAS: "MCCARRAN INTL",
    LAX: "LOS ANGELES INTL",
    LBA: "LEEDS AND BRADFORD",
    LBC: "BLANKENSEE",
    LBG: "LE BOURGET",
    LBQ: "LAMBARENE",
    LBU: "LABUAN",
    LBV: "LEON M'BA",
    LBY: "ESCOUBLAK",
    LCA: "LARNACA INTL",
    LCC: "GALATINA MIL",
    LCE: "GOLOSON INTL",
    LCG: "LA CORUNA",
    LCY: "LONDON CITY AIRPORT",
    LDE: "OSSUN-LOURDES",
    LDI: "LINDI",
    LDY: "EGLINTON",
    LEA: "LEARMONTH",
    LED: "PULKOVO",
    LEH: "OCTEVILLE",
    LEI: "ALMERIA",
    LEJ: "SCHKEUDITZ",
    LEK: "TATA",
    LEQ: "ST.JUST",
    LET: "ALFREDO VASQUEZ COBO",
    LFW: "TOKOIN",
    LGA: "LA GUARDIA",
    LGB: "LONGBEACH",
    LGG: "BIERSET",
    LGW: "GATWICK",
    LHA: "LAHR (AB)",
    LHE: "LAHORE",
    LHR: "HEATHROW",
    LIE: "LIBENGE",
    LIG: "BELLEGARDE",
    LIL: "LESQUIN",
    LIM: "JORGE CHAVEZ INTL",
    LIN: "LINATE",
    LIO: "LIMON INTL",
    LIQ: "LISALA",
    LIR: "TOMAS GUARDIA INTL",
    LIS: "LISBOA",
    LIT: "LITTLE ROCK",
    LIW: "LOIKAW",
    LJA: "LODJA",
    LJU: "BRNIK",
    LKL: "BANAK(AB)",
    LLA: "KALLAX_(AB)",
    LLW: "KAMUZU INTL",
    LME: "ARNAGE",
    LMP: "LAMPEDUSA",
    LNZ: "LINZ",
    LOS: "MURTALA MUHAMMED",
    LPA: "GRAN CANARIA,CANARY",
    LPB: "J.F. KENNEDY INTL",
    LPI: "SAAB",
    LPL: "LIVERPOOL",
    LPP: "LAPPEENRANTA",
    LPY: "LOUDES",
    LRA: "LARISA_(AB)",
    LRB: "LERIBE",
    LRD: "LAREDO INTL",
    LRH: "LALEU",
    LRM: "DE LA ROMANA INTL",
    LRT: "LANN BIHOUE NAVY",
    LSH: "LASHIO",
    LTD: "GHADAMES",
    LTK: "HMEIMIM",
    LTL: "LASTOURVILLE",
    LTN: "LUTON INTL",
    LTO: "LORETO INTL",
    LTQ: "PARIS-PLAGE",
    LUG: "AGNO",
    LUN: "LUSAKA INTL",
    LUO: "LUENA",
    LUX: "LUXEMBOURG",
    LVA: "ENTRAMMES",
    LVI: "LIVINGSTONE",
    LWO: "LVOV",
    LXR: "LUXOR",
    LYC: "LYCKSELE",
    LYN: "BRON",
    LYP: "FAISALABAD",
    LYR: "LONGYEAR",
    LYS: "SATOLAS",
    LYX: "LYDD",
    MAA: "MADRAS INTL",
    MAD: "BARAJAS",
    MAM: "MATAMOROS INTL",
    MAN: "MANCHESTER",
    MAO: "EDUARDO GOMES",
    MAR: "LA CHINITA INTL",
    MAT: "MATADI-TSHIMPI",
    MAX: "OUROSOGUI",
    MBA: "MOI INTL",
    MBI: "MBEYA",
    MBJ: "SANGSTER INTL",
    MBX: "MARIBOR",
    MCO: "ORLANDO INTL, FLA",
    MCT: "SEEB INTL",
    MCU: "MONTLUCON-GUERET",
    MDC: "SAM RATULANGI",
    MDK: "MBANDAKA",
    MDL: "MANDALAY",
    MDQ: "MAR DEL PLATA",
    MDZ: "EL PLUMERILLO",
    MED: "PRINCE MOHAMMAD BIN",
    MEG: "MALANGE",
    MEH: "MEHAMN",
    MEK: "MEEKATHARRA",
    MEL: "MELBOURNE INTL",
    MEM: "MEMPHIS",
    MEN: "BRENOUX",
    MES: "POLONIA",
    MEX: "LIC.BENITO JUAREZ IN",
    MEZ: "MESSINA",
    MFE: "MILLER INTL",
    MFF: "MOANDA",
    MFM: "MACAU INTERNATIONAL",
    MFO: "RAS NASRANI INTL",
    MFQ: "MARADI",
    MFR: "MFR",
    MFU: "MFUWE",
    MGA: "AUGUSTO CESAR SANDIN",
    MGQ: "MOGADISHU",
    MGZ: "MERGUI",
    MHD: "MASHHAD",
    MHQ: "MARIEHAMN",
    MIA: "MIAMI INTL",
    MID: "LIC. MANUEL CRESCENC",
    MIG: "NEUBIBERG (AB)",
    MIR: "HABIB BOURGUIBA",
    MIU: "MAIDUGURI",
    MJA: "MANJA",
    MJD: "MOENJODARO",
    MJF: "KJAERSTAD",
    MJL: "VILLE",
    MJM: "MBUJI-MAYI",
    MJN: "AMBOROVY",
    MJT: "MITILINI",
    MJV: "SAN JAVIER",
    MKC: "KANSAS CIT",
    MKE: "GENERAL MITCHELL FIE",
    MKJ: "MAKOUA",
    MKQ: "MOPAH",
    MKU: "MAKOKOU",
    MKY: "MACKAY",
    MLA: "LUQA",
    MLE: "MALE INTL",
    MLH: "BALE-MULHOUSE",
    MLN: "MELILLA",
    MLO: "Milano Havalimanı",
    MLW: "SPRINGGS PAYNE",
    MLX: "ERHAC_AB",
    MMA: "MALMO",
    MME: "TEESSIDE",
    MMX: "STURUP",
    MMZ: "MAIMANA",
    MNI: "BLACKBURNE,MONTSERRA",
    MNL: "NINOY AQUINO INTL",
    MNS: "MANSA",
    MNU: "NAWLAMYINE",
    MOB: "MOBILE",
    MOL: "MOLDE (ARO)",
    MOM: "LETFOTAR",
    MPL: "FREJORGUES",
    MPM: "MAPUTO INTL",
    MQN: "ROSSVOLL",
    MQX: "ALULA ABA NEGA",
    MRS: "MARSEILLE-PROVENCE",
    MRU: "SIR SEEWOOSAGUR RAMG",
    MRV: "MINERALNYYE VODY",
    MRW: "MARIBO",
    MSE: "MANSTON",
    MSP: "MINNEAPOLIS ST.PAUL",
    MSQ: "MINSK-2",
    MSR: "MUS",
    MST: "MAASTRICHT",
    MSU: "MOSHOESHOE I INTL",
    MSW: "MASSAWA",
    MSY: "NEW ORLEANS INTL (MO",
    MTS: "MATSAPHA",
    MTY: "GENERAL MARIANO ESCO",
    MUB: "MAUN",
    MUC: "MUNCHEN",
    MUH: "MERSA MATRUH",
    MUN: "MATURIN",
    MUX: "MULTAN",
    MUZ: "MUSOMA",
    MVB: "M'VENGUE",
    MVD: "CARRASCO INTL",
    MWD: "MIYANWALI (AB)",
    MWH: "MOSESLAKE",
    MXL: "GENERAL RODOLFO SANC",
    MXN: "PLOUJEAN",
    MXP: "MALPENSA",
    MXX: "SILJAN",
    MYB: "MAYUMBA",
    MYT: "MYITKYINA",
    MYW: "MTWARA",
    MZB: "MOCIMBOA DA PRAIA",
    MZH: "MERZIFON AB",
    MZI: "MOPTI-BARBE",
    MZM: "FRESCATY",
    MZR: "MAZAR",
    MZT: "GENERAL RAFAEL BUELN",
    NAG: "NAGPUR",
    NAH: "NAHCIVAN",
    NAK: "KORAT",
    NAN: "NADI INTL",
    NAP: "CAPODICHINO",
    NAS: "NASSAU INTL,NEW PROV",
    NAT: "AUGUSTO SEVERO",
    NAV: "KAPADOKYA HAVALİMANI",
    NBO: "JOMO KENYATTA INTL",
    NCE: "COTE D'AZUR",
    NCH: "NACHINGWEA",
    NCL: "NEWCASTLE",
    NCY: "MEYTHET",
    NDB: "NOUADHIBOU",
    NDJ: "N'DJAMENA",
    NGE: "N'GAOUNDERE",
    NGV: "N GIVA",
    NIA: "NIMBA-LAMCO",
    NIC: "NICOSIA",
    NIM: "NIAMEY",
    NKC: "NOUAKCHOTT",
    NKY: "YOKANGASSI",
    NLA: "NDOLA",
    NLD: "QUETZALCOATL INTL",
    NNG: "WUXU",
    NOC: "CONNAUGHT",
    NOS: "FASCENE",
    NOU: "LA TONTOUTA INTL",
    NRK: "KUNGSANGEN",
    NRT: "NEW TOKYO INTL",
    NRX: "NRT YERINE DENEME",
    NTE: "ATLANTIQUE",
    NTL: "NEWCASTLE",
    NTR: "DEL NORTE INTL",
    NUE: "NURNBERG",
    NUU: "NAKURU",
    NVI: "Nevai Havalimanı",
    NVK: "FRAMNES",
    NVS: "FOURCHAMBAULT",
    NWI: "NORWICH",
    NYO: "NYKOPING-OXELOSUND",
    NYU: "NYAUNG",
    NZE: "KONIA",
    OAK: "METROPOLITAN OAKLAND",
    OBF: "OBERPFAFFENHOFEN",
    ODB: "CORDOBA",
    ODE: "BELDRINGE",
    ODS: "TSENTRALNY",
    OER: "ORNSKOLDSVIK",
    OGU: "ORDU-GİRESUN HAVALİMANI",
    OGZ: "BESLAN",
    OHD: "OHRID",
    OHT: "KOHAT",
    OKC: "OKC",
    OLA: "ORLAND (AB)",
    OLB: "COSTA SMERALDA",
    OMA: "OMAHA",
    OMB: "OMBOUE (HOSPITAL)",
    OMO: "MOSTAR",
    OMR: "ORADEA",
    ONQ: "ZONGULDAK ÇAYCUMA HAVALİMANI",
    ONT: "ONTARIO INTL",
    OOO: "OSAKA INTL",
    OOP: "OSAKA INTL",
    OOS: "OSAKA INTL",
    OPO: "FRANCISCO SA CARNEIR",
    ORB: "OREBRO",
    ORD: "CHICAGO-O'HARE INTL",
    ORF: "NORFOLK",
    ORH: "WORCESTER",
    ORK: "CORK",
    ORL: "ORLANDO",
    ORN: "ES SENIA",
    ORP: "ORAPA",
    ORY: "ORLY",
    OSA: "OSAKA INTL",
    OSD: "FROSON (AB)",
    OSI: "OSIJEK",
    OSK: "OSKARSHAMN",
    OSL: "OSLO",
    OSR: "MOSNOV",
    OST: "OOSTENDE",
    OTP: "OTOPENI",
    OUA: "OUAGADOUGOU",
    OUD: "ANGADS",
    OUE: "OUESSO",
    OUH: "OUDTSHOORN",
    OUL: "OULU",
    OUR: "BATOURI",
    OVB: "TOLMACHEVO",
    OVD: "ASTURIAS",
    OYE: "OYEM",
    OZP: "MORON",
    OZZ: "OUARZAZATE",
    PAB: "BILASPUR",
    PAD: "LIPPSTADT",
    PAP: "MAIS GATE",
    PAT: "PATNA",
    PBM: "JOHAN ADOLF PENGEL",
    PBR: "PUERTO BARRIOS",
    PBU: "PUTAO",
    PDV: "PLOVDIV",
    PDX: "PORTLAND INTL",
    PEE: "BOLSHOYE SAVINO",
    PEG: "S. EGIDIO",
    PEK: "CAPITAL",
    PEN: "PENANG",
    PER: "PERTH INTL",
    PEW: "PESHAWAR",
    PFO: "PAPHOS",
    PGF: "RIVESALTES",
    PGI: "CAZOMBO",
    PGX: "BASSILLAC",
    PHC: "PORT HARCOURT INTL",
    PHE: "PORT HEDLAND",
    PHF: "WILLIAMSBU",
    PHL: "PHILADELPHIA INTL",
    PHS: "PHITSANULOK",
    PHX: "PHOENIX SKY HARBOR I",
    PIA: "PEORIA",
    PIE: "ST PETERSB",
    PIS: "BIARD",
    PIT: "GREATER PITTSBURGH I",
    PJG: "PANJGUR",
    PKO: "PARAKOU",
    PKU: "PEKANBARU",
    PKW: "SELEBI-PHIKWE",
    PLM: "SULTAN MAHMUD BADARU",
    PLP: "LA PALMA,CANARY IS.",
    PLS: "PROVIDENCIALES INTL",
    PLZ: "H.F.VERWOERD",
    PMA: "PEMBA",
    PMC: "EL TEPUAL",
    PMI: "PALMA DE MALLORCA",
    PMO: "PUNTA RAISI",
    PNA: "PAMPLONA",
    PNK: "SUPADIO",
    PNL: "PANTELLERIA",
    PNR: "AGOSTINO NETO",
    PNS: "PNS",
    POA: "SALGADO FILHO",
    POG: "PORT GENTIL",
    POL: "PEMBA",
    POP: "PUERTO PLATA INTL",
    POR: "PORI",
    POS: "PIARCO INTL,TRINIDAD",
    POW: "PORTOROZ",
    POX: "CORMEILLES-EN-VEXIN",
    POZ: "LAWICA",
    PPE: "CAPITAL",
    PPG: "PAGO PAGO INTL",
    PPP: "CAPITAL",
    PRG: "RUZYNE",
    PRM: "PORTUMAO",
    PRN: "PRISTINA",
    PSA: "SAN GIUSTO",
    PSD: "PORT SAID",
    PSE: "PONCE-MERCEDITA",
    PSI: "PASNI",
    PSR: "PESCARA",
    PSS: "POSADAS",
    PTG: "PIETERSBURG",
    PTP: "LE RAIZET,GUADELOUPE",
    PTY: "TOCUMEN INTL",
    PUF: "PAU-PYRENEES",
    PUJ: "PUNTA CANA",
    PUQ: "PRESIDENTE C.IBANEZ",
    PUS: "PUSAN",
    PUY: "PULA",
    PUZ: "PUERTO CABEZAS",
    PVD: "PROVIDENCE",
    PVG: "PUDONG",
    PVK: "PREVEZA (AB)",
    PVR: "LIC.GUSTAVO DIAZ ORD",
    PWM: "PORTLAND",
    PZH: "ZHOB",
    RAE: "ARAR",
    RAH: "RAFHA",
    RAI: "PRAIA",
    RAJ: "RAJKOT",
    RAK: "MENARA",
    RAR: "RAROTONGA INTL",
    RAS: "RASHT",
    RBA: "SALE",
    RCO: "ST AGNANT",
    RDU: "RALEIGH-DURHAM INTL",
    RDZ: "MARCILLAC",
    REC: "GUARARAPES",
    REG: "REGGIO CALABRIA",
    REK: "REYKJAVIK",
    RES: "RESISTENCIA",
    RET: "ROST",
    REU: "REUS",
    REX: "GENERAL LUCIO BLANCO",
    RGA: "RIO GRANDE",
    RGL: "RIO GALLEGOS",
    RGN: "MINGALADON",
    RHE: "CHAMPAGNE",
    RHO: "DIAGORAS",
    RIC: "RICHMOND",
    RIX: "RIGA INTL",
    RIY: "RIYAN",
    RJK: "KRK",
    RKE: "ROSKILDE",
    RKT: "RAS AL KHAIMAH INTL",
    RLG: "LAAGE AB",
    RMI: "RIMINI",
    RML: "RATMALANA",
    RMS: "RAMSTEIN (AB)",
    RNB: "RONNEBY",
    RNN: "RONNE",
    RNO: "RNO",
    RNS: "ST-JACQUES",
    ROB: "ROBERTS INTL",
    ROC: "ROCHESTER",
    ROV: "ROSTOV-NA-DONU",
    RPN: "ROSH-PINA",
    RPR: "RAIPUR",
    RRK: "ROURKELA",
    RRR: "GGN",
    RRS: "ROROS",
    RSC: "SKULTE",
    RST: "ROCHESTER",
    RTM: "ROTTERDAM",
    RUA: "ARUA",
    RUH: "KING KHALID",
    RUN: "GILLOT",
    RVN: "ROVANIEMI",
    RVY: "DEPARTAMENTAL DE RIV",
    RZE: "JASIONKA",
    SAC: "SACRAMENTO",
    SAH: "SANA'A INTL",
    SAK: "ALEXANDER",
    SAN: "SAN DIEGO INTL-LINDB",
    SAP: "LA MESA INTL",
    SAT: "SAN ANTONIO INTL",
    SAV: "SAVANNAH",
    SAW: "ISTANBUL SABIHA GOKCEN",
    SBK: "ARMOR",
    SBQ: "SIBI",
    SBU: "SPRINGBOK",
    SBZ: "TURNISOR",
    SCL: "ARTURO MERINO BENITE",
    SCN: "ENSHEIM",
    SCQ: "SANTIAGO",
    SCT: "SOCOTRA(MOORI)",
    SCU: "ANTONIO MACEO",
    SCV: "SALCEA",
    SDA: "SADDAM INTL",
    SDD: "LUBANGO",
    SDF: "LOUISVILLE",
    SDG: "SANANDAJ",
    SDJ: "SENDAI",
    SDL: "SUNDSVALL-HARNOSAND",
    SDN: "SANDANE",
    SDQ: "DE LAS AMERICAS INTL",
    SDR: "SANTANDER",
    SDT: "SAIDU SHARIF",
    SEA: "SEATTLE-TACOMA INTL",
    SEB: "SEBHA",
    SEL: "KIMPO INTL",
    SEN: "SOUTHEND",
    SEX: "SEMBACH (AB)",
    SEZ: "SEYCHELLES INTL",
    SFA: "THYNA",
    SFI: "SAFIA",
    SFJ: "SONDRE STROMFJORD (G",
    SFO: "SAN FRANCISCO INTL",
    SFQ: "SANLIURFA",
    SFY: "SPRINGFIE",
    SGD: "SONDERBORG",
    SGX: "SONGEA",
    SGZ: "HAT YAI INTL",
    SHA: "HONGQIAO",
    SHE: "TAOXIAN",
    SHJ: "SHARJAH INTL",
    SHL: "SHILLONG",
    SHW: "SHARURAH",
    SIC: "SINOP AAF",
    SID: "AMILCAR CABRAL",
    SII: "SIDI IFNI",
    SIN: "CHANGI",
    SIP: "SIMFEROPOL",
    SIR: "SION",
    SIS: "SISHEN",
    SJC: "SJC",
    SJD: "SAN JOSE DEL CABO IN",
    SJJ: "SARAJEVO",
    SJK: "SAO JOSE DOS CAMPOS",
    SJO: "JUAN SANTAMARIA INTL",
    SJU: "LUIS MUNOZ MARIN INT",
    SKB: "GOLDEN ROCK,ST.KITTS",
    SKD: "SAMARKAND",
    SKE: "GEITERYGGEN",
    SKG: "MAKEDONIA",
    SKN: "SKAGEN",
    SKO: "SOKOTO",
    SKP: "PETROVAC",
    SKS: "SKRYDSTRUP AB",
    SKU: "SKIROS_(AB)",
    SKZ: "SUKKUR",
    SLC: "SALT LAKE",
    SLL: "SALALAH INTL",
    SLU: "VIGIE",
    SLZ: "MARECHAL CUNHA MACHA",
    SMI: "SAMOS",
    SMS: "SAINTE-MARIE",
    SMY: "SIMENTI",
    SNN: "SHANNON",
    SNR: "MONTOIR",
    SOF: "VRAJDEBNA",
    SOJ: "SORKJOSEN",
    SOU: "EASTLEIGH",
    SOZ: "SOLENZARA(AB)",
    SPD: "SAITPUR",
    SPK: "SAPPORO",
    SPP: "MENONGUE",
    SPU: "KASTEL",
    SRP: "SORSTOKKEN",
    SRT: "SOROTI",
    SRZ: "EL TROMPILLO",
    SSA: "DOIS DE JULHO",
    SSG: "MALABO,MACIAS NGUEMA",
    SSH: "SHARM EL SHEIKH",
    SSJ: "STOKKA",
    SSX: "SAMSUN",
    SSY: "M BANZA CONGO",
    STA: "STAUNING",
    STI: "CIBAO",
    STL: "LAMBERT-ST.LOUIS INT",
    STM: "SANTAREM INTL",
    STN: "STANSTED",
    STR: "STUTTGART",
    STT: "CYRIL E. KING",
    STX: "ALEXANDER HAMILTON",
    STY: "DEPARTAMENTAL DE SAL",
    SUB: "JUANDA",
    SUF: "TERME",
    SUI: "BABUSHARA",
    SUJ: "SATU MARE",
    SUL: "SUI",
    SVG: "SOLA",
    SVJ: "HELLE",
    SVL: "SAVONLINNA",
    SVO: "SHEREMETYEVO",
    SVP: "KUITO",
    SVQ: "SEVILLA",
    SWA: "SHANTOU",
    SWQ: "SUMBAWA",
    SXB: "ENTZHEIM",
    SXF: "SCHONEFELD",
    SXM: "PRINCESS JULIANA,ST.",
    SXR: "SRINAGAR",
    SXZ: "SIIRT",
    SYD: "KINGSFORD SMITH INTL",
    SYR: "SYRACUSE-HANCOCK INT",
    SYY: "STORNOWAY",
    SYZ: "SHIRAZ INTL",
    SZA: "SOYO",
    SZG: "SALZBURG",
    SZX: "HUANGTIAN",
    SZZ: "GOLENIOW",
    TAI: "GANAD",
    TAO: "QINGDAO",
    TAP: "TAPACHULA INTL.",
    TAR: "GROTTAGLIE",
    TAS: "YUZHNY",
    TAT: "TATRY",
    TBO: "TABORA",
    TBS: "NOVOALEXEYEVKA",
    TBT: "TABATINGA INTL",
    TBU: "FUA'AMOTU INTL",
    TBZ: "TABRIZ",
    TCE: "CATALOI",
    TCH: "TCHIEN",
    TCQ: "COR.FAP CARLOS CIRIA",
    TDD: "TTE. AV. JORGE HENRI",
    TED: "THISTED",
    TER: "LAJES",
    TET: "CHINGOZI",
    TGD: "GOLUBOVCI",
    TGM: "VIDRASAU",
    TGU: "TONCONTIN INTL",
    THF: "TEMPELHOF",
    THI: "TICHIT",
    THN: "VANERSBORG",
    THR: "MEHRABAD INTL",
    THU: "THULE(AB)",
    THZ: "TAHOUA",
    TIA: "RINAS",
    TIF: "TAIF",
    TIJ: "GENERAL ABELARDO L.R",
    TIP: "TRIPOLI INTL",
    TIV: "TIVAT",
    TIY: "TIDJIKJA",
    TJA: "ORIEL LEA PLAZA",
    TJK: "TOKAT",
    TJM: "ROSCHINO",
    TKD: "TAKORADI",
    TKH: "TAKHLI",
    TKQ: "KIGOMA",
    TKU: "TURKU",
    TLB: "TARBELA DAM",
    TLC: "JOSE MA. MORELOS Y P",
    TLL: "YULEMISTE",
    TLN: "LE PALYVESTRE NAVY",
    TLS: "BLAGNAC",
    TLV: "BEN GURION",
    TML: "TAMALE AB",
    TMP: "PIRKKALA",
    TNG: "BOUKHALF",
    TNI: "SATNA",
    TOB: "GAMAL ABDUL NASSER",
    TOE: "NEFTA",
    TOJ: "TORREJON AB",
    TOK: "TOKAT",
    TOL: "TOLEDO",
    TOS: "LANGNES",
    TPA: "TAMPA INTL",
    TPE: "TAIPEI INTL",
    TPS: "BIRGI",
    TRC: "TORREON INTL",
    TRD: "VAERNES",
    TRE: "TIREE",
    TRK: "TARAKAN",
    TRN: "CASELLE",
    TRR: "CHINA BAY AB",
    TRS: "RONCHI DEI LEGIONARI",
    TRV: "TRIVANDRUM INTL",
    TRW: "BONRIKI INTL",
    TRY: "TORORO",
    TRZ: "TIRUCHCHIRAPPALLI",
    TSA: "SUNGSHAN",
    TSH: "TSHIKAPA",
    TSN: "ZHANGGUIZHUANG",
    TSR: "GIARMATA",
    TSV: "TOWNSVILLE",
    TTA: "PLAGE BLANCHE",
    TTU: "TETOUAN(SANIA RAMEL)",
    TUD: "TAMBACOUNDA",
    TUF: "ST-SYMPHORIEN",
    TUI: "TURAIF",
    TUK: "TURBAT",
    TUL: "TULSA",
    TUN: "CARTHAGE",
    TUS: "TUCSON INTL",
    TUU: "TABUK",
    TXL: "TEGEL",
    TYL: "CAPITAN MONTES",
    TYN: "WUSU",
    TYO: "NEW TOKYO INTL",
    TYS: "KNOXWILLE",
    TZX: "TRABZON",
    UAK: "NARSARSUAQ",
    UAM: "ANDERSEN AIR FORCE B",
    UDR: "IDAIPUR",
    UEL: "QUELIMANE",
    UET: "QUETTA",
    UGO: "UIGE",
    UIO: "MARISCAL SUCRE",
    UIP: "PLUGUFFAN",
    UKR: "MUKEIRAS",
    ULN: "BUYANT UKHAA",
    ULU: "GULU",
    UME: "UMEA",
    UPG: "HASANUDDIN",
    URC: "DIWOPU",
    URO: "URO ROUEN",
    URT: "SURAT THANI",
    URY: "GURIAT",
    UTH: "UDON THANI",
    UTI: "UTTI AB",
    UTN: "PIERRE VAN RYNEVELD",
    UTP: "UTAPAO",
    UUD: "MUKHINO",
    UVF: "HEWANORRA INTL",
    UVL: "NEW VALLEY",
    VAA: "VAASA",
    VAF: "CHABEUIL",
    VAN: "VAN",
    VAR: "ACSAKOVO",
    VAS: "SIVAS",
    VAW: "VARDO",
    VBY: "VISBY",
    VCD: "VICTORIA",
    VCE: "TESSERA",
    VDA: "OVDA INTL",
    VDS: "VADSO",
    VFA: "VICTORIA FALLS",
    VGA: "VIJAYAWADA",
    VGO: "VIGO",
    VHC: "SAURIMO",
    VHM: "VILHELMINA",
    VHY: "CHARMEIL",
    VIE: "SCHWECHAT",
    VIT: "VITORIA INTL",
    VIX: "GOIABEIRAS",
    VKO: "VNUKOVO",
    VLC: "VALENCIA",
    VLI: "BAUERFIELD",
    VLL: "VALLADOLID",
    VNO: "VILNIUS",
    VNS: "VARANASI",
    VOG: "GUMRAK",
    VOL: "NEA ANGHIALOS (AB)",
    VRA: "VARADERO INTL",
    VRK: "VARKAUS",
    VRL: "VILA REAL",
    VRN: "VILLAFRANCA",
    VSE: "VISEU",
    VST: "HASSLO",
    VTZ: "VISHAKHAPATNAM",
    VVK: "VASTERVIK",
    VVZ: "ILLIZI(ILLIRANE)",
    VXC: "LICHINGA",
    VXO: "KRONOBERG",
    WAS: "WASHINGTON",
    WAW: "OKECIE",
    WEL: "WELKOM",
    WGC: "WARANGAL",
    WID: "WILDENRATH (AB)",
    WIE: "AIRBASE AAF",
    WKI: "TOWN",
    WKM: "HWANGE NATIONAL PARK",
    WLG: "WELLINGTON INTL",
    WLS: "HIHIFO",
    WNS: "NAWABSHAH",
    WRI: "MC GUIRE AFB",
    WRO: "WROCLAW",
    WWW: "MURTED",
    XBJ: "BIRJAND",
    XEL: "KIMPO INTL",
    XFW: "FINKENWERDER",
    XIY: "XI'AN",
    XLS: "SAINT-LOUIS",
    XLW: "LEMWERDER",
    XMN: "GAOQI",
    XRY: "JEREZ",
    XSP: "SELETAR",
    XXX: "INCIRLIK AB",
    XYT: "MONTAUDRAN",
    XYZ: "CHICAGO-O'HARE INTL",
    YAO: "YAOUNDE",
    YEA: "EDMONTON",
    YEG: "EDMONTON INTL",
    YFB: "IQALUIT",
    YFC: "FREDERICTON",
    YHZ: "HALIFAX INTL",
    YKS: "YAKUTSK",
    YMX: "MONTREAL INTL (MIRAB",
    YNB: "YENBO",
    YNR: "YENISEHIR",
    YOL: "YOLA",
    YOW: "OTTAWA INTL",
    YQB: "QUEBEC",
    YQT: "THUNDER BAY",
    YQX: "GANDER INTL",
    YSJ: "ST JOHN",
    YUL: "MONTREAL INTL (DORVA",
    YVR: "VANCOUVER INTL",
    YWG: "WINNIPEG INTL",
    YXE: "DIEFENBAKER",
    YYC: "CALGARY INTL",
    YYJ: "VICTORIA INTL",
    YYR: "GOOSE BAY",
    YYZ: "LESTER B. PEARSON IN",
    ZAD: "ZEMUNIK",
    ZAG: "ZAGREB",
    ZAH: "ZAHEDAN",
    ZAM: "ZAMBOANGA INTL",
    ZAZ: "ZARAGOZA",
    ZBR: "KONARAK (AB)",
    ZGC: "ZHONGCHUAN",
    ZGF: "GRAND FORK",
    ZIH: "IXTAPA ZIHUATANEJO I",
    ZLO: "PLAYA DE ORO INTL",
    ZND: "ZINDER",
    ZNZ: "KISAUNI",
    ZRH: "ZURICH",
    ZTH: "ZAKINTHOS",
    ZYL: "OSMANI",
    ZZZ: "GUVERCINLIK"
};

export default airportCityMap;