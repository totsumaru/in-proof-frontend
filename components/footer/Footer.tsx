const navigation = {
  main: [
    { name: "TOPページ", href: "/" },
    { name: "会社概要", href: "#" },
    { name: "利用規約", href: "#" },
    { name: "特定商取引法に関する表示", href: "#" },
    { name: "お問い合わせ", href: "#" },
  ],
}

export default function Footer() {
  return (
    <footer className="mx-auto max-w-7xl overflow-hidden px-6 py-20 sm:py-24 lg:px-8">
      <nav className="-mb-6 columns-2 sm:flex sm:justify-center sm:space-x-12" aria-label="Footer">
        {navigation.main.map((item) => (
          <div key={item.name} className="pb-6">
            <a href={item.href} className="text-sm leading-6 text-gray-600 hover:text-gray-900">
              {item.name}
            </a>
          </div>
        ))}
      </nav>
      <p className="mt-10 text-center text-xs leading-5 text-gray-500">
        &copy; ArGate, Inc. All rights reserved.
      </p>
    </footer>
  )
}
