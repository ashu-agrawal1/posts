<template>
  <div class="p-6">
    <h1 class="text-3xl font-bold mb-4">Posts</h1>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
      <PostCard v-for="post in postStore.posts" :key="post.id" :post="post" />
    </div>
  </div>
</template>

<script setup>
const postStore = usePostStore();
await postStore.fetchPosts();
</script>
