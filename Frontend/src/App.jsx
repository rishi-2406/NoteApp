import { Routes, Route } from "react-router";
import Home from "./pages/Home";
import CreateNote from "./pages/CreateNote";
import NoteDetail from "./pages/NoteDetail";
import toast from "react-hot-toast";

export default function App() {
  return (
    <>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add" element={<CreateNote />} />
          <Route path="/note/:id" element={<NoteDetail />} />
        </Routes>
      </div>
    </>
  );
}
