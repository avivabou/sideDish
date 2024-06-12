import { AppItem } from "../Types/AppItem";

export const SELECTORS = {
    ACCOUNT_BAR: '._176ugpa',
    LOGO: '.l10sdlqs',
}

export const ACTIONS = {
    DO: {
        OPEN_APP_STORE: 'openAppStorePage',
    },
    NOTIFY: {
        CONTENT_SCRIPT_LOADED: 'contentScriptLoaded',
    },
    GET: {
        USER_EMAIL: 'get_userEmails',
        APP_LOGO: 'get_appLogo'
    },
    SET: {
        USER_EMAIL: 'set_userEmails',
        APP_LOGO: 'set_appLogo',
    },
}

// Type to validate construction of GET_SET_FIELDS
type GetterSetters = keyof typeof ACTIONS.GET & keyof typeof ACTIONS.SET

export const GET_SET_FIELDS: Record<GetterSetters,string> = {
    USER_EMAIL: 'userEmail',
    APP_LOGO: 'appLogo',
}

export const APPS: AppItem[] = [
    {
        id: '1',
        title: 'Groupy',
        description: 'Effortlessly plan and book group vacations by sharing and voting on Airbnb listings with friends, all in one convenient app.',
        icon: "https://sidedishdev.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F5e4033ad-f868-42d9-b6a8-32fab02eab3f%2Fd3ef5a79-7447-41f2-809e-d9e94773455d%2FDALLE_2024-01-28_16.57.30_-_A_modern_iOS-style_app_icon_for_Groupy_a_travel_planning_app_sized_at_280px_by_280px_with_a_transparent_background._The_design_should_be_simple_s.png?table=block&id=b4396c09-a62c-488a-a053-87980fe76a6d&spaceId=5e4033ad-f868-42d9-b6a8-32fab02eab3f&width=250&userId=&cache=v2",
        url: 'https://sidedishdev.notion.site/Groupy-Plan-vacations-together-b4396c09a62c488aa05387980fe76a6d',
    },
    {
        id: '2',
        title: 'SafeStay',
        description: 'An app that provides detailed safety ratings and reviews for Airbnb listings, focusing on factors like neighborhood safety, property security features, and emergency resource accessibility.',
        icon: '',
        url: ''
    },
    {
        id: '3',
        title: 'Groupy',
        description: 'A community-driven app that connects Airbnb guests with local guides and experiences, offering personalized recommendations for dining, entertainment, and cultural activities based on the location of their Airbnb stay.',
        icon: '',
        url: ''
    }
];