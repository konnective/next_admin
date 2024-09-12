export default function AddBlog() {
  return (
    <div>
      <form class="w-4/5 m-3 mx-auto" enctype="multipart/form-data">
        <div class="input_container flex space-x-4">
          <div class="flex-1 ">
            <label for="company" class="block float-left text-lg mb-2">
              Title
            </label>
            <input
              type="text"
              class="border border-gray-200 rounded p-2 w-full"
              name="name"
              value=""
            />
          </div>
          <div class="flex-1">
            <label for="company" class="block float-left text-lg mb-2">
              Points
            </label>
            <input
              type="number"
              class="border border-gray-200 rounded p-2 w-full"
              name="cycles"
              value=""
            />
          </div>
        </div>
        <div class="mb-6">
          <input
            type="file"
            class="border border-gray-200 rounded p-2 "
            name="image"
          />
        </div>
        <div class="mb-6">
          <label for="subtitle" class="inline-block text-lg mb-2">
            Description
          </label>
          <textarea
            id="description"
            class="border border-gray-200 rounded p-2 w-full"
            name="description"
          ></textarea>
        </div>
        <div class="mb-6"></div>
        <div class="mb-6">
          <button class="bg-laravel text-white rounded py-2 px-4 hover:bg-black">
            Submit
          </button>

          <a href="" class="text-black ml-4">
            {' '}
            Back{' '}
          </a>
        </div>
      </form>
    </div>
  );
}
