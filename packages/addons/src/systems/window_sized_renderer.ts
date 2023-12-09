import {
  defineQuery,
  enterQuery,
  IWorld
} from "bitecs";
import {
  Renderer,
  RendererProxy,
  WindowResizeEvent
} from "@tiny-web-metaverse/client/src";

const rendererWindowResizeEnterQuery = enterQuery(defineQuery([Renderer, WindowResizeEvent]));

export const windowSizedRendererSystem = (world: IWorld): void => {
  rendererWindowResizeEnterQuery(world).forEach(eid => {
    const renderer = RendererProxy.get(eid).renderer;
    renderer.setSize(window.innerWidth, window.innerHeight);
  });
};
