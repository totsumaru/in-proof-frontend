import DynamicImageBox from "@/components/image/image-box/DynamicImageBox";

const collections: {
  [key: string]: {
    image: string,
    name: string,
    text: string,
    tag: string,
  }[]
}[] = [
  {
    "MIRAKO.": [
      {
        image: "https://i.seadn.io/gcs/files/92e9fd146e8c4bb8bf8f928f5ba0c18e.jpg?auto=format&dpr=1&w=384",
        name: "MIRAKO. season1",
        text: "研修に参加した人に配布されるNFTです。",
        tag: "研修",
      }, {
        image: "https://i.seadn.io/gcs/files/92e9fd146e8c4bb8bf8f928f5ba0c18e.jpg?auto=format&dpr=1&w=384",
        name: "MIRAKO. season1",
        text: "研修に参加した人に配布されるNFTです。",
        tag: "研修",
      }, {
        image: "https://i.seadn.io/gcs/files/92e9fd146e8c4bb8bf8f928f5ba0c18e.jpg?auto=format&dpr=1&w=384",
        name: "MIRAKO. season1",
        text: "研修に参加した人に配布されるNFTです。",
        tag: "研修",
      }, {
        image: "https://i.seadn.io/gcs/files/92e9fd146e8c4bb8bf8f928f5ba0c18e.jpg?auto=format&dpr=1&w=384",
        name: "MIRAKO. season1",
        text: "研修に参加した人に配布されるNFTです。",
        tag: "研修",
      }, {
        image: "https://i.seadn.io/gcs/files/92e9fd146e8c4bb8bf8f928f5ba0c18e.jpg?auto=format&dpr=1&w=384",
        name: "MIRAKO. season1",
        text: "研修に参加した人に配布されるNFTです。",
        tag: "研修",
      }, {
        image: "https://i.seadn.io/gcs/files/92e9fd146e8c4bb8bf8f928f5ba0c18e.jpg?auto=format&dpr=1&w=384",
        name: "MIRAKO. season1",
        text: "研修に参加した人に配布されるNFTです。",
        tag: "研修",
      }, {
        image: "https://i.seadn.io/gcs/files/92e9fd146e8c4bb8bf8f928f5ba0c18e.jpg?auto=format&dpr=1&w=384",
        name: "MIRAKO. season1",
        text: "研修に参加した人に配布されるNFTです。",
        tag: "研修",
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
                {/* 画像 */}
                <div
                  role="list"
                  className="mt-2 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6"
                >
                  {collection[key].map(({ image, name, text, tag }, index) => (
                    <DynamicImageBox
                      key={index}
                      imageUrl={image}
                      title={name}
                      text={text}
                      tag={tag}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        )
      )}
    </div>
  )
}