<template>
  <div class="border p-4 rounded hover:shadow transition">
    <NuxtLink :to="`/posts/${post.id}`" class="block">
      <h2 class="text-xl font-bold">{{ post.title }}</h2>
      <p class="text-gray-600">{{ post.body.slice(0, 100) }}...</p>
    </NuxtLink>
  </div>
</template>

<script setup>
defineProps(['post'])
</script>
