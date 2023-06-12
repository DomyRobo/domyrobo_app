import ROSLIB from "roslib";

export default class Ros {
  private _ros: ROSLIB.Ros;

  constructor() {
    this._ros = new ROSLIB.Ros({
      url: import.meta.env.VITE_WEBSOCKET_ADDRS,
    });

    this._ros.on("connection", () =>
      console.log("Connected to websocket server.")
    );
    this._ros.on("error", (err) =>
      console.log("Error connecting to websocket server: ", err)
    );
    this._ros.on("close", () =>
      console.log("Connection to websocket server closed.")
    );
  }

  get val() {
    return this._ros;
  }
}
