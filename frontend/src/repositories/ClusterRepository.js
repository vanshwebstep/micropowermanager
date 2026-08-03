import Client from "@/repositories/Client/AxiosClient"

const resource = `/api/clusters`

export default {
  create(cluster) {
    return Client.post(`${resource}`, cluster)
  },
  list(type = null) {
    return Client.get(`${resource}${type ? `?type=${type}` : ''}`)
  },
  getGeoLocation(clusterId) {
    return Client.get(`${resource}/${clusterId}/geo`)
  },
  get(clusterId) {
    return Client.get(`${resource}/${clusterId}`)
  },
  getClusterRevenues(clusterId) {
    return Client.get(`${resource}/${clusterId}/revenue`)
  },
  getClusterCitiesRevenue(clusterId, terms) {
    return Client.get(`${resource}/${clusterId}/cities-revenue${terms}`)
  },
  getAllRevenues(terms) {
    return Client.get(`${resource}/revenue${terms}`)
  },
  getClusterTrends(clusterId, terms) {
    return Client.get(`${resource}/${clusterId}/revenue/analysis${terms}`)
  },
}
