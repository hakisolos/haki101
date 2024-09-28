export declare const S_WHATSAPP_NET = "@s.whatsapp.net";
export declare const OFFICIAL_BIZ_JID = "16505361212@c.us";
export declare const SERVER_JID = "server@c.us";
export declare const PSA_WID = "0@c.us";
export declare const STORIES_JID = "status@broadcast";
export type JidServer = 'c.us' | 'g.us' | 'broadcast' | 's.whatsapp.net' | 'call' | 'lid';
export type JidWithDevice = {
    user: string;
    device?: number;
};
export type FullJid = JidWithDevice & {
    server: JidServer | string;
    domainType?: number;
};
export declare const jidEncode: (user: string | number | null, server: JidServer, device?: number, agent?: number) => string;
export declare const jidDecode: (jid: string | undefined) => FullJid | undefined;
/** is the jid a user */
export declare const areJidsSameUser: (jid1: string | undefined, jid2: string | undefined) => boolean;
/** is the jid a user */
export declare const isJidUser: (jid: string | undefined) => boolean | undefined;
/** is the jid a group */
export declare const isLidUser: (jid: string | undefined) => boolean | undefined;
/** is the jid a broadcast */
export declare const isJidBroadcast: (jid: string | undefined) => boolean | undefined;
/** is the jid a group */
export declare const isJidGroup: (jid: string | undefined) => boolean | undefined;
/** is the jid the status broadcast */
export declare const isJidStatusBroadcast: (jid: string) => boolean;
/** is the jid a newsletter */
export declare const isJidNewsletter: (jid: string | undefined) => boolean | undefined;
export declare const jidNormalizedUser: (jid: string | undefined) => string;
