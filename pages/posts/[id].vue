<template>
  <div class="p-6">
    <h1 class="text-3xl font-bold mb-4">{{ post?.title }}</h1>
    <p class="text-gray-700">{{ post?.body }}</p>
  </div>
</template>

<script setup>
const route = useRoute();
const { data: post } = await useFetch(
  `https://dummyjson.com/posts/${route.params.id}`
);
</script>
