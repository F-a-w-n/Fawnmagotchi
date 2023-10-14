class fawn {
  constructor(el) {
    this.el = el
    this.happy=100;
    this.hungry=100;
    this.thirsty=100;
    this.sleepy=100;
    
  }

  happyCallback = () => {this.happy+=5};
  hungryCallback = () => {this.hungry+=5};
  thirstyCallback = () =>  {this.thirsty+=5};
  sleepyCallback = () => {this.sleepy+=5};

  clickCallback = () => {this.happy+=5};

  click() {
    let t = getComputedStyle(document.querySelector(":root")).getPropertyValue('--fawn-size');
    document.querySelector(":root").style.setProperty('--fawn-size', `calc(${t} + 5px)`);
    setTimeout((e) => {
      document.querySelector(":root").style.setProperty('--fawn-size', t);
    }, 80);
    this.clickCallback();

    fawn.happy=Math.min(100,Math.max(1, fawn.happy));
    fawn.hungry=Math.min(100,Math.max(1, fawn.hungry));
    fawn.thirsty=Math.min(100,Math.max(1, fawn.thirsty));
    fawn.thirsty=Math.min(100,Math.max(1, fawn.sleepy));
    fawn.updateMenu();
  }

  colour(percent) {
    if (percent>=50) {
      return "#00FF00";
    } else if (percent>=25) {
      return '#AAFF00';
    }
    return '#FF0000';
  }


  updateMenu() {

    document.getElementById('happy').style.width = `${this.happy}%`;
    document.getElementById('happy').style.background = this.colour(this.happy);
    
    document.getElementById('hungry').style.width = `${this.hungry}%`;
    document.getElementById('hungry').style.background = this.colour(this.hungry);

    document.getElementById('thirsty').style.width = `${this.thirsty}%`;
    document.getElementById('thirsty').style.background = this.colour(this.thirsty);
    
    document.getElementById('sleepy').style.width = `${this.sleepy}%`;
    document.getElementById('sleepy').style.background = this.colour(this.sleepy);

  }

}

fawn = new fawn(document.querySelector("fawn"));

setInterval(function() {
  const decay = 1;
  fawn.happy-=decay;
  fawn.happy=Math.min(100,Math.max(1, fawn.happy));
  fawn.hungry-=decay;
  fawn.hungry=Math.min(100,Math.max(1, fawn.hungry));
  fawn.thirsty-=decay;
  fawn.thirsty=Math.min(100,Math.max(1, fawn.thirsty));
  fawn.sleepy-=decay;
  fawn.sleepy=Math.min(100,Math.max(1, fawn.sleepy));
  fawn.updateMenu()
}, 1000);

let notes = [
  "I love you!",
  "You're so sweet!",
  "You're beautiful!",
  "I miss you!",
  "These messages don't change if I'm dead",
  "I'll still love you in the afterlife!",
  "You're my world!",
  "I don't like fish especially the icon was free though",
  "My love for you knows no bounds"
];
let noteIndex = 0;
setInterval(function() {
  noteIndex++;
  if (noteIndex > notes.length) {
    noteIndex=0;
  }
  document.querySelector('bubble').textContent = notes[noteIndex];
}, 10000)

fawn.updateMenu()