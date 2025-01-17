// Generated by dts-bundle-generator v8.0.1

export type Callback = (payload?: any) => void;
export declare class StateAdapter {
	private channel;
	private eventListenerMap;
	readonly userId: string;
	constructor(params: {
		roomId: string;
		url?: string;
		userId: string;
		username?: string;
	});
	addEventListener(name: string, callback: Callback): void;
	removeEventListener(name: string): void;
	push(name: string, data: any): void;
}

export {};
