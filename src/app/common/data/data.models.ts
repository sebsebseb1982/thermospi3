export type SensorType = 'radio-temperature-humidity' | 'radio-temperature' | 'wired-temperature';
export type SensorLocation = 'maison' | 'exterieur' | 'cabanon' | 'congelateur';

export interface ISensor {
  id: string;
  label: string;
  type: SensorType;
  location: SensorLocation;
  path?: string;
  radio: boolean;
}

export interface IHumidityMeasure {
  value: number;
  sensorId: string;
  status: number;
  date: Date;
}

export interface ITemperatureMeasure {
  value: number;
  sensorId: string;
  status: number;
  date: Date;
}
