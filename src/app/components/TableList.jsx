import Link from 'next/link';

const TableList = ({ data }) => {
  return (
    <div className="relative overflow-x-auto m-3">
      <Link href="/add-blog">
        <button className="bg-blue-500 float-right text-white py-2 px-4 rounded-md my-4">
          Add Blog
        </button>
      </Link>

      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              Product name
            </th>
            <th scope="col" className="px-6 py-3">
              Color
            </th>
            <th scope="col" className="px-6 py-3">
              Category
            </th>
            <th scope="col" className="px-6 py-3">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr
              key={item.id}
              className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
            >
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                {item?.title}
              </th>
              <td className="px-6 py-4">{item?.author}</td>
              <td className="px-6 py-4">{item?.topic}</td>
              <td className="px-6 py-4">
                <button className="bg-green-500 text-white py-2 px-4 content-evenly rounded-md my-4">
                  Edit Blog
                </button>
                <button className="bg-red-500 text-white mx-2 py-2 px-4 content-evenly rounded-md my-4">
                  Delete Blog
                </button>
              </td>
            </tr>
          ))}

          {/* <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
            <th
              scope="row"
              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              Microsoft Surface Pro
            </th>
            <td className="px-6 py-4">White</td>
            <td className="px-6 py-4">Laptop PC</td>
            <td className="px-6 py-4">$1999</td>
          </tr>
          <tr className="bg-white dark:bg-gray-800">
            <th
              scope="row"
              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              Magic Mouse 2
            </th>
            <td className="px-6 py-4">Black</td>
            <td className="px-6 py-4">Accessories</td>
            <td className="px-6 py-4">$99</td>
          </tr> */}
        </tbody>
      </table>
    </div>
  );
};

export default TableList;
