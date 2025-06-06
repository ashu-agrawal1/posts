<template>
  <div class="bg-gray-50 text-gray-900 flex justify-center items-start">
    <button @click="navigate">Click here to go to Posts Page</button>
  </div>
</template>

<script setup>
function navigate() {
  const router = useRouter();
  router.push("/posts"); // Replace '/another-page' with the desired route
}
</script>
