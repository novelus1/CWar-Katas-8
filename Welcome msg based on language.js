function greet(language) {
  const languageList = [
    { languageType: "english", message: "Welcome" },
    { languageType: "czech", message: "Vitejte" },
    { languageType: "danish", message: "Velkomst" },
    { languageType: "dutch", message: "Welkom" },
    { languageType: "estonian", message: "Tere tulemast" },
    { languageType: "finnish", message: "Tervetuloa" },
    { languageType: "flemish", message: "Welgekomen" },
    { languageType: "french", message: "Bienvenue" },
    { languageType: "german", message: "Willkommen" },
    { languageType: "irish", message: "Failte" },
    { languageType: "italian", message: "Benvenuto" },
    { languageType: "latvian", message: "Gaidits" },
    { languageType: "lithuanian", message: "Laukiamas" },
    { languageType: "polish", message: "Witamy" },
    { languageType: "spanish", message: "Bienvenido" },
    { languageType: "swedish", message: "Valkommen" },
    { languageType: "welsh", message: "Croeso" },
  ];

  const chooseGreeting = languageList.find(
    (chooseGreeting) => chooseGreeting.languageType === language
  );
  return chooseGreeting ? chooseGreeting.message : "Welcome";
}
