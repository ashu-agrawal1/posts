<template>
  <div class="p-6 max-w-3xl mx-auto">
    <div class="bg-white shadow-lg rounded-2xl p-6 space-y-4 border">
      <h1 class="text-3xl font-bold text-gray-800">{{ post?.title }}</h1>

      <p class="text-gray-700 leading-relaxed">{{ post?.body }}</p>

      <div class="flex gap-4 text-sm text-gray-600">
        <div class="flex items-center gap-1">
          👁️ <span>{{ post?.views }} views</span>
        </div>
        <div class="flex items-center gap-1">
          👍 <span>{{ post?.reactions?.likes }} likes</span>
        </div>
        <div class="flex items-center gap-1">
          👎 <span>{{ post?.reactions?.dislikes }} dislikes</span>
        </div>
        <div class="flex items-center gap-1">
          🧑‍💻 <span>User ID: {{ post?.userId }}</span>
        </div>
      </div>

      <div class="mt-4">
        <h2 class="font-semibold text-gray-700 mb-1">Tags:</h2>
        <div class="flex flex-wrap gap-2">
          <span
            v-for="tag in post?.tags"
            :key="tag"
            class="bg-blue-100 text-blue-800 text-xs font-medium px-3 py-1 rounded-full"
          >
            #{{ tag }}
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const route = useRoute();
const { data: post } = await useFetch(
  `https://dummyjson.com/posts/${route.params.id}`
);
</script>
