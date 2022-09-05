import { Chip } from "@mui/material";
import WarningAmberIcon from '@mui/icons-material/WarningAmber';

function createData(id, name, translate) {
    return { id, name, translate };
}

const translater = [
    createData("service_name", "car_traffic", "Trafik Sigortası"),
    createData("service_name", "private_health", "Kişisel Sağlık Sigortası"),
    createData("status", "processing", <Chip
        color="warning"
        size="small"
        style={{ width: 100 }}
        variant='outlined'
        icon={<WarningAmberIcon />}
        label="İşlemde" />),
];


export function getTranslatedData(offers) {
    return (offers.map(function (data) {
        translater.map(trans => {
            if (data[trans.id] == trans.name)
                data = { ...data, [trans.id]: trans.translate };
        });
        return data;
    }, this));
}