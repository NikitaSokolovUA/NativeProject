export const useProfilePost = (array, id) => {
  if (array.length !== 0) {
    return array.filter(post => post.data.userId === id);
  }
};
