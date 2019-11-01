export interface HomePageState {
  num : number;
  pageInfo: {
    navbarItems: Navbar[],
    duration: string,
    detail: string,
    condition: string
  },
  Navbar: Navbar[]
}

export interface Navbar {
  label: string;
  href : string;
}
