export class newLife {
  constructor(name, genderIndex, hairColorIndex, country) {
    this.name = name;
    this.gender = this.getGenderByIndex(genderIndex);
    this.hairColor = this.getHairColorByIndex(hairColorIndex);
    this.country = this.chooseCountry(country);
  }

  getGenderByIndex(gender) {
    const genderArr = ["man", "female"];
    return genderArr[gender];
  }

  chooseGender(gender) {
    this.genderIndex = gender;
    this.gender = this.getGenderByIndex;
  }

  getHairColorByIndex(index) {
    const hairColors = ["black", "brown", "blonde", "red", "gray", "white"];
    return hairColors[index];
  }

  chooseHairColor(index) {
    (this.hairColorIndex = index), (this.hairColor = this.getHairColorByIndex);
  }

  chooseCountry(country) {
    const countries = [
      { flag: "🇦🇺", name: "Australia" },
      { flag: "🇧🇷", name: "Brazil" },
      { flag: "🇨🇦", name: "Canada" },
      { flag: "🇨🇳", name: "China" },
      { flag: "🇫🇷", name: "France" },
      { flag: "🇩🇪", name: "Germany" },
      { flag: "🇮🇳", name: "India" },
      { flag: "🇮🇩", name: "Indonesia" },
      { flag: "🇮🇹", name: "Italy" },
      { flag: "🇯🇵", name: "Japan" },
      { flag: "🇰🇷", name: "South Korea" },
      { flag: "🇲🇽", name: "Mexico" },
      { flag: "🇳🇱", name: "Netherlands" },
      { flag: "🇷🇺", name: "Russia" },
      { flag: "🇸🇦", name: "Saudi Arabia" },
      { flag: "🇪🇸", name: "Spain" },
      { flag: "🇨🇭", name: "Switzerland" },
      { flag: "🇹🇷", name: "Turkey" },
      { flag: "🇬🇧", name: "United Kingdom" },
      { flag: "🇺🇸", name: "United States" },
    ];
    return countries[country];
  }
}

let character1 = new newLife("Aaron", 0, 0, 0);

console.log(character1);
