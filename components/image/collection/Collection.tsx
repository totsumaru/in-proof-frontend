import DynamicImageBox from "@/components/image/image-box/DynamicImageBox";
import Link from "next/link";
import {ChevronDoubleRightIcon} from "@heroicons/react/24/solid";

const collections: { [key: string]: { image: string, name: string }[] }[] = [
  {
    "MIRAKO.": [
      {
        image: "https://i.seadn.io/gcs/files/92e9fd146e8c4bb8bf8f928f5ba0c18e.jpg?auto=format&dpr=1&w=384",
        name: "MIRAKO. season1",
      }, {
        image: "https://i.seadn.io/gcs/files/92e9fd146e8c4bb8bf8f928f5ba0c18e.jpg?auto=format&dpr=1&w=384",
        name: "MIRAKO. season1",
      }, {
        image: "https://i.seadn.io/gcs/files/92e9fd146e8c4bb8bf8f928f5ba0c18e.jpg?auto=format&dpr=1&w=384",
        name: "MIRAKO. season1",
      }, {
        image: "https://i.seadn.io/gcs/files/92e9fd146e8c4bb8bf8f928f5ba0c18e.jpg?auto=format&dpr=1&w=384",
        name: "MIRAKO. season1",
      },
    ]
  }, {
    "MIRAKO.": [
      {
        image: "https://i.seadn.io/gcs/files/92e9fd146e8c4bb8bf8f928f5ba0c18e.jpg?auto=format&dpr=1&w=384",
        name: "MIRAKO. season1",
      }, {
        image: "https://i.seadn.io/gcs/files/92e9fd146e8c4bb8bf8f928f5ba0c18e.jpg?auto=format&dpr=1&w=384",
        name: "MIRAKO. season1",
      },
    ]
  }
];

export default function Collection() {
  return (
    <div className="mt-2">
      {/* 1コレクションずつ */}
      {collections.map((collection, index) => (
          <div key={index} className="mb-4">
            {Object.keys(collection).map((key) => (
              <div key={key}>
                {/* コレクション名 */}
                <h2 className="text-lg text-gray-900 font-bold border-b">
                  {key}
                </h2>
                {/* 画像 */}
                <div
                  role="list"
                  className="mt-2 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6"
                >
                  {collection[key].map(({image, name}, index) => (
                    <DynamicImageBox key={index} imageUrl={image} text={name}/>
                  ))}
                </div>
                <div className="flex justify-end items-center mt-2 text-blue-600 font-bold">
                  <Link href="#">{key}</Link>
                  <ChevronDoubleRightIcon className="h-5 w-5"/>
                </div>
              </div>
            ))}
          </div>
        )
      )}
    </div>
  )
}