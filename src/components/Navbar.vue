<template>
  <nav class="bg-black shadow">
    <div class="container mx-auto px-4">
      <div class="flex justify-between items-center py-4">
        <!-- Logo -->
        <div class="text-2xl font-bold text-white">
          <a href="#">GER&#205;CHT</a>
        </div>
        <!-- Links -->
        <div class="font-custom1 hidden md:flex space-x-6">
          <a href="#" class="text-white hover:text-yellow-500">Home</a>
          <a href="#" class="text-white hover:text-yellow-500">Pages</a>
          <a href="#" class="text-white hover:text-yellow-500">Contact Us</a>
          <a href="#" class="text-white hover:text-yellow-500">Blog</a>
          <a href="#" class="text-white hover:text-yellow-500">Landing</a>
        </div>

        <div class="hidden md:flex justify-between items-center space-x-6">
          <a href="#" class="text-white hover:text-yellow-500"
            >Log in / Registration</a
          >
          <p class="text-white">|</p>
          <a href="#" class="text-white hover:text-yellow-500">Book Table</a>
        </div>
        <!-- Mobile Menu Button -->
        <div class="md:hidden">
          <button
            @click="toggleMenu"
            class="text-gray-600 hover:text-gray-800 focus:outline-none"
          >
            <svg
              class="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>
      </div>
      <!-- Mobile Menu -->
      <div v-if="isMenuOpen" class="md:hidden">
        <a
          href="#"
          class="block px-4 py-2 text-sm text-gray-600 hover:bg-gray-200"
          >Home</a
        >
        <a
          href="#"
          class="block px-4 py-2 text-sm text-gray-600 hover:bg-gray-200"
          >About</a
        >
        <a
          href="#"
          class="block px-4 py-2 text-sm text-gray-600 hover:bg-gray-200"
          >Services</a
        >
        <a
          href="#"
          class="block px-4 py-2 text-sm text-gray-600 hover:bg-gray-200"
          >Contact</a
        >
        <a
          href="#"
          class="block px-4 py-2 text-sm text-gray-600 hover:bg-gray-200"
          >Log in / Registration</a
        >
        <a
          href="#"
          class="block px-4 py-2 text-sm text-gray-600 hover:bg-gray-200"
          >Book Table</a
        >
      </div>
    </div>
  </nav>
</template>

<script>
import { ref } from "vue";

export default {
  setup() {
    const isMenuOpen = ref(false);

    const toggleMenu = () => {
      isMenuOpen.value = !isMenuOpen.value;
    };

    return {
      isMenuOpen,
      toggleMenu,
    };
  },
};
</script>

<style scoped>
/* Add any additional styles if needed */
</style>
