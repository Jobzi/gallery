export default function ImageToUpload ({ src = 'https://via.placeholder.com/150', legend }) {
  return (
    <div className="m-1 hover:scale-105 hover:m-2">
        <div className="bg-slate-50 shadow-md">
            <div className="p-3 border-1">
                <img
                    className="w-60 fit"
                    src={src}
                    alt={legend}
                />
            </div>
            <div className="p-2">
                <input type="text"
                    className="rounded w-full p-1 text-center font-licorice"
                placeholder="Say Hello" />
            </div>
        </div>
    </div>
  )
}
