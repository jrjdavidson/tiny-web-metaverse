import {
  defineQuery,
  enterQuery,
  IWorld
} from "bitecs";
import {
  PerspectiveCameraComponent,
  PerspectiveCameraProxy,
  WindowResizeEvent
} from "@tiny-web-metaverse/client/src";

const cameraWindowResizeEnterQuery =
  enterQuery(defineQuery([PerspectiveCameraComponent, WindowResizeEvent]));

export const windowSizedCameraSystem = (world: IWorld): void => {
  cameraWindowResizeEnterQuery(world).forEach(eid => {
    const camera = PerspectiveCameraProxy.get(eid).camera;
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
  });
};
