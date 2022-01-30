
import 'react-confirm-alert/src/react-confirm-alert.css'

export default function Modal ({ title = 'title', description, labelToSave = 'Save Changes', handleSave, handleClose }) {
  return (
     <>
        <div className="custom-ui">
            <h3 className="text-2xl font-semibold">
                {title}
            </h3>
            <p className='text-xl mb-2' >{description}</p>
            <button
                className="bg-emerald-400 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
                onClick={handleSave}
                >
                {labelToSave}
            </button>
            <button
                className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
                onClick={handleClose}
                >
            Close
            </button>
        </div>
     </>
  )
}
