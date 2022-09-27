import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { ModalAddVehicle, ModalUpdateVehicle } from "../components";
import { destroyVehicle, getVehicle, getVehicles, patchToFavorite, patchVehicle, postVehicle } from "../lib/api";
import { IVehicle, VehicleContextProps } from "../types/Vehicle";
import VehicleContext from "./VehicleContext";


const VehicleContextProvider = (props: VehicleContextProps) => {
    const [vehicles, setVehicles] = useState<IVehicle[]>([])
    const [selectedVehicle, setSelectedVehicle] = useState<IVehicle>({} as IVehicle)
    const [isOpenUpdateModal, setIsOpenUpdateModal] = useState(false)
    const [isOpenAddModal, setIsOpenAddModal] = useState(false)


    useEffect(() => {
        const fetchVehicles = async () => {
            const payload = await getVehicles()
            setVehicles(payload)
        }
        fetchVehicles()
    })

    function handleSelectedVehicle(id?: string) {
        const fetchVehicle = async () => {
            const payload = await getVehicle(id)
            setSelectedVehicle(payload)
            handleIsOpenUpdateModal()
        }
        fetchVehicle()
    }

    function setFavorite(id: any) {
        const fetchVehicleFavorite = async () => {
            return await patchToFavorite(id)
        }
        fetchVehicleFavorite()
        toast.dark('You just set your favorite vehicles', {onClose: () => setTimeout(() => window.location.reload(), 3000)})
    }

    function updateVehicle(data: IVehicle) {
        const fetchUpdateVehicle = async () => {
            return await patchVehicle({ ...data })
        }
        fetchUpdateVehicle()
        toast.dark('Vehicle updated with success', {onClose: () => setTimeout(() => window.location.reload(), 3000)})
    }

    function deleteVehicle(id: string){
        const fecthDeleteVehicle = async () => {
            return await destroyVehicle(id)
        }
        fecthDeleteVehicle()
        toast.dark('Vehicle deleted with success', {onClose: () => setTimeout(() => window.location.reload(), 3000)})
    }

    function createVehicle(data: IVehicle) {
        const fetchCreateVehicle = async () => {
            return await postVehicle({ ...data })
        }
        fetchCreateVehicle()
        toast.dark('Vehicle created with success', {onClose: () => setTimeout(() => window.location.reload(), 3000)})
    }

    function handleIsOpenUpdateModal() {
        setIsOpenUpdateModal(!isOpenUpdateModal)
    }

    function handleIsOpenAddModal() {
        setIsOpenAddModal(!isOpenAddModal)
    }

    return (
        <VehicleContext.Provider value={{
            vehicles,
            selectedVehicle,
            handleSelectedVehicle,
            isOpenAddModal,
            isOpenUpdateModal,
            handleIsOpenAddModal,
            handleIsOpenUpdateModal,
            updateVehicle,
            createVehicle,
            setFavorite,
            deleteVehicle
        }}>
            <div>{props.children}</div>
            {
                isOpenUpdateModal && (
                    <ModalUpdateVehicle
                        onClose={handleIsOpenUpdateModal}
                    />
                )
            }
            {
                isOpenAddModal && (
                    <ModalAddVehicle
                        onClose={handleIsOpenAddModal} />
                )
            }
        </VehicleContext.Provider>
    )
}

export default VehicleContextProvider;