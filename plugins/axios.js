/*
* @Author: caiovictormc
* @Date:   2018-09-29 09:59:34
* @Last Modified by:   caiovictormc
* @Last Modified time: 2018-09-29 22:30:04
*/

import axios from 'axios'

export default axios.create({
  baseURL: 'http://cajuinavalley.canionlabs.io:8000/api/'
})