import ROSLIB from "roslib";

export default class RosTopic {
  private _rosTopic: ROSLIB.Topic;

  constructor(ros: ROSLIB.Ros, name: string, messageType: string) {
    this._rosTopic = new ROSLIB.Topic({
      ros,
      name,
      messageType,
    });
  }

  publish(message: ROSLIB.Message): void {
    this._rosTopic.publish(message);
  }

  subscribe(callback: (message: ROSLIB.Message) => void) {
    this._rosTopic.subscribe(callback);
  }

  unsubscribe(callback: (message: ROSLIB.Message) => void) {
    this._rosTopic.unsubscribe(callback);
  }
}
