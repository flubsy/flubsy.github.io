const wowClasses = {
    "Death Knight": ["Blood DK", "Frost DK", "Unholy DK"],
    "Demon Hunter": ["Havoc", "Vengeance"],
    "Druid": ["Balance", "Feral", "Guardian", "Restoration Dudu"],
    "Evoker": ["Devastation", "Preservation"],
    "Hunter": ["Beast Mastery", "Marksmanship", "Survival"],
    "Mage": ["Arcane", "Fire", "Frost Mage"],
    "Monk": ["Brewmaster", "Mistweaver", "Windwalker"],
    "Paladin": ["Holy Pal", "Protection P", "Retribution"],
    "Priest": ["Discipline", "Holy Pr", "Shadow"],
    "Rogue": ["Assassination", "Outlaw", "Subtlety"],
    "Shaman": ["Elemental", "Enhancement", "Restoration Shaman"],
    "Warlock": ["Affliction", "Demonology", "Destruction"],
    "Warrior": ["Arms", "Fury", "Protection W"],
  };

const createSpecImage ={
    "Blood DK": "dk-blood.jpg",
    "Frost DK": "dk-frost.jpg",
    "Unholy DK": "dk-unholy.jpg",
    "Havoc" : "demon-hunter-havoc.jpg",
    "Vengeance" : "demon-hunter-vengeance.jpg",
    "Balance": "druid-balance.jpg",
    "Feral": "druid-feral.jpg",
    "Guardian": "druid-guardian.jpg",
    "Restoration Dudu": "druid-restoration.jpg",
    "Devastation": "evoker-devastation.jpg",
    "Preservation": "evoker-preservation.jpg",
    "Beast Mastery": "hunter-beast-mastery.jpg",
    "Marksmanship": "hunter-mm.jpg",
    "Survival": "hunter-survival.jpg",
    "Arcane": "mage-arcane.jpg",
    "Fire" : "mage-fire.jpg",
    "Frost Mage" : "mage-frost.jpg",
    "Brewmaster" : "monk-brewmaster.jpg",
    "Mistweaver" : "monk-mistweaver.jpg",
    "Windwalker" : "monk-windwalker.jpg",
    "Holy Pal" : "paladin-holy.jpg",
    "Protection P" : "paladin-protection.jpg",
    "Retribution" : "paladin-retribution.jpg",
    "Discipline" : "priest-discipline.jpg",
    "Holy Pr" : "priest-holy.jpg",
    "Shadow" : "priest-shadow.jpg",
    "Assassination" : "rogue-assassination.jpg",
    "Outlaw" : "rogue-outlaw.jpg",
    "Subtlety" : "rogue-subtlety.jpg",
    "Elemental" : "shaman-elemental.jpg",
    "Enhancement" : "shaman-enhancement.jpg",
    "Restoration Shaman" : "shaman-restoration.jpg",
    "Affliction" : "warlock-affliction.jpg",
    "Demonology" : "warlock-demonology.jpg",
    "Destruction" : "warlock-destruction.jpg",
    "Arms" : "warrior-arms.jpg",
    "Fury" : "warrior-fury.jpg",
    "Protection W" : "warrior-protection.jpg"
}
//working app
    // function generateRandomSpec() {
    //     // Get selected classes
    //     const selectedClasses = document.querySelectorAll('input[name="class"]:checked');
      
    //     if (selectedClasses.length === 0) {
    //       document.getElementById('result').textContent = 'Please select a class.';
    //       return;
    //     }
      
    //     // Create an array to store all available specs for selected classes
    //     const specs = [];
      
    //     // Loop through selected classes and get available specs for each class
    //     selectedClasses.forEach((selectedClass) => {
    //       const className = selectedClass.value;
    //       const classSpecs = wowClasses[selectedClass.value];
    //       specs.push(...classSpecs);
    //     });
      
    //     // Select a random spec from the array of available specs
    //     const randomIndex = Math.floor(Math.random() * specs.length);
    //     const randomSpec = specs[randomIndex];
      
    //     const specImage = createSpecImage[randomSpec];
    //     const imageElement = document.createElement("img");
    //     imageElement.src = `spec-images/${specImage}`;
        
    //     const resultElement = document.getElementById("result");
    //     resultElement.innerHTML = "";
    //     resultElement.insertAdjacentHTML("beforeend", `<p>${randomSpec}</p>`);
    //     resultElement.appendChild(imageElement);
    //   }

    function generateRandomSpec() {
      // Get selected classes
      let selectedClasses = document.querySelectorAll('input[name="class"]:checked');
    
      // Check if no classes are selected
      if (selectedClasses.length === 0) {
        // Select all classes
        selectedClasses = document.querySelectorAll('input[name="class"]');
        // Check if no classes are available
        if (selectedClasses.length === 0) {
          document.getElementById('result').textContent = 'No classes available.';
          return;
        }
      }
    
      // Create an array to store all available specs for selected classes
      const specs = [];
    
      // Loop through selected classes and get available specs for each class
      selectedClasses.forEach((selectedClass) => {
        const className = selectedClass.value;
        const classSpecs = wowClasses[selectedClass.value];
        specs.push(...classSpecs);
      });
    
      // Select a random spec from the array of available specs
      const randomIndex = Math.floor(Math.random() * specs.length);
      const randomSpec = specs[randomIndex];
    
      const specImage = createSpecImage[randomSpec];
      const imageElement = document.createElement("img");
      imageElement.src = `spec-images/${specImage}`;
    
      const resultElement = document.getElementById("result");
      resultElement.innerHTML = "";
      resultElement.insertAdjacentHTML("beforeend", `<p>${randomSpec}</p>`);
      resultElement.appendChild(imageElement);
    }
    
    