
import { RouterProvider } from "react-router-dom"

import { TheRouter } from "./routes/router"
import { ContextProvider } from "./store/store_context"

function App() {

  return (
    <ContextProvider>
    <RouterProvider router={TheRouter} />
    </ContextProvider>
  )
}

export default App
