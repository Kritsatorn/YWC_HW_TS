export interface NavbarAPI {
    label: string;
    href : string;
}

export interface pageInfoAPI {
    navbarItems: NavbarAPI[];
    duration: string;
    detail: string;
    condition: string;
}