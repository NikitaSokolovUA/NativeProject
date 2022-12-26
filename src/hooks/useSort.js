export function useSortComments(array) {
  return array.sort((firstEl, secondEl) => firstEl.data.date - secondEl.data.date);
}
