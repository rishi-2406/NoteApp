import { use, useEffect, useState } from "react";
import Navbar from "../Components/Navbar";
import RateLimited from "../Components/RateLimited";
import Notes from "../Components/Notes";
import axiosInstance from "../Utils/axios.js";
import toast from "react-hot-toast";
import NoteCard from "../Components/NoteCard";
import NoNotes from "../Components/NoNotes.jsx";
import { LoaderIcon } from "lucide-react";

export default function Home() {
  const [islimited, setlimited] = useState(false);
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(false);

  console.log(notes);

  useEffect(() => {
    const fetchNotes = async () => {
      try {
        setLoading(true);
        const response = await axiosInstance.get("/notes");
        setNotes(response.data);
      } catch (err) {
        console.log("error", err);
        if (err.response?.status === 429) setlimited(true);
        else toast.error("Failed to load notes");
      } finally {
        setLoading(false);
      }
    };
    fetchNotes();
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      {islimited && <RateLimited />}

      <div className="max-w-7xl mx-auto p-4 mt-6">
        {loading && (
          <div className="min-h-screen flex flex-col items-center justify-center">
            <LoaderIcon className="animate-spin size-10" />
          </div>
        )}
        {notes.length === 0 && !islimited && !loading && <NoNotes />}
        {notes.length > 0 && !islimited && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {notes.map((note) => (
              <NoteCard key={note._id} note={note} setNotes={setNotes} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
