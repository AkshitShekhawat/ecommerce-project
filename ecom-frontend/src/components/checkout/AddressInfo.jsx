import React, { useState } from "react";
import Skeleton from "../shared/Skeleton";
import { FaAddressBook, FaPlus, FaTrash } from "react-icons/fa";
import AddressInfoModal from "./AddressInfoModal";
import AddAddressForm from "./AddAddressForm";
import { useDispatch, useSelector } from "react-redux";
import AddressList from "./AddressList";
import DeleteModal from "./DeleteModal";
import toast from "react-hot-toast";
import { deleteUserAddress } from "../../store/actions";

const AddressInfo = ({ address }) => {
  const [openAddressModal, setOpenAddressModal] = useState(false);
  const [openDeleteModal, setOpenDeleteModal] = useState(false);
  const [selectedAddress, setSelectedAddress] = useState("");

  const dispatch = useDispatch();
  const { isLoading, btnLoader } = useSelector((state) => state.errors);

  const addNewAddressHandler = () => {
    setSelectedAddress("");
    setOpenAddressModal(true);
  };

  const deleteAddressHandler = () => {
    dispatch(
      deleteUserAddress(toast, selectedAddress?.addressId, setOpenDeleteModal)
    );
  };

  const noAddressExist = !address || address.length === 0;

  return (
    <div className="pt-6 px-4 mb-15">
      {noAddressExist ? (
        <div className="p-8 bg-white shadow-md rounded-2xl max-w-lg mx-auto flex flex-col items-center justify-center text-center">
          <FaAddressBook size={60} className="text-gray-400 mb-5" />
          <h1 className="mb-2 text-gray-900 font-bold text-2xl">
            No Address Added Yet
          </h1>
          <p className="mb-6 text-gray-600">
            Add your address to continue with your purchase.
          </p>

          <button
            onClick={addNewAddressHandler}
            className="flex items-center gap-2 px-5 py-2.5 bg-blue-600 text-white font-semibold rounded-xl shadow hover:bg-blue-700 transition-all"
          >
            <FaPlus size={14} /> Add Address
          </button>
        </div>
      ) : (
        <div className="relative bg-white shadow-md rounded-2xl p-6 max-w-lg mx-auto">
          <h1 className="text-gray-900 text-center font-bold text-2xl mb-4">
            Select Address
          </h1>
          {isLoading ? (
            <div className="py-6">
              <Skeleton />
            </div>
          ) : (
            <>
              <div className="space-y-4 pt-4">
                <AddressList
                  addresses={address}
                  setSelectedAddress={setSelectedAddress}
                  setOpenAddressModal={setOpenAddressModal}
                  setOpenDeleteModal={setOpenDeleteModal}
                />
              </div>
              <div className="mt-4 flex justify-center items-center">
                    <button
                        onClick={addNewAddressHandler}
                        className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white font-medium rounded-lg shadow hover:bg-blue-700 transition-all"
                    >
                        <FaPlus size={14} /> Add New Address
                    </button>
                </div>


            </>
          )}
        </div>
      )}

      {/* Add / Edit Address Modal */}
      <AddressInfoModal open={openAddressModal} setOpen={setOpenAddressModal}>
        <AddAddressForm
          address={selectedAddress}
          setOpenAddressModal={setOpenAddressModal}
        />
      </AddressInfoModal>

      {/* Delete Confirmation Modal */}
      <DeleteModal
        open={openDeleteModal}
        loader={btnLoader}
        setOpen={setOpenDeleteModal}
        title="Delete Address"
        onDeleteHandler={deleteAddressHandler}
      />
    </div>
  );
};

export default AddressInfo;
