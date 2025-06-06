<template>
  <div class="min-h-screen bg-gray-50 text-gray-900">
    <header class="bg-white shadow p-4">
      <nav class="mx-auto flex items-center gap-2">
        <NuxtLink to="/" class="text-blue-500 hover:underline">Home</NuxtLink>
        <NuxtLink to="/posts" class="text-blue-500 hover:underline"
          >Posts</NuxtLink
        >
      </nav>
    </header>
    <NuxtPage />
  </div>
</template>
