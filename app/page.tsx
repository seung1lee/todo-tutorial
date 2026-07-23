import { TodoList } from "@/components/todo-list"
import { AuroraText } from "@/components/ui/aurora-text"

export default function Page() {
  const title = (
    <h1 className="text-3xl font-bold tracking-tight">
      ✨ <AuroraText>Todo</AuroraText>
    </h1>
  )

  return (
    <div className="flex min-h-svh justify-center p-6">
      <div className="flex w-full max-w-md min-w-0 flex-col gap-6">
        <div>
          {title}
          <p className="font-mono text-xs text-muted-foreground">
            오늘 하루도 차근차근, 할 일을 함께 정리해봐요 (다크 모드는 <kbd>d</kbd>)
          </p>
        </div>
        <TodoList />
      </div>
    </div>
  )
}
