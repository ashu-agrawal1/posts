<template>
  <div
    class="bg-white shadow-md hover:shadow-xl transition-shadow duration-300 rounded-xl p-4 border cursor-pointer"
  >
    <h2 class="text-xl font-semibold text-gray-800 mb-2">{{ post.title }}</h2>
    <p class="text-gray-600 text-sm mb-3 line-clamp-2">{{ post.body }}</p>

    <div class="flex flex-wrap gap-2 text-xs text-blue-800 font-medium">
      <span
        v-for="tag in post.tags"
        :key="tag"
        class="bg-blue-100 px-2 py-0.5 rounded-full"
      >
        #{{ tag }}
      </span>
    </div>

    <div class="mt-4 flex justify-start text-gray-500 text-xs gap-2">
      <div>👍 {{ post.reactions?.likes }}</div>
      <div>👎 {{ post.reactions?.dislikes }}</div>
      <div>👁️ {{ post.views }}</div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  post: Object,
});
</script>
