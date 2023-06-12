import DiffDriveVelocity from "../type/diffDriveVelocity";
import RosTopic from "./rosTopic";

export default class MotionController {
  private _rosTopic: RosTopic;

  private _motion_vel: DiffDriveVelocity = {
    linear_vel: 0.0,
    angular_vel: 0.0,
  };

  constructor(rosTopic: RosTopic) {
    this._rosTopic = rosTopic;
  }

  set linear_vel(linear_vel: number) {
    this._motion_vel.linear_vel = linear_vel;
  }

  set angular_vel(angular_vel: number) {
    this._motion_vel.angular_vel = angular_vel;
  }

  publish(): void {
    this._rosTopic.publish(this._motion_vel);
  }
}
