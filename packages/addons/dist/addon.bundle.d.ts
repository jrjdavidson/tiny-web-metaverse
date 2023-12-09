// Generated by dts-bundle-generator v8.0.1

import { IWorld } from 'bitecs';
import { AnimationMixer, Group, Line } from 'three';
import { Text as TroikaText } from 'troika-three-text';

export declare const AvatarMouseControls: import("bitecs").ComponentType<import("bitecs").ISchema>;
export declare class AvatarMouseControlsProxy {
	private static instance;
	private eid;
	private map;
	private constructor();
	static get(eid: number): AvatarMouseControlsProxy;
	allocate(): void;
	free(): void;
	get enabled(): boolean;
	set enabled(value: boolean);
}
export declare const Billboard: import("bitecs").ComponentType<import("bitecs").ISchema>;
export declare const Grabbable: import("bitecs").ComponentType<import("bitecs").ISchema>;
export declare const Grabbed: import("bitecs").ComponentType<{
	distance: "f32";
}>;
export declare const GrabbedByFirstSource: import("bitecs").ComponentType<import("bitecs").ISchema>;
export declare const GrabbedBySecondSource: import("bitecs").ComponentType<import("bitecs").ISchema>;
export declare const ImageComponent: import("bitecs").ComponentType<import("bitecs").ISchema>;
export declare class ImageProxy {
	private static instance;
	private eid;
	private map;
	private constructor();
	static get(eid: number): ImageProxy;
	allocate(bitmap: ImageBitmap): void;
	free(): void;
	get image(): ImageBitmap;
}
export declare const ImageLoader: import("bitecs").ComponentType<import("bitecs").ISchema>;
export declare class ImageLoaderProxy {
	private static instance;
	private eid;
	private map;
	private constructor();
	static get(eid: number): ImageLoaderProxy;
	allocate(url: string): void;
	free(): void;
	get url(): string;
}
export declare const LoadingObject: import("bitecs").ComponentType<import("bitecs").ISchema>;
export declare class LoadingObjectProxy {
	private static instance;
	private eid;
	private map;
	private constructor();
	static get(eid: number): LoadingObjectProxy;
	allocate(group: Group, mixer: AnimationMixer): void;
	free(): void;
	get group(): Group;
	get mixer(): AnimationMixer;
}
export declare const LoadingObjectLoader: import("bitecs").ComponentType<import("bitecs").ISchema>;
export declare const Nametag: import("bitecs").ComponentType<{
	objectEid: "eid";
}>;
export declare const Selectable: import("bitecs").ComponentType<import("bitecs").ISchema>;
export declare const Selected: import("bitecs").ComponentType<import("bitecs").ISchema>;
export declare enum SelectedType {
	Deselected = 0,
	Selected = 1
}
export declare const SelectedEvent: import("bitecs").ComponentType<import("bitecs").ISchema>;
export type SelectedEventValue = {
	eid: number;
	type: SelectedType;
};
export declare class SelectedEventProxy {
	private static instance;
	private eid;
	private map;
	private constructor();
	static get(eid: number): SelectedEventProxy;
	allocate(): void;
	add(type: SelectedType, eid: number): void;
	free(): void;
	get events(): SelectedEventValue[];
}
export declare const SelectedEventListener: import("bitecs").ComponentType<import("bitecs").ISchema>;
export declare const TextComponent: import("bitecs").ComponentType<import("bitecs").ISchema>;
export declare class TextProxy {
	private static instance;
	private eid;
	private map;
	private constructor();
	static get(eid: number): TextProxy;
	allocate(text: TroikaText): void;
	free(): void;
	get text(): TroikaText;
}
export declare const TextChat: import("bitecs").ComponentType<import("bitecs").ISchema>;
export declare const VirtualJoystick: import("bitecs").ComponentType<import("bitecs").ISchema>;
export declare const VirtualJoystickLeft: import("bitecs").ComponentType<import("bitecs").ISchema>;
export declare const VirtualJoystickRight: import("bitecs").ComponentType<import("bitecs").ISchema>;
export declare class VirtualJoystickProxy {
	private static instance;
	private eid;
	private map;
	private constructor();
	static get(eid: number): VirtualJoystickProxy;
	allocate(): void;
	activate(active: boolean): void;
	update(x: number, y: number, distance: number): void;
	free(): void;
	get active(): boolean;
	get distance(): number;
	get x(): number;
	get y(): number;
}
export declare enum VirtualJoystickType {
	Left = 0,
	Right = 1
}
export declare enum VirtualJoystickEventType {
	End = 0,
	Move = 1,
	Start = 2
}
export declare const VirtualJoystickEvent: import("bitecs").ComponentType<import("bitecs").ISchema>;
export type VirtualJoystickMoveEventValue = {
	distance: number;
	x: number;
	y: number;
};
export type VirtualJoystickEventValue = {
	data?: VirtualJoystickMoveEventValue;
	stick: VirtualJoystickType;
	type: VirtualJoystickEventType;
};
export declare class VirtualJoystickEventProxy {
	private static instance;
	private eid;
	private map;
	private constructor();
	static get(eid: number): VirtualJoystickEventProxy;
	allocate(): void;
	add(stick: VirtualJoystickType, type: VirtualJoystickEventType, data?: VirtualJoystickMoveEventValue): void;
	free(): void;
	get events(): VirtualJoystickEventValue[];
}
export declare const VirtualJoystickEventListener: import("bitecs").ComponentType<import("bitecs").ISchema>;
export declare const Video: import("bitecs").ComponentType<import("bitecs").ISchema>;
export declare class VideoProxy {
	private static instance;
	private eid;
	private map;
	private constructor();
	static get(eid: number): VideoProxy;
	allocate(video: HTMLVideoElement): void;
	free(): void;
	get video(): HTMLVideoElement;
}
export declare const VideoLoader: import("bitecs").ComponentType<import("bitecs").ISchema>;
export declare class VideoLoaderProxy {
	private static instance;
	private eid;
	private map;
	private constructor();
	static get(eid: number): VideoLoaderProxy;
	allocate(url: string): void;
	free(): void;
	get url(): string;
}
export declare const LazyVideoStateUpdate: import("bitecs").ComponentType<import("bitecs").ISchema>;
export declare class LazyVideoStateUpdateProxy {
	private static instance;
	private eid;
	private map;
	private constructor();
	static get(eid: number): LazyVideoStateUpdateProxy;
	allocate(muted: boolean, paused: boolean, time: number): void;
	free(): void;
	get muted(): boolean;
	get paused(): boolean;
	get time(): number;
}
export declare const VideoStateUpdated: import("bitecs").ComponentType<import("bitecs").ISchema>;
export declare const NetworkedVideo: import("bitecs").ComponentType<import("bitecs").ISchema>;
export declare const WebXRVRButton: import("bitecs").ComponentType<import("bitecs").ISchema>;
export declare const WebXRARButton: import("bitecs").ComponentType<import("bitecs").ISchema>;
export declare const XRControllerRay: import("bitecs").ComponentType<import("bitecs").ISchema>;
export declare class XRControllerRayProxy {
	private static instance;
	private eid;
	private map;
	private constructor();
	static get(eid: number): XRControllerRayProxy;
	allocate(line: Line): void;
	free(): void;
	get line(): Line;
}
export declare const FirstXRControllerRay: import("bitecs").ComponentType<import("bitecs").ISchema>;
export declare const SecondXRControllerRay: import("bitecs").ComponentType<import("bitecs").ISchema>;
export type SerializedVideo = {
	muted: boolean;
	paused: boolean;
	time: number;
};
export declare const videoSerializers: {
	deserializer: (world: IWorld, eid: number, data: SerializedVideo, updatedAt: number) => void;
	diffChecker: (world: IWorld, eid: number, cache: SerializedVideo, updatedAt: number) => boolean;
	networkDeserializer: (world: IWorld, eid: number, data: SerializedVideo, updatedAt: number) => void;
	serializer: (world: IWorld, eid: number) => SerializedVideo;
};
export declare const avatarKeyControlsSystem: (world: IWorld) => void;
export declare const avatarMouseControlsSystem: (world: IWorld) => void;
export declare const avatarVirtualJoystickSystem: (world: IWorld) => void;
export declare const billboardSystem: (world: IWorld) => void;
export declare const gltfMixerAnimationSystem: (world: IWorld) => void;
export declare const grabSystem: (world: IWorld) => void;
export declare const grabbedObjectsRayTrackSystem: (world: IWorld) => void;
export declare const imageSystem: (world: IWorld) => void;
export declare const imageLoadSystem: (world: IWorld) => void;
export declare const lazilyUpdateVideoStateSystem: (world: IWorld) => void;
export declare const loadingObjectSystem: (world: IWorld) => void;
export declare const mouseInteractionTriggerSystem: (world: IWorld) => void;
export declare const nametagSystem: (world: IWorld) => void;
export declare const selectSystem: (world: IWorld) => void;
export declare const selectedEventClearSystem: (world: IWorld) => void;
export declare const textSystem: (world: IWorld) => void;
export declare const touchInteractionTriggerSystem: (world: IWorld) => void;
export declare const videoSystem: (world: IWorld) => void;
export declare const videoLoadSystem: (world: IWorld) => void;
export declare const clearVirtualJoystickEventSystem: (world: IWorld) => void;
export declare const webxrControllerInteractionTriggerSystem: (world: IWorld) => void;
export declare const xrControllerRaySystem: (world: IWorld) => void;
export declare const textChatUISystem: (world: IWorld) => void;
export declare const virtualJoystickUISystem: (world: IWorld) => void;
export declare const webXrButtonsUISystem: (world: IWorld) => void;
export declare const addNametagComponent: (world: IWorld, eid: number, objectEid: number) => void;
export declare const addTextComponent: (world: IWorld, eid: number, str: string) => void;
export declare const sendTextChat: (world: IWorld, text: string) => void;
export declare const isTextChat: (data: any) => boolean;
export declare const parseReceivedTextChat: (data: any) => {
	text: string;
	userId: string;
};
export declare const addXRControllerRayComponent: (world: IWorld, eid: number) => void;

export {};
