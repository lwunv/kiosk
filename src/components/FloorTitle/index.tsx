import { useContext } from 'react';
import style from './style.module.scss';
import { MapContext } from '../../context/MapContext';
import { t } from 'i18next';

const FloorTilte = () => {
    const { activeFloorById, viewAllFloor } = useContext(MapContext);

    return (
        <>
            {
                viewAllFloor ? 
                <div className={style.viewTextBtAllFloor}>{t('button.buttonAllFloor')}</div>
                :
                <div className={style.floorNameCt} >
                    {activeFloorById?.title}
                </div>
            }
        </>
    )
}

export default FloorTilte;