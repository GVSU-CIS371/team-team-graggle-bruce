<template>
  <div id="app">
    <header>
      <div class="header-content">
        <img src="./logo.png" alt="SportsZone logo" class="logo" />
        <h1>SportsZone</h1>
      </div>
    </header>
    <main>
      <div 
        class="player-card"
        v-for="player in players" 
        :key="player.name"
      >
        <span 
          class="star"
          :class="{ favorited: isFavorited(player.name) }"
          @click="toggleFavorite(player.name)"
        >
          ★
        </span>
        <img :src="player.image" :alt="player.name + ' portrait'" @click="openModal(player)" style="cursor: pointer;" />
        <h3 @click="openModal(player)" style="cursor: pointer;">{{ player.name }}</h3>
        <p class="bio" @click="openModal(player)" style="cursor: pointer;">{{ player.bio }}</p>
      </div>
    </main>
    <footer><p>© 2025 SportsZone. All rights reserved.</p></footer>

    <div v-if="selectedPlayer" class="modal" @click="selectedPlayer = null">
      <div class="modal-content" @click.stop>
        <span class="close-btn" @click="selectedPlayer = null">&times;</span>
        <div class="modal-header">
          <img :src="selectedPlayer.image" :alt="selectedPlayer.name + ' portrait'" />
          <div>
            <h2>{{ selectedPlayer.name }}</h2>
            <p class="position">{{ selectedPlayer.position }}</p>
            <p>{{ selectedPlayer.bio }}</p>
          </div>
        </div>
        <div class="modal-stats">
          <div class="modal-stat">PPG: {{ selectedPlayer.ppg.toFixed(1) }}</div>
          <div class="modal-stat">RPG: {{ selectedPlayer.rpg.toFixed(1) }}</div>
          <div class="modal-stat">APG: {{ selectedPlayer.apg.toFixed(1) }}</div>
          <div class="modal-stat">Overall: {{ selectedPlayer.overall.toFixed(1) }}/100</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import allen from './allen.png'
import bam from './bam.png'
import brunson from './brunson.png'
import div from './div.png'
import draymond from './draymond.png'
import herro from './herro.png'
import rodgers from './rodgers.png'
import sga from './sga.png'

export default {
  data() {
    return {
      selectedPlayer: null,
      userFavorites: [],
      players: [
        {
          name: "Grayson Allen",
          image: allen,
          position: "Shooting Guard - Milwaukee Bucks",
          bio: "Known for his sharpshooting and unjustified aggression on the court.",
          overall: 90,
          ppg: 14.2,
          rpg: 4.1,
          apg: 3.3
        },
        {
          name: "Bam Adebayo",
          image: bam,
          position: "Center - Miami Heat",
          bio: "Recognized for his defensive prowess and versatility. Known for being one of the greatest players of all time.",
          overall: 100,
          ppg: 19.5,
          rpg: 10.2,
          apg: 4.7
        },
        {
          name: "Jalen Brunson",
          image: brunson,
          position: "Point Guard - New York Knicks",
          bio: "Celebrated for his leadership and clutch performances at the free throw line.",
          overall: 80,
          ppg: 25.3,
          rpg: 4.2,
          apg: 6.8
        },
        {
          name: "Donte DiVincenzo",
          image: div,
          position: "Shooting Guard - Milwaukee Bucks",
          bio: "Known for his performance in that AT&T commercial.",
          overall: 80,
          ppg: 10.4,
          rpg: 5.1,
          apg: 3.2
        },
        {
          name: "Draymond Green",
          image: draymond,
          position: "Power Forward - Golden State Warriors",
          bio: "Renowned for his defensive skills and friendship with Wizards legend Jordan Poole.",
          overall: 84,
          ppg: 8.3,
          rpg: 7.5,
          apg: 6.9
        },
        {
          name: "Tyler Herro",
          image: herro,
          position: "Shooting Guard - Miami Heat",
          bio: "Known for his clutch shooting in critical moments and making that face.",
          overall: 80,
          ppg: 20.1,
          rpg: 5.3,
          apg: 4.2
        },
        {
          name: "Aaron Rodgers",
          image: rodgers,
          position: "Quarterback - New York Jets",
          bio: "Famous for his precision passing and \"leadership\" on the field.",
          overall: 76,
          ppg: 18.6,
          rpg: 5.2,
          apg: 3.8
        },
        {
          name: "Shai Gilgeous-Alexander",
          image: sga,
          position: "Point Guard - Oklahoma City Thunder",
          bio: "Admired for his scoring ability at the line and corny Instagram captions.",
          overall: 86,
          ppg: 31.4,
          rpg: 5.9,
          apg: 6.2
        }
      ]
    };
  },
  methods: {
    openModal(player) {
      this.selectedPlayer = player;
    },
    isFavorited(playerName) {
      return this.userFavorites.includes(playerName);
    },
    toggleFavorite(playerName) {
      if (this.isFavorited(playerName)) {
        this.userFavorites = this.userFavorites.filter(name => name !== playerName);
      } else {
        this.userFavorites.push(playerName);
      }
    }
  }
};
</script>

<style scoped>
#app {
  display: grid;
  grid-template-rows: auto 1fr auto;
  min-height: 100vh;
}

header {
  background-color: rgb(100, 150, 220);
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;
  padding: 20px;
}

.header-content {
  display: flex;
  align-items: center;
  gap: 15px;
}

.logo {
  height: 50px;
  object-fit: contain;
}

header h1 {
  margin: 0px;
}

main {
  background-color: rgb(240, 240, 240);
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  padding: 20px;
  gap: 20px;
}

footer {
  background-color: rgb(100, 150, 220);
  text-align: center;
  color: white;
  padding: 20px;
}

footer p {
  margin: 0px;
}

.player-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 2px solid black;
  border-radius: 20px;
  padding: 10px;
  background-color: white;
  justify-content: space-between;
  min-height: 250px;
  position: relative;
  transition: box-shadow 0.3s, transform 0.3s;
}

.player-card:hover {
  box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.2);
  transform: translateY(-5px);
}

.star {
  position: absolute;
  top: 10px;
  right: 10px;
  font-size: 28px;
  color: rgb(200, 200, 200);
  cursor: pointer;
  transition: color 0.2s;
}

.star:hover {
  color: rgb(255, 215, 0);
}

.star.favorited {
  color: rgb(255, 215, 0);
}

.player-card img {
  width: 100%;
  height: 150px;
  object-fit: contain;
  margin-bottom: 10px;
  margin-top: 20px;
}

.player-card h3 {
  margin: 5px 0px;
  text-align: center;
}

.player-card .bio {
  margin: 0px 0px 10px 0px;
  font-size: 14px;
  text-align: center;
  flex-grow: 1;
}

.modal {
  display: flex;
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  align-items: center;
  justify-content: center;
}

.modal-content {
  background-color: white;
  padding: 20px;
  border: 2px solid black;
  border-radius: 20px;
  width: 80%;
  max-width: 500px;
}

.close-btn {
  color: black;
  float: right;
  font-size: 28px;
  font-weight: bold;
  cursor: pointer;
}

.close-btn:hover {
  color: red;
}

.modal-header {
  display: flex;
  gap: 15px;
  margin-bottom: 20px;
  align-items: center;
}

.modal-header img {
  width: 100px;
  height: 100px;
  object-fit: contain;
}

.modal-header h2 {
  margin: 0px 0px 5px 0px;
}

.modal-header .position {
  margin: 0px 0px 10px 0px;
  font-size: 14px;
  font-weight: bold;
  color: rgb(100, 150, 220);
}

.modal-header p {
  margin: 0px;
  font-size: 14px;
}

.modal-stats {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
}

.modal-stat {
  background-color: rgb(240, 240, 240);
  padding: 10px;
  border-radius: 10px;
  text-align: center;
  font-weight: bold;
}
</style>