import Title from "@/components/text/Title";
import {StarIcon} from "@heroicons/react/24/solid";
import React from "react";
import Collection from "@/components/image/collection/Collection";


export default async function Index() {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      {/* widthを変更する場合は`max-w-3xl`を変更してください */}
      <div className="mx-auto mt-2">
        <Title text={"お気に入り"} icon={
          <StarIcon className="-ml-0.5 h-5 w-5 text-yellow-400" aria-hidden="true"/>
        }/>

        <Collection/>

      </div>
    </div>
  )
}
