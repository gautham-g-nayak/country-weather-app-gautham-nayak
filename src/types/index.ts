export type InputFieldProps = {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeHolder: string;
  type?: string;
  className: string;
};

export type InputButtonProps = {
  data: any;
  to: string;
  buttonCondition?: boolean;
  className: string;
  label: string;
};

interface Name {
  common: string;
}

interface CapitalInfo {
  latlng: number[];
}

interface Flags {
  png: string;
}

interface DetailsType {
  name: Name;
  capital: string[];
  population: number;
  capitalInfo: CapitalInfo;
  flags: Flags;
}

export type CountryDetailsCardProps = {
  data: DetailsType;
};

interface Current {
  temperature: number;
  wind_speed: number;
  weather_icons: string[];
}

interface Location {
  name: string;
  timezone_id: string;
}

interface CapitalDetailsType {
  location: Location;
  current: Current;
}

export type CapitalDetailsCardProps = {
  data: CapitalDetailsType;
};
