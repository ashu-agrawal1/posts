export const usePostStore = defineStore("post", () => {
  const posts = ref([]);
  const lastFetched = ref(0);

  const fetchPosts = async () => {
    const url = "https://dummyjson.com/posts";
    const now = Date.now();
    const cacheTime = 15 * 60 * 1000; // fifteen minute
    if (posts.value.length && now - lastFetched.value < cacheTime) return;
    const { data } = await useFetch(url);
    posts.value = data.value.posts;
    lastFetched.value = now;
  };

  return { posts, fetchPosts };
});
