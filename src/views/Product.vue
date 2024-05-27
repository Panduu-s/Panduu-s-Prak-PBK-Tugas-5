<template>
  <div class="product-page">
    <main class="main-content">
      <section class="product-gallery">
        <h1>Our Products</h1>
        <div class="grid-container">
          <div
            class="gallery-item q-pa-md"
            v-for="product in products"
            :key="product.id"
          >
            <q-card style="max-width: 300px">
              <q-img :src="product.image" :alt="product.name" />
              <q-card-section>
                <q-card-title>{{ product.name }}</q-card-title>
                <q-card-text>{{ product.description }}</q-card-text>
                <q-card-text>Price: ${{ product.price }}</q-card-text>
              </q-card-section>
              <q-card-actions align="center">
                <q-btn color="primary" @click="addToBasket(product)"
                  >Add to Basket</q-btn
                >
              </q-card-actions>
            </q-card>
          </div>
        </div>
      </section>
      <section class="shopping-basket">
        <h2>Shopping Basket</h2>
        <ul>
          <li
            v-for="item in basket"
            :key="item.id"
            :class="{ 'added-item': addedItem === item }"
            style="color: red"
          >
            <span>{{ item.name }} - ${{ item.price }}</span>
            <q-btn color="negative" @click="removeFromBasket(item)"
              >Remove</q-btn
            >
          </li>
        </ul>
        <div class="checkout">
          <p>Total: ${{ totalPrice }}</p>
          <q-btn color="primary" @click="checkout">Checkout</q-btn>
        </div>
      </section>
    </main>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import image1 from "../assets/img/Product1.jpg";
import image2 from "../assets/img/Product2.jpg";
import image3 from "../assets/img/Product3.jpg";
import image4 from "../assets/img/Product4.jpg";
import image5 from "../assets/img/Product5.jpg";
import image6 from "../assets/img/Product6.jpg";

// Sample product data
const products = ref([
  {
    id: 1,
    name: "ROG Phone 5",
    description:
      "ROG Phone 5 delivers top-tier performance with its Snapdragon 888 processor and 144Hz display. It's designed for gamers who demand the best in speed and visual quality.",
    price: 899,
    image: image1,
  },
  {
    id: 2,
    name: "ROG Ally",
    description:
      "ROG Ally with an intuitive button layout, adjustable sensitivity, and a sleek, lightweight design, making it the ideal controller for competitive gaming.",
    price: 75,
    image: image2,
  },
  {
    id: 3,
    name: "ROG Strix x16",
    description:
      "The ROG Strix x16 Laptop X is built for extreme gaming with its Intel i9 processor, NVIDIA RTX 3080 GPU, and 17.3-inch 4K display, offering unmatched performance and visuals.",
    price: 2499,
    image: image3,
  },
  {
    id: 4,
    name: "ROG Fusion",
    description:
      "Experience wireless freedom and superior sound quality with the ROG Fusion Wireless Headset. With low-latency connectivity, 50mm drivers, and a detachable noise-canceling microphone, it's the ultimate choice for competitive gamers.",
    price: 149,
    image: image4,
  },
  {
    id: 5,
    name: "TitanX Gaming PC",
    description:
      "The TitanX Gaming PC delivers unparalleled power and performance for hardcore gamers. Equipped with an Intel Core i9 processor, NVIDIA GeForce RTX 3080 graphics card, and liquid cooling system, it's built to handle the most demanding games with ease.",
    price: 899,
    image: image5,
  },
  {
    id: 6,
    name: "ROG Thor Gaming Mouse",
    description:
      "The ROG Thor Gaming Mouse combines sleek design with advanced features for maximum performance. With on-the-fly DPI adjustment, customizable macros, and durable construction, it's built to withstand intense gaming sessions.",
    price: 3999,
    image: image6,
  },
]);

const basket = ref([]);
const addedItem = ref(null);

const addToBasket = (product) => {
  basket.value.push(product);
  addedItem.value = product;
  setTimeout(() => {
    addedItem.value = null;
  }, 500);
};

const removeFromBasket = (product) => {
  const index = basket.value.findIndex((item) => item.id === product.id);
  if (index !== -1) {
    basket.value.splice(index, 1);
  }
};

const totalPrice = computed(() => {
  return basket.value.reduce((sum, item) => sum + item.price, 0);
});

const checkout = () => {
  alert("Proceeding to checkout!");
  basket.value = [];
};
</script>

<style scoped>
.product-page {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  font-family: "Arial, sans-serif";
}

.main-content {
  flex: 1;
  padding: 20px;
  background-color: #1e1e1e;
}

.product-gallery {
  max-width: 1200px;
  margin: 0 auto 40px;
  text-align: center;
}

.product-gallery h1 {
  font-size: 2.5em;
  margin-bottom: 20px;
  color: red;
}

.grid-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  justify-content: center;
}

.gallery-item {
  position: relative;
  text-align: center;
}

.gallery-item img {
  max-width: 100%;
  height: auto;
  border-radius: 8px;
}

.shopping-basket {
  max-width: 800px;
  margin: 0 auto;
  text-align: left;
}

.shopping-basket h2 {
  font-size: 2em;
  margin-bottom: 20px;
  color: red;
  text-align: center;
}

.shopping-basket ul {
  list-style: none;
  padding: 0;
}

.shopping-basket li {
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
}

.shopping-basket button {
  padding: 5px 10px;
  font-size: 0.9em;
  background-color: red;
  border: none;
  color: red;
  cursor: pointer;
}

.shopping-basket button:hover {
  background-color: #ff1a1a;
}

.added-item {
  background-color: #4caf50;
  color: white;
  transition: background-color 0.5s ease;
}

.checkout {
  margin-top: 20px;
  text-align: right;
}

.checkout p {
  font-size: 1.2em;
  color: #333;
}

.checkout button {
  padding: 10px 20px;
  font-size: 1em;
  background-color: #42b983;
  border: none;
  color: rede;
  cursor: pointer;
}

.checkout button:hover {
  background-color: #369f75;
}
</style>
