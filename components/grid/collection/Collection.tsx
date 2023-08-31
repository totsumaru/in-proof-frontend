import CardWithSkeleton from "@/components/card/CardWithSkeleton";

const collections: {
  [key: string]: {
    image: string,
    name: string,
    text: string,
    tag: string,
    tokenId: number
  }[]
}[] = [
  {
    "MIRAKO.": [
      {
        image: "https://i.seadn.io/gcs/files/92e9fd146e8c4bb8bf8f928f5ba0c18e.jpg?auto=format&dpr=1&w=384",
        name: "MIRAKO. season1",
        text: "研修に参加した人に配布されるNFTです。",
        tag: "研修",
        tokenId: 0,
      }, {
        image: "https://i.seadn.io/gcs/files/92e9fd146e8c4bb8bf8f928f5ba0c18e.jpg?auto=format&dpr=1&w=384",
        name: "MIRAKO. season1",
        text: "研修に参加した人に配布されるNFTです。",
        tag: "研修",
        tokenId: 1,
      }, {
        image: "https://i.seadn.io/gcs/files/92e9fd146e8c4bb8bf8f928f5ba0c18e.jpg?auto=format&dpr=1&w=384",
        name: "MIRAKO. season1",
        text: "研修に参加した人に配布されるNFTです。",
        tag: "研修",
        tokenId: 2,
      }, {
        image: "https://i.seadn.io/gcs/files/92e9fd146e8c4bb8bf8f928f5ba0c18e.jpg?auto=format&dpr=1&w=384",
        name: "MIRAKO. season1",
        text: "研修に参加した人に配布されるNFTです。",
        tag: "研修",
        tokenId: 3,
      }, {
        image: "https://i.seadn.io/gcs/files/92e9fd146e8c4bb8bf8f928f5ba0c18e.jpg?auto=format&dpr=1&w=384",
        name: "MIRAKO. season1",
        text: "研修に参加した人に配布されるNFTです。",
        tag: "研修",
        tokenId: 4,
      }, {
        image: "https://i.seadn.io/gcs/files/92e9fd146e8c4bb8bf8f928f5ba0c18e.jpg?auto=format&dpr=1&w=384",
        name: "MIRAKO. season1",
        text: "研修に参加した人に配布されるNFTです。",
        tag: "研修",
        tokenId: 5,
      }, {
        image: "https://i.seadn.io/gcs/files/92e9fd146e8c4bb8bf8f928f5ba0c18e.jpg?auto=format&dpr=1&w=384",
        name: "MIRAKO. season1",
        text: "研修に参加した人に配布されるNFTです。",
        tag: "研修",
        tokenId: 6,
      },
    ]
  }
];

type Props = {
  slug: string
}

export default function Collection({ slug }: Props) {
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
                  className="mt-2 grid grid-cols-2 gap-4 gap-y-8 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6"
                >
                  {collection[key].map(({ image, name, text, tag, tokenId }, index) => (
                    <CardWithSkeleton
                      key={index}
                      imageUrl={image}
                      title={name}
                      text={text}
                      tag={tag}
                      slug={slug}
                      tokenId={tokenId}
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