export const usePostStore = defineStore("post", () => {
  const posts = ref([]);
  const lastFetched = ref(0);

  const fetchPosts = async () => {
    const now = Date.now();
    const fifteenMin = 15 * 60 * 1000;
    if (posts.value.length && now - lastFetched.value < fifteenMin) return;
    const { data } = await useFetch("https://dummyjson.com/posts");
    posts.value = data.value.posts;
    lastFetched.value = now;
  };

  return { posts, fetchPosts };
});
