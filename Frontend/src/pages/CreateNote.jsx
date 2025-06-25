import { ArrowLeftIcon } from "lucide-react";
import React, { useState } from "react";
import toast from "react-hot-toast";
import axiosInstance from '../Utils/axios.js'
import { Link, useNavigate } from "react-router";

export default function CreateNote() {
  const [title, settitle] = useState("");
  const [content, setContent] = useState("");
  const [loading ,setloading] = useState(false);

  const navigater = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if(!title.trim() || !content.trim()) {
      toast.error("Please fill both the Feilds")
      return;
    }
    setloading(true);
    try {
      const resp = await axiosInstance.post('/notes', {
        title, content
      });
      toast.success("Added Note Successfully");
      navigater("/");
    } catch (e) {
      console.log(e);
      if(e.response.status !== 429) toast.error("Failed to Add Note")
        else toast.error("Please wait a few seconds before creating another note!")
    } finally {
      setloading(false);
    }
  }

  return <div className="min-h-screen bg-base-200" >
    <div className="container mx-auto px-4 py-8" >
      <div className="max-w-2xl mx-auto">
        <Link to={'/'}  className="btn btn-ghost mb-6 rounded-3xl " > <ArrowLeftIcon/> Back to Notes</Link>
        <div className="card bg-base-100" >
          <div className="card-body " > 
            <h2 className="card-title text-2xl mb-4" >Create New Note</h2>
            <form onSubmit={ (e) => handleSubmit(e)}>
              <div className="form-control mb-4" >
                <label className="label-text ">Title</label>
                <input type="text" value={title} onChange={(e) => settitle(e.target.value)} placeholder="Enter the title of the note" className="input input-bordered" />
              </div>
              <div className="form-control mb-4" >
                <label className="label-text ">Content</label>
                <textarea type="text" value={content} onChange={(e) => setContent(e.target.value)} placeholder="Enter the content of the note" className="textarea textarea-bordered h-32" />
              </div>
              <div className="card-actions justify-end">
                <button type="submit" disabled={loading} className="btn btn-primary" >{loading ? "Creating..."  : "Add Note"}</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>; 
}
