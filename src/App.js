import { Toaster } from "react-hot-toast";
import { RouterProvider } from "react-router-dom";
import { router } from "./Router/Router";

function App() {
  return (
    <div className="bg-gray-200 overflow-x-hidden">
      <RouterProvider router={router}/>
      <Toaster />
    </div>
  );
}

export default App;
