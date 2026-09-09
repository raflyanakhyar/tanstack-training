import { Outlet, createRootRoute, HeadContent } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'

import appCss from '../styles/styles.css?url'

export const Route = createRootRoute({
  component: RootComponent,
    head: () => ({
    meta: [
            {
        charSet: 'utf-8',
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1',
      },
    ],
    links: [{ rel: 'stylesheet', href: appCss }],
    // other head config
  }),

})

function RootComponent() {
  return (
    <html>
      <head>
        <HeadContent />
      </head>
      <Outlet />
      <TanStackRouterDevtools position="bottom-right" />
    </html>
  )
}