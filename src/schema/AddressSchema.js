import * as yup from "yup";
import { REGEX,METRIC_LENGTH ,NAME_LENGTH,DESCRIPTION_LENGTH} from "../utils/Constant";
const message = 'This is mandatory field';
export const AddressSchema = yup.object().shape({
    
    apartmentName: yup.string().required(message),
    cityName: yup.string().required(message),
    state: yup.string().required(message)
});

