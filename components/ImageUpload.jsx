export default function ImageToUpload ({ src = { url: 'https://via.placeholder.com/150', legend: 'none' }, index, setTimeLine }) {
  const { url, legend } = src
  return (
    <div className="m-1 hover:scale-105 hover:m-2">
        <div className="bg-slate-50 shadow-md">
            <div className="p-3 border-1">
                <img
                    className="w-60 fit"
                    src={url}
                    alt={legend}
                />
                  {/* <Image src={url} alt={legend} width={450} height={300} layout='fixed' blurDataURL={url} placeholder='blur'/> */}
            </div>
            <div className="p-2">
                <input
                    type="text"
                    className="rounded w-full p-1 text-center font-licorice"
                    placeholder="Say Hello"
                    value={legend}
                    onChange={(e) => {
                      setTimeLine(prev => {
                        prev[index].legend = e.target.value
                        return [...prev]
                      })
                    }}
                    />
            </div>
        </div>
    </div>
  )
}
