import styles from './Error.module.scss'

interface IErrorProps {
    msg: any;
}

export function InputError({msg}:IErrorProps){
    return <span className={styles.field_error}>{msg}</span>
}