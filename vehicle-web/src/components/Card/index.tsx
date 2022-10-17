import React, { ReactNode, useContext } from "react";
import { IVehicle } from "../../types/Vehicle";
import styles from "./Card.module.scss";
import {AiOutlineHeart, AiFillHeart} from 'react-icons/ai'
import {FiEdit} from 'react-icons/fi'
import {MdOutlineDeleteOutline} from 'react-icons/md'
import VehicleContext from "../../contexts/VehicleContext";

interface ICard {
  title: string;
  children: ReactNode;
  vehicle?: IVehicle;
  colorVehicle: string;
  isFavorite?: boolean;
  vehicleId?: any;
}


const Card = (props: ICard) => {
  
  const {setFavorite, handleSelectedUpdateVehicle, handleSelectedDeleteVehicle} = useContext(VehicleContext)

  return (
    <div className={styles.Card} style={{borderBottom: `solid 10px ${props.colorVehicle}`}}>
      <div className={styles.Card__actions}>
        {
          props.isFavorite ? (
            <AiFillHeart style={{color: 'red'}} className={styles.Card__actions__heart} onClick={() => setFavorite(props.vehicleId)}/>
          ) : (
            <AiOutlineHeart className={styles.Card__actions__heart} onClick={() => setFavorite(props.vehicleId)}/>
          )
        }
        <FiEdit className={styles.Card__actions__edit}  onClick={() => handleSelectedUpdateVehicle(props.vehicleId)}/>
        <MdOutlineDeleteOutline className={styles.Card__actions__delete} onClick={() => handleSelectedDeleteVehicle(props.vehicleId)}/>
      </div>
      <h2>{props.title}</h2>
      <div className={styles.content}>{props.children}</div>
    </div>
  );
};

export default Card;
