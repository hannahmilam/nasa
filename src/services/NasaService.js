import axios from "axios"
import { AppState } from "../AppState"
import { Nasa } from "../Models/Nasa"
import { logger } from "../utils/Logger"

const apiKey = 'api_key=nGqqLN4YIC1c03ysYh3LKiraljdhQgy2wVmUx8ja'

const nasaApi = axios.create({
  baseURL: 'https://api.nasa.gov/planetary'
})


class NasaService{
  async getNasaData(query){
    const res = await nasaApi.get(`apod?${apiKey}&date=${query}`)
    AppState.nasaData = new Nasa(res.data)
    logger.log('nasa service', AppState.nasaData)
    
  }
}
export const nasaService = new NasaService()