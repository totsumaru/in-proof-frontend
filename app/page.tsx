import Title from "@/components/text/Title";
import {StarIcon} from "@heroicons/react/24/solid";
import React from "react";
import DynamicImageBox from "@/components/image/DynamicImageBox";

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

export default async function Index() {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      {/* widthを変更する場合は`max-w-3xl`を変更してください */}
      <div className="mx-auto mt-2">
        <Title text={"お気に入り"} icon={
          <StarIcon className="-ml-0.5 h-5 w-5 text-yellow-400" aria-hidden="true"/>
        }/>

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
                </div>
              ))}
            </div>
          ))}
        </div>

      </div>
    </div>
  )
}
