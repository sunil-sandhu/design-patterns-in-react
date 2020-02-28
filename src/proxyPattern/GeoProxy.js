import GeoCoder from "./GeoCoder";

export default class GeoProxy {
  constructor() {
    this.geocoder = new GeoCoder();
    this.geocache = {};
  }

  getLatLng(address) {
    if (!this.geocache[address]) {
      this.geocache[address] = this.geocoder.getLatLng(address);
    }
    return this.geocache[address];
  }
}
