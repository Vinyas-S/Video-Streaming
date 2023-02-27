const nameList = [
  "Time",
  "Past",
  "Future",
  "Dev",
  "Fly",
  "Flying",
  "Soar",
  "Soaring",
  "Power",
  "Falling",
  "Fall",
  "Jump",
  "Cliff",
  "Mountain",
  "Rend",
  "Red",
  "Blue",
  "Green",
  "Yellow",
  "Gold",
  "Demon",
  "Demonic",
  "Panda",
  "Cat",
  "Kitty",
  "Kitten",
  "Zero",
  "Memory",
  "Trooper",
  "XX",
  "Bandit",
  "Fear",
  "Light",
  "Glow",
  "Tread",
  "Deep",
  "Deeper",
  "Deepest",
  "Mine",
  "Your",
  "Worst",
  "Enemy",
  "Hostile",
  "Force",
  "Video",
  "Game",
  "Donkey",
  "Mule",
  "Colt",
  "Cult",
  "Cultist",
  "Magnum",
  "Gun",
  "Assault",
  "Recon",
  "Trap",
  "Trapper",
  "Redeem",
  "Code",
  "Script",
  "Writer",
  "Near",
  "Close",
  "Open",
  "Cube",
  "Circle",
  "Geo",
  "Genome",
  "Germ",
  "Spaz",
  "Shot",
  "Echo",
  "Beta",
  "Alpha",
  "Gamma",
  "Omega",
  "Seal",
  "Squid",
  "Money",
  "Cash",
  "Lord",
  "King",
  "Duke",
  "Rest",
  "Fire",
  "Flame",
  "Morrow",
  "Break",
  "Breaker",
  "Numb",
  "Ice",
  "Cold",
  "Rotten",
  "Sick",
  "Sickly",
  "Janitor",
  "Camel",
  "Rooster",
  "Sand",
  "Desert",
  "Dessert",
  "Hurdle",
  "Racer",
  "Eraser",
  "Erase",
  "Big",
  "Small",
  "Short",
  "Tall",
  "Sith",
  "Bounty",
  "Hunter",
  "Cracked",
  "Broken",
  "Sad",
  "Happy",
  "Joy",
  "Joyful",
  "Crimson",
  "Destiny",
  "Deceit",
  "Lies",
  "Lie",
  "Honest",
  "Destined",
  "Bloxxer",
  "Hawk",
  "Eagle",
  "Hawker",
  "Walker",
  "Zombie",
  "Sarge",
  "Capt",
  "Captain",
  "Punch",
  "One",
  "Two",
  "Uno",
  "Slice",
  "Slash",
  "Melt",
  "Melted",
  "Melting",
  "Fell",
  "Wolf",
  "Hound",
  "Legacy",
  "Sharp",
  "Dead",
  "Mew",
  "Chuckle",
  "Bubba",
  "Bubble",
  "Sandwich",
  "Smasher",
  "Extreme",
  "Multi",
  "Universe",
  "Ultimate",
  "Death",
  "Ready",
  "Monkey",
  "Elevator",
  "Wrench",
  "Grease",
  "Head",
  "Theme",
  "Grand",
  "Cool",
  "Kid",
  "Boy",
  "Girl",
  "Vortex",
  "Paradox",
];

export function generateRandomName() {
  return nameList[Math.floor(Math.random() * nameList.length)];
}

export function generateRandomMessage() {
  let result = "";
  const data = [
    {
      message: "Institute of Business and Politics",
    },
    {
      message: "Simpson College",
    },
    {
      message: "Polytechnic Institute of Milan",
    },
    {
      message: "Renaissance University",
    },
    {
      message: "Evangelische Fachhochschule Hannover",
    },
    {
      message: "Sunway University College",
    },
    {
      message: "Kansai University",
    },
    {
      message: "Fomic Polytechnic",
    },
    {
      message: "University of Science and Technology",
    },
    {
      message: "Abasyn University Peshawar",
    },
    {
      message: "Maryville University of St. Louis",
    },
    {
      message: "University of Anbar",
    },
    {
      message: "Universidad Valle del Momboy",
    },
    {
      message: "Bethlehem University",
    },
    {
      message: "McNeese State University",
    },
    {
      message: "University of Aviation and Technology",
    },
    {
      message: "Universidad Pedagogica Nacional",
    },
    {
      message: "Can-Tho University",
    },
    {
      message: "Mayville State University",
    },
    {
      message: "York University",
    },
    {
      message: "Cheyney University of Pennsylvania",
    },
    {
      message: "Tokyo University",
    },
    {
      message: "Nelson Mandela Metropolitan University",
    },
    {
      message: "Universidad de la República",
    },
    {
      message: "Université Thierno Amadou Diallo",
    },
    {
      message: "Instituto Superior Politécnico Gaya",
    },
    {
      message: "ENIC Telecom Lille 1",
    },
    {
      message: "Universidad Nacional de Educación Enrique Guzmán y Valle",
    },
    {
      message: "Tokyo Metropolitan University",
    },
    {
      message: "Clarke College",
    },
    {
      message: "KDU College Sdn Bhd",
    },
    {
      message: "Yorker International University",
    },
    {
      message: "Yangtze University",
    },
    {
      message: "Midwestern University",
    },
    {
      message: "Al Yarmouk University College",
    },
    {
      message: "Hesser College",
    },
    {
      message: "Kyoto Sangyo University",
    },
    {
      message: "Afghan University",
    },
    {
      message: "Alfaisal University",
    },
    {
      message: "Universidad Central",
    },
    {
      message: "Academia de Studii Economice din Bucuresti",
    },
    {
      message: "Universidad Pablo de Olavide",
    },
    {
      message: "School of Oriental and African Studies, University of London",
    },
    {
      message: "University of the West Indies, Mona",
    },
    {
      message: "Northeastern State University",
    },
    {
      message: "Siberian State Industrial University",
    },
    {
      message: "Newport International University",
    },
    {
      message: "El Shorouk Academy",
    },
    {
      message: "Ripon College",
    },
    {
      message: "Islamic Azad University, Shabestar",
    },
    {
      message: "Bingham University",
    },
    {
      message: "Ecole Française d'Electronique et d'Informatique",
    },
    {
      message: "Malmö University College",
    },
    {
      message: "State University of New York at Stony Brook",
    },
    {
      message: "Hiram College",
    },
    {
      message:
        "National School of Political and Administrative Studies Bucharest",
    },
    {
      message: "Korea Advanced Institute of Science & Technology",
    },
    {
      message: "DePaul University",
    },
    {
      message: "Universidade Católica de Goiás",
    },
    {
      message: "Hood College",
    },
    {
      message: "Redeemers University",
    },
    {
      message: "Pavol Jozef Safarik University in Kosice",
    },
    {
      message: "Western New Mexico University",
    },
    {
      message: "Universidad Tecnológica Oteima",
    },
    {
      message: "Rajasthan Technical University",
    },
    {
      message: "Samara State Medical University",
    },
    {
      message: "Maxim Gorky Institute of Literature",
    },
    {
      message: "Belarussian State Academy of Music",
    },
    {
      message: "Mie University",
    },
    {
      message: "University of Delhi",
    },
    {
      message: "Saitama Institute of Technology",
    },
    {
      message: "California State University, San Bernadino",
    },
    {
      message: "Institute of Space Technology",
    },
    {
      message: "Islamic University College",
    },
    {
      message: "Yalova University",
    },
    {
      message: "Katholieke Hogeschool Leuven",
    },
    {
      message: "Goldey-Beacom College",
    },
    {
      message: "Instituto Tecnológico de Santo Domingo",
    },
    {
      message: "University of Applied Sciences Aargau",
    },
    {
      message: "Tiffin University Prague",
    },
    {
      message: "Coleman College",
    },
    {
      message: "University of Nis",
    },
    {
      message: "University of Pittsburgh",
    },
    {
      message: "Majmaah University",
    },
    {
      message: "Hogeschool Leiden",
    },
    {
      message: "University of Science and Technology of China",
    },
    {
      message: "Lewis-Clark State College",
    },
    {
      message: "Universidad Salesiana",
    },
    {
      message: "Liaquat University of Medical & Health Sciences Jamshoro",
    },
    {
      message: "Polytechnic Institute of Turin",
    },
    {
      message: "Istituto Universitario di Studi Superiori",
    },
    {
      message: "Nangarhar University",
    },
    {
      message: "Gustavus Adolphus College",
    },
    {
      message: "Dhurakijpundit University",
    },
    {
      message: "United Business Institute",
    },
    {
      message: "Institute of Management and Economy",
    },
    {
      message: "Tohoku Fukushi University",
    },
    {
      message: "Lourdes College",
    },
    {
      message: "State University of New York College at Fredonia",
    },
    {
      message: "Allahabad University",
    },
  ];

  for (const [key, value] of Object.entries(
    data[Math.floor(Math.random() * data.length)]
  )) {
    result += value;
  }
  return result;
}