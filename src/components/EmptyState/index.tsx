interface Props {
  description: string
}

function EmptyState({ description }: Props) {
  return (
    <main className="flex flex-1 justify-center p-4 text-center items-center">
      <p className="text-xl font-semibold capitalize">{description}</p>
    </main>
  )
}

export default EmptyState
