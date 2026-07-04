export interface Product {
  id: string;
  name: string;
  subName: string;
  price: string;
  description: string;
  folderPath: string;
  themeColor: string;
  gradient: string;
  features: Array<{
    title: string;
    description: string;
    icon: string;
  }>;
  stats: Array<{
    label: string;
    val: string;
    icon: string;
  }>;
  switchOptions: Array<{
    name: string;
    color: string;
    type: string;
  }>;
  overlayText: Array<{
    section: number;
    title: string;
    subtitle: string;
  }>;
}
