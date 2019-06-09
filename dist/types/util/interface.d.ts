export interface CookieFace {
    setCookie(cname: any, cvalue: any, exdays: any): void;
    getCookie(cname: string): void;
    clearCookie(cname: string): void;
}
export interface DeviceFace {
    getDeviceType(): {
        isMoble: boolean;
        isAppleMobile: boolean;
        isAndroidMobile: boolean;
        isUc: boolean;
        isChrome: boolean;
        isFirefox: boolean;
        isOpera: boolean;
        isSafire: boolean;
        is360: boolean;
        isBaidu: boolean;
        isSougou: boolean;
        isIE6: boolean;
        isIE7: boolean;
        isIE8: boolean;
        isIE9: boolean;
        isIE10: boolean;
        isIE11: boolean;
        isLB: boolean;
        isWX: boolean;
        isQQ: boolean;
        isIpad: boolean;
        isIphone: boolean;
        isAndroid: boolean;
        isWindowsCe: boolean;
        isWindowsMobile: boolean;
        isWin2K: boolean;
        isXP: boolean;
        isVista: boolean;
        isWin7: boolean;
        isWin8: boolean;
        isWin81: boolean;
        isWin10: boolean;
        isTouchScreen: boolean;
        isChromeOnAndroid: boolean;
    };
    detectOS(): string;
    getExplorerInfo(): {
        type: string;
        version: string;
    };
}
export interface DomFace {
    decodeHtmlEntities(str: any): string;
    encodeHtmlEntities(str: any): string;
    addListen(dom: any, event: any, fn: any): void;
    removeEvent(dom: any, type: any, handler: any): void;
    removeDom(dom: any): void;
    addAnimateClass(dom: any, animateClass: string): void;
    shake(dom: any): void;
    once(dom: any, type: any, callback: any): void;
    hasClass(dom: any, cls: string): void;
    addClass(dom: any, cls: string): void;
    removeClass(dom: any, cls: string): void;
    toggleClass(dom: any, cls: string): void;
}
export interface HttpFace {
    httpConnect(): void;
    setRequestHeader(): void;
    onStateChange(xhr: any, success: any, failure: any): void;
    ajaxFn(obj: any): void;
    originHttpPost(obj: any, fn: any): void;
    originHttpGet(obj: any, fn: any): void;
    setRequestTestFn(fn: any): void;
    httpPost(obj: any): void;
    httpGet(obj: any): void;
}
export interface LocalStorageFace {
    setStorage(key: string, obj: any): void;
    getStorage(key: string): any;
    removeStorage(key: string): void;
    clearStorage(): void;
    getStorageType(object: any): string;
}
export interface UrlFace {
    toHref(href: string): void;
    toOpen(href: string): void;
    parseUrl(url: string): {
        source: string;
        protocol: string;
        host: string;
        port: string;
        query: string;
        file: string;
        hash: string;
        path: string;
        relative: string;
        segments: string[];
        params: any;
    };
    reportUrl(url: string, obj: any): void;
}
//# sourceMappingURL=interface.d.ts.map