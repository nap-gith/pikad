
window.pokemon = ["Bulbasaur","Ivysaur","Venusaur","Charmander","Charmeleon","Charizard","Squirtle","Wartortle","Blastoise","Caterpie","Metapod","Butterfree","Weedle","Kakuna","Beedrill","Pidgey","Pidgeotto","Pidgeot","Rattata","Raticate","Spearow","Fearow","Ekans","Arbok","Pikachu","Raichu","Sandshrew","Sandslash","Nidoran♀","Nidorina","Nidoqueen","Nidoran♂","Nidorino","Nidoking","Clefairy","Clefable","Vulpix","Ninetales","Jigglypuff","Wigglytuff","Zubat","Golbat","Oddish","Gloom","Vileplume","Paras","Parasect","Venonat","Venomoth","Diglett","Dugtrio","Meowth","Persian","Psyduck","Golduck","Mankey","Primeape","Growlithe","Arcanine","Poliwag","Poliwhirl","Poliwrath","Abra","Kadabra","Alakazam","Machop","Machoke","Machamp","Bellsprout","Weepinbell","Victreebel","Tentacool","Tentacruel","Geodude","Graveler","Golem","Ponyta","Rapidash","Slowpoke","Slowbro","Magnemite","Magneton","Farfetch'd","Doduo","Dodrio","Seel","Dewgong","Grimer","Muk","Shellder","Cloyster","Gastly","Haunter","Gengar","Onix","Drowzee","Hypno","Krabby","Kingler","Voltorb","Electrode","Exeggcute","Exeggutor","Cubone","Marowak","Hitmonlee","Hitmonchan","Lickitung","Koffing","Weezing","Rhyhorn","Rhydon","Chansey","Tangela","Kangaskhan","Horsea","Seadra","Goldeen","Seaking","Staryu","Starmie","Mr Mime","Scyther","Jynx","Electabuzz","Magmar","Pinsir","Tauros","Magikarp","Gyarados","Lapras","Ditto","Eevee","Vaporeon","Jolteon","Flareon","Porygon","Omanyte","Omastar","Kabuto","Kabutops","Aerodactyl","Snorlax","Articuno","Zapdos","Moltres","Dratini","Dragonair","Dragonite","Mewtwo","Mew"];
window.alolan = ["Rattata","Raticate","Raichu","Sandshrew","Sandslash","Vulpix","Ninetales","Diglett","Dugtrio","Meowth","Persian","Geodude","Graveler","Golem","Grimer","Muk","Exeggutor","Marowak"];
window.candies = ["", "health", "mighty", "tough", "smart", "courage", "quick"];

window.team = [{
  name: "Pikachu", 
  nick: "Sparky",
  sex: "female",
  lvl: 24
}, {
  name: "Eevee", 
  sex: "female",
  lvl: 23
}, {
  name: "Vulpix", 
  sex: "male",
  lvl: 13,
  alolan: true,
  health: 15,
  candy: "quick"
}, {
  name: "Haunter", 
  sex: "female",
  lvl: 57,
  health: 49
}, {
  name: "Charizard", 
  sex: "male",
  lvl: 76,
  health: 92
}, {
  name: "Mew", 
  sex: "female",
  lvl: 99,
  candy: "smart"
}];

Vue.component( "Arrow", {
  template: `
  <span class="arrow">
    <svg id="Arrow" viewBox="0 0 232 232">
      <defs>
        <linearGradient id="arrow-gradient" x1="157.02" y1="90.68" x2="157.02" y2="246.27" gradientUnits="userSpaceOnUse">
          <stop offset="0" :stop-color="topColor"/>
          <stop offset="1" :stop-color="bottomColor"/>
        </linearGradient>
      </defs>
      <path data-name="Outer Stroke" d="M66.42,284.52a23.47,23.47,0,0,1-5-.55A22.91,22.91,0,0,1,47,273.77a22,22,0,0,1-2.7-17L66,168.44,44.56,80.21A22.17,22.17,0,0,1,45.84,66a22.82,22.82,0,0,1,20.9-13.45,23.06,23.06,0,0,1,8.56,1.64c20.44,8.05,56.57,23.67,90.92,41.11,38.22,19.41,80.64,43.46,98.4,54.06a22.74,22.74,0,0,1,7.13,6.71,22.27,22.27,0,0,1,3.35,17.17,22.54,22.54,0,0,1-10.3,14.4c-17.12,10.45-61.08,36.68-99.07,54.38l-12.88,6c-32.36,15.09-62.93,29.34-78.37,35.08A23,23,0,0,1,66.42,284.52Z" transform="translate(-43.6 -52.52)" style="fill: #4f5456"/>
      <path data-name="Inner Stroke" d="M159,109.53C124.09,91.82,87.87,76.3,69.38,69a7,7,0,0,0-8.92,3.45,6.14,6.14,0,0,0-.36,4L82,166.63a6.3,6.3,0,0,1,0,3.65L59.78,260.6a6.45,6.45,0,0,0,5.08,7.75,7.17,7.17,0,0,0,4-.28c16.89-6.27,55.14-24.33,90.06-40.58,37.65-17.55,81.41-43.73,97.51-53.55a6.24,6.24,0,0,0,2-8.9,6.6,6.6,0,0,0-2.1-2C238.55,152.4,196.37,128.53,159,109.53Z" transform="translate(-43.6 -52.52)" style="fill: #fff"/>
      <path d="M97.51,174.36a22.32,22.32,0,0,0,0-11.78L80,90.68c18.69,7.87,45.44,19.78,71.7,33.12,29.6,15,61.74,32.88,82.52,44.84-20.71,12.3-53.29,31-82,44.34l-12.89,6c-21.48,10-43.47,20.27-59.54,27.28Z" transform="translate(-43.6 -52.52)" style="fill: url(#arrow-gradient)"/>
    </svg>
  </span>
`,
  props: {
    topColor: { type: String, default: "#eee" },
    bottomColor: { type: String, default: "#888" }
  }
});
Vue.component( "Bg", {
  template: `
  <svg class="cell" viewBox="0 0 300 436">
      <defs>
        <linearGradient id="bg-gradient" x1="157.02" y1="90.68" x2="157.02" y2="246.27" gradientUnits="userSpaceOnUse">
          <stop offset="0" stop-color="rgba( 255, 255, 255, 0.3 )" />
          <stop offset="1" stop-color="rgba( 255, 255, 255, 0.5 )" />
        </linearGradient>
        <linearGradient id="bg-gradient-selected" x1="157.02" y1="90.68" x2="157.02" y2="246.27" gradientUnits="userSpaceOnUse">
          <stop offset="0" stop-color="rgba(255, 246, 146, 0.7)" />
          <stop offset="1" stop-color="rgba(255, 225, 85, 0.8)" />
        </linearGradient>
      </defs>
    <path class="bg" d="M270.88,433C242,438,196,441,155,441s-93.84-3.61-115.88-8C14,428,11,405,9,368c-.92-17-4-70-4-145S9,77,9,77c1-37,5.23-59,30.12-64S114,5,155,5s91.77,2,115.88,8S300,40,301,77c0,0,4,71,4,146s-1.36,124.73-3,145C299,405,299.77,428,270.88,433Z" transform="translate(-5 -5)" style="fill: url(#bg-gradient)"/>
    <path class="stroke" d="M155,15.31c18.41,0,80.61.55,108.25,7.62,10.49,2.69,17.29,8.7,21.39,18.91,3.59,8.94,5.34,21.33,5.87,41.45,0,.68,3.72,68.76,3.72,139.71,0,64.71-1,116.58-2.79,138.73-.22,2.86-.42,5.62-.62,8.3-2.22,30.4-3.56,48.75-27.5,53-26.06,4.64-68.58,7.64-108.32,7.64-38.49,0-88.09-3.5-108.3-7.64-22.62-4.63-25.37-26.25-27.21-61.29l-.13-2.36c-1-18.54-3.59-67.8-3.59-136.4,0-70.95,3.68-139,3.72-139.74,1-36.47,5.43-55.81,27.22-60.31,24.25-5,72.83-7.64,108.29-7.64m0-1c-38.14,0-85.35,2.87-108.5,7.66s-27.08,25.84-28,61.26c0,0-3.72,68-3.72,139.77s2.87,122.56,3.72,138.81c1.86,35.42,4.65,57.44,28,62.22,20.51,4.2,70.36,7.66,108.5,7.66s81.63-2.87,108.5-7.66,26.15-26.8,28.94-62.22c1.53-19.41,2.79-67,2.79-138.81s-3.72-139.77-3.72-139.77c-.93-35.42-5.58-55.52-28-61.26S193.14,14.31,155,14.31Z" transform="translate(-5 -5)" style="fill: #fff"/>
</svg>
`
});
Vue.component( "Pokeball", {
  template: `
  <svg class="pokeball" viewBox="0 0 204.54 207.46">
    <path d="M9.57,128.66l60.57,0s.42,1.17,1.49,3.35c10.51,22.12,34.09,31.79,56.93,22.92,12.07-4.69,20.49-13.53,24.76-26.27h60.6c-3.66,40.18-40.45,85.21-95.06,88.75C60.8,221.14,15.86,177.72,9.57,128.66Z" transform="translate(-9.57 -10.14)"/>
    <path d="M214.11,99.09H153.33a15.33,15.33,0,0,0-1.28-3.46c-8-16.74-21.42-25.84-39.89-25.95C93.44,69.56,80,78.77,71.65,95.58c-.77,1.53-1.51,3.51-1.51,3.51H9.79c5.15-45.56,47-89.37,102.94-88.95S209.31,54.53,214.11,99.09Z" transform="translate(-9.57 -10.14)"/>
    <path d="M111.72,134.54a20.39,20.39,0,1,1,20.53-19.9A20.5,20.5,0,0,1,111.72,134.54Z" transform="translate(-9.57 -10.14)"/>
</svg>

  `
})
Vue.component( "Male", {
  template: `
    <svg class="icon male" viewBox="0 0 426.667 426.667">
      <path style="fill:#50C8EF;" d="M165.705,426.667C74.334,426.667,0,352.333,0,260.962c0-91.366,74.334-165.7,165.705-165.7
        c91.366,0,165.7,74.334,165.7,165.7C331.405,352.333,257.071,426.667,165.705,426.667z M165.705,157.235
        c-57.199,0-103.735,46.532-103.735,103.731s46.532,103.735,103.735,103.735c57.195,0,103.735-46.532,103.735-103.735
        C269.436,203.767,222.899,157.235,165.705,157.235z"/>
      <polygon style="fill:#50C8EF;" points="426.667,165.705 364.698,165.705 364.698,61.969 260.962,61.969 260.962,0 426.667,0 	"/>

        <rect x="297.325" y="3.092" transform="matrix(-0.7071 -0.7071 0.7071 -0.7071 490.914 400.0457)" style="fill:#50C8EF;" width="61.968" height="190.518"/>
    </svg>`
});
Vue.component( "Female", {
  template: `
    <svg class="icon female" viewBox="0 0 417.606 417.606">
  
<path style="fill:#F05228;" d="M251.906,331.41c-91.379,0-165.709-74.338-165.709-165.705c0-91.371,74.334-165.705,165.709-165.705
		c91.366,0,165.7,74.334,165.7,165.705C417.606,257.072,343.272,331.41,251.906,331.41z M251.906,61.975
		c-57.203,0-103.735,46.532-103.735,103.735c0,57.195,46.532,103.735,103.735,103.735c57.199,0,103.735-46.537,103.735-103.735
		C355.637,108.507,309.105,61.975,251.906,61.975z"/>
	
		<rect x="58.314" y="233.078" transform="matrix(-0.7071 -0.7071 0.7071 -0.7071 -79.7284 623.65)" style="fill:#F05228;" width="61.968" height="190.518"/>
	
		<rect x="-5.991" y="297.329" transform="matrix(-0.7071 -0.7071 0.7071 -0.7071 -79.764 623.5881)" style="fill:#F05228;" width="190.518" height="61.968"/>

</svg>`
});

Vue.component( "Pokemon", {
  template: `
    <div class="radio" class="pokemon" :class="{ selected: isSelected }">
      <Bg :selected="isSelected"></Bg>
      <Pokeball></Pokeball>
      <Arrow v-if="isSelected"></Arrow>
      <label>
        <input class="radio" type="radio" name="poke" :id="name" :value="name" v-model="selectedPokemon"> 
        <span class="lvl">Lv. {{ lvl }}</span>
        <span class="sex" :class="sex">
          <Female v-if="sex === 'female'"></Female>
          <Male v-else></Male>
        </span>
        <img class="sprite" :src="sprite" />
        <span class="heart" v-if="partner"></span>
        <span v-if="candy" class="candy" :class="candy"></span>
        <div class="details">
          <h2 class="name">{{ nickname }}</h2>
          <div class="hp">
            <div class="bar">
              <div class="health" :style="{ width: healthPercent }" :class="{ low: health <= 50, critical: health <= 15 }"></div>
            </div>
            <span class="text">{{ hitpoints }} / {{ maxhp }}</span>
          </div>
        </div>
      </label>
    </div>
  `,
  props: {
    picked: { type: String },
    name: { type: String, default: "Eevee" },
    nick: { type: String },
    lvl: { type: Number, default: 1 },
    sex: { type: String, default: "female" },
    health: { type: Number, default: 100 },
    hp: { type: Number },
    alolan: { type: Boolean, default: false },
    candy: { type: String, default: "" }
  },
  computed: {
    partner() {
      return  this.name === "Eevee" || this.name === "Pikachu";
    },
    sprite() {
      let lower = this.name.toLowerCase();
      if ( this.alolan ) {
        lower = lower + "-alolan";
      }
      return `https://img.pokemondb.net/sprites/lets-go-pikachu-eevee/normal/${lower}.png`;
    },
    isSelected() {
      return this.picked === this.name;
    },
    maxhp() {
      return Math.ceil( this.hp || 2.23 * this.lvl + 17 );
    },
    hitpoints() {
      return Math.ceil( this.maxhp * ( this.health / 100 ) );
    },
    healthPercent() {
      return this.health + "%";
    },
    nickname() {
      return this.nick || this.name;
    },
    selectedPokemon: {
      get: function() {
        return this.picked
      },
      set: function() {
        this.$emit( "change", this.name )
      }
    }
  },
  methods: {
    isSelected() {
      return this.picked === this.name;
    }
  }
});

Vue.component( "List", {
  template: `
  <div>

    <h1>Let's Go, {{ picked }}!</h1>
    <div class="pokes">
      <Pokemon v-for="( poke, idx ) in pokemon" 
        v-model="picked"
        :name="poke.name"
        :nick="poke.nick"
        :lvl="poke.lvl"
        :sex="poke.sex" 
        :hp="poke.hp" 
        :health="poke.health" 
        :alolan="poke.alolan" 
        :candy="poke.candy" 
        :picked="picked"
        @change="update">
      </Pokemon>
    </div>
    <button class="button" @click="newTeam">New Team</button>
  </div>
`,
  data() { return {
    picked: "Vulpix",
    pokemon: window.team
  }},
  methods: {
    update( val ) {
      this.picked = val;
    },
    newTeam() {
      let team = [];
      for( let i = 0; i < 6; i++ ) {
        let rando = Math.floor( Math.random() * 150 ) + 1;
        if ( team.includes(rando) ) {
          i--;
          console.log("dupe");
        } else {
          team.push( rando );
          let poke = nick = window.pokemon[ rando ];
          let lvl = Math.floor( Math.random() * 100 ) + 1;
          let health = Math.floor( Math.random() * 100 ) + 1;
          let female = !!Math.floor( Math.random() * 2 );
          let candy = "";
          if ( !Math.floor( Math.random() * 4 ) ) {
            candy = window.candies[ Math.floor( Math.random() * window.candies.length ) ]; 
          }
          let alolan = ( window.alolan.includes( poke ) ) ? !!Math.floor( Math.random() * 2 ) : false;
          switch( poke ) {
            case "Mr Mime":
              poke = "Mr-Mime";
              nick = "Mimey";
              break;
            case "Pikachu":
              nick = "Sparky";
              break;
            case "Nidoran♀":
              poke = "Nidoran-F";
              nick = "Whiskers";
              break;
            case "Nidoran♂":
              poke = "Nidoran-M";
              nick = "Biscuits";
              break;
            case "Farfetch'd":
              poke = "farfetchd";
              nick = "Leek Duck";
              break;
          }
          window.team[i].name = poke;
          window.team[i].nick = nick;
          window.team[i].lvl = lvl;
          window.team[i].health = health;
          window.team[i].alolan = alolan;
          window.team[i].candy = candy;
          window.team[i].sex = ( female ) ? 'female' : 'male';
        }
      }
    }
  }
});

let app = new Vue({
  el: "#app",
  data: {}
});
