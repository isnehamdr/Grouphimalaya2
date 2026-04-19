import React from 'react'
import { MdClose } from 'react-icons/md'
const DeletionDialog = ({showDeleteDialog, setShowDeleteDialog, handleDelete}) => {
  return (
    <div className={`fixed  top-0 left-0 w-full h-full bg-black/20 backdrop-blur-sm ${showDeleteDialog ? 'scale-100' : 'scale-0'} flex justify-center items-center z-[370]`}>
        <div className='w-full rounded-md max-w-[450px] p-6 relative flex flex-col bg-white'>
            <button className='absolute top-3 right-3 ' onClick={()=>setShowDeleteDialog(false)}><MdClose/></button>
            <p className='text-2xl'>Confirm Delete?</p>
            <div className='flex gap-2 mt-12 ml-auto'>
                <button onClick={()=>setShowDeleteDialog(false)} className='py-1.5 px-3 rounded-md bg-gray-200 hover:bg-gray-100 transition-all duration-300 text-black'>Cancel</button>
                <button onClick={()=>handleDelete()} className='py-1.5 px-3 rounded-md bg-red-500 text-white hover:bg-red-400 transition-all duration-300'>Confirm</button>
            </div>
        </div>
    </div>
  )
}

export default DeletionDialog