interface Props {
  description: string
}

function EmptyState({ description }: Props) {
  return (
    <div className="flex h-full justify-center p-4 text-center items-center">
      <p className="text-xl font-semibold capitalize">{description}</p>
    </div>
  )
}

export default EmptyState
