import type { SortBy, Todo } from "@/lib/types";

/**
 * 정렬 기준에 따라 정렬된 새 배열을 반환한다(원본 불변).
 * - created: 생성 시각 내림차순(최신순)
 * - name: 제목 가나다순(오름차순)
 */
export function sortTodos(todos: Todo[], sortBy: SortBy): Todo[] {
  const sorted = [...todos];
  if (sortBy === "name") {
    sorted.sort((a, b) => a.text.localeCompare(b.text, "ko"));
  } else if (sortBy === "created") {
    sorted.sort((a, b) => b.createdAt - a.createdAt);
  }
  return sorted;
}
