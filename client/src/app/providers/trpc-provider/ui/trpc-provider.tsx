import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { useState } from 'react'
import { trpc, trpcClient } from '@/shared/api/trpc-api'

export function TrpcProvider({ children }: { children: React.ReactNode }) {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            refetchOnWindowFocus: false,
            retry: false,
          },
        },
      })
  )

  return (
    <trpc.Provider client={trpcClient} queryClient={queryClient}>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </trpc.Provider>
  )
}

// export default [
//   ...standartConfig,
//   {
//     parserOptions: {
//       project: ['./tsconfig.app.json'],
//       tsconfigRootDir: import.meta.dirname,
//     },
//     plugins: {
//       'react-hooks': reactHooks,
//       'react-refresh': reactRefresh,
//     },
//     rules: {
//       ...reactHooks.configs.recommended.rules,
//       'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
//     },
//     overrides: [
//       {
//         files: ['./vite.config.ts'],
//         parserOptions: {
//           project: './tsconfig.node.json',
//         },
//       },
//     ],
//   },
// ]
