<template>
  <div class="about-page">
    <main class="main-content">
      <section class="product-gallery">
        <h3>
          Welcome to our Gaming Store: Where Every Gamer Finds Their Paradise
        </h3>
        <div class="card-container-q-pa-md row items-start q-gutter-md">
          <q-card class="my-card">
            <img src="../assets/img/Product1.jpg" />

            <q-card-section>
              <div class="text-h6">ROG Phone 5</div>
            </q-card-section>
          </q-card>

          <q-card class="my-card">
            <img src="../assets/img/Product2.jpg" />

            <q-card-section>
              <div class="text-h6">ROG Ally</div>
            </q-card-section>
          </q-card>
          <q-card class="my-card">
            <img src="../assets/img/Product3.jpg" />

            <q-card-section>
              <div class="text-h6">ROG Strix x16</div>
            </q-card-section>
          </q-card>
          <q-card class="my-card">
            <img src="../assets/img/Product4.jpg" />
            <q-card-section>
              <div class="text-h6">ROG Fusion</div>
            </q-card-section>
          </q-card>
          <q-card class="my-card">
            <img src="../assets/img/Product5.jpg" />
            <q-card-section>
              <div class="text-h6">TitanX Gaming PC</div>
            </q-card-section>
          </q-card>
          <q-card class="my-card">
            <img src="../assets/img/Product6.jpg" />
            <q-card-section>
              <div class="text-h6">ROG Thor Gaming Mouse</div>
            </q-card-section>
          </q-card>
        </div>
      </section>
      <section class="about-section">
        <p>
          At our gaming store, we aim to create an unparalleled experience for
          all gaming enthusiasts. As you step into our vibrant and dynamic
          space, you're greeted by the pulsating energy of the gaming world.
          From the latest gaming consoles to cutting-edge accessories and a vast
          library of games spanning every genre, our store is a haven for gamers
          of all ages and preferences.
        </p>
        <p>
          Our commitment to excellence extends beyond our product offerings. We
          pride ourselves on providing personalized service tailored to each
          customer's needs. Whether you're a seasoned gamer seeking the latest
          releases or a newcomer looking for advice on where to begin, our
          knowledgeable staff is here to assist you every step of the way. We
          believe that gaming is more than just a hobby—it's a passion, and
          we're dedicated to helping you fuel that passion.
        </p>
        <p>
          But our gaming store is more than just a retail space; it's a
          community hub where gamers come together to connect, compete, and
          celebrate their love for gaming. From organized tournaments and gaming
          events to exclusive product launches and meet-and-greet sessions with
          industry professionals, there's always something exciting happening at
          our store. We believe that gaming has the power to bring people
          together, and we're committed to fostering a welcoming and inclusive
          community where everyone feels valued and respected.
        </p>
        <p>
          In conclusion, our gaming store is more than just a place to buy
          games—it's a destination where gamers can immerse themselves in the
          thrill of gaming culture. Whether you're searching for the latest
          releases, seeking expert advice, or simply looking to connect with
          fellow gamers, our store has everything you need to elevate your
          gaming experience. So come on in, grab a controller, and let the
          adventure begin!
        </p>
      </section>
    </main>
  </div>
</template>

<script setup></script>

<style scoped>
* {
  justify-content: center;
}
.about-page {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  font-family: "acre";
  color: red;
}

.nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo {
  font-size: 1.5em;
}

.nav-links {
  list-style: none;
  display: flex;
  gap: 20px;
}

.nav-links li a {
  color: red;
  text-decoration: none;
  font-size: 1em;
}

.main-content {
  flex: 1;
  padding: 20px;
  background-color: #1e1e1e;
}

.about-section {
  max-width: 800px;
  margin: 0 auto 40px;
  text-align: left;
}

.about-section h1 {
  font-size: 2.5em;
  margin-bottom: 20px;
  color: red;
}

.about-section p {
  font-size: 1.2em;
  line-height: 1.6;
  color: red;
  margin-bottom: 20px;
}

.product-gallery {
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
}

.product-gallery h2 {
  font-size: 2em;
  margin-bottom: 20px;
  color: #333;
}

.gallery {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}

.gallery-item {
  width: 150px;
  margin-bottom: 20px;
}

.gallery-item img {
  width: 100%;
  height: auto;
  border-radius: 8px;
}

.gallery-item p {
  margin-top: 10px;
  font-size: 1em;
  color: #666;
}

.footer {
  background-color: #333;
  color: red;
  text-align: center;
  padding: 10px 0;
}
.card-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.my-card {
  width: calc(28.2% - 29px);
  margin-right: 10px;
  margin-bottom: 20px;
  position: relative;
}
</style>
