export interface HomePageState {
  num : number;
  pageInfo: {
    navbarItems: {
      label: string,
      href: string
    }[],
    duration: string,
    detail: string,
    condition: string
  }
}