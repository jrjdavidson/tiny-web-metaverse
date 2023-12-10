import { defineComponent } from "bitecs";
import { type Group } from "three";
import { NULL_EID } from "../common";

export const GltfRoot = defineComponent();

export class GltfRootProxy {
  private static instance: GltfRootProxy = new GltfRootProxy();
  private eid: number;
  private map: Map<number, Group>;

  private constructor() {
    this.eid = NULL_EID;
    this.map = new Map();
  }

  static get(eid: number): GltfRootProxy {
    GltfRootProxy.instance.eid = eid;
    return GltfRootProxy.instance;
  }

  allocate(root: Group): void {
    this.map.set(this.eid, root);
  }

  free(): void {
    this.map.delete(this.eid);
  }

  get root(): Group {
    return this.map.get(this.eid)!;
  }
}

export const GltfLoader = defineComponent();

export class GltfLoaderProxy {
  private static instance: GltfLoaderProxy = new GltfLoaderProxy();
  private eid: number;
  private map: Map<number, string /* url */>;

  private constructor() {
    this.eid = NULL_EID;
    this.map = new Map();
  }

  static get(eid: number): GltfLoaderProxy {
    GltfLoaderProxy.instance.eid = eid;
    return GltfLoaderProxy.instance;
  }

  allocate(url: string): void {
    this.map.set(this.eid, url);
  }

  free(): void {
    this.map.delete(this.eid);
  }

  get url(): string {
    return this.map.get(this.eid)!;
  }
}
