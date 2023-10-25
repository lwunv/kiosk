import styles from "./style.module.scss";
import { LANGUAGES } from './../../data/constants/common';
import { useTranslation } from 'react-i18next';
import { useContext } from "react";
import { LogContext } from "../../context/LogContext";
import { LOG_TYPE } from "../../constants/logType";


const Lang = () => {
    const { i18n } = useTranslation();
    const { saveLog, setIsSaveLang, branchId } = useContext(LogContext);
    const lang = i18n.language;
    
    const handleChangeLang = (item: string) => {
        if (item === lang) {
            return;
        }
        i18n.changeLanguage(item);
        const data = {
            language_code: item,
            branch_id: branchId
        }
        saveLog(LOG_TYPE.LANGUAGE, data);
        setIsSaveLang(true);
    }

    return (
        <div className={styles.langWrapper}>
            {Object.keys(LANGUAGES).map(item => {
                return <span key={item} className={`${styles.langItem} ${i18n.language == item && styles.active}`} onClick={() => handleChangeLang(item)}>{LANGUAGES[item]}</span>
            })}
        </div>
    );
};

export default Lang;
