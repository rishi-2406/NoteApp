import { ArrowLeftIcon, LoaderIcon, Trash2Icon } from "lucide-react";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import axiosInstance from "../Utils/axios.js";
import { Link, useNavigate, useParams } from "react-router";

export default function CreateNote() {
  const [title, settitle] = useState("");
  const [content, setContent] = useState("");
  const [saving, setsaving] = useState(false);
  const [loading, setloading] = useState(false);

  const { id } = useParams();
  const navigater = useNavigate();

  useEffect(() => {
    const singleFetcher = async () => {
      try {
        setloading(true);
        const response = await axiosInstance.get(`/notes/${id}`);
        const data = response.data;
        console.log(data);
        settitle(data.title);
        setContent(data.content);
      } catch (e) {
        console.log(e);
      } finally {
        setloading(false);
      }
    };
    singleFetcher();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title.trim() || !content.trim()) {
      toast.error("Please fill both the Feilds");
      return;
    }
    setloading(true);
    try {
      const resp = await axiosInstance.put(`/notes/${id}`, {
        title,
        content,
      });
      toast.success("Editied Note Successfully");
      navigater("/");
    } catch (e) {
      console.log(e);
      if (e.response.status !== 429) toast.error("Failed to Edit Note");
      else
        toast.error("Please wait a few seconds before creating another note!");
    } finally {
      setloading(false);
    }
  };

    const handleDelete = async (e) => {
    e.preventDefault(); // so no nav. to edit page
      try {
        const response = await axiosInstance.delete(`/notes/${id}`);
        toast.success("Note Deleted Successfully");
        navigater('/');
      } catch (e) {
        toast.error("Failed to Delete Note")
      } 
  }

  return loading ? (
    <div className="min-h-screen bg-base-200 flex items-center justify-center" >
      <LoaderIcon className="animate-spin size-10" />
    </div>
  ) : (
    <div className="min-h-screen bg-base-200">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto">
          <Link to={"/"} className="btn btn-ghost mb-6 rounded-3xl ">
            {" "}
            <ArrowLeftIcon /> Back to Notes
          </Link>
          <div className="card bg-base-100">
            <div className="card-body ">
              <div className="flex flex-row justify-between" >
                <h2 className="card-title text-2xl mb-4">Edit Note</h2>
                <button onClick={(e)=> handleDelete(e)} className="btn btn-error btn-outline" ><Trash2Icon className="size-6" /> Delete Note </button>
              </div>
              <form onSubmit={(e) => handleSubmit(e)}>
                <div className="form-control mb-4">
                  <label className="label-text ">Title</label>
                  <input
                    type="text"
                    value={title}
                    onChange={(e) => settitle(e.target.value)}
                    placeholder="Enter the title of the note"
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control mb-4">
                  <label className="label-text ">Content</label>
                  <textarea
                    type="text"
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    placeholder="Enter the content of the note"
                    className="textarea textarea-bordered h-32"
                  />
                </div>
                <div className="card-actions justify-end">
                  <button
                    type="submit"
                    disabled={saving}
                    className="btn btn-primary"
                  >
                    {saving ? "Saving..." : "Save Changes"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
