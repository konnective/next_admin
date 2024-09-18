'use client';

import Link from 'next/link';

export default function AddBlog() {
  const handleBack = () => {
    window.history.back();
  };
  return (
    <div>
      <form className="w-4/5 m-3 mx-auto" enctype="multipart/form-data">
        <div className="input_container flex space-x-4">
          <div className="flex-1 ">
            <label for="company" className="block float-left text-lg mb-2">
              Title
            </label>
            <input
              type="text"
              className="border border-gray-200 rounded p-2 w-full"
              name="name"
              value=""
            />
          </div>
          <div className="flex-1">
            <label for="company" className="block float-left text-lg mb-2">
              Points
            </label>
            <input
              type="number"
              className="border border-gray-200 rounded p-2 w-full"
              name="cycles"
              value=""
            />
          </div>
        </div>
        <div className="m-3">
          <input
            type="file"
            className="border border-gray-200 rounded p-2 "
            name="image"
          />
        </div>
        <div className="mb-6">
          <label for="subtitle" className="inline-block text-lg mb-2">
            Description
          </label>
          <textarea
            id="description"
            className="border border-gray-200 rounded p-2 w-full"
            name="description"
          ></textarea>
        </div>
        <div className="mb-6"></div>
        <div className="mb-6">
          <button className="bg-blue-500 text-white rounded py-2 px-4 hover:bg-black">
            Submit
          </button>
          <Link
            href="#"
            className="text-black ml-4"
            onClick={(e) => {
              e.preventDefault();
              window.history.back();
            }}
          >
            Back
          </Link>
        </div>
      </form>
    </div>
  );
}
