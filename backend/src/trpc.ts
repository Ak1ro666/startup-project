import { initTRPC } from '@trpc/server'

const ideas = [
  { nick: 'cool-idea-nicl-1', name: 'Idea 1', description: 'Description 1' },
  { nick: 'cool-idea-nicl-2', name: 'Idea 2', description: 'Description 2' },
  { nick: 'cool-idea-nicl-3', name: 'Idea 3', description: 'Description 3' },
  { nick: 'cool-idea-nicl-4', name: 'Idea 4', description: 'Description 4' },
  { nick: 'cool-idea-nicl-5', name: 'Idea 5', description: 'Description 5' },
]

const trpc = initTRPC.create()

export const trpcRouter = trpc.router({
  getIdeas: trpc.procedure.query(() => {
    return { ideas }
  }),
})

export type TrpcRouter = typeof trpcRouter
