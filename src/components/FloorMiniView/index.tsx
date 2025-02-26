import { useContext } from 'react';
import style from './style.module.scss';
import { MapContext } from '../../context/MapContext';
import MiniLocationIcon from '../../images/mini_location.svg';
import { FLOOR_MAP} from './../../constants/common';

const FloorMiniView = () => {
    const { floorList, currentFloorId } = useContext(MapContext);

    return (
        <div className={style.flMiniView} id="flMiniView">
            {floorList?.length > 0 && floorList?.map((floor: any) => (
                <div className={style.itemMiniView} key={floor.mapFloorId}>
                    <div className={style.iconMiniView}>
                        {floor.mapFloorId === currentFloorId &&
                            <img src={MiniLocationIcon} />
                        }
                    </div>
                    <div key={floor.id} className={`floorViewItem ${style.floorViewItem} ${floor.mapFloorId === currentFloorId && 'floorItemOn'}`} >
                        {floor?.title}
                        <span>{floor.mapFloorId === FLOOR_MAP.F1 && 'Office'}</span>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default FloorMiniView;