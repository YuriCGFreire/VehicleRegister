
import React, { useContext, useState } from "react";
import { Button, Card, Search } from "../../components";
import styles from "./Vehicles.module.scss";
import Modal from "react-modal"
import VehicleContext from "../../contexts/VehicleContext"
import { IVehicle } from "../../types/Vehicle";

Modal.setAppElement("#root")

const VehiclesPage = () => {
  const { vehicles, handleIsOpenAddModal } = useContext(VehicleContext)
  const [search, setSearch] = useState<string>('');
  const [vehiclesData, setVehiclesData] = useState<IVehicle[]>(vehicles)

  const handleChange = (value:string) => {
    setSearch(value)
    filterVehicle(value.toLowerCase())
  } 

  const filterVehicle = (value: string) => {
    const lowerCaseValue = value.toLowerCase().trim()
    if(!lowerCaseValue){
      setVehiclesData(vehicles)
    }else {
      const filteredVehicles = vehicles.filter((vehicle:IVehicle) => {
        return Object.keys(vehicle).some(key => {
          return vehicle[key]?.toString().toLowerCase().includes(search)
        })
      })
      setVehiclesData(filteredVehicles)
    }
  }

  return (
    <div className={styles.Vehicles}>
      <main className={styles.main}>
        <div className={styles.add_search}>
          <Search value={search} onChange={e => handleChange(e.target.value)} />
          <div className={styles.add_filter}>
            <Button text="Add new vehicle" onClick={() => handleIsOpenAddModal()} />
          </div>
        </div>

        <div className={styles.cards}>
          <div className={styles.favoriteVehicles}>
            {
              vehiclesData.map((vehicle:IVehicle) => {
                if (vehicle.isFavorite) {
                  return (
                    <div className={styles.card} key={vehicle.id}>
                      <Card vehicleId={vehicle?.id} colorVehicle={vehicle.color} title={vehicle.name} isFavorite={vehicle.isFavorite}>
                        <p>Price: R$ {vehicle.price}</p>
                        <p>Year: {vehicle.year}</p>
                        <p>Plate: {vehicle.plate}</p>
                        <p>Description: {vehicle.description ? (vehicle.description) : ('No description')}</p>
                      </Card>
                    </div>
                  )
                }
              })
            }
          </div>
          <div className={styles.notFavoriteVehicles}>
            {
              vehiclesData.map((vehicle:IVehicle) => {
                if (vehicle.isFavorite === false) {
                  return (
                    <div className={styles.card} key={vehicle.id}>
                      <Card vehicleId={vehicle?.id} colorVehicle={vehicle.color} title={vehicle.name} isFavorite={vehicle.isFavorite}>
                        <p>Price: R$ {vehicle.price}</p>
                        <p>Year: {vehicle.year}</p>
                        <p>Plate: {vehicle.plate}</p>
                        <p>Description: {vehicle.description ? (vehicle.description) : ('No description')}</p>
                      </Card>
                    </div>
                  )
                }
              })
            }
          </div>

        </div>
      </main>
    </div>
  );
};

export default VehiclesPage;
