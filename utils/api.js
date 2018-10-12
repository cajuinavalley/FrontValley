/*
* @Author: caiovictormc
* @Date:   2018-09-29 11:35:08
* @Last Modified by:   caiovictormc
* @Last Modified time: 2018-09-29 13:02:26
*/
import axios from 'axios'

export async function getSector (sectorURL) {
  console.log(sectorURL)
  const resp = await axios
    .get(sectorURL)

  return resp.data
}