import { trpc } from '@/shared/api/trpc-api'

export function App() {
  const ideas = trpc.getIdeas.useQuery()

  if (ideas.error) {
    return <p>{ideas.error.message}</p>
  }

  if (ideas.isLoading || ideas.isFetching) {
    return <p>Loading...</p>
  }

  return (
    <div>
      <h1>All Ideas Page</h1>
      <ul>
        {ideas.data?.ideas?.map((idea) => (
          <li key={idea.nick}>
            <p>{idea.name}</p>
            <small>{idea.description}</small>
          </li>
        ))}
      </ul>
    </div>
  )
}
