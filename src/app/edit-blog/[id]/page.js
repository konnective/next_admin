'use client';
import apiConfig from '@/utils/config';
import axios from 'axios';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function EditBlog({ params }) {
  // const url = apiConfig.apiUrl + `blogs/view/${params.id}`;
  // let data = await fetch(url);
  // let posts = await data.json();
  // let blog = posts.data;
  // console.log(posts.data);

  const [profile, setProfile] = useState({
    title: '',
    points: '',
    description: '',
  });

  useEffect(() => {
    const fetchData = async () => {
      const url = apiConfig.apiUrl + `blogs/view/${params.id}`;
      try {
        const response = await axios.get(url);
        setProfile(response.data?.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
    console.log(profile);
  }, []);

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
              value={profile.title || 'empty'}
              onChange={(event) =>
                setProfile({ ...profile, title: event.target.value })
              }
            />
          </div>
          <div className="flex-1">
            <label for="company" className="block float-left text-lg mb-2">
              Topic
            </label>
            <input
              type="number"
              className="border border-gray-200 rounded p-2 w-full"
              name="topic"
              value={profile.topic || 'empty'}
              onChange={(event) =>
                setProfile({ ...profile, title: event.target.value })
              }
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
            defaultValue={profile.description}
            onChange={(event) =>
              setProfile({ ...profile, title: event.target.value })
            }
          ></textarea>
        </div>
        <div className="mb-6"></div>
        <div className="mb-6">
          <button className="bg-blue-500 text-white rounded py-2 px-4 hover:bg-black">
            Submit
          </button>
          <Link href="/" className="text-black ml-4">
            Back
          </Link>
        </div>
      </form>
    </div>
  );
}
