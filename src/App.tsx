import { useState } from "react";
import "./App.css";
import { ToDoSummary } from "./ToDoSummary";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";

function App() {
  const [summary, setSummary] = useState<ToDoSummary>({
    totalTodos: 0,
    completedTodos: 0,
    uncompletedTodos: 0,
  });

  async function FetchSummary() {
    try {
      const response = await fetch(
        "https://localhost:44321/ToDo/GetToDoSummary"
      );
      const data = await response.json();

      setSummary(data);
      toast.success(`To Do Summary Updated`);
    } catch (error) {
      toast.error(`Error To Do Summary`);
    }
  }

  return (
    <>
      <ToastContainer autoClose={2000} />
      <div className="flex rounded overflow-hidden shadow-lg bg-white h-52 w-92">
        <div className="px-6 py-10 ">
          <div className="flex justify-center">
            <div className="block py-5">
              <span className="bg-gray-200 rounded-full px-3 py-1 text-lg font-semibold text-gray-700 mr-2 mb-2">
                Total
              </span>
              <span className=" block px-3 py-1 text-md font-semibold text-black mr-2 mb-2">
                {summary.totalTodos}
              </span>
            </div>

            <div className="block  py-5">
              <span className=" bg-gray-200 rounded-full px-3 py-1 text-lg font-semibold text-gray-700 mr-2 mb-2">
                Completed
              </span>
              <span className="block px-3 py-1 text-md font-semibold text-black mr-2 mb-2">
                {" "}
                {summary.completedTodos}
              </span>
            </div>

            <div className="block py-5">
              <span className=" bg-gray-200 rounded-full px-3 py-1 text-lg font-semibold text-gray-700 mr-2 mb-2">
                Uncompleted
              </span>
              <span className=" block px-3 py-1 text-md font-semibold text-black mr-2">
                {" "}
                {summary.uncompletedTodos}
              </span>
            </div>
          </div>

          <button
            className=" flex justify-end text-lg bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={FetchSummary}
          >
            Summary
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
