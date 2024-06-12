export type AppItem = {
    id: string;
    title: string;
    description: string;
    icon: string;
    url: string;
    notification?: AppItemNotification;
}

export type AppItemNotification = {
    text: string;
    style: AppItemNotificationStyle;
    color: AppItemNotificationColor;
}

export enum AppItemNotificationStyle {
    bookmark = 0,
    cornerBend = 1,
}

export enum AppItemNotificationColor {
    blue = 0,
    red = 1,
}