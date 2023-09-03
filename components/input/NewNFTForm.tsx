"use client"

import { PhotoIcon } from "@heroicons/react/24/solid";
import React, { Fragment, useState } from "react";
import { Listbox, Transition } from '@headlessui/react'
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/24/outline";

const allowedTypes = ['image/png', 'image/jpeg', 'image/svg+xml', 'image/gif'];

const list = [
  { name: "研修A" },
  { name: "研修B" },
  { name: "研修C" },
  { name: "研修D" },
  { name: "研修E" },
]

export default function Example() {
  const [image, setImage] = useState<string>("")
  const [title, setTitle] = useState<string>("")
  const [description, setDescription] = useState<string>("")
  const [tags, setTags] = useState<{ id: number, name: string }[]>()
  const [isImageErr, setImageErr] = useState<boolean>(false)

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setImageErr(false)
    const file = e.target.files?.[0];
    if (file) {
      if (!allowedTypes.includes(file.type)) {
        setImageErr(true)
        return
      }

      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result as string);
        console.log(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="pb-20">
      <form className="mt-5 bg-white shadow-lg ring-1 ring-gray-900/5 sm:rounded-xl md:col-span-2">
        <div className="px-4 py-6 sm:p-8">
          <p className="text-sm text-gray-600">
            新規アイテムを作成します。<br/>
            作成したあと、<b>誰かに配布する前であれば</b>削除できます。
          </p>

          <div className="grid mt-5 max-w-2xl grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">

            {/* 画像 */}
            <div className="col-span-full">
              <label htmlFor="cover-photo" className="block text-sm font-medium leading-6 text-gray-900">
                画像
              </label>
              <div className="mt-2">
                {/* Input */}
                <label htmlFor="dropzone-file"
                       className="flex flex-col bg-cover items-center justify-center h-64 w-64 border-2 ring-gray-300 rounded-lg cursor-pointer hover:bg-gray-100"
                       style={{ backgroundImage: `url(${image})` }}
                >
                  <div className="flex flex-col items-center justify-center p-5 bg-gray-50 bg-opacity-80">
                    <PhotoIcon className="mx-auto h-12 w-12 text-gray-300" aria-hidden="true"/>
                    <p className="my-2 text-sm text-gray-900">
                      クリックして画像をアップロードしてください。
                    </p>
                    <p className="mt-2 text-xs text-gray-900">
                      SVG, PNG, JPG, GIF(MAX. 800x400px)
                    </p>
                  </div>
                  <input
                    id="dropzone-file"
                    type="file"
                    className="hidden"
                    onChange={handleImageChange}
                    accept={allowedTypes.join(", ")}
                  />
                </label>
                {isImageErr && (
                  <p className="text-red-500 text-sm font-bold">
                    svg,png,jpg,gif以外の画像は選択できません。
                  </p>
                )}
              </div>
            </div>

            {/* タイトル */}
            <div className="sm:col-span-4">
              <label htmlFor="website" className="block text-sm font-medium leading-6 text-gray-900">
                タイトル
              </label>
              <div className="mt-2">
                <div
                  className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                  <input
                    type="text"
                    name="website"
                    id="website"
                    className="pl-3 block flex-1 border-0 bg-transparent py-1.5 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
            </div>

            {/* 説明 */}
            <div className="col-span-full">
              <label htmlFor="about" className="block text-sm font-medium leading-6 text-gray-900">
                説明
              </label>
              <div className="mt-2">
                  <textarea
                    id="about"
                    name="about"
                    rows={3}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    defaultValue={''}
                  />
              </div>
              <p className="mt-3 text-sm leading-6 text-gray-600">Write a few sentences about yourself.</p>
            </div>

            {/* タグ */}
            <div className="col-span-full">
              <label htmlFor="about" className="block text-sm font-medium leading-6 text-gray-900">
                タグを選択
              </label>

              <div className="mt-2">
                <Listbox value={tags} onChange={setTags} multiple>
                  <div className="relative mt-1">

                    {/* 選択ボタン */}
                    <Listbox.Button
                      className="relative w-full cursor-default rounded-lg bg-white py-2 pl-3 pr-10 text-left sm:text-sm h-10 border border-gray-300">
                      <span className="block truncate">
                        {tags && tags.map((select) => select.name).join(', ')}
                      </span>
                      <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                        <ChevronUpDownIcon className="h-5 w-5 text-gray-400" aria-hidden="true"/>
                      </span>
                    </Listbox.Button>

                    <Transition
                      as={Fragment}
                      leave="transition ease-in duration-100"
                      leaveFrom="opacity-100"
                      leaveTo="opacity-0"
                    >
                      <Listbox.Options
                        className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg
                           ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm"
                      >
                        {list.map((person, personIdx) => (
                          <Listbox.Option
                            key={personIdx}
                            className={({ active }) => `relative cursor-default select-none py-2 pl-10 pr-4
                               ${active ? 'bg-amber-100 text-amber-900' : 'text-gray-900'
                            }`}
                            value={person}
                          >
                            {({ selected }) => (
                              <>
                                <span className={`block truncate ${selected ? 'font-medium' : 'font-normal'}`}>
                                  {person.name}
                                </span>
                                {selected ? (
                                  <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
                                    <CheckIcon className="h-5 w-5" aria-hidden="true"/>
                                  </span>
                                ) : null}
                              </>
                            )}
                          </Listbox.Option>
                        ))}
                      </Listbox.Options>
                    </Transition>

                  </div>
                </Listbox>
              </div>
              <p className="mt-3 text-sm leading-6 text-gray-600">Write a few sentences about yourself.</p>
            </div>

          </div>
        </div>
        <div className="flex items-center justify-end gap-x-6 border-t border-gray-900/10 px-4 py-4 sm:px-8">
          <button
            type="submit"
            className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            アイテムを作成
          </button>
        </div>
      </form>
    </div>
  )
}
