export const usePostStore = defineStore("post", () => {
  const posts = ref([]);

  const fetchPosts = async () => {
    const { data } = await useFetch("https://dummyjson.com/posts");
    posts.value = data.value.posts;
  };

  return { posts, fetchPosts };
});
