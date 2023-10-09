import {
  addComponent,
  addEntity,
  IWorld
} from "bitecs";
import {
  EntityObject3D,
  EntityObject3DProxy,
  FirstSourceInteractable,
  Grabbable,
  InScene,
  MouseButtonEventListener,
  NetworkedPosition,
  NetworkedQuaternion,
  NetworkedScale,
  Raycastable,
  SecondSourceInteractable,
  Selectable,
  TouchEventListener
} from "@tiny-web-metaverse/client/src";
import {
  ImageLoader,
  ImageLoaderProxy,
} from "@tiny-web-metaverse/addons/src";

const imageUrl = 'assets/images/ramen.png';

export const ImagePrefab = (world: IWorld): number => {
  const eid = addEntity(world);
  addComponent(world, NetworkedPosition, eid);
  addComponent(world, NetworkedQuaternion, eid);
  addComponent(world, NetworkedScale, eid);
  addComponent(world, Raycastable, eid);
  addComponent(world, MouseButtonEventListener, eid);
  addComponent(world, TouchEventListener, eid);
  addComponent(world, FirstSourceInteractable, eid);
  addComponent(world, SecondSourceInteractable, eid);
  addComponent(world, Grabbable, eid);
  addComponent(world, Selectable, eid);
  addComponent(world, InScene, eid);

  addComponent(world, EntityObject3D, eid);
  EntityObject3DProxy.get(eid).allocate();

  addComponent(world, ImageLoader, eid);
  ImageLoaderProxy.get(eid).allocate(imageUrl);
  return eid;
};
