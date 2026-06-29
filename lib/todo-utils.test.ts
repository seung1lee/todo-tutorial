import type { Todo } from "@/lib/types";
import { sortTodos } from "@/lib/todo-utils";

function makeTodo(overrides: Partial<Todo> = {}): Todo {
  return {
    id: "1",
    text: "할 일",
    completed: false,
    priority: "medium",
    createdAt: 0,
    ...overrides,
  };
}

describe("sortTodos", () => {
  it("'created'는 생성 시각 내림차순(최신순)으로 정렬한다", () => {
    const todos = [
      makeTodo({ id: "a", createdAt: 1 }),
      makeTodo({ id: "b", createdAt: 3 }),
      makeTodo({ id: "c", createdAt: 2 }),
    ];

    expect(sortTodos(todos, "created").map((t) => t.id)).toEqual([
      "b",
      "c",
      "a",
    ]);
  });

  it("'name'은 제목 가나다순(오름차순)으로 정렬한다", () => {
    const todos = [
      makeTodo({ id: "a", text: "사과" }),
      makeTodo({ id: "b", text: "가지" }),
      makeTodo({ id: "c", text: "바나나" }),
    ];

    expect(sortTodos(todos, "name").map((t) => t.id)).toEqual(["b", "c", "a"]);
  });

  it("원본 배열을 변경하지 않는다", () => {
    const todos = [
      makeTodo({ id: "a", createdAt: 1 }),
      makeTodo({ id: "b", createdAt: 2 }),
    ];
    const snapshot = todos.map((t) => t.id);

    sortTodos(todos, "created");

    expect(todos.map((t) => t.id)).toEqual(snapshot);
  });
});
