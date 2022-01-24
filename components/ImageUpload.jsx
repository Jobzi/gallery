export default function ImageToUpload (
  { src = { url: 'https://via.placeholder.com/150', legend: 'none' }, index, setTimeLine, setIsEdited, showModal }
) {
  const { url, legend } = src
  return (
    <div className="relative">
      <div className="m-1 hover:scale-105 hover:m-2">
      <span className="absolute top-1 right-1">
        <button className="bg-red-500 rounded-full hover:bg-red-400" onClick={showModal}>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" className="bi bi-x" viewBox="0 0 16 16">
            <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
          </svg>
        </button>
      </span>
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
                        setIsEdited(true)
                        setTimeLine(prev => {
                          prev[index].legend = e.target.value
                          return [...prev]
                        })
                      }}
                      />
              </div>
          </div>
      </div>
    </div>
  )
}
