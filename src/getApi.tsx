import axios from "axios";
const url = "https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange";
export function getApi(): Promise<{}> {

    return axios.get(url).then((json: any) => json.data);
}
