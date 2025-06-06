<template>
  <h1 class="text-3xl font-bold m-2 ml-6">Posts</h1>
  <div class="p-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
    <NuxtLink
      v-for="post in postStore.posts"
      :key="post.id"
      :to="`/posts/${post.id}`"
      class="block"
    >
      <PostCard :post="post" />
    </NuxtLink>
  </div>
</template>

<script setup>
const postStore = usePostStore();
await postStore.fetchPosts();
</script>
