import { createTRPCReact } from '@trpc/react-query'
import { httpBatchLink } from '@trpc/client'
import { TrpcRouter } from '@ideanick/backend/src/trpc'

export const trpc = createTRPCReact<TrpcRouter>()

export const trpcClient = trpc.createClient({
  links: [
    httpBatchLink({
      url: 'http://localhost:5000/trpc',
    }),
  ],
})
