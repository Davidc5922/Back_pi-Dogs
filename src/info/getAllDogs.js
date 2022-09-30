const {getapiinfo} = require('./getapiinfo')
const {getdbinfo} = require('./getdbinfo')

const getAllDogs = async () => {
    const apiInfo = await getapiinfo()
  return apiInfo
}

module.exports={getAllDogs}
