import React from 'react';
import { FaCircleExclamation } from "react-icons/fa6";

const CartModal = ({ item, onConfirm, onCancel }) => {
  return ( 
    <div className="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">
      <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true"></div>
      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <div className="relative transform overflow-hidden bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
            <div className="bg-white dark:bg-zinc-900 px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
              <div className="sm:flex sm:items-start">
                <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                  <FaCircleExclamation className='text-red-600'/>
                </div>
                <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                  <h3 className="text-base font-semibold leading-6 text-gray-900 dark:text-gray-200" id="modal-title">Remove item</h3>
                  <div className="mt-2">
                    <p className="text-sm text-gray-500 dark:text-gray-400">This will remove your item from the cart, do you wish to proceed?</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 dark:bg-zinc-800 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
              <button 
                onClick={() => onConfirm(item)} 
                type="button" 
                className="inline-flex w-full justify-center bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 transition sm:ml-3 sm:w-auto">
                Confirm
              </button>
              <button
                onClick={() => onCancel(item)}
                type="button"
                className="mt-3 inline-flex w-full justify-center bg-white dark:bg-gray-200 px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto">
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};

export default CartModal;
