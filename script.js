function zavriOkno(obj){
  document.getElementById(obj).style.display = "none";
}

//Spišský hrad
function oknoSpisskyHrad(){
  document.getElementById('okno').style.display = "block";
  document.getElementById('nadpis').innerHTML = "Spišský hrad";
  document.getElementById('nadpis').style.color = "#f95350";
  document.getElementById('text').innerHTML = "<b>Adresa:</b><br>053 61 Žehra<br><br><b>Otváracie hodiny:</b><br>09.00 – 19.00<br><br><b>Telefón:</b><br>+421 53 454 13 36";
  document.getElementById('zobrazViac').addEventListener('click',function(){
  document.getElementById('viac').style.display = "block";
  document.getElementById('nadpis-viac').innerHTML = "Spišský hrad";
  document.getElementById('nadpis-viac').style.color = "#f95350";
  document.getElementById('text-lavy').innerHTML = "Východný horizont Spiša vytvára rozložitá silueta Spišského hradu, ktorý je s rozlohou vyše 4 ha jedným z najväčších zrúcaninových hradných komplexov v strednej Európe. V roku 1993 Spišský hrad a kultúrne pamiatky blízkeho okolia zapísali do Zoznamu pamiatok svetového dedičstva <br><br><b>Link:</b><br> <a href='https://slovakia.travel/uzitocne-informacie/map#48.9987|20.7791|92' target='_blank'>slovakia.travel/uzitocne-informacie/map#48.9987|20.7791|92</a>";
  document.getElementById('text-pravy').innerHTML = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. ";
  document.getElementById("obrazok").src="img/spissky_hrad.png";
  return false;
  });
  return false;
}

//slovenský raj
function oknoSlovenskyRaj(){
  document.getElementById('okno').style.display = "block";
  document.getElementById('nadpis').innerHTML = "Slovenský raj";
  document.getElementById('nadpis').style.color = "#f95350";
  document.getElementById('text').innerHTML = "<b>Adresa:</b><br>Košický kraj, okres Spišská Nová Ves, Spišské Tomášovce";
  document.getElementById('zobrazViac').addEventListener('click',function(){
  document.getElementById('viac').style.display = "block";
  document.getElementById('nadpis-viac').innerHTML = "Slovenský raj";
  document.getElementById('nadpis-viac').style.color = "#f95350";
  document.getElementById('text-lavy').innerHTML = "Národný park Slovenský raj nachádzajúci sa vo východnej časti Slovenska chráni jednu z najväčších ľadových jaskýň na svete a príťažlivú krajinu krasových planín, tiesňav, vodopádov a jaskýň. Nechýbajú tu ani pozoruhodné pamiatky dokumentujúce najstaršiu históriu osídľovania Spiša a celého Slovenska.<br><br><b>Link:</b><br> <a href='https://slovakia.travel/kam-ist/to-najlepsie-zo-slovenska/slovensky-raj' target='_blank'>slovakia.travel/kam-ist/to-najlepsie-zo-slovenska/slovensky-raj</a>";
  document.getElementById('text-pravy').innerHTML = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum";
  document.getElementById("obrazok").src="img/slovensky_raj.png";
  return false;
  });
  return false;
}

//banská štiavnica
function oknoBanskaStiavnica(){
  document.getElementById('okno').style.display = "block";
  document.getElementById('nadpis').innerHTML = "Banská Štiavnica";
  document.getElementById('nadpis').style.color = "#f95350";
  document.getElementById('text').innerHTML = "<b>Adresa:</b><br>Banskobystrický kraj, okres Banská Štiavnica, Banská Štiavnica";
  document.getElementById('zobrazViac').addEventListener('click',function(){
  document.getElementById('viac').style.display = "block";
  document.getElementById('nadpis-viac').innerHTML = "Banská Štiavnica";
  document.getElementById('nadpis-viac').style.color = "#f95350";
  document.getElementById('text-lavy').innerHTML = "Banská Štiavnica ležiaca uprostred Štiavnických vrchov na strednom Slovensku je mestom zaradeným do Zoznamu svetového dedičstva UNESCO. Bývalé banícke mesto Banská Štiavnica je jedným z najkrajších a historicky najzaujímavejších miest na Slovensku.<br><br><b>Link:</b> <a href='https://slovakia.travel/banska-stiavnica' target='_blank'>slovakia.travel/banska-stiavnica</a>";
  document.getElementById('text-pravy').innerHTML = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum";
  document.getElementById("obrazok").src="img/banska_stiavnica.png";
  return false;
  });
  return false;
}

//Vlkolinec
function oknoVlkolinec(){
  document.getElementById('okno').style.display = "block";
  document.getElementById('nadpis').innerHTML = "Vlkolínec";
  document.getElementById('nadpis').style.color = "#f95350";
  document.getElementById('text').innerHTML = "<b>Adresa:</b><br>Žilinský kraj, okres Ružomberok, Ružomberok<br><br><b>Otváracie hodiny:</b><br>Utorok - Piatok: 10:00 - 15:00<br>Sobota - nedeľa: 10:00 - 16:00 <br><br><b>Telefón:</b><br> +421 918/596 432";
  document.getElementById('zobrazViac').addEventListener('click',function(){
  document.getElementById('viac').style.display = "block";
  document.getElementById('nadpis-viac').innerHTML = "Vlkolínec";
  document.getElementById('nadpis-viac').style.color = "#f95350";
  document.getElementById('text-lavy').innerHTML = "Miestna časť Ružomberka – Biely Potok je východiskom do jednej z najnavštevovanejších slovenských osád Vlkolínec –  mimoriadne pozoruhodnej oázy ľudovej architektúry, ktorú zapísali do Zoznamu svetového dedičstva UNESCO.<br><br><b>Link:</b> <a href='https://slovakia.travel/vlkolinec' target='_blank'>slovakia.travel/vlkolinec</a> ";
  document.getElementById('text-pravy').innerHTML = "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
  document.getElementById("obrazok").src="img/vlkolinec.png";
  return false;
  });
  return false;
}

//Kúpele Piešťany
function oknoPiestany(){
  document.getElementById('okno').style.display = "block";
  document.getElementById('nadpis').innerHTML = "Kúpele Piešťany";
  document.getElementById('nadpis').style.color = "#f95350";
  document.getElementById('text').innerHTML = "<b>Adresa:</b><br>Winterova 29, 921 29 Piešťany<br><br><b>Otváracie hodiny:</b><br>Pondelok - Nedeľa: 11.00 - 18.00<br><br><b>Telefón:</b><br>+421 33/775 77 33";
  document.getElementById('zobrazViac').addEventListener('click',function(){
  document.getElementById('viac').style.display = "block";
  document.getElementById('nadpis-viac').innerHTML = "Kúpele Piešťany";
  document.getElementById('nadpis-viac').style.color = "#f95350";
  document.getElementById('text-lavy').innerHTML = "Svetoznáme kúpeľné mesto Piešťany ležiace pod výbežkami Považského Inovca v severnej časti dolného Považia preslávil výskyt liečivej geotermálnej vody a liečivého sírneho bahna. Piešťanské bahno a termálna minerálna voda má mimoriadny liečivý účinok na ochorenia pohybového ústrojenstva a je unikátom nielen v Európe, ale aj na svete.<br><br><b>Link:</b> <a href='https://slovakia.travel/kupele-piestany' target='_blank'>slovakia.travel/kupele-piestany</a>";
  document.getElementById('text-pravy').innerHTML = "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
  document.getElementById("obrazok").src="img/piestany.png";
  return false;
  });
  return false;
}

//Bardejov
function oknoBardejov(){
  document.getElementById('okno').style.display = "block";
  document.getElementById('nadpis').innerHTML = "Bardejov";
  document.getElementById('nadpis').style.color = "#f95350";
  document.getElementById('text').innerHTML = "<b>Adresa:</b><br>Prešovský kraj, okres Bardejov, Bardejov<br><br><b>Telefón:</b><br>+421 54/ 474 40 03";
  document.getElementById('zobrazViac').addEventListener('click',function(){
  document.getElementById('viac').style.display = "block";
  document.getElementById('nadpis-viac').innerHTML = "Bardejov";
  document.getElementById('nadpis-viac').style.color = "#f95350";
  document.getElementById('text-lavy').innerHTML = "Druhým slovenským mestom zaradeným do Zoznamu svetového dedičstva UNESCO je starobylý Bardejov, jedno z najstarších slovenských miest. Východoslovenský Bardejov (33 700 obyvateľov) už v roku 1986 ocenili prestížnou Európskou cenou – zlatou medailou nadácie ICOMOS pri UNESCO a v roku 2000 zaradili do Zoznamu svetového dedičstva UNESCO.<br><br><b>Link:</b> <a href='https://slovakia.travel/bardejov' target='_blank'>slovakia.travel/bardejov</a>";
  document.getElementById('text-pravy').innerHTML = "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
  document.getElementById("obrazok").src="img/bardejov.png";
  return false;
  });
  return false;
}

//Kosice
function oknoKosice(){
  document.getElementById('okno').style.display = "block";
  document.getElementById('nadpis').innerHTML = "Košice";
  document.getElementById('nadpis').style.color = "#f95350";
  document.getElementById('text').innerHTML = "<b>Adresa:</b><br>Košický kraj, Košice<br><br><b>Telefón:</b><br>+421 55/699 8558";
  document.getElementById('zobrazViac').addEventListener('click',function(){
  document.getElementById('viac').style.display = "block";
  document.getElementById('nadpis-viac').innerHTML = "Košice";
  document.getElementById('nadpis-viac').style.color = "#f95350";
  document.getElementById('text-lavy').innerHTML = "Druhé najväčšie slovenské mesto Košice je nielen centrom  východného Slovenska, ale aj jadrom oblasti Východných Karpát, spájajúcej špecifiká viacerých národov a národností. Mesto KOŠICE (242 066 obyvateľov) leží na rieke Hornád na západnom okraji Košickej kotliny, má dlhú a bohatú históriu a prežíva veľmi dynamickú súčasnosť. Metropola Abova bola po stáročia najvýznamnejším strediskom celého regiónu, prirodzeným centrom obchodu, remesiel, kultúry a vzdelanosti.<br><br><b>Link:</b> <a href='https://slovakia.travel/kosice' target='_blank'>slovakia.travel/kosice</a>";
  document.getElementById('text-pravy').innerHTML = "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
  document.getElementById("obrazok").src="img/kosice.png";
  return false;
  });
  return false;
}
//Tatry
function oknoTatry(){
  document.getElementById('okno').style.display = "block";
  document.getElementById('nadpis').innerHTML = "Tatry a Severný Spiš";
  document.getElementById('nadpis').style.color = "#f95350";
  document.getElementById('text').innerHTML = "<b>Adresa:</b><br>Prešovský kraj, okres Kežmarok, Veľká Lomnica<br><br><b>Telefón:</b><br>+421 52/16 186";
  document.getElementById('zobrazViac').addEventListener('click',function(){
  document.getElementById('viac').style.display = "block";
  document.getElementById('nadpis-viac').innerHTML = "Tatry a Severný Spiš";
  document.getElementById('nadpis-viac').style.color = "#f95350";
  document.getElementById('text-lavy').innerHTML = "Tatranský región, ležiaci na severe Slovenska, je pravdepodobne turisticky najpríťažlivejšou oblasťou Slovenska. Skladá sa z dvoch subregiónov: Tatier a severného Spiša. Tatry sú pohraničným pohorím, ktoré sa delí na Vysoké, Belianske a Západné Tatry. Na území severného Slovenska ležia jeho štyri pätiny. Slovensko-poľská štátna hranica ohraničuje územie Tatier zo severu. Na juhu tatranské štíty strmo klesajú do Podtatranskej kotliny. <br><br><b>Link:</b> <a href='www.visitpoprad.sk' target='_blank'>visitpoprad.sk</a>";
  document.getElementById('text-pravy').innerHTML = "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
  document.getElementById("obrazok").src="img/tatry.png";
  return false;
  });
  return false;
}
//Bratislava
function oknoBratislava(){
  document.getElementById('okno').style.display = "block";
  document.getElementById('nadpis').innerHTML = "Bratislava";
  document.getElementById('nadpis').style.color = "#f95350";
  document.getElementById('text').innerHTML = "<b>Adresa:</b><br>Bratislavský kraj, Bratislava<br><br><b>Telefón:</b><br>+421 2 16 186";
  document.getElementById('zobrazViac').addEventListener('click',function(){
  document.getElementById('viac').style.display = "block";
  document.getElementById('nadpis-viac').innerHTML = "Bratislava";
  document.getElementById('nadpis-viac').style.color = "#f95350";
  document.getElementById('text-lavy').innerHTML = "Hlavné mesto Slovenskej republiky BRATISLAVA označovaná aj ako krásavica na Dunaji sa môže pýšiť nielen bohatou históriou (niekoľko storočí bola hlavným mestom Uhorska), ale aj zaujímavou súčasnosťou (je centrom najdynamickejšie sa rozvíjajúceho regiónu v strednej Európe). <br><br><b>Link:</b> <a href='https://www.visitbratislava.com/' target='_blank'>visitbratislava</a>";
  document.getElementById('text-pravy').innerHTML = "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
  document.getElementById("obrazok").src="img/bratislava.png";
  return false;
  });
  return false;
}

//Jaskyne Slovenského krasu
function oknoKras(){
  document.getElementById('okno').style.display = "block";
  document.getElementById('nadpis').innerHTML = "Slovenský kras";
  document.getElementById('nadpis').style.color = "#f95350";
  document.getElementById('text').innerHTML = "<b>Adresa:</b><br>Košický kraj, okres Košice - okolie, Jasov<br><br><b>Otváracie hodiny:</b><br> <a href='http://www.ssj.sk/sk/otvaracie-hodiny' target='_blank'>otváracie hodiny</a> <br><br><b>Telefón:</b><br>+421 948/205 226";
  document.getElementById('zobrazViac').addEventListener('click',function(){
  document.getElementById('viac').style.display = "block";
  document.getElementById('nadpis-viac').innerHTML = "Jaskyne Slovenského krasu";
  document.getElementById('nadpis-viac').style.color = "#f95350";
  document.getElementById('text-lavy').innerHTML = "Jaskyne Slovenského a Aggtelekského krasu sú od roku 1995 zapísané do Zoznamu svetového dedičstva UNESCO. Naše spoločné jaskyne sa na základe bilaterálneho nominačného slovensko-maďarského projektu stali hodnotou nielen pre nás, ale pre celé ľudstvo. <br><br><b>Link na stránku:</b> <a href='https://www.tikroznava.sk/' target='_blank'>tikroznava</a>";
  document.getElementById('text-pravy').innerHTML = "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
  document.getElementById("obrazok").src="img/kras.png";
  return false;
  });
  return false;
}